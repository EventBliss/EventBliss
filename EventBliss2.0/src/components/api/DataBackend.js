import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useListClients } from "./client";
import axios from "axios"
export function DataBackend() {
    const API = import.meta.env.VITE_BACKEND_API
    const { user,isSignedIn } = useUser();
    const {data} = useListClients()
        
    useEffect(() => {
        if (user && isSignedIn) {
            const email = user.emailAddresses[0].emailAddress;
            const username = user.fullName;
            const phone_number = user.phoneNumbers.length > 0 ? user.phoneNumbers[0].phoneNumber : null;
            const foundClient = data.some(client => client.email === email);
            console.log(phone_number)
            if (!foundClient){
                axios.post(`${API}clients/`,{
                    name: username,
                    email: email,
                    phone: phone_number
                });
            }
        }
    }, [user,isSignedIn]);

    return null;
}