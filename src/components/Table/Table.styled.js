import styled from 'styled-components';

export const TableContainer = styled.main`
    width: 100%;
    /* padding: 0 1rem; */
`;

export const TableContent = styled.table`
      border-collapse: collapse;
      width: 100%;
      text-align: left;
`;

export const TableRow = styled.tr`
    background: ${({ theme }) => theme.secondBgColor};
    position: relative;
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
    position: relative;

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

export const FavButton = styled.button`
    border-radius: .5rem;
    background: green;
    cursor: pointer;
    color: white;
    position: absolute;
    padding: .5rem 1rem;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    &:hover{
        opacity: .8;
    }
`;

