import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { createClient, useListClients } from "./client";

export function DataBackend() {
  const { user, isSignedIn } = useUser();
  const { data } = useListClients();

  useEffect(() => {
    if (user && isSignedIn) {
      const email = user.emailAddresses[0].emailAddress;
      const username = user.fullName;
      const phone_number = user.phoneNumbers.length > 0 ? user.phoneNumbers[0].phoneNumber : 0
      const foundClient = data?.filter((client) => client.email === email);
      console.log(foundClient)
      if (foundClient.length == 0) {
        createClient( username, email, phone_number)
      }
    }
  }, [user, isSignedIn]);

  return null;
}
