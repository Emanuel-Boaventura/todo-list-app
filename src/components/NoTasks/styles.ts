import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const EmptyListContainer = styled.View`
  width: 90%;
  align-self: center;
  border-top-color: ${({ theme }) => theme.COLORS.BASE_400};
  border-top-width: 1px;
  `

export const AddIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.COLORS.BASE_400};
  margin: auto 0;
  font-size: 200px;
  font-weight: 400;
  `

export const Clipboard = styled.Image`
margin-top: 48px;
align-self: center;
width: 75px;
height: 75px;
`

export const MainText = styled.Text`
margin-top: 24px;
color: ${({ theme }) => theme.COLORS.BASE_300};
align-self: center;
font-weight: 700;
`

export const SubText = styled.Text`
margin-top: 2px;
color: ${({ theme }) => theme.COLORS.BASE_300};
align-self: center;
`