import { SignUp } from "@clerk/clerk-react";

export function SignUpClient() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ 
        backgroundImage: 'url("https://i.pinimg.com/564x/9d/bf/37/9dbf378df93c4c585fd9c721030ab0b6.jpg")',
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
