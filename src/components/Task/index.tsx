import {
  CheckIcon,
  DeleteButton,
  EmptyCircle,
  FullCircle,
  TaskContainer,
  TaskTitle,
  TaskTitleFinished,
  TrashIcon,
} from "./styles";

type TaskCardType = {
  data: TaskTypes;
  handleDeleteTask: (id: string) => void;
  handleFinished: (id: string) => void;
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
      {data.finished ? (
        <>
          <FullCircle onPress={() => handleFinished(data.id)}>
            <CheckIcon name="md-checkmark-sharp" />
          </FullCircle>
          <TaskTitleFinished>{data.title}</TaskTitleFinished>
        </>
      ) : (
        <>
          <EmptyCircle onPress={() => handleFinished(data.id)} />
          <TaskTitle>{data.title}</TaskTitle>
        </>
      )}
      <DeleteButton onPress={() => handleDeleteTask(data.id)}>
        <TrashIcon name="md-trash-sharp" size={24} />
      </DeleteButton>
    </TaskContainer>
  );
}
