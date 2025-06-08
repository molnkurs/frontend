import React from "react";
import { Link } from "react-router-dom";

const EventItems = ({ item }) => {
  return (
    <div className="event-card">
    <Link to={`/events/${item.id}`}>
      <div >
        <div><h1>{item.title}</h1></div>
        <div>{item.description}</div>
        <div>{item.location}</div>
        <div>{item.eventDate}</div>
      </div>
    </Link>
    </div> 
  );
};

export default EventItems;
