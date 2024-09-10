import React, {ReactNode} from "react";

function AuthLayout({children}: {children: ReactNode}) {
  return (
    <main className='min-h-screen w-full bg-[url("/business-auth.png")] bg-cover bg-center py-8 bg-fixed'>
      {children}
    </main>
  );
}

export default AuthLayout;
