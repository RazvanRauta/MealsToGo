import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const InfoContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RatingContainer = styled.View`
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0 ${(props) => props.theme.space[2]};
  justify-content: space-between;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export {
  RestaurantCard,
  RestaurantCardCover,
  InfoContainer,
  Address,
  RatingContainer,
  Section,
  SectionEnd,
  Icon,
};
