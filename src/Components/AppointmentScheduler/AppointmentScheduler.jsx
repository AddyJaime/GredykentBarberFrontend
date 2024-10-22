import { useState } from "react";
import "antd/dist/reset.css";
import { Modal, DatePicker, TimePicker, ConfigProvider, Button } from "antd";
import esES from "antd/lib/locale/es_ES";
import "./AppointmentScheduler.css";
import axios from "axios";

const AppointmentScheduler = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [note, setNote] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [service, setService] = useState("haircut");
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const [isModelVisible, setModelVisible] = useState(false);

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleDateChange = (date, dateString) => {
    setDate(dateString);
  };

  const handleTimeChange = (time, timeString) => {
    setTime(timeString);
  };

  const createAppointment = async (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      setMessage("Por favor, llena todos los campos requeridos.");
      return;
    }

    if (!validatePhoneNumber(number)) {
      setMessage("Por favor, ingrese un número de teléfono válido.");
      return;
    }
    try {
      const appointmentData = {
        name,
        service,
        date,
        time,
        note,
        number,
      };
      const res = await axios.post("/api/reservations", appointmentData);

      setMessage("cita creada con exito");
      setName("");
      setNote("");
      setTime("");
      setDate("");
      setNumber("");
      setModelVisible(true);

      console.log(res.data);
    } catch (error) {
      console.log({ error });
      setMessage("fallo la creacion de la cita");
      setModelVisible(false);
    }
  };

  const handleModel = () => {
    setModelVisible(false);
  };
  return (
    <ConfigProvider locale={esES}>
      <form onSubmit={createAppointment} className="cita-container">
        <h2>Agendar una cita</h2>
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
        <input
          type="text"
          placeholder="Ingrese su numero de telefono"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          className="number-input"
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
      <Modal
        title="Cita confirmada"
        visible={isModelVisible}
        onOk={handleModel}
        onCancel={handleModel}
      >
        <p>
          Su cita ha sido creada con éxito. Recibirá un mensaje con más detalles
          sobre su cita.
        </p>
      </Modal>
    </ConfigProvider>
  );
};

export default AppointmentScheduler;
