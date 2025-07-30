import { SendHorizontal } from 'lucide-react';
import { useState } from 'react';

function AddTask({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim()) return; 
        onAddTask(title, description);
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto space-y-4 p-7 rounded-md bg-slate-300 shadow-md flex flex-col m-5">
            <h2 className="text-2xl font-bold text-center">Adicionar tarefas</h2>
            <input
                type="text"
                placeholder="Digite o Título"
                className="border rounded-md border-slate-300 text-left outline-slate-400 py-2 px-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex justify-between gap-2">
                <input
                    type="text"
                    placeholder="Digite a Descrição"
                    className="border rounded-md text-left border-slate-300 outline-slate-400 flex-1 py-2 px-4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    <SendHorizontal />
                </button>
            </div>
        </form>
    );
}

export default AddTask;
