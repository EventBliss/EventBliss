import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
// import { useUser } from "@clerk/clerk-react";
import { TableData } from "../../../components/TableData";

import { useListEvents } from "../../../components/api/event/get";
import { BtnEditProduct } from "./components/BtnEditProduct";
import { Link, NavLink } from "react-router-dom";

export function TableProducts() {
  // const { user } = useUser();
  const [selectedEvents, setSelectedEvents] = useState([]);
  const user = useUser()
  const email = user?.emailAddresses[0].emailAddress;
  const { data, error } = useListEvents();

  useEffect(() => {
    if (data) {
      const events = data.filter((event) => event.organizer_email === email);
      setSelectedEvents(events);
    } else if (error) {
      console.error("Error al cargar los eventos:", error);
    }
  }, [data, email, error]);

  console.log(selectedEvents);
  const selectData = ["name", "category_names", "price", "package"];

  // Define los nombres de las columnas de la tabla
  const headerCell = ["Name", "Category", "Price", "Package"];

  return (
    <div className="bg-white p-4">
      <TableData
        Title={"Table of products"}
        HeaderCell={headerCell}
        SelectData={selectData}
        Data={selectedEvents}
      />
      {selectedEvents.map((event) => (
        <div key={event.id}>
          <Link to={`EditEvent/${event.id}`}>Editar evento</Link>
        </div>
      ))}
    </div>
  );
}
