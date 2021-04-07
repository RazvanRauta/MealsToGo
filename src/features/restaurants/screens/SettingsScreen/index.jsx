/**
 *  @author: Razvan Rauta
 *  Date: Apr 07 2021
 *  Time: 21:58
 */

import { SafeArea } from '@/components/SafeArea';
import React from 'react';
import { Text, View, StatusBar } from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeArea currentHeight={StatusBar.currentHeight}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
};

export default SettingsScreen;
