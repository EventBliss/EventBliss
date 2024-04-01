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
<<<<<<< HEAD
                    name: 'Christal',
                    email: userEmail,
                    phone: Number(8098795134)
                });
                console.log("Se creo un usuario");
            }
        }
    }, [user]);
=======
                    name: username,
                    email: email,
                    phone: phone_number
                })
            };
        };
    }, [user,clients]);
>>>>>>> e7084506c36d86ba6efb8e22285d8083d1913be7

    return null;
}