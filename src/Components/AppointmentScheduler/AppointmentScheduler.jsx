import { useState } from "react";
import "antd/dist/reset.css";
import { DatePicker, TimePicker, ConfigProvider, Button } from "antd";
import esES from "antd/lib/locale/es_ES";
import "./AppointmentScheduler.css";

const AppointmentScheduler = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [service, setService] = useState("haircut");
  const [message, setMessage] = useState("");

  const handleDateChange = (date, dateString) => {
    setDate(dateString);
  };

  const handleTimeChange = (time, timeString) => {
    setTime(timeString);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !date || !time) {
      setMessage("Por favor, llena todos los campos requeridos.");
      return;
    }

    const appointmentData = {
      name,
      service,
      date,
      time,
      note,
    };

    try {
      const response = await fetch("http://localhost:3000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        console.log("Appointment created successfully!");
        setMessage("cita creada con exito");
        setName("");
        setNote("");
        setTime(null);
        setDate(null);
      } else {
        console.log("Failed to create appointment");
        setMessage("fallo la creacion de la cita");
      }
    } catch (error) {
      console.log("Error sending data to server", error);
    }
  };

  return (
    <ConfigProvider locale={esES}>
      <form onSubmit={handleSubmit} className="cita-container">
        <h2>Agendar un cita</h2>
        <DatePicker
          onChange={handleDateChange}
          placeholder="Selecciona un dia"
          className="date-picker"
        />
        <TimePicker
          onChange={handleTimeChange}
          use12Hours
          format="h:mm a"
          placeholder="Selecciona una hora"
          className="time-picker"
        />
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="name-input"
        />
        <textarea
          placeholder="Anadir una nota"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="note-input"
        ></textarea>
        <Button className="btn" type="primary" htmlType="submit">
          Enviar
        </Button>
        <div className="selected-info">
          <p> {time}</p>
          <p> {date}</p>
        </div>
      </form>
    </ConfigProvider>
  );
};

export default AppointmentScheduler;
