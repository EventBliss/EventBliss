import { SignUp } from "@clerk/clerk-react";

export function SignUpClient() {
  return (
    <div className="bg-[#E6E5E4] ">
        <div className="max-w-screen-lg mx-auto py-28 ">
          <div className="grid grid-cols-1 md:grid-cols-12 border rounded-r-md">
            <SignUp></SignUp>
            <img className="" src="https://www.frenchweddingstyle.com/wp-content/uploads/2019/05/fall-wedding-table-top-.jpg" alt="" />
          </div>
        </div>
    </div>

  )
}
