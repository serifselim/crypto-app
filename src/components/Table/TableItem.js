import React from 'react';
import { TableRow, TableDetail, TableDetailReverse, FavButton } from './Table.styled';
import { formatToCurrency } from '../../utils';

const TableItem = ({ item, index, changeIsActive, followCoin }) => {

    const handleClick = () => {
        changeIsActive(item.id);
    };

    return (
        <TableRow key={item.id} onClick={handleClick}>
            <TableDetail>{index}</TableDetail>
            <TableDetail>
                <img src={item.image} alt={item.id} width="50" />
                {item.symbol.toUpperCase()}
            </TableDetail>
            <TableDetail>{formatToCurrency(item.current_price)}</TableDetail>
            <TableDetail
                isPositive={item.price_change_percentage_24h > 0}
            >
                {
                    !item.is_active ? (
                        <div>
                            {item.price_change_percentage_24h.toFixed(2)}
                        </div>
                    ) : (
                        <FavButton onClick={() => followCoin(item)}>
                            Follow
                        </FavButton>
                    )
                }
            </TableDetail>
        </TableRow>
    );
};

export default TableItem;