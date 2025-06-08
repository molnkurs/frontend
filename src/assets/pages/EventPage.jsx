import React from "react";
import EventList from "../components/EventList";
import Nav from "../components/nav";
import Header from "../components/header";
import Footer from "../components/Footer";

const EventPage = () => {
  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <EventList />
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
