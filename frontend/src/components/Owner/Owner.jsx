import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Owner.css';
import OwnerPicture from '../../Images/Owner.jpg'
function Owner() {
  return (
    <>
      <header className="text-center">
        <h1>Találkozz a Tulajdonossal</h1>
      </header>
      <main>
        <div className="container">
        <section className="about-section">
            <div className="about-image">
                <img
                src={OwnerPicture}
                alt="Manikűr Szalon Tulajdonosa"
                className="img-fluid"
                />
            </div>
            <div className="about-content">
                <h2>Élet a Manikűr Szakmában</h2>
                <p>
                A Bollinger Köröm Szalon nem csupán egy szalon; ez a szenvedély és a köröm művészeti
                iparban való szakértői kifejeződése. Ismerje meg Jane-t, a szalon mögötti
                kreatív erőt, ahol az elegancia és a művészet meghatározza tevékenységünket.
                </p>
                <p>
                Jane utazása a köröm művészeti iparban évekkel ezelőtt kezdődött, amikor a
                színek és minták iránti vonzalma egy teljesen kibontakozott szenvedéllyé
                vált. Kezdetben önképzett művész, később készségeit finomította és
                végül megalapította a Bollinger Köröm Szalont, hogy a köröm művészet iránti
                szeretetét a közösséggel megoszthassa.
                </p>
                <p>
                Ma a szalon Jane elkötelezettségének és elhivatottságának a tanúja, hogy
                kivételes körömlakkozási szolgáltatásokat nyújtson. Az aprólékos tervezésektől
                a klasszikus manikűrökig a Bollinger Köröm Szalon olyan hely, ahol a művészet
                találkozik az eleganciával.
                </p>
            </div>
            </section>
        </div>
      </main>
    </>
  );
}

export default Owner;
