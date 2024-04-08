import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { createClient,clientAPI } from "./client";
import { organizerAPI } from "./organizer";
import { createOrganizer } from "./organizer/post";

export function DataBackend() {
    const { user,isSignedIn } = useUser();
    const [clients, setClients] = useState([]);
    const [organizers,setOrganizers] = useState([])


    useEffect(() => {
        async function loadClients() {
            const response = await clientAPI();
            const organizerRes = await organizerAPI();
            setOrganizers(organizerRes.data);
            setClients(response.data);
        }
        loadClients();
    }, [user]);

    useEffect(() => {
        if (user && isSignedIn) {
            const email = user.emailAddresses[0].emailAddress;
            const username = user.fullName;
            const phone_number = user.phoneNumbers[0].phoneNumber;
            const foundClient = clients.some(client => client.email === email);
            const foundedOrganizer = organizers.some(organizer => organizer.email === email)
            console.log(user.organizationMemberships)

            
            if (user.organizationMemberships && user.organizationMemberships.length > 0) {
                const userRole = user.organizationMemberships[0].role;
                if (userRole === 'org:member') {
                    if (!foundClient){
                        console.log('Cliente')
                        createClient({
                            name: username,
                            email: email,
                            phone: phone_number
                        });
                    }
                } else if (userRole === 'org:admin') {
                    if(!foundedOrganizer){
                        console.log('organizador')
                        createOrganizer({
                            name: username,
                            email: email,
                            phone: phone_number
                        });
                    }
                }
            }else{
                console.log('no ta pasando nada')
            }
        }
    }, [user,clients]);

    return null;
}