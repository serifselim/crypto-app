import React from 'react';
import { useStateValue } from '../../context/Provider';
import { Table } from '../../components';
const Favorites = () => {
    const { state } = useStateValue();
    const { followArr } = state;

    return (
        <>
            <Table
                arr={followArr}
            />
        </>
    );
};

export default Favorites;