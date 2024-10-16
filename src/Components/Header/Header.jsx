import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../../../public/Image/LogoBarbershop.jpg";

const Header = ({ onMenuToggle, showBackIcon = false }) => {
  const navigate = useNavigate();
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    const newMenuState = !IsMenuOpen;
    setIsMenuOpen(newMenuState);
    onMenuToggle(newMenuState);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    onMenuToggle(false);
  };

  const handleReturnBack = () => {
    navigate("/services");
  };

  return (
    <div className="header-container">
      {" "}
      {showBackIcon ? (
        <span className="return-icon" onClick={handleReturnBack}>
          ❮
        </span>
      ) : (
        <img src={Logo} alt="Barbershop Logo" className="header-logo" />
      )}
      <div className="menu-icon" onClick={handleMenuToggle}>
        <span className="navbar-toggle-icon">{IsMenuOpen ? "✖" : "☰"}</span>
      </div>
      <nav className={`menu ${IsMenuOpen ? "menu-open" : ""}`}>
        <ul className="navigate-lists">
          <li onClick={() => handleNavigate("/")}>Inicio</li>
          <li onClick={() => handleNavigate("/services")}>Servicios</li>
          <li onClick={() => handleNavigate("/booking")}>Reserva Tu Turno</li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
  showBackIcon: PropTypes.bool.isRequired,
};

export default Header;
