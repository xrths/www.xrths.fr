import { useMatomo } from '@datapunt/matomo-tracker-react';
import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect } from 'react';

import HospitalImage from '../../images/pro/hopital.jpeg';
import PyrescomImage from '../../images/pro/iot.jpeg';
import CovidFranceImage from '../../images/projects/covidfrance1.png';
import DiskarrImage from '../../images/projects/diskarr.png';
import InfluxImage from '../../images/projects/influxdb.png';
import MGImage1 from '../../images/projects/medicgestion1.png';
import MGImage2 from '../../images/projects/medicgestion2.png';
import MGImage3 from '../../images/projects/medicgestion3.png';
import PortfolioImage from '../../images/projects/portfolio.png';
import WordlyImage from '../../images/projects/wordly.png';
import LogoBlackImage from '../../images/ressources/logo-black.png';
import LogoWhiteImage from '../../images/ressources/logo-white.png';
import { SectionContact } from './SectionContact';
import { SectionProject } from './SectionProject';
import { SectionTitle } from './SectionTitle';

export default function PageContent({ data }) {
  const { trackEvent } = useMatomo();

  let logoImage = LogoBlackImage;

  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkMode.matches) {
      logoImage = LogoWhiteImage;
    } else {
      logoImage = LogoBlackImage;
    }
  }, []);

  return (
    <div className='dark:bg-gray-800 dark:text-white font-ubuntu'>
      <ReactFullpage
        navigation={true}
        navigationPosition='right'
        keyboardScrolling={true}
        animateAnchor={true}
        scrollBar={false}
        responsiveWidth={320}
        credits={false}
        //verticalCentered={true}
        anchors={[
          'hello',
          'about',
          'p-wordly',
          'p-medicgestion',
          'p-diskarr',
          'p-covidfrance',
          'p-goSync',
          'p-portfolio',
          'w-professionnel',
          'w-hopital-perpignan',
          'w-pyrescom',
          'contact',
        ]}
        afterLoad={(origin, destination, direction) => {
          if (destination.anchor !== origin.anchor) {
            trackEvent({
              category: 'Scroll ' + direction,
              action: origin.anchor + ' -> ' + destination.anchor,
            });
          }
        }}
        render={({ _state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SectionTitle
                title='Thomas R.'
                btnText='D??couvrir'
                description='??? ??tudiant & Freelance ???'
                fullpageApi={fullpageApi}
              />

              <SectionProject
                name='?? propos'
                pictures={[[logoImage, 'Logo', 'Logo', 'w-[40%] md:w-[40%]']]}
              />

              <SectionProject
                name='Wordly'
                description={[
                  `Jeu similaire au c??l??bre Motus, un mot est s??lectionn?? al??atoirement chaque
                  jour et le joueur doit le trouver le plus vite possible en
                  faisant le moins d'essais possibles.`,
                  `Le joueur peut partager son r??sultat et voir les meilleurs
                  scores sur le site.`,
                ]}
                technologies={[
                  'devicon-html5-plain-wordmark',
                  'devicon-css3-plain-wordmark',
                  'devicon-javascript-plain',
                ]}
                githubLink={data.site.siteMetadata.githubUrl + '/Wordly'}
                gameLink={data.site.siteMetadata.wordlyUrl}
                pictures={[
                  [
                    WordlyImage,
                    'D??monstration de Wordly',
                    'D??monstration de Wordly',
                  ],
                ]}
              />

              <SectionProject
                name='MedicGestion'
                description={[
                  `Application web permettant ?? une infrastructure m??dicale de g??rer des patients 
                  tout en passant par la prise de rendez-vous via une interface ergonomique.`,
                ]}
                technologies={[
                  'devicon-html5-plain-wordmark',
                  'devicon-css3-plain-wordmark',
                  'devicon-php-plain',
                  'devicon-mysql-plain-wordmark',
                  'devicon-heroku-original-wordmark',
                ]}
                pictures={[
                  [
                    MGImage1,
                    "Capture d'??cran du logiciel MedicGestion",
                    'Page de connexion',
                  ],
                  [
                    MGImage2,
                    "Capture d'??cran du logiciel MedicGestion",
                    'Gestion des patients',
                  ],
                  [
                    MGImage3,
                    "Capture d'??cran du logiciel MedicGestion",
                    'Edition des patients',
                  ],
                ]}
              />

              <SectionProject
                name='Diskarr'
                description={[
                  `Diskarr est un projet open-source en cours de d??veloppement.`,
                  `Ceci est le site vitrine pour expliquer l'objectif du projet
                  et ses diff??rentes fonctionnalit??s.`,
                ]}
                technologies={[
                  'devicon-html5-plain-wordmark',
                  'devicon-sass-original',
                  'devicon-nodejs-plain-wordmark',
                  'devicon-javascript-plain',
                ]}
                pictures={[
                  [
                    DiskarrImage,
                    "Capture d'??cran du site Diskarr",
                    "Capture d'??cran du site Diskarr",
                  ],
                ]}
              />

              <SectionProject
                name='CovidFrance'
                description={[
                  `CovidFrance est un projet open-source dont je suis l'auteur.
                   Il s'agit d'un bot Twitter qui diffusait chaque jour les
                   statistiques de la COVID-19 en France.`,
                  `Ce projet existe aussi pour le suivi de la vaccination. Le compte est suivi par plus de 30 000 personnes.`,
                ]}
                technologies={[
                  'devicon-python-plain-wordmark',
                  'devicon-twitter-original text-[30px]',
                  'devicon-jupyter-plain-wordmark',
                ]}
                githubLink={data.site.siteMetadata.githubUrl + '/COVID19_FR'}
                pictures={[
                  [
                    CovidFranceImage,
                    "Capture d'??cran d'un tweet du compte",
                    "Capture d'??cran d'un tweet du compte",
                  ],
                ]}
              />

              <SectionProject
                name='Synchronisation InfluxDB'
                description={[
                  `Il s'agit d'un projet de synchronisation de donn??es sur une
                  base de donn??es InfluxDB.`,
                  `Il permet de r??cup??rer des donn??es brutes issues de
                  diff??rents capteurs (IoT), de les traiter et de les stocker dans
                  la base.`,
                ]}
                technologies={['devicon-go-original-wordmark text-[50px]']}
                pictures={[
                  [
                    InfluxImage,
                    'Interface InfluxDB',
                    "Image de l'interface InfluxDB",
                  ],
                ]}
              />

              <SectionProject
                name='Portfolio personnel'
                description={[
                  `Ce site est un portfolio personnel. Il permet de d??couvrir
                  mes comp??tences et mes projets.`,
                ]}
                technologies={[
                  'devicon-html5-plain-wordmark',
                  'devicon-tailwindcss-plain',
                  'devicon-react-original-wordmark',
                  'devicon-gatsby-plain text-[30px]',
                ]}
                pictures={[[PortfolioImage, 'Illustration', 'Illustration']]}
                githubLink={data.site.siteMetadata.githubUrl + '/www.xrths.fr'}
              />

              <SectionTitle
                title='Exp??riences'
                btnText='D??couvrir'
                description=''
                fullpageApi={fullpageApi}
              />

              <SectionProject
                name='Centre Hospitalier de Perpignan'
                description={[
                  `En charge de collaborer avec l'??quipe responsable de l'infrastructure syst??me et r??seau du Centre Hospitalier de Perpignan.`,
                  `Durant cette exp??rience, j'ai pu d??couvrir l'organisation du syst??me d'information dans une infrastructure aussi critique.`,
                  `J'ai d??couvert comment s'organisait le service informatique d'un ??tablissement comptant plus de 10 000 appareils sur son r??seau.`,
                ]}
                linkedinLink={data.site.siteMetadata.linkedinUrl}
                pictures={[[HospitalImage, 'Illustration', 'Illustration']]}
              />

              <SectionProject
                name='Pyrescom'
                description={[
                  `Pyrescom est une soci??t?? fran??aise fournissant des solutions connect??es (IoT).`,
                  `J'ai eu l'occasion d'int??grer la soci??t?? pour un stage de fin d'??tudes.`,
                  `Au sein du bureau d'??tudes, j'ai assist?? les ??quipes dans le d??veloppement de leurs projets.`,
                ]}
                linkedinLink={data.site.siteMetadata.linkedinUrl}
                pictures={[[PyrescomImage, 'Illustration', 'Illustration']]}
              />

              <SectionContact
                linkedinLink={data.site.siteMetadata.linkedinUrl}
                githubLink={data.site.siteMetadata.githubUrl}
                mail={data.site.siteMetadata.email}
                maltLink={data.site.siteMetadata.maltUrl}
              />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
