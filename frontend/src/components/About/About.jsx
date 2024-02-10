import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'; // Assuming you have an About.css file

const About = () => {
  return (
    <section className="container h-layout h-layout-2 padding-50">
      {/* First Row */}
      <div className="basic row justify-content-center">
        {/* Content Column */}
        <div className="h-col col-md-6 mb-4 mb-md-0">
          <div className="h-widget" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            <div className="widget_Text_Main">
              <div className="wText" style={{ position: 'relative', textAlign: 'justify' }}>
                <p>
                  <br />
                  Szőke Tímea vagyok, rajztanárként végeztem a Kaposvári Egyetem Főiskolai
                  Művészeti Karán. Kézápoló és Műkörömépítő OKJ-s tanfolyamot a Crystal Nails
                  berkein belül végeztem el 2014-ben.
                  <br />
                  <br />
                  Úgy hozta az élet, hogy 2017 decemberében kezdtem el gyakorolni ezt a mesterséget.
                  Azóta folyamatosan képzem magam. Részt veszek technikai és díszítő tanfolyamokon,
                  online képzéseken. Nagyon szeretek versenyezni, és gyengém a díszítés.
                  &nbsp;
                </p>
                <p style={{ textAlign: 'center' }}>
                  <br />&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Picture Column */}
        <div className="h-col col-md-6 mb-4 mb-md-0">
          <div className="h-widget">
            <div className="widget_Picture_Main">
              <figure className="wPicture">
                <span className="p-4 img-fluid">
                  <img
                    src="./src/Images/Swiper/nailart3.jpg"
                    alt="Description of your image"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </span>
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row justify-content-center">
        <div className="h-col col-md-12">
          <div className="h-widget" style={{ paddingLeft: '20px' }}>
            <div className="widget_Text_Main">
              <div className="wText" style={{ position: 'relative', textAlign: 'center' }}>
                <strong>Versenyeredményeim</strong>
                <br />
                <br />
                - 2019 -
                <br />
                Gellakk.com Autumn körömdíszítő verseny - 2. hely
                <br />
                Mystic Nails Év körmöse verseny sík kategória - 1. hely
                StudioFlash Halloween plakátfotó verseny- 1. hely
                Nail Artists Hungary Tip Box diszitő verseny - 1. hely
                Perfect Nails XXI. Nail Star szalonköröm verseny - 1. hely
                Perfect Nails XX. Nail Star szalonköröm verseny - 2. hely
                Gold Nails Mályvavirág díszítő verseny - 1. hely
                <br />
                <br />
                - 2018 -
                <br />
                Gellakk Magical Autumn körömdíszítő verseny - 1. hely
                Perfect Nails XIX. Nail Star szalonköröm verseny - 1. hely
                <br />
                <br />
                - 2014 -
                <br />
                Crystal Nails Hungarian NailArt Cup, TIP-box verseny - 3. hely
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
