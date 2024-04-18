import { useEffect, useState } from "react";
import { useListRequests } from "../../../../components/api/request/get";
import { useUser } from "@clerk/clerk-react";
import { TableData } from "../../../../components/TableData";
import { format } from "@formkit/tempo";
import { Actions } from "./actionProduct/Actions";
import { BadgesStatus } from "../../../../components/BadgesStatus";

export function TableRequestsProducts({status}) {
    const { user } = useUser();
    const [selectedProducts, setSelectedProducts] = useState([]);
    const email = user?.email
    const { data:productsRequest , error } = useListRequests();
    console.log(productsRequest)
    

    useEffect(() => {
        if (productsRequest) {
            const events = productsRequest.filter((product) => product.organizer_email === email && product.status == status);
            setSelectedProducts(events.map(item => ({
                event_name: item.event_name,
                comment: item.comment,
                date: format(item.event_date, { date: "full" }),
                location: item.event_location,
                client: item.client_name,
                status: <BadgesStatus status={item.status}/>,
                action: <Actions status={item.status} id={item.id} queryKey={'eventRequests'}/>
                
                
            })));
        } else if (error) {
            console.error('Error al cargar los eventos:', error);
        }
    }, [productsRequest, email, error, status]);
    

    const selectData = [ "event_name", "date", "comment", "location", "client", "status", "action"];

    // Define los nombres de las columnas de la tabla
    const headerCell = [ "Event Name", "Date","Comment", "Location", "Client", "Status", "Actions"];

    return (
        <div>
            
            <TableData
                HeaderCell={headerCell}
                SelectData={selectData}
                Data={selectedProducts}
            />
            
        </div>
    );
}
