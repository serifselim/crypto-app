import styled from 'styled-components';

export const TableContainer = styled.main`

`;

export const TableContent = styled.table`
      border-collapse: collapse;
      width: 100%;
      text-align: left;
`;

export const TableRow = styled.tr`
    background: ${({ theme }) => theme.secondBgColor};
`;

export const TableRowHead = styled(TableRow)``;

export const TableHead = styled.th`
    border-top: 1px solid ${({ theme }) => theme.secondBgColor};
    border-bottom: 1px solid ${({ theme }) => theme.secondBgColor};
    background: ${({ theme }) => theme.firstBgColor};    
    padding: 8px;
    font-size: 1.4rem;
    font-weight: 500;
`;

export const TableDetail = styled.td`
    border-top: 1px solid ${({ theme }) => theme.firstBgColor};
    border-bottom: 1px solid ${({ theme }) => theme.firstBgColor};
    padding: 1rem .5rem;
    font-size: 1.6rem;

    &:nth-child(2){
        display: flex;
        align-items: center;

        & > img{
            width: 3.5rem;
            margin-right: 1rem;
        }
    }

    &:last-child{
        color: ${({ isPositive }) => isPositive ? 'green' : 'red'};
    }
`;

