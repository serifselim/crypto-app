import React from 'react';
import { TableContent, TableContainer, TableRow, TableHead, TableRowHead } from './Table.styled';
import TableItem from './TableItem';
import { useStateValue } from '../../context/Provider';

const Table = () => {
    const { state, dispatch } = useStateValue();

    return (
        <TableContainer>
            <TableContent>
                <thead>
                    <TableRowHead>
                        <TableHead>#</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>1h</TableHead>
                    </TableRowHead>
                </thead>
                <tbody>
                    {state.filterArr && state.filterArr.map((item, index) => (
                        <TableItem item={item} key={item.id} index={index} />
                    ))}
                </tbody>
            </TableContent>
        </TableContainer>
    );
};

export default Table;