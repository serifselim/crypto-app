import React from 'react';
import { Table } from '../../components';
import { useStateValue } from '../../context/Provider';

const Home = () => {
    const { state } = useStateValue();

    return (
        <>
            <Table
                arr={state.filterArr}
            />
        </>
    );
};

export default Home;