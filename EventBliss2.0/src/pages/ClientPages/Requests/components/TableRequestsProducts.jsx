import { useEffect, useState } from "react";
import { useListRequests } from "../../../../components/api/request/get";
import { useUser } from "@clerk/clerk-react";
import { TableData } from '../../../../components/TableData';
import { format } from "@formkit/tempo";
import { Actions } from "./Actions";

export function TableRequestsProducts() {
    const { user } = useUser();
    const [selectedProducts, setSelectedProducts] = useState([]);
    const email = user?.email || 'ashley14@gmail.com';
    const { data:productsRequest , error } = useListRequests();
    

    useEffect(() => {
        if (productsRequest) {
            const events = productsRequest.filter((product) => product.client_email === email);
            setSelectedProducts(events.map(item => ({
                event_name: item.event_name,
                comment: item.comment,
                date: format(item.event_date, { date: "full" }),
                location: item.event_location,
                organizer: item.organizer_name,
                status: item.status,
                action: <Actions status={item.status}/>
                
                
            })));
        } else if (error) {
            console.error('Error al cargar los eventos:', error);
        }
    }, [productsRequest, email, error]);
    

    const selectData = [ "event_name", "date", "comment", "location", "organizer", "status", "action"];

    // Define los nombres de las columnas de la tabla
    const headerCell = [ "Event Name", "Date","Comment", "Location", "Organizer", "Status", "Actions"];

    return (
        <div className="pt-20 p-10">
            
            <TableData
                Title={'Table of request products'}
                HeaderCell={headerCell}
                SelectData={selectData}
                Data={selectedProducts}
            />
            
        </div>
    );
}
