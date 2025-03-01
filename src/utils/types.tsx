export type UiButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>  & {
    children?: React.ReactNode;
    className?: string; // Позволяет добавлять className
};