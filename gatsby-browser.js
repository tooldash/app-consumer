import React from "react";
import { CartProvider } from "./src/providers/cart";
import { SearchProvider } from "./src/providers/search";
import { AuthProvider } from "./src/providers/auth";
import Search from "./src/components/search";
import LoginButton from "./src/components/login-button";
import LogoutButton from "./src/components/logout-button";


export const wrapRootElement = ({ element }) => (
  <AuthProvider>
  <CartProvider>
    <SearchProvider>
      <LoginButton />
      <LogoutButton />
      <Search />
      {element}
    </SearchProvider>
  </CartProvider>
  </AuthProvider>
);