import styled from '@emotion/styled';

export const Header = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 200px;

    color: #fff;
    background-color: #000;
`;

export const LogoWrapper = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    text-decoration: none;
`;

export const Logo = styled.p`
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    color: #fff;

    span {
        color: #ff0000;
    }
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 350px;
  background-color: transparent;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 10px;
    
    border: none;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    opacity: 0.5;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        opacity: 0.9;
    }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 32px;
  font: inherit;
  font-size: 20px;
  border: 0;
  border-radius: 3px;
  outline: none;
  padding: 5px;

  ::placeholder {
    font: inherit;
    font-size: 20px;
  }
`;