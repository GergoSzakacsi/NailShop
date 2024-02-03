
import React from 'react';
import './Nails.css';
<link rel="stylesheet" href="path/to/icofont/icofont.min.css"></link>
const NailsContent=[
    "Nem volt még műkörmöd, de kacérkodsz a gondolattal? Javaslom nézz körül a galériáinkban. Egyaránt megtalálhatóak a klasszikus valamint az extrém körmök is.",
    "A műkörömépítés célja a természetes körmök hosszabbítása esztétikusabbát tétele. Akik tartósan szép és ápolt körmökre vágynak, és a természetes körmük önmagában nem kellően erős, azok számára ideális a műköröm.",
    "A műkörömépítésben akárcsak számtalan más területen is az elmúlt években hatalmas technikai fejlődés ment végbe. Rendkívül sok olyan újítás született amelyek hozzájárultak, hogy esztétikusabb, kecsesebb, tartósabb körmök készülhessenek. Számtalan új forma és szín áll rendelkezésre, az egyszerű és klasszikus francia körömtől az extrémen át a kecsesen hajlított formákig.",
    "A színeknek és a mintáknak csak a fantáziánk szabhat határt. A mára méltán közkedvelté vált körömágyhosszabbítás technikája pedig segít, hogy még esztétikusabb és tovább hordható körmöket készítsünk."
]
function Nails() {
  return (
    <div className=''>
    <div className='row bg-light ' style={{height: '44px' }}></div>
    <div className="background-container">
      <div className="content-container">
        <h1 className='text-start'>Műköröm</h1>
        {NailsContent.map((content, index) => (
          <p className="text-start" key={index}>{content}</p>
        ))}
        <button type="button" className="btn btn-dark">Időpontfoglalás</button>
      </div>
    </div>
    <div className='row bg-light ' style={{height: '44px' }}></div>
    <div className="row g-0 promo1">
  <div className="col-md-6">
    <img
      src='./src/Images/nailpic1.jpeg'
      className='img'
      alt='Promo Image'
    />
  </div>
  <div className="col-md-6 d-flex align-items-center">
    <div className='p-4 text-center'>
      <h2>Porcelán vagy zselé?</h2>
      <p className='text-break'>
      Szalonunkban egyaránt készítünk zseléből és porcelánból is műkörmöket. Amennyiben nincs konkrét elképzelésed az anyagot illetően nyugodtan bízd rá magad kollégáinkra.
Számtalan hiedelemmel ellentétben egyik anyag típus sem rosszabb a másiknál. Mind a két anyagcsoporttal lehet tartós esztétikus jól hordható körmöket építeni. A lényeg mindig a szakember, akit megtisztelsz a Bizalmaddal.
      </p>
    </div>
  </div>
</div>
<div className="row g-0 promo1">
  <div className="col-md-6 d-flex align-items-center">
    <div className='p-4 text-center'>
      <h2>Rövid vagy hosszú köröm?</h2>
      <p className='text-break'>
        Első alkalommal általában célszerűbb rövidebb hosszt választani, így szépen fokozatosan hozzá fogsz tudni szokni az új körmeidhez. Ha már "gyakorlott" műkörömviselő vagy Neked csak a képzlet szabhat határt. Amennyiben extrém formát szretnél (Monroe, Orosz mandula, Gótikus Mandula, Pipe vagy Edge) mindenképpen előre egyeztessünk telefonon. Ezeknek a formáknak az elkészítése hosszabb folyamat, mint egy klasszikus szalon formáé, ezért fontos, hogy kellő időt szánjunk rá. Első alkalommal általában célszerűbb rövidebb hosszt választani, így szépen fokozatosan hozzá fogsz tudni szokni az új körmeidhez.
      </p>
    </div>
  </div>
  <div className="col-md-6">
    <img
      src='./src/Images/nailpic1.png'
      className='img p-0'
      alt='Promo Image'
    />
  </div>
  <div className='row bg-light ' style={{height: '44px' }}></div>
</div>
<div className='w-75 container h-100 d-flex justify-content-center align-items-center'>
  <h2>Műköröm töltése - saját köröm megerősítése</h2>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-6 mx-auto">
      <div className="p-4 text-center">
        <p className="text-break">
          Új vendégeinktől gyakran felmerülő kérdés, hogy mégis mit takar a szalon hossz kifejezés a műköröm építés esetében.
          Műkörmösök között sincs tökéletes egyetértés a műköröm építés hosszainak meghatározásában. Vannak, akik S M L méreteket adnak meg az árlistán, vannak, akik milliméterekben határozzák meg a méretet, vannak, akik bizonyos építő sablon típus méretezéseire hivatkoznak.
          Laikusként úgy gondolom, egyik megoldás sem teljesen egyértelmű. Emiatt igyekeztem én egy más megközelítési módot bevezetni a szalon hossz meghatározására.
          Nálunk az Illusion körömszalonban a szalon hossznak a maximuma, megegyezik a természetes körömlemez hosszának duplájával. Rövidebb köröm építése természetesen még ugyan ebbe a kategóriába tartozik, nem szükséges tehát ezt a maximum hosszt kihasználni, azonban úgy gondoljuk, így talán jobban érzékelhető laikusként is a szalon hossz fogalma.
          Rövid rágott körmök esetén ez a hosszabbítás nagyon rövidnek érződhet. Hosszú évek tapasztalata azonban azt mutatja, hogy ilyen mértékű hosszabbítás még jól megszokható, és a viselhető egy hosszú évek óta körömrágással küzdő, kezeit emiatt rejtegetni kényszerülő vendég számára is. Ettől nagyobb arányú hosszabbítás a természetes körömlemez sérüléséhez vezethet rágott körmök esetén.
        </p>
      </div>
  <div className="row mt-5">
    <div className="col-md-12 text-center">
      <a
        href="https://www.illusionsalon.hu/idopontfoglalas/"
        className="btn btn-primary btn-lg"
        aria-labelledby="h-widget-18-title"
      >
        Időpontot foglalok
      </a>
    </div>
  </div>
    </div>
    <div className="col-md-6 mx-auto">
      <div className="p-3">
        <img
          src="./src/Images/longnail.png"
          alt="Szalonhossz maximálisan kihasználva"
          className="img-fluid p-0 rounded-0"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <figcaption className="text-center  p-4 text-dark" style={{color:'lightgray'}}>Szalonhossz maximálisan kihasználva</figcaption>
      </div>
    </div>
  </div>
</div>
  <div className='w-75 container h-100 d-flex justify-content-center align-items-center'>
  <h2>Műköröm újraépítése szalonhosszban
</h2>
</div>
<div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="p-3">
            <strong>Műköröm újraépítés</strong> esetén a meglévő műkörmöt eltávolítjuk (teljesen lerövidítjük és az alaprétegig visszareszeljük az anyagot). Ezt követően pedig egy <strong>új műkörmöt építünk</strong> fel a választott hossznak és formának megfelelően.

            <p>Műköröm újraépítésére az alábbi okok miatt lehet szükség:</p>

            <ul>
              <li>új vendég esetén, ha nem tudjuk, hogy az előző körmös milyen anyagokkal hogyan dolgozott, jobban szeretjük teljesen lecsupaszítva új építésként elkészíteni a körmöt, így tudjuk maximális garanciát vállalni az elkészített körömre.</li>
              <li>bizonyos körömformák esetén (óraüveg, karvaly, sísánc) a köröm deformálódása miatt szükséges két maximum három alkalmanként a körmöket teljesen eltávolítani és <strong>új műkörmöt építeni</strong>, ezzel tudjuk biztosítani az esztétikus és tartós végeredményt.</li>
              <li>rágott, alulról kipiszkált köröm esetén szintén szükséges az újraépítés, hiszen ezeknél az eseteknél gyakran alulról kezd fellevegősödni a köröm.</li>
              <li>abban az esetben ha a körmök nagyon ferdén nőnek szintén szükséges az eszétika és a tartósság miatt pár alkalmanként újra építeni.</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3">
            <img
              src="./src/Images/longnail2.png"
              alt="Szalonhossz maximálisan kihasználva"
              className="img-fluid p-0 rounded-0"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <figcaption className="text-center p-4 text-dark" style={{ color: 'lightgray' }}>Műköröm újraépítése szalon hosszban</figcaption>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Nails;
