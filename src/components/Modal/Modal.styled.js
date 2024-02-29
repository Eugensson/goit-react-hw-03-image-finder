import styled from '@emotion/styled';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
