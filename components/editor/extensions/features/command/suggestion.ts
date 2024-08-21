import tippy, {
    type GetReferenceClientRect,
    type Instance,
    type Props,
} from "tippy.js";
import { Editor, ReactRenderer } from "@tiptap/react";

import Commands from "./commands";
import { RefObject } from "react";

export default {
    items: ({ query }: { query: string }) => {
        return [
            {
                title: "Big title",
                command: ({ editor, range }: { editor: any; range: any }) => {
                    editor.chain().focus().setHeading({ level: 1 }).run();
                },
            },
            {
                title: "Medium title",
                command: ({ editor, range }: { editor: any; range: any }) => {
                    editor.chain().focus().setHeading({ level: 2 }).run();
                },
            },
            {
                title: "Small title",
                command: ({ editor, range }: { editor: any; range: any }) => {
                    editor.chain().focus().setHeading({ level: 3 }).run();
                },
            },
            {
                title: "Bulleted list",
                command: ({ editor, range }: { editor: any; range: any }) => {
                    editor.chain().focus().toggleBulletList().run();
                },
            },
            {
                title: "Code block",
                command: ({ editor, range }: { editor: any; range: any }) => {
                    editor.chain().focus().setCodeBlock().run();
                },
            },
        ].filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
    },

    render: (elementRef?: RefObject<Element>) => {
        let component: ReactRenderer | null = null;
        let popup: Instance<Props>[] | null = null;

        return {
            onStart: (props: { editor: Editor; clientRect: DOMRect }) => {
                component = new ReactRenderer(Commands, {
                    props,
                    editor: props.editor,
                });

                const { selection } = props.editor.state;

                const parentNode = selection.$from.node(selection.$from.depth);
                const blockType = parentNode.type.name;

                if (blockType === "codeblock") {
                    return false;
                }

                // @ts-ignore
                popup = tippy("body", {
                    getReferenceClientRect: props.clientRect,
                    appendTo:
                        () => (elementRef ? elementRef.current : document.body),
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: "manual",
                    placement: "bottom-start",
                    hideOnClick: true,
                });
            },

            onUpdate(
                props: { editor: Editor; clientRect: GetReferenceClientRect },
            ) {
                component?.updateProps(props);

                if (!props.clientRect) {
                    return;
                }

                popup?.[0]?.setProps({
                    getReferenceClientRect: props.clientRect,
                });
            },

            onKeyDown(props: { event: KeyboardEvent }) {
                if (props.event.key === "Escape") {
                    popup?.[0]?.hide();

                    return true;
                }

                // @ts-ignore
                return component?.ref?.onKeyDown(props);
            },

            onExit() {
                popup?.[0]?.destroy();
                component?.destroy();
            },
        };
    },
};
