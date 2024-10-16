import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = () => {
  const navigate = useNavigate();

  const handleNaviteToReserve = () => {
    navigate("/booking");
  };

  return (
    <div className="services-container">
      <h2 className="service-card-title">Servicios</h2>
      <div className="service-item">
        <div className="icono">
          <i className="fas fa-cut" onClick={handleNaviteToReserve}></i>
        </div>
        <h3 className="hair-cut">Corte de Pelo</h3>
      </div>

      <div className="service-item">
        <div className="icono">
          <i
            className="fas fa-hand-sparkles"
            onClick={handleNaviteToReserve}
          ></i>
        </div>
        <h3>Manicura/Pedicura</h3>
      </div>

      <div className="service-item">
        <div className="icono">
          <i className="fas fa-fill-drip" onClick={handleNaviteToReserve}></i>
        </div>
        <h3>Coloración de Pelo</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
