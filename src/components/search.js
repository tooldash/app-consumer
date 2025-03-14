import React, { createRef, useState } from "react";
import { Link } from "gatsby";
import { SearchBox, Hits } from "react-instantsearch";
import useClickOutside from "../utils/use-click-outside";

const Search = () => {

    const rootRef = createRef();
    const [query, setQuery] = useState();
    const [hasFocus, setFocus] = useState(false);

    useClickOutside(rootRef, () => setFocus(false));

    const handleOnChange = (event) => {
        console.log("changed");
        console.log(query);
        setQuery(event.target.value);
    };

    function Hit({ hit }) {
            const slug = '/product/' + hit.slug;
            return (
                <Link to={slug}>{hit.product_name}</Link>
                // JSON.stringify(hit)
            )
          }

    return (
        <div ref={rootRef}>
            <SearchBox
                onInput={handleOnChange}
                onFocus={() => setFocus(true)}
                hasFocus={hasFocus}
            />
            {query && query.length > 0 && hasFocus && (
                <Hits
                hitComponent={Hit}
            />
            )} 
        </div>
    )



};

export default Search;