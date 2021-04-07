/**
 *  @author: Razvan Rauta
 *  Date: Apr 05 2021
 *  Time: 21:28
 */

import { SafeArea } from '@/components/SafeArea';
import Spacer from '@/components/Spacer';
import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import RestaurantInfoCard from '../../components/RestaurantInfoCard';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled(FlatList).attrs(({ theme }) => {
  const padding = parseInt(theme.space[3], 10);
  return {
    contentContainerStyle: {
      padding,
    },
  };
})``;

export default function RestaurantsScreen() {
  return (
    <SafeArea currentHeight={StatusBar.currentHeight}>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantsList
        data={[
          { name: 'some restaurant' },
          { name: 'other restaurant' },
          { name: 'third restaurant' },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
