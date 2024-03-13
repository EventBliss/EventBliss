import { SignUp } from "@clerk/clerk-react";

export function SingIn() {
  return (
    <div className="bg-[#E6E5E4]">
        <div className="max-w-screen-lg mx-auto py-28 ">
          <div className="grid grid-cols-1 md:grid-cols-12 border rounded-r-md">
            <SignUp></SignUp>
          </div>
        </div>
    </div>

  )
}
