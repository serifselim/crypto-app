import React from 'react';
import { TableContent, TableContainer, TableRow, TableHead, TableRowHead } from '../../components/Table/Table.styled';
import { useStateValue } from '../../context/Provider';
import TableItem from '../../components/Table/TableItem';
const Favorites = () => {
    const { state, dispatch } = useStateValue();
    const { followArr } = state;

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
                    {followArr && followArr.map((item, index) => (
                        <TableItem
                            item={item}
                            key={item.id}
                            index={index}
                        />
                    ))}
                </tbody>
            </TableContent>
        </TableContainer>
    );
};

export default Favorites;