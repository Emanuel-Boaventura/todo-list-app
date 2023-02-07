import { faTrashAlt } from "@fortawesome/pro-regular-svg-icons/faTrashAlt";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native";
import { TaskContainer, TaskTitle, TrashIcon } from "./styles";

export type TaskTypes = {
  id: string;
  finished: boolean;
  title: string;
};

export default function Task(data: TaskTypes) {
  return (
    <TaskContainer>
      <TaskTitle>{data.title}</TaskTitle>
      <TouchableOpacity>
        <TrashIcon icon={faTrashAlt} />
      </TouchableOpacity>
    </TaskContainer>
  );
}
