/**
 *  @author: Razvan Rauta
 *  Date: Apr 07 2021
 *  Time: 22:03
 */

import { SafeArea } from '@/components/SafeArea';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const MapScreen = () => {
  return (
    <SafeArea currentHeight={StatusBar.currentHeight}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map</Text>
      </View>
    </SafeArea>
  );
};

export default MapScreen;
