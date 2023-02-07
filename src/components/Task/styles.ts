import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const TaskContainer = styled.View`
  padding: 8px;
  flex-direction: row;
  align-items: center;
  width: 75%;
  margin: auto 0;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLORS.BASE_600};
  `

export const TaskTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_100};
  font-size: 16px;
`

export const TrashIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.COLORS.DANGER};
`