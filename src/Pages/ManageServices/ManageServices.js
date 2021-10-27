import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  //   console.log(services);

  useEffect(() => {
    fetch("http://localhost:5000/services").then((res) =>
      res.json().then((data) => setServices(data))
    );
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const remainingServices = services.filter(
            (service) => service._id !== id
          );
          setServices(remainingServices);
        }
      });
  };

  return (
    <div>
      <h2>Manage Services2</h2>
      {services.map((service) => (
        <div>
          <h4>{service.name}</h4>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
