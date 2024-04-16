import { useEffect, useState } from "react";
import { useListCustomEvents } from "../../../../components/api/customEvents/get";
import { useUser } from "@clerk/clerk-react";
import { TableData } from '../../../../components/TableData';
import { format } from "@formkit/tempo";
import { Actions } from "./Actions";

export function TableRequestsCustom() {
    const { user } = useUser();
    const [selectedProducts, setSelectedProducts] = useState([]);
    const email = user?.email || 'ashley14@gmail.com';
    const { data:customRequest , error } = useListCustomEvents();

    useEffect(() => {
        if (customRequest) {
            const events = customRequest.filter((product) => product.client_email === email);
            setSelectedProducts(events.map(item => ({
                event_name: item.event_name,
                comment: item.comment,
                start_date: format(item.start_date, { date: "full", time: "short" }),
                ending_date: format(item.ending_date, { date: "full", time: "short" }),
                location: item.location,
                organizer: item.organizer_name,
                estimated_price: item.estimated_price,
                people: item.amount_people,
                status: item.status,
                action: <Actions status={item.status}/>
            })));
        } else if (error) {
            console.error('Error al cargar los eventos:', error);
        }
    }, [customRequest, email, error]);

    const selectData = [ "event_name", "comment", "start_date", "ending_date", "location", "estimated_price", "organizer", "people", "status", "action"];

    // Define los nombres de las columnas de la tabla
    const headerCell = [ "Event Name","Comment", "Start Date", "Ending Date", "Location", "Estimated Price", "Organizer", "Guests", "Status","Actions"];

    return (
        <div className="px-10">
            
            <TableData
                Title={'Table of request of custom events'}
                HeaderCell={headerCell}
                SelectData={selectData}
                Data={selectedProducts}
            />
            
        </div>
    );
}
