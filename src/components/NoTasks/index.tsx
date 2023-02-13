import {
  AddIcon,
  Clipboard,
  EmptyListContainer,
  MainText,
  SubText,
} from "./styles";

const NoTasks = () => {
  return (
    <EmptyListContainer>
      <Clipboard
        source={require("../../../assets/clipboard.png")}
        style={{ resizeMode: "contain" }}
      />
      <MainText>Você ainda não tem tarefas cadastradas</MainText>
      <SubText>Crie tarefas e organize seus itens a fazer</SubText>
    </EmptyListContainer>
  );
};

export default NoTasks;
