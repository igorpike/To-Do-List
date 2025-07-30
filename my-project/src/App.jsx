import { useState, useEffect } from "react";
import AddTask from "./assets/components/AddTask";
import Tasks from "./assets/components/Tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "Tarefa 1", description: "Descrição da tarefa 1", iscompleted: false },
      { id: 2, title: "Tarefa 2", description: "Descrição da tarefa 2", iscompleted: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, iscompleted: !task.iscompleted } : task
    ));
  }

  function handleAddTask(title, description) {
    const newTask = {
      id: Date.now(), 
      title,
      description,
      iscompleted: false
    };
    setTasks([...tasks, newTask]);
  }

  function onDeleteTaskClick(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold text-center">Gerenciador de tarefas</h1>
        <AddTask onAddTask={handleAddTask}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
