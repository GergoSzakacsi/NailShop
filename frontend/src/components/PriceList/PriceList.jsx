import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PriceList.css';

const Pricelist = () => {
  return (
    <section className="container flex-column my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-uppercase font-weight-bold">Körömszalon Árlista 2022</h1>
          <hr className="my-4" />
        </div>
      </div>

  <div className="row w-100">
    <div className="col-12">
      <img
        className="img"
        src="./src/Images/gellac2.jpg"
        alt=""
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
    </div>
  </div>
  <div className="row">
    <div className="col-12 text-center">
      <hr className="my-4" />
      <p>A vállalt árak illusztrációként szolgálnak, a valóságban az egyes alkalmazások mennyisége vagy munka igényessége miatt eltérhetnek.</p>
      <h1 className="text-uppercase font-weight-bold">MŰKÖRÖM ÁRLISTA</h1>
    </div>
  </div>

<div className="row justify-content-center w-100">
    <div className="col-12 col-md-12">
      <div className="text-center">
        <table className="table pricelist-table w-100">
          <thead>
            <tr>
              <th scope="col" className="col-md-4">Szolgáltatás</th>
              <th scope="col">Időtartam</th>
              <th scope="col">Ár</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">Műköröm építés szalonhossz</td>
              <td className="text-center">1,5-2,5 óra</td>
              <td className="text-center">13.500 Ft</td>
            </tr>
            <tr>
              <td className="text-center">Műköröm töltés/skm</td>
              <td className="text-center">1,5-2,5 óra</td>
              <td className="text-center">11.500 Ft</td>
            </tr>
            <tr>
              <td className="text-center">Műköröm újrépítésszalonhossz</td>
              <td className="text-center">2,5-3 óra</td>
              <td className="text-center">14.600 Ft</td>
            </tr>
            <tr>
              <td className="text-center">Műköröm építésextrahossz</td>
              <td className="text-center">2,5-3 óra</td>
              <td className="text-center">16.500 Ft</td>
            </tr>
            <tr>
              <td className="text-center">Műköröm végleges eltávolítása + mini manikűr</td>
              <td className="text-center">0,5-1 óra</td>
              <td className="text-center">7.500 Ft</td>
            </tr>
            <tr>
              <td className="text-left">Műköröm végleges eltávolítása + manikűr + géllakkozás</td>
              <td className="text-center">1-1,5 óra</td>
              <td className="text-center">10.900 Ft</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</div>
<hr className="my-4" />

<hr className="my-4" />

<div className="row w-100">
    <div className="col-12">
      <img
        className="img"
        src="./src/Images/gellac3.jpg"
        alt=""
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
    </div>
  </div>
  <hr className="my-4" />
  <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-uppercase font-weight-bold">MANIKŰR GÉLLAK/SHELLAC ÁRLISTA</h1>
          <hr className="my-4" />
        </div>
      </div>

<div className="row justify-content-center w-100">
    <div className="col-12 col-md-12">
      <div className="text-center">
        <table className="table pricelist-table w-100">
          <thead>
            <tr>
              <th scope="col" className="col-md-4">Szolgáltatás</th>
              <th scope="col">Időtartam</th>
              <th scope="col">Ár</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">Manikűr</td>
              <td className="text-center">0,5-1 óra</td>
              <td className="text-center">6.000 Ft</td>
            </tr>
            <tr>
              <td className="text-center">Manikűr hagyományos lakkozással</td>
              <td className="text-center">1-1,5 óra</td>
              <td className="text-center">6.800 Ft</td>
            </tr>
            <tr>
              <td className="text-center">Professzionális manikűr géllakkal (egyszínű)</td>
              <td className="text-center">1-1,5 óra</td>
              <td className="text-center">9.500 Ft</td>
            </tr>
            <tr>
              <td className="text-center">Professzionális manikűr géllakkal (francia, babyboomer)</td>
              <td className="text-center">1-2 óra</td>
              <td className="text-center">10.200 Ft</td>
            </tr>
            <tr>
              <td className="text-center">Géllak/Shellac végleges eltávolítása mini manikűrrel</td>
              <td className="text-center">1 óra</td>
              <td className="text-center">6.900 Ft</td>
            </tr>
            <tr>
              <td className="text-left">Géllak/Shellac végleges eltávolítása + manikűr + hagyományos lakkozás</td>
              <td className="text-center">1-1,5 óra</td>
              <td className="text-center">8.500 Ft</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</div>
    </section>
  );
};

export default Pricelist;
