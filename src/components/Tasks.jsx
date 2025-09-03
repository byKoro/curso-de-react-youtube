import { ChevronRight, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
function Tasks({ onTaskClick, onDeleteTaskClick, tasks }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="space-y-3 p-6 bg-slate-200 shadow rounded-md">
      {tasks.map(task => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${
              task.isCompleted && 'line-through'
            }`}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRight />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
