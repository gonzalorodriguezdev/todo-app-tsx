import {TodoId, type Todo as TodoType} from '../types';

interface Props extends TodoType {
  onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void;
  onRemoveTodo: ({id}: TodoId) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo,
}) => {
  return (
    <div className="view">
      <input
        checked={completed}
        className="toggle"
        type="checkbox"
        onChange={(event) => {
          onToggleCompleteTodo({id, completed: event.target.checked});
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({id});
        }}
      />
    </div>
  );
};
