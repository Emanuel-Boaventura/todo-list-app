import styled from "styled-components/native";

export const TaskContainer = styled.View`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  width: 90%;
  align-self: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLORS.BASE_500};
  `

export const TaskTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_100};
  font-size: 16px;
`

// export const TrashIcon = styled(FontAwesomeIcon)`
//   color: ${({ theme }) => theme.COLORS.DANGER};
// `