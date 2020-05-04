import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

import { Container, Title, ContainerNoticia, NoticiaTerciaria, NoticiaSecundaria, NoticiaPrincipal, Time } from './styles'
import { ScrollView } from 'react-native-gesture-handler';

import G1Logo from '../../images/logo-g1.png'
import NoticiaImage from '../../images/politica1.jpg'


const g1 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img: 'https://s2.glbimg.com/I6uN45otNyBJ3Ui_oEwuKzxv3dg=/0x0:5472x3648/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/z/A/clZTvgSAK8Qao0FMA4Sw/ap20122730524206.jpg',
    title: 'Trump diz que agência autorizou emergencialmente uso de medicamento para combater Covid-19',
    tempo: '3 horas'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    img: 'https://s2.glbimg.com/mnlPCtH8hYeamx64zmQL26ICBic=/0x0:1973x1441/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/x/n/25OGFqTbe6k1jB9JkcHw/os-ex-presidentes.jpg',
    title: 'Ato virtual de 1º de Maio exibe em redes sociais mensagens gravadas de políticos e ex-presidentes',
    tempo: '6 horas'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: 'https://s2.glbimg.com/6J_VufKuKDkgBZrXnrP4i5S9ijs=/0x0:4000x2784/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/U/R/IYHfpmRTatLcgoEnolyQ/000-1qy0s6.jpg',
    title: 'Covid-19 ainda é emergência de saúde internacional, diz OMS',
    tempo: '5 horas'
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


const G1 = () => {

  return(
    <Container>
      <Title><img src={G1Logo} width="30" height="20"/></Title>
      <ContainerNoticia>

        <NoticiaPrincipal>
            <div>
              <label>{g1[0].title}</label>
            </div>
            <img src={NoticiaImage} />
            <Time>Há {g1[0].tempo}</Time>
        </NoticiaPrincipal>

        <NoticiaSecundaria>
            <div>
              <label>{g1[1].title}</label>
            </div>
            <Time>Há {g1[1].tempo}</Time>
        </NoticiaSecundaria>

        <NoticiaSecundaria>
          <div>
            <label>{g1[2].title}</label>
          </div>
          <Time>Há {g1[2].tempo}</Time>
        </NoticiaSecundaria>

      </ContainerNoticia>
    </Container>
  )
  
}


export default G1;
