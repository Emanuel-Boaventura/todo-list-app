import { useState } from "react";
import NoTasks from "../../components/NoTasks";
import Task from "../../components/Task";
import {
  AddButton,
  AddIcon,
  AllTasks,
  Container,
  Header,
  Logo,
  NumberCounter,
  TaskInput,
  TaskList,
  TasksFinisheds,
  ViewAllTasks,
  ViewCounters,
  ViewInput,
  ViewTasksFinisheds,
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
    if (!newTask) return;

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

  const finishedTasksNumber = taskList.filter(
    ({ finished }) => finished
  ).length;

  function handleDeleteTask(id: string) {
    setTaskList((prevState) => prevState.filter((task) => task.id !== id));
  }

  function handleFinished(id: string) {
    setTaskList((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return { ...task, finished: !task.finished };
        }
        return task;
      })
    );
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
      <ViewCounters>
        <ViewAllTasks>
          <AllTasks>Criadas</AllTasks>
          <NumberCounter>{taskList.length}</NumberCounter>
        </ViewAllTasks>
        <ViewTasksFinisheds>
          <TasksFinisheds>Concluidas</TasksFinisheds>
          <NumberCounter>{finishedTasksNumber}</NumberCounter>
        </ViewTasksFinisheds>
      </ViewCounters>
      {taskList.length !== 0 ? (
        <TaskList
          data={taskList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              data={item}
              handleDeleteTask={handleDeleteTask}
              handleFinished={handleFinished}
            />
          )}
        />
      ) : (
        <NoTasks />
      )}
    </Container>
  );
}
