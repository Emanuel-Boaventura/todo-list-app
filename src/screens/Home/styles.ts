import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { TaskTypes } from '../../components/Task'
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 20px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  background: ${({ theme }) => theme.COLORS.BASE_600};
  `

export const Header = styled.View`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BASE_700};
`

export const Logo = styled.Image`
  width: 50%;
  margin: 72px 0;
`

export const ViewInput = styled.View`
  flex-direction: row;
  width: 90%;
  align-self: center;
  margin-bottom: 24px;
`

export const ViewCounters = styled.View`
  flex-direction: row;
  font-size: 14px;
  width: 90%;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 24px;
`

export const ViewAllTasks = styled.View`
  flex-direction: row;
`

export const ViewTasksFinisheds = styled.View`
  flex-direction: row;
`

export const AllTasks = styled.Text`
color: ${({ theme }) => theme.COLORS.SECONDARY};
font-weight: 700;
`

export const TasksFinisheds = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-weight: 700;
`

export const NumberCounter = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_100};
  padding: 0 8px;
  background-color: ${({ theme }) => theme.COLORS.BASE_400};
  border-radius: 99px;
  margin-left: 8px;
`

export const TaskInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.COLORS.BASE_300,
}))`
  color: ${({ theme }) => theme.COLORS.BASE_100};
  background: ${({ theme }) => theme.COLORS.BASE_500};
  font-size: 16px;
  align-self: stretch;
  flex: 1;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE_700};
  border-radius: 8px;
`

export const AddIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.COLORS.BASE_100};
  margin: auto 0;
  font-size: 16px;
  width: 17px;
  line-height: 17px;
`

export const AddButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  padding: 14px;
  border-radius: 8px;
  margin-left: 4px;
`

export const TaskList = styled(FlatList as new (props: FlatListProps<TaskTypes>) => FlatList<TaskTypes>)``

