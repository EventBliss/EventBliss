import { SignUp } from "@clerk/clerk-react";

export function SignUpClient() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ 
        backgroundImage: 'url("https://www.frenchweddingstyle.com/wp-content/uploads/2019/05/fall-wedding-table-top-.jpg")',
      }}></div>
      <div className="max-w-screen-lg mx-auto py-20 md:py-20 relative z-10">
        <div className="flex flex-row justify-center">
          <div>
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
