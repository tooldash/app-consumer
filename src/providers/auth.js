import React from 'react';
import { navigate } from 'gatsby';
import { Auth0Provider } from '@auth0/auth0-react';

const onRedirectCallback = (appState) => {
    // Use Gatsby's navigate method to replace the url
    navigate(appState?.returnTo || '/', { replace: true });
   };

const AuthProvider = ({ children }) => {
    return (
        // <div>{children}</div>
        <Auth0Provider
            domain={process.env.GATSBY_AUTH0_DOMAIN}
            clientId={process.env.GATSBY_AUTH0_CLIENTID}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            >
            {children}
        </Auth0Provider>
    )
}

export default AuthProvider;