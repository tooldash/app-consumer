import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch';

export const SearchProvider = ({ children }) => {

    const searchClient = algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    );

    return (
          <InstantSearch indexName="home-depot-algolia-dummy-1" searchClient={searchClient}>
            {children}
          </InstantSearch>
    )

};

export default SearchProvider;