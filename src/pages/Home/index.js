import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, SafeAreaView, View, FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native-gesture-handler'

import { StackActions, NavigationActions } from 'react-navigation'


import api from '../../services/api'
import { deleteUser } from '../../utils'

import ProductItem from '../../components/ProductItem'
import G1 from '../../components/G1'
import GloboEsporte from '../../components/GloboEsporte'
import GShow from '../../components/GShow'

import ImageLogo  from '../../images/logo.svg'

import { Container, TitleG1, TitleGe, TitleGs, Button, ButtonText, ProductList, Tabs, ButtonActive } from './styles'


async function TrocarTab(route) {

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: route })],
  })

  props.navigation.dispatch(resetAction)

}



export default function Home() {
  // const [data, setData] = useState([]);
  // const [refreshing, setRefreshing] = useState(false);

  // useEffect(() => {
  //   async function loadProducts() {

  //     const response = await api.get('/products')

  //     console.log(response.data)

  //     setData(response.data.products);
  //   }

  //   loadProducts();
  // }, []);

  // renderListItem = ({ item }) => <ProductItem product={item} />

  return (
    <>
    <Tabs>
      {false ? 
      (
        <ButtonActive >
          <ButtonText>Noticias</ButtonText>
        </ButtonActive>
      ) : 
      (
        <Button onPress={() => NavigationActions.navigate('Noticias')}>
          <ButtonText>Noticias</ButtonText>
        </Button>
      )}

      {true ? 
      (
        <ButtonActive >
          <ButtonText>Feed</ButtonText>
        </ButtonActive>
      ) : 
      (
        <Button>
          <ButtonText>Feed</ButtonText>
        </Button>
      )}  
    </Tabs>

    <ScrollView>
      <Container>
        {/* <ProductList
          // data={data}
          // keyExtractor={item => String(item.id)}
          // renderItem={renderListItem}
          // onRefresh={loadProducts}
          // refreshing={refreshing}
        /> */}

        <G1 />
        <GloboEsporte />
        <GShow />
    
      

      </Container>
    </ScrollView>
    </>
  );
}



Home.navigationOptions = ({ navigation }) => {

  return {
    title: 'Home',
    headerTitle: <img src={ImageLogo} width="120" height="40" style={{ alignSelf: 'center' }}/>,
    headerBackTitleVisible: true,
    headerRight: () => (
      <TouchableOpacity
        onPress={() => (
          deleteUser().then(() => {
            navigation.navigate('AuthLoading')
          })
        )}
        style={{ marginRight: 10 }}
      >
        <Text>Sair</Text>
      </TouchableOpacity>
    ),
  };
  
};

Home.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};

