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

            if (user.organizationMemberships && user.organizationMemberships.length > 0) {
                if(!foundedOrganizer){
                    console.log('organizador')
                    createOrganizer({
                        name: username,
                        email: email,
                        phone: phone_number
                    });
                }
            }else{
                if (!foundClient){
                    console.log('Cliente')
                    createClient({
                        name: username,
                        email: email,
                        phone: phone_number
                    });
                }
            }
        }
    }, [user,clients]);

    return null;
}