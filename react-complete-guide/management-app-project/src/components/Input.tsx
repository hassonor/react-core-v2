import React, { forwardRef, TextareaHTMLAttributes, InputHTMLAttributes } from "react";

type CommonProps = {
    label: string;
};

type TextAreaProps = CommonProps &
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
    textArea: true;
};

type InputProps = CommonProps &
    InputHTMLAttributes<HTMLInputElement> & {
    textArea?: false;
};

const Input = forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    InputProps | TextAreaProps
>(({label, textArea, ...props}, ref) => {
    const classes =
        "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textArea ? (
                <textarea
                    ref={ref as React.Ref<HTMLTextAreaElement>}
                    className={classes}
                    {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    ref={ref as React.Ref<HTMLInputElement>}
                    className={classes}
                    {...(props as InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
        </p>
    );
});

export default Input;
