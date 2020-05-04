import styled from 'styled-components'
import { FlatList } from 'react-native'


export const Container = styled.div`
    background-color: #e4e4e4;
    width: 100%;
`;


export const Title = styled.div`
    background-color: #ec7d00;
    width: 100%;
    margin-top: 20px;
    padding: 10px 0px;

    font-weight: bold;
    text-align: center;
    font-size: 20px;
    color: #fff;
    line-height: 21px;
    font-family: opensans,helvetica,arial,sans-serif;
`;


export const Time = styled.p`
    padding: 20px;
    font-size: 12px;
    color: #555;

`


export const ContainerNoticia = styled.div`
    font-size: 16px;
    font-family: opensans,helvetica,arial,sans-serif;
    font-weight: bold;
    
`


export const NoticiaPrincipal = styled.div`
    background-color: #fff;
    max-width: 100%;
    border-bottom: 1px;
    
    div {
        color: #ec7d00;
        padding: 20px;
    }

    img {
        width: 100%;
        height: 200px;
    }

`

export const NoticiaSecundaria = styled.div`
    background-color: #fff;
    max-width: 100%;
    border-bottom: 1px;
    
    div {
        color: #ec7d00;
        padding: 20px;
    }

`