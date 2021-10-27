import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { bookingID } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://stormy-crag-33356.herokuapp.com/services${bookingID}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h2>Deatil of {service.name}</h2>
      <h3>This is booking {bookingID}</h3>
    </div>
  );
};

export default Booking;
