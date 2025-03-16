import React from "react";
import { CartProvider } from "./src/providers/cart";
import { SearchProvider } from "./src/providers/search";
import AuthProvider from "./src/providers/auth";
import Auth  from './src/components/auth';
import Search from "./src/components/search";
import LoginButton from "./src/components/login-button";
import LogoutButton from "./src/components/logout-button";


export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    <Auth />
  <CartProvider>
    <SearchProvider>
      <Search />
      {element}
    </SearchProvider>
  </CartProvider>
  </AuthProvider>
);