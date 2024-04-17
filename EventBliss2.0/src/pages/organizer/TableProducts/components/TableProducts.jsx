import { useEffect, useState } from "react";
import { useListEvents } from "../../../../components/api/event/get";
// import { useUser } from "@clerk/clerk-react";
import { TableData } from '../../../../components/TableData';
import { Actions } from "./Actions";

export function TableProducts() {
    // const { user } = useUser();
    const [selectedEvents, setSelectedEvents] = useState([]);
    const email = 'christalperez0@gmail.com';
    const { data, error } = useListEvents();
    console.log(data)

    useEffect(() => {
        if (data) {
            const events = data
                .filter((event) => event.organizer_email === email)
                .map(item => ({
                    name: item.name,
                    category_names: item.category_names,
                    price: item.price,
                    action: <Actions id={item.id}/>,
                    create: new Date(item.create) // Convertir la fecha de creación a un objeto Date
                }))
                .reverse(); // Invertir el orden de los eventos después de mapearlos
            
            setSelectedEvents(events);
        } else if (error) {
            console.error('Error al cargar los eventos:', error);
        }
    }, [data, email, error]);

    const selectData = ["name", "category_names", "price", "action"];

    // Define los nombres de las columnas de la tabla
    const headerCell = ["Name", "Category", "Price", "Actions"];

    return (
        <div className="bg-white p-4">
            
            <TableData
                Title={'Table of products'}
                HeaderCell={headerCell}
                SelectData={selectData}
                Data={selectedEvents}
            />
            
        </div>
    );
}
