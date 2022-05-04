import React from 'react';
import { TableContent, TableContainer, TableRow, TableHead, TableRowHead } from './Table.styled';
import TableItem from './TableItem';
import { useStateValue } from '../../context/Provider';
import { actionTypes } from '../../context/reducer';

const Table = () => {
    const { state, dispatch } = useStateValue();
    const { filterArr, followArr } = state;

    const changeIsActive = (id) => {
        const payload = filterArr.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    is_active: true
                };
            } else {
                return {
                    ...item,
                    is_active: false
                };
            }
        });
        dispatch({ type: actionTypes.CHANGE_IS_ACTIVE, payload });
    };

    const followCoin = (selectItem) => {
        let isThere = false;
        const payload = filterArr.filter(item => item.id === selectItem.id)[0];

        if (followArr) {
            followArr.map(item => {
                if (item.id === payload.id) {
                    isThere = true;
                }
            });
        }

        if (!isThere) {
            dispatch({ type: actionTypes.ADD_FOLLOW, payload });
        }
    };

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
                    {filterArr && filterArr.map((item, index) => (
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