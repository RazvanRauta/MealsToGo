/**
 *  @author: Razvan Rauta
 *  Date: Apr 07 2021
 *  Time: 22:06
 */

import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${(props) => props.currentHeight ?? 0}px;
`;
