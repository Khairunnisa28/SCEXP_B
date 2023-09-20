import React from 'react';
import Ramen from '../image/ramen.jpg';
import Sushi from '../image/sushi.jpg';
import Kare from '../image/kare.jpg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home (){
  return (
    <div>
    <h1>Mau makan apa hari ini?</h1>
    <div className="card-container">
      <div className="card">
        <img src={Ramen} className="card-img-top" alt="Gambar 1" />
        <div className="card-body">
          <h5 className="card-title">Makanan 1</h5>
          <button>Pesan</button>
        </div>
      </div>
      <div className="card">
        <img src={Sushi} className="card-img-top" alt="Gambar 2" />
        <div className="card-body">
          <h5 className="card-title">Makanan 2</h5>
        </div>
      </div>
      <div className="card">
        <img src={Kare} className="card-img-top" alt="Gambar 3" />
        <div className="card-body">
          <h5 className="card-title">Makanan 3</h5>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
