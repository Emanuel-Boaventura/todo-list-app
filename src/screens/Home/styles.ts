import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { TaskTypes } from '../../components/Task'

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

// export const AddIcon = styled(FontAwesomeIcon)`
//   color: ${({ theme }) => theme.COLORS.BASE_100};
//   `

export const AddButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.SECONDARY_DARK};
  padding: 12px;
  border-radius: 8px;
  margin-left: 4px;
  `

export const TaskList = styled(FlatList as new (props: FlatListProps<TaskTypes>) => FlatList<TaskTypes>)``