import React, { useRef } from "react";
import Modal from "./Modal";
import Input from "./Input";

interface NewProjectProps {
    onAddProject: (project: { title: string; description: string; dueDate: string }) => void;
    onCancel: () => void;
}

export default function NewProject({onAddProject, onCancel}: NewProjectProps) {
    const dialog = useRef<{ open: () => void }>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const dueDateRef = useRef<HTMLInputElement>(null);

    function handleSave() {
        const enteredTitle = titleRef.current?.value;
        const enteredDescription = descriptionRef.current?.value;
        const enteredDueDate = dueDateRef.current?.value;

        if (!enteredTitle || !enteredDescription || !enteredDueDate) {
            dialog.current?.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={dialog} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                                onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <div>
                        <Input type="text" ref={titleRef} label="Title"/>
                        <Input ref={descriptionRef} label="Description" textArea/>
                        <Input type="date" ref={dueDateRef} label="Due Date"/>
                    </div>
                </div>
            </div>
        </>
    );
}
