import React from 'react';
import { TableRowHead, TableHeadItem } from './Table.styled';

const TableHead = () => {
    return (
        <thead>
            <TableRowHead>
                <TableHeadItem>#</TableHeadItem>
                <TableHeadItem>Name</TableHeadItem>
                <TableHeadItem>Price</TableHeadItem>
                <TableHeadItem>1h</TableHeadItem>
            </TableRowHead>
        </thead>
    );
};

export default TableHead;