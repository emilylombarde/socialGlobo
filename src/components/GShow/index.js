import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

import { Container, Title, ContainerNoticia, NoticiaTerciaria, NoticiaSecundaria, NoticiaPrincipal, Time } from './styles'
import { ScrollView } from 'react-native-gesture-handler';

import GsLogo from '../../images/logo-gshow.png'
import NoticiaImage from '../../images/famosos2.jpeg'



const gs = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img: 'https://s2.glbimg.com/AYZGJe6GcNhqknuGJZVijw8wcFQ=/0x0:1125x634/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/B/S/81uzxERXKlZq1I4HEdTQ/whatsapp-image-2020-05-01-at-19.34.32.jpeg',
    title: "Após 'sumiço', Manu Gavassi volta a postar nas redes sociais e fala sobre 'BBB20': 'Essa experiência mudou a minha vida'",
    tempo: '2 horas'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    img: 'https://s2.glbimg.com/mnlPCtH8hYeamx64zmQL26ICBic=/0x0:1973x1441/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/x/n/25OGFqTbe6k1jB9JkcHw/os-ex-presidentes.jpg',
    title: "Claudia Raia e Jarbas Homem de Mello participam do jogo 'Quem é mais provável de...'",
    tempo: '5 horas'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: 'https://s2.glbimg.com/6J_VufKuKDkgBZrXnrP4i5S9ijs=/0x0:4000x2784/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/U/R/IYHfpmRTatLcgoEnolyQ/000-1qy0s6.jpg',
    title: "Fabiana Karla lê livro infantil autoral e exalta avó de 96 anos: 'Herdei vontade de contar histórias'",
    tempo: '3 horas'
  },
];



const GShow = () => {

  return(
    <Container>
      <Title><img src={GsLogo} width="100" height="30"/></Title>
      <ContainerNoticia>

        <NoticiaPrincipal>
            <div>
              <label>{gs[0].title}</label>
            </div>
            <img src={NoticiaImage} />
            <Time>Há {gs[0].tempo}</Time>
        </NoticiaPrincipal>

        <NoticiaSecundaria>
            <div>
              <label>{gs[1].title}</label>
            </div>
            <Time>Há {gs[1].tempo}</Time>
        </NoticiaSecundaria>

        <NoticiaSecundaria>
          <div>
            <label>{gs[2].title}</label>
          </div>
          <Time>Há {gs[2].tempo}</Time>
        </NoticiaSecundaria>

      </ContainerNoticia>
    </Container>
  )
  
}


export default GShow;
