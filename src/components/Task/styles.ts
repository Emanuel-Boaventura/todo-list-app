import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const TaskContainer = styled.View`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  width: 90%;
  align-self: center;
  border-radius: 12px;
  margin-bottom: 8px;

  background: ${({ theme }) => theme.COLORS.BASE_500};
  border-color: ${({ theme }) => theme.COLORS.BASE_400};
  border-width: 1px;
  `

export const TaskTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_100};
  font-size: 16px;
  margin-left: 8px;
  width: 80%;
`

export const TaskTitleFinished = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_300};
  font-size: 16px;
  margin-left: 8px;
  width: 80%;
  text-decoration: line-through;
`

export const EmptyCircle = styled.TouchableOpacity`
  border-color: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  border-width: 2px;
  border-radius: 99px;
  height: 24px;
  width: 24px;
  `

export const FullCircle = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 99px;
  height: 24px;
  width: 24px;
`

export const DeleteButton = styled.TouchableOpacity`
  margin-left: auto;
`

export const TrashIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.COLORS.DANGER};
  width: 24px;
`

export const CheckIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.COLORS.BASE_200};
  font-size: 16px;
  align-self: center;
  margin: auto 0;
`