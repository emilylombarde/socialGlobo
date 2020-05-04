import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #ffffff;
`;

export const Tabs = styled.View`
  display: flex;
  flex-direction: row;

`;


export const Button = styled.TouchableOpacity`
  background-color: #0669de;
  height: 44px;
  width: 50%;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonActive = styled.TouchableOpacity`
  background-color: #8EB7EA;
  height: 44px;
  width: 50%;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
`;



export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;

export const TitleG1 = styled.Text`
  background-color: #C4170C;
  width: 100%;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  line-height: 21px;
`;



export const ProductList = styled(FlatList)`
  flex: 1;
`;

// export const Button = styled.TouchableOpacity`
//   background-color: #398ad7;
//   border-radius: 3px;
//   height: 44px;
//   padding: 0px 20px;
//   margin-top: 10px;
//   justify-content: center;
//   align-items: center;
// `;

// export const ButtonText = styled.Text`
//   color: #ffffff;
//   font-weight: bold;
//   font-size: 14px;
// `;