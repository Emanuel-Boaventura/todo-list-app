import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TaskTypes } from '../../components/Task'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  background: ${({ theme }) => theme.COLORS.BASE_700};
`

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const TextTo = styled.Text`
  font-size: 48px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const TextDo = styled.Text`
  font-size: 48px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const Logo = styled.Image`
  height: 48px;
  width: 48px;
`

export const ViewInput = styled.View`
  flex-direction: row;
  align-items: center;
  min-width: 90%;
  justify-content: center;
`

export const TaskInput = styled.TextInput`
  color: ${({ theme }) => theme.COLORS.BASE_100};
  font-size: 16px;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE_300};
  border-radius: 8px;
`

export const AddIcon = styled(FontAwesomeIcon)`
  background: ${({ theme }) => theme.COLORS.SECONDARY};
  color: ${({ theme }) => theme.COLORS.BASE_100};
  padding: 20px;
`

export const TaskList = styled(FlatList as new (props: FlatListProps<TaskTypes>) => FlatList<TaskTypes>)`
`