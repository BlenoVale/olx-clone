import styled from "styled-components";

export const Template = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`;

export const PageContainer = styled.div`
    flex: 1;
    min-width: 78%;
    max-width: 78%;
    margin: auto;
`;

export const PageTitle = styled.h1`
    font-size: 30px;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
    margin: 10px 0;
    padding: 10px;
    background-color: #FFCACA;
    color: #000;
    border: 2px solid #FF0000;
`;

export const InfoMessage = styled.div`
    margin: 10px 0;
    padding: 10px;
    background-color: #dbf2d6;
    color: #000;
    border: 2px solid #87d185;
`;