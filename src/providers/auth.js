import React from 'react';
import { navigate } from 'gatsby';
import { Auth0Provider } from '@auth0/auth0-react';

const onRedirectCallback = (appState) => {
    // Use Gatsby's navigate method to replace the url
    navigate(appState?.returnTo || '/', { replace: true });
   };

export const AuthProvider = ({ children }) => {
    return (
        // <div>{children}</div>
        <Auth0Provider
            domain='dev-n4min6atgfa3ri3w.us.auth0.com' // {process.env.AUTH0_DOMAIN}
            clientId='5kPlHLdJFnp5x8QpdUWblrETTx3kB5jy' // @todo {process.env.AUTH0_CLIENTID}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            >
            {children}
        </Auth0Provider>
    )
}

// export default AuthProvider;