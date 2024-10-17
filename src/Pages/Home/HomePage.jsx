import { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [isCrumbling, setIsCrumbling] = useState(false);

  const handleBookNowClick = () => {
    setIsCrumbling(true);

    setTimeout(() => {
      navigate("/services");
    }, 700);
  };

  // const handleAdminPanel = () => {
  //   navigate("/admin");
  // };
  return (
    <div className={`home-page ${isCrumbling ? "crumble" : ""}`}>
      <div className="background-container">
        <div className="barber-shop-name">
          <h1 className={`${isCrumbling ? "crumble" : ""}`}>
            Gredy Kent Barbershop
          </h1>
          <p className={`${isCrumbling ? "crumble" : ""}`}>Booking App </p>
        </div>
      </div>
      <button
        className={`book-now ${isCrumbling ? "crumble" : ""}`}
        onClick={handleBookNowClick}
      >
        Reserva Ahora
      </button>
      {
        // <button className="btn-panel" onClick={handleAdminPanel}>
        //   Panel de administracion
        // </button>
      }
    </div>
  );
};

export default HomePage;
