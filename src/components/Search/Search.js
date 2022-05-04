import React, { useState } from 'react';
import { SearchContainer, SearchInput } from './Search.styled';

const Search = () => {
    const [searchText, setSearchText] = useState(false);

    return (
        <SearchContainer>
            <SearchInput placeholder='Search Coin/' />
        </SearchContainer>
    );
};

export default Search;