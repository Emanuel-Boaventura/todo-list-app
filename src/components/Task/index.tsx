import { TouchableOpacity } from "react-native";
import { TaskContainer, TaskTitle } from "./styles";

type TaskCardType = {
  data: TaskTypes;
  handleDeleteTask: (id: string) => void;
  handleFinished?: () => void;
};

export type TaskTypes = {
  id: string;
  finished: boolean;
  title: string;
};

export default function Task({
  data,
  handleDeleteTask,
  handleFinished,
}: TaskCardType) {
  return (
    <TaskContainer>
      <TaskTitle>{data.title}</TaskTitle>
      <TouchableOpacity onPress={() => handleDeleteTask(data.id)}>
        {/* <TrashIcon icon={faTrashAlt} /> */}
      </TouchableOpacity>
    </TaskContainer>
  );
}
