import React from 'react';
import { TableRow, TableDetail, UnFavButton, FavButton } from './Table.styled';
import { formatToCurrency } from '../../utils';
import { useStateValue } from '../../context/Provider';
import { actionTypes } from '../../context/reducer';

const TableItem = ({ item, index }) => {
    const { dispatch } = useStateValue();

    const handleClick = () => {
        dispatch({ type: actionTypes.CHANGE_IS_ACTIVE, id: item.id });
    };

    const addFollow = () => {
        dispatch({ type: actionTypes.ADD_FOLLOW, payload: item, index },);
    };

    const removeFollow = () => {
        dispatch({ type: actionTypes.REMOVE_FOLLOW, payload: item, index },);
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
                            {item.price_change_percentage_24h.toFixed(2)}%
                        </div>
                    ) :
                        !item.is_follow ?

                            <FavButton onClick={addFollow}>
                                Follow
                            </FavButton> :
                            <UnFavButton onClick={removeFollow}>
                                UnFollow
                            </UnFavButton>

                }
            </TableDetail>
        </TableRow>
    );
};

export default TableItem;