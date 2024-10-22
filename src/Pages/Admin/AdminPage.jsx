import { useState, useEffect } from "react";
import "./AdminPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPage = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchRervations = async () => {
    try {
      const res = await axios.get("/api/reservations");

      setReservations(res.data);
      console.log(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error fetching data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRervations();
  }, []);

  if (loading) {
    return <p>loading data</p>;
  }

  const homePageHandler = () => {
    navigate("/");
  };

  return (
    <div className="admin-container">
      <button onClick={homePageHandler}>Pagina Principal </button>
      <h2 className="panel-btn">Panel de administracion</h2>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Number:</th>
            <th>Service:</th>
            <th>Date:</th>
            <th>Time:</th>
            <th>Note:</th>
            <th>Estado:</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length > 0 ? (
            reservations.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.number}</td>
                <td>{r.service}</td>
                <td>{new Date(r.date).toLocaleDateString()}</td>
                <td>{r.time}</td>
                <td>{r.note}</td>
                <td>{r.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No hay reservaciones </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
