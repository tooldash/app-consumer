import React from "react";
import { CartProvider } from "./src/providers/cart";
import { SearchProvider } from "./src/providers/search";
import AuthProvider from "./src/providers/auth";
import Search from "./src/components/search";


export const wrapRootElement = ({ element }) => (
  // <AuthProvider>
    <CartProvider>
      <SearchProvider>
        <Search />
        {element}
      </SearchProvider>
    </CartProvider>
  // </AuthProvider>
);