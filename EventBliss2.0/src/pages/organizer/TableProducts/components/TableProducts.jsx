import { useEffect, useState } from "react";
import { useListEvents } from "../../../../components/api/event/get";
import { useUser } from "@clerk/clerk-react";
import { TableData } from '../../../../components/TableData';

export function TableProducts() {
    const { user } = useUser();
    const [selectedEvents, setSelectedEvents] = useState([]);
    const email = user?.email || 'christalperez0@gmail.com';
    const { data, error } = useListEvents();

    useEffect(() => {
        if (data) {
            const events = data.filter((event) => event.organizer_email === email);
            setSelectedEvents(events);
        } else if (error) {
            console.error('Error al cargar los eventos:', error);
        }
    }, [data, email, error]);

    // Define las claves de los objetos que deseas mostrar en la tabla
    const selectData = ["name", "category_names", "price", "package"];

    // Define los nombres de las columnas de la tabla
    const headerCell = ["Name", "Category", "Price", "Package"];

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
