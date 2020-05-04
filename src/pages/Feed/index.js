import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text, SafeAreaView, View, FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native-gesture-handler'

import api from '../../services/api'
import { deleteUser } from '../../utils'

import Home from '../Home'


export default function App() {
  return (
    <h1>Feed</h1>
  );
}

// Feed.navigationOptions = ({ navigation }) => {

//   return {
//     title: 'Home',
//     headerTitle: <img src={ImageLogo} width="120" height="40" style={{ alignSelf: 'center' }}/>,
//     headerBackTitleVisible: true,
//     headerRight: () => (
//       <TouchableOpacity
//         onPress={() => (
//           deleteUser().then(() => {
//             navigation.navigate('AuthLoading')
//           })
//         )}
//         style={{ marginRight: 10 }}
//       >
//         <Text>Sair</Text>
//       </TouchableOpacity>
//     ),
//   };
  
// };

// Feed.propTypes = {
//   navigation: PropTypes.shape({
//     dispatch: PropTypes.func,
//   }).isRequired,
// };

