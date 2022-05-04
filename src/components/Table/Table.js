import React from 'react';
import { TableContent, TableContainer, TableRow } from './Table.styled';
import TableItem from './TableItem';
import TableHead from './TableHead';

const Table = ({ arr, followCoin, changeIsActive }) => {
    return (
        <TableContainer>
            <TableContent>
                <TableHead />
                <tbody>
                    {arr && arr.map((item, index) => (
                        <TableItem
                            item={item}
                            key={item.id}
                            index={index}
                            changeIsActive={changeIsActive}
                            followCoin={followCoin}
                        />
                    ))}
                </tbody>
            </TableContent>
        </TableContainer>
    );
};

export default Table;