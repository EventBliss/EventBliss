import { SignUp } from "@clerk/clerk-react";

export function SignUpClient() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ 
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/23/17/56/wedding-1854074_1280.jpg")',
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
