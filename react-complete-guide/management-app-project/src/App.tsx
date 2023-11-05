import React, { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";


export interface Project {
    id: number;
    title: string;
    description: string;
    dueDate: string;
}

interface Task {
    // define the properties for a task
}

// Define the shape of the state that will be used within the App component
interface ProjectState {
    selectedProjectId: number | null | undefined;
    projects: Project[];
    tasks: Task[];
}

// Define the shape of the new project data that will be added
interface NewProjectData {
    // properties that are needed to create a new project, excluding the 'id'
}

function App() {
    const [projectState, setProjectsState] = useState<ProjectState>({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });

    // Define the functions with parameter types and return types if necessary

    function handleSelectProject(projectId: number): void {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProjectId: projectId
        }));
    }

    function handleStartAddProject(): void {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProjectId: null
        }));
    }

    function handleCancelAddProject(): void {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProjectId: undefined
        }));
    }

    function handleAddProject(projectData: NewProjectData): void {
        setProjectsState((prevState) => {
            const newProject = {
                ...projectData,
                id: Math.random() // Normally you would want a more robust method to generate IDs
            };
            return {
                ...prevState,
                projects: [...prevState.projects, newProject as Project],
                selectedProjectId: undefined
            };
        });
    }

    function handleDeleteProject(): void {
        setProjectsState((prevState) => ({
            ...prevState,
            projects: prevState.projects.filter(
                (project) => project.id !== prevState.selectedProjectId
            ),
            selectedProjectId: undefined
        }));
    }

    // Identify the selected project
    const selectedProject = projectState.selectedProjectId
        ? projectState.projects.find((project) => project.id === projectState.selectedProjectId)
        : undefined;

    // Determine the content to be displayed based on the selected project ID
    let content: React.ReactNode;

    if (projectState.selectedProjectId === null) {
        content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject}/>;
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
    } else {
        content = <SelectedProject project={selectedProject}
                                   onDelete={handleDeleteProject}/>;
    }


    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar
                onStartAddProject={handleStartAddProject}
                projects={projectState.projects}
                onSelectProject={handleSelectProject}
            />
            {content}
        </main>
    );
}

export default App;
