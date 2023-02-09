import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TaskContainer, TaskTitle, TrashIcon } from "./styles";

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
        <TrashIcon name="md-trash-sharp" size={24} />
      </TouchableOpacity>
    </TaskContainer>
  );
}
