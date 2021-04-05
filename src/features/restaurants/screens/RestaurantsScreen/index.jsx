import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import RestaurantInfo from '../../components/RestaurantInfoCard';

const RestaurantsSafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${(props) => props.currentHeight ?? 0}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export default function RestaurantsScreen() {
  return (
    <RestaurantsSafeArea currentHeight={StatusBar.currentHeight}>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantsList>
        <RestaurantInfo />
      </RestaurantsList>
    </RestaurantsSafeArea>
  );
}
