import React from "react";
import { ClerkProvider } from '@clerk/clerk-react';

const AuthProvider = ({children}) => {
    const PUBLISHABLE_KEY=process.env.VITE_CLERK_PUBLISHABLE_KEY;

    if (!PUBLISHABLE_KEY) {
        throw new Error('Add your Clerk Publishable Key to the .env file');
      }


    return (
        // <div>{children}</div>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">{children}</ClerkProvider>
    )
}

export default AuthProvider;