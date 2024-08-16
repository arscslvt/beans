interface DynamicDialogHandlerProps {
    title: string;
    description: React.ReactNode;
    children: React.ReactNode;

    onConfirm?: {
        action: () => void;
        text: string;
    };
    onCancel?: {
        action: () => void;
        text: string;
    };
}

export type { DynamicDialogHandlerProps };
