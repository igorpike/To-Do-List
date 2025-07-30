import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function TaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const currentTask = storedTasks.find(t => t.id === parseInt(id));
    setTask(currentTask);
  }, [id]);

  if (!task) {
    return (
      <div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
        <div className="bg-slate-300 p-6 rounded-md shadow-md w-[400px]">
          <h2 className="text-2xl font-bold mb-2">Tarefa não encontrada</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => navigate("/")}
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
      <div className="bg-slate-300 p-6 rounded-md shadow-md w-[400px]">
        <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
        <p className="mb-4">{task.description}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

export default TaskPage;
