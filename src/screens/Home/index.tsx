import { useState } from "react";
import Task from "../../components/Task";
import {
  AddButton,
  AddIcon,
  Container,
  Header,
  Logo,
  TaskInput,
  TaskList,
  ViewInput,
} from "./styles";

interface TaskListInterface {
  id: string;
  finished: boolean;
  title: string;
}

export default function Home() {
  const [taskList, setTaskList] = useState<TaskListInterface[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  function handleAddTask() {
    setTaskList((prevState) => [
      ...prevState,
      {
        id: new Date().getUTCMilliseconds().toString(),
        finished: false,
        title: newTask,
      },
    ]);
    setNewTask("");
  }

  function handleDeleteTask(id: string) {
    setTaskList((prevState) => prevState.filter((taskId) => taskId.id !== id));
  }

  return (
    <Container>
      <Header>
        <Logo
          source={require("../../../assets/logo.png")}
          style={{ resizeMode: "contain" }}
        />
      </Header>
      <ViewInput
        style={{
          transform: [{ translateY: -22 }],
        }}
      >
        <TaskInput
          placeholder="Adicione uma nova tarefa"
          onChangeText={setNewTask}
          value={newTask}
        />
        <AddButton onPress={handleAddTask}>
          <AddIcon name="pluscircleo" />
        </AddButton>
      </ViewInput>
      <TaskList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task data={item} handleDeleteTask={handleDeleteTask} />
        )}
      />
    </Container>
  );
}
