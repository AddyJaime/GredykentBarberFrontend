import profilePhoto from "../../../public/Image/gredykentphoto.jpg";
import "./BookingPage.css";
import Header from "../../Components/Header/Header";
import AppointmentScheduler from "../../Components/AppointmentScheduler/AppointmentScheduler";

const BookingPage = () => {
  return (
    <>
      <Header showBackIcon={true} />
      <div className="profile-container">
        <div className="profile-photo">
          <img src={profilePhoto} alt="profile-photo" />
          <div className="profile-information">
            <p className="name">
              Robinson Tejada{" "}
              <span className="nickname">&quot;Gredy Kent&quot;</span>
            </p>
            <p>Peluquero/Estilista</p>
          </div>
        </div>
      </div>
      <AppointmentScheduler />
    </>
  );
};

export default BookingPage;
