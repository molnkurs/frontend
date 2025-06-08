import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingEventPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [event, setEvent] = useState([{}]);
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    eventId: id,
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    postalCode: "",
    ticketQuantity: 1,
  });

  const getEvents = async () => {
    const res = await fetch(
      `https://molnkurs-eventservice-g7hahqftgme6erb3.swedencentral-01.azurewebsites.net/api/Events/${id}`
    );

    if (res.ok) {
      const response = await res.json();
      setEvent(response.result);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "ticketQuantity" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://molnkurs-bookingservice-e0etcfepd2c5h9hm.swedencentral-01.azurewebsites.net/api/Bookings",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Booking Failed", errorText);
      } else {
        console.log("Booking ok");
        navigate("/");
      }
    } catch (err) {
      console.error("Error submitting booking", err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <h1>Book event - {event?.title}</h1>
      <div>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label>First Name </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postCode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Tickets</label>
            <input
              type="number"
              name="ticketQuantity"
              value={formData.ticketQuantity}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingEventPage;
