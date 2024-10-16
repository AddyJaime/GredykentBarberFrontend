import { useState } from "react";
import Header from "../../Components/Header/Header";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

import "./ServicesPage.css";

const ServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <>
      <Header onMenuToggle={handleMenuToggle} />
      <div className="service-page">
        {!isMenuOpen && (
          <>
            <div className="welcome-section">
              <h1>Cambia tu look, cambia tu vida</h1>
              <p>Creando un arte en tu cabeza.</p>
            </div>

            <div className="service-cards-container">
              <ServiceCard />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ServicesPage;
