import styled from '@emotion/styled';

export const Btn = styled.button`
    display: flex;

    margin: 0 auto;
    padding: 10px 30px;

    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
    font-family: inherit;
    border: 2px solid #000;
    border-radius: 5px;
    color: #fff;
    background-color: #000;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
                background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        color: #000;
        background-color: #fff;
    }
`;