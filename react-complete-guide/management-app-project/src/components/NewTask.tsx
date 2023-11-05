import React, { useState } from "react";

interface NewTaskProps {
    onAddTask: (text: string) => void;
}

const NewTask: React.FC<NewTaskProps> = ({onAddTask}) => {
    const [enteredTask, setEnteredTask] = useState<string>('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEnteredTask(e.target.value);
    }

    function handleAddTask() {
        if (enteredTask.trim() === "") {
            return;
        }
        onAddTask(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text"
                   onChange={handleChange}
                   value={enteredTask}
                   className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={handleAddTask} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    );
};

export default NewTask;
