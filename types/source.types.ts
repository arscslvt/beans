import {Database} from "@/types/database.types";
import {OutputData} from "@editorjs/editorjs";

export type DatabaseSource = Database["public"]["Tables"]["sources"]["Row"] & {
    content: any;
    editor: OutputData;
}