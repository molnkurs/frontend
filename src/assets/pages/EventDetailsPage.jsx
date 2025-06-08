import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { id } = useParams();

  const [event, setEvent] = useState([{}]);

  const getEvents = async () => {
    const res = await fetch(
      `https://molnkurs-eventservice-g7hahqftgme6erb3.swedencentral-01.azurewebsites.net/api/Events/${id}`
    );

    if (res.ok) {
      const response = await res.json();
      setEvent(response.result);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="event-details">
      <h1>
        {event.title}
      </h1>
      <div>{event.description}</div>
      <div>{event.location}</div>
      <div>{event.date}</div>
      <div>
        <Link to={`/events/booking/${id}`}>
        <button>book</button>
        
        </Link>
      </div>
    </div>
  );
};

export default EventDetailsPage;
