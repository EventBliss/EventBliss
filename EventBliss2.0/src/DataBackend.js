import { useUser } from "@clerk/clerk-react";
import { createClient,clientAPI } from "./components/Api";
import { useEffect, useState, useRef } from "react";

export function DataBackend() {
    const { user } = useUser();
    const [clients, setClients] = useState([]);

    useEffect(() => {
        async function loadClients() {
            const response = await clientAPI();
            setClients(response.data);
        }
        loadClients();
    }, [user]);

    useEffect(() => {
        if (user) {
            const email = user.emailAddresses[0].emailAddress;
            const username = user.fullName;
            const phone_number = user.phoneNumbers[0].phoneNumber;
            const foundClient = clients.some(client => client.email === email);
            
            if (!foundClient) {
                createClient({
                    name: username,
                    email: email,
                    phone: phone_number
                })
            };
        };
    }, [user,clients]);

    return null;
}