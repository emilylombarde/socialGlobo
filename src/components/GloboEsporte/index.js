import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

import { Container, Title, ContainerNoticia, NoticiaTerciaria, NoticiaSecundaria, NoticiaPrincipal, Time } from './styles'
import { ScrollView } from 'react-native-gesture-handler';

import GeLogo from '../../images/logo-ge.png'
import NoticiaImage from '../../images/esporte1.jpg'


const ge = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img: 'https://s2.glbimg.com/RLMr5sgmzWjSHl-logVKMHoUdHA=/0x0:1080x608/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/I/d/U8FrqZTCqRRXr8qnkmBA/carrossel-virada.jpg',
    title: 'Ranking mostra quais são os "times da virada" da Série A dos últimos cinco Brasileirões',
    tempo: '2 horas'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    img: 'https://s2.glbimg.com/mnlPCtH8hYeamx64zmQL26ICBic=/0x0:1973x1441/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/x/n/25OGFqTbe6k1jB9JkcHw/os-ex-presidentes.jpg',
    title: 'Em despedida, Michael Jordan jogou com pés sangrando por uso de tênis velho',
    tempo: '5 horas'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: 'https://s2.glbimg.com/6J_VufKuKDkgBZrXnrP4i5S9ijs=/0x0:4000x2784/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/U/R/IYHfpmRTatLcgoEnolyQ/000-1qy0s6.jpg',
    title: 'Palmeiras suspende contrato de funcionários, mas compensa salários e promete não demitir',
    tempo: '3 horas'
  },
];

function Item({ title, img }) {
  return (
    <div>
      <label>{title}</label>
      <img src={img} />
    </div>
  );
}


const GloboEsporte = () => {

  return(
    <Container>
      <Title><img src={GeLogo} width="50" height="50"/></Title>
      <ContainerNoticia>

        <NoticiaPrincipal>
            <div>
              <label>{ge[0].title}</label>
            </div>
            <img src={NoticiaImage} />
            <Time>Há {ge[0].tempo}</Time>
        </NoticiaPrincipal>

        <NoticiaSecundaria>
            <div>
              <label>{ge[1].title}</label>
            </div>
            <Time>Há {ge[1].tempo}</Time>
        </NoticiaSecundaria>

        <NoticiaSecundaria>
          <div>
            <label>{ge[2].title}</label>
          </div>
          <Time>Há {ge[2].tempo}</Time>
        </NoticiaSecundaria>

      </ContainerNoticia>
    </Container>
  )
  
}


export default GloboEsporte;
