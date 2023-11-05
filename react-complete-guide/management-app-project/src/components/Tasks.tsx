import React from 'react';
import NewTask from './NewTask';
import { Task } from "../App";

interface TasksProps {
    onDeleteTask: (taskId: number) => void;
    onAddTask: (text: string) => void;
    tasks: Task[];
}

const Tasks: React.FC<TasksProps> = ({tasks, onDeleteTask, onAddTask}) => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddTask={onAddTask}/>
            {tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
            {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map(task => {
                    return <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button onClick={() => onDeleteTask(task.id)}
                                className="text-stone-700 hover:text-red-500">Clear
                        </button>
                    </li>
                })}
            </ul>}
        </section>
    );
};

export default Tasks;
