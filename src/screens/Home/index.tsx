import { faPlusCircle } from "@fortawesome/pro-regular-svg-icons/faPlusCircle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome/";
import { FlatList, TouchableOpacity } from "react-native";
import Task from "../../components/Task";
import {
  AddIcon,
  Container,
  Header,
  Logo,
  TaskInput,
  TaskList,
  TextDo,
  TextTo,
  ViewInput,
} from "./styles";

export default function Home() {
  const taskList = [
    {
      id: "1",
      finished: true,
      title: "dar git add .",
    },
    {
      id: "2",
      finished: false,
      title: 'dar git commit "titulo"',
    },
    {
      id: "3",
      finished: false,
      title: "dar git push",
    },
  ];

  return (
    <Container>
      <Header>
        <Logo source={{ uri: "../../../assets/rocket.png" }} />
        <TextTo>
          to<TextDo>do</TextDo>
        </TextTo>
      </Header>
      <ViewInput>
        <TaskInput />
        <TouchableOpacity>
          <AddIcon icon={faPlusCircle} />
        </TouchableOpacity>
      </ViewInput>
      <TaskList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Task {...item} />}
      />
    </Container>
  );
}
