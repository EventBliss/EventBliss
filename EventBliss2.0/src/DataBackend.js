import { useUser } from "@clerk/clerk-react";
import { createClient } from "./components/Api";
import { useState,useEffect } from "react";
import { clientAPI } from "./components/Api";

export function DataBackend() {
    const { user, isSignedIn } = useUser();
    const [clients, setClients] = useState([]);
    console.log(clients)
    useEffect(() => {
        async function loadClients() {
            const response = await clientAPI();
            setClients(response.data);
        }
        loadClients();
        console.log(clients)

    }, []);

    useEffect(() => {
        if (user) {
            const email = user.emailAddresses;
            const userEmail = email[0].emailAddress;

            const foundClient = clients.some(client => client.email === userEmail);
            console.log('sii' + foundClient);
            if (foundClient) {
                console.log('si hay un usuario');
            } else {
                console.log('se esta creando un usuario');
                createClient({
                    name: 'Christal',
                    email: userEmail,
                    phone: Number(8098795134)
                });
                console.log("Se creo un usuario");
            }
        }
    }, [user]);

    return null; // O puedes retornar algún componente aquí si lo deseas
}
