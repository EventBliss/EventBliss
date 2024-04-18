import { useUser } from "@clerk/clerk-react";
import { useOrganizerData } from "../../../components/api/organizer/get";
import { BarListCard } from "./components/BarListCard";
import { GraphCard } from "./components/GraphCard";
import { TopCard } from "./components/TopCard";
import { useEffect, useState } from "react";

export function Dashboard() {
  const { user, isSignedIn } = useUser()
  const [email, setEmail] = useState('')
  const data = useOrganizerData(email);
  useEffect(()=>{
    if(isSignedIn){
      if(user.primaryEmailAddress.emailAddress.length > 0){
        setEmail(user.primaryEmailAddress.emailAddress)
      }
    }
  },[isSignedIn])
  return (
    <div>
      <div className="TopCard">
        <TopCard data={data} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <div className="flex h-full">
          <div className="flex-grow">
            <GraphCard
              dataLY={data[0].pastYearRequest}
              dataAY={data[0].currentYearRequest}
            />
          </div>
        </div>
        <div className="flex h-full">
          <div className="flex-grow">
            <BarListCard
              dataAC={data[0].currentYearRequest}
              dataLY={data[0].pastYearRequest}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
