import React from 'react';
import { TableRow, TableDetail } from './Table.styled';
import { formatToCurrency } from '../../utils';

const TableItem = ({ item, index }) => {

    const handleClick = () => {

    };

    return (
        <TableRow key={item.id} onClick={() => handleClick(item.id)}>
            <TableDetail>{index}</TableDetail>
            <TableDetail>
                <img src={item.image} alt={item.id} width="50" />
                {item.symbol.toUpperCase()}
            </TableDetail>
            <TableDetail>{formatToCurrency(item.current_price)}</TableDetail>
            <TableDetail
                isPositive={item.price_change_percentage_24h > 0}
            >
                {item.price_change_percentage_24h.toFixed(2)}%
            </TableDetail>
        </TableRow>
    );
};

export default TableItem;