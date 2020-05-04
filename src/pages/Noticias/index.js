import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button } from 'react-native';

import G1 from '../../components/G1'
import GloboEsporte from '../../components/GloboEsporte'
import GShow from '../../components/GShow'


const Noticias = ({ navigation }) => {
  return (
    <ScrollView>
      <Button 
      title="Ir para About"
      onPress={() => navigation.navigate('About') }
    />
    <Container>
      {/* <ProductList
        // data={data}
        // keyExtractor={item => String(item.id)}
        // renderItem={renderListItem}
        // onRefresh={loadProducts}
        // refreshing={refreshing}
      /> */}

      <G1 />
      <G1 />
      <GloboEsporte />
      <GShow />

      <Button 
        title="Ir para About"
        onPress={() => navigation.navigate('About') }
      />
  
    

    </Container>
  </ScrollView>
  );
}


Noticias.navigationOptions = {
  title: 'Home',
}


export default Noticias;
