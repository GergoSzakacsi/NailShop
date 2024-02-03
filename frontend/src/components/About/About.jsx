import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'; // Create this CSS file for styling

function About() {
  return (
    <div className="container-fluid bg-danger">
      <div className="d-flex p-4">
        <div className="col">
          <div className="d-flex justify-content-end">
            <img src="./src/Images/Swiper/nailart2.jpg" alt="First Image" className="img-fluid" />
          </div>
          <div className="d-flex justify-content-end">
            <img src="./src/Images/Swiper/nailart3.jpg" alt="Second Image" className="img-fluid" />
          </div>
        </div>
        <div className="desc col flex-fill">
          <p>
            Kényelmes helyen, Culver Cityben, Kaliforniában található. Az ügyfelek elégedettsége az
            első számú célunk, és mindent megteszünk annak érdekében, hogy eleget tegyünk vásárlóink
            kérésének. Munkatársaink barátságosak, elkötelezettek és profik. A tiszta higiénia és az
            ügyfelek egészsége is kiemelt fontosságú, ezért nagy erőfeszítéseket teszünk azért, hogy
            minden ügyfelünket sterilizáljuk és tiszta felszerelést biztosítsunk. Egy látogatás a
            NAIL IT Szalonban, és látni fogja a különbséget versenytársainktól.
          </p>
          <p>
            A NAIL IT Szalon szolgáltatásai közé tartozik a köröm javítása, pedikűr, manikűr és
            egyéb szolgáltatások, amelyek mindegyike a legmagasabb színvonalon történik. A különbség
            az, hogy szolgáltatásainkat a legnagyobb gondossággal és professzionalizmussal nyújtjuk.
          </p>
          <p>
            A székek és műkörmösök sokasága mellett vendégeinknek ritkán kell várakozniuk. Időpontot
            is vállalunk, úgyhogy hívjon minket, hogy egyeztethessünk! Reméljük hamarosan
            találkozunk a NAIL IT Szalonban, ahol tapasztalt technikusaink kiváló szolgáltatásaival
            várják Önt.
          </p>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="row justify-content-md-center">
    //     <div className="col blurred-background">
    //       <img
    //         src="./src/Images/Swiper/nailart2.jpg"
    //         alt="First Image"
    //         className="img-fluid p-3"
    //       />
    //       <img
    //         src="./src/Images/Swiper/nailart3.jpg"
    //         alt="Second Image"
    //         className="img-fluid p-3"
    //       />
    //     </div>

    //     <div className="col blurred-background">
    //       <div className="description">
    //         <p>Description for the second image</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default About;
