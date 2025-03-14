import React from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch';

export const SearchProvider = ({ children }) => {

    const searchClient = algoliasearch(
        '0RZC3V8ZBW', // process.env.GATSBY_ALGOLIA_APP_ID, @todo
        '7ea98c696a73ed82fa580ddeeb206199' // process.env.GATSBY_ALGOLIA_SEARCH_KEY
    );

    return (
          <InstantSearch indexName="home-depot-algolia-dummy-1" searchClient={searchClient}>
            {children}
          </InstantSearch>
    )

};

export default SearchProvider;