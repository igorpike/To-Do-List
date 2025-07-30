import { ZoomIn, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

function Tasks(props) {
  const navigate = useNavigate(); 

  return (
    <ul className="max-w-md w-full mx-auto space-y-4 p-6 bg-slate-300 rounded-md shadow-md m-5">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-3">
          <button 
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full flex ${
              task.iscompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>

          <button
            onClick={() => navigate(`/task/${task.id}`)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ZoomIn />
          </button>

          <button 
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="bg-red-500 p-2 rounded-md text-white"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
