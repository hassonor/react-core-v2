import React from 'react';
import NewTask from './NewTask';

interface TasksProps {
    projectId: number;
}

const Tasks: React.FC<TasksProps> = ({projectId}) => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask projectId={projectId}/>
            <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
            <ul>
            </ul>
        </section>
    );
};

export default Tasks;
