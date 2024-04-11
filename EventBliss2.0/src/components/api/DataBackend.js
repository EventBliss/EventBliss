import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { createClient,useListClients } from "./client";
import { useListOrganizers } from "./organizer/get";

export function DataBackend() {
    const { user,isSignedIn } = useUser();
    const {data} = useListClients()
    const {data: dataOrganizer} = useListOrganizers()
        
    useEffect(() => {
        if (user && isSignedIn && data && dataOrganizer) {
            const email = user.emailAddresses[0].emailAddress;
            const username = user.fullName;
            const phone_number = user.phoneNumbers[0].phoneNumber;
            const foundClient = data.some(client => client.email === email);

            if (!foundClient){
                createClient({
                    name: username,
                    email: email,
                    phone: phone_number
                });
            }
        }
    }, [user]);

    return null;
}