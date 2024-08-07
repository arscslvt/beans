import {Database} from "@/types/database.types";
import {DatabaseNote} from "@/types/note.types";

export type DatabaseUserNote = Partial<Database["public"]["Tables"]["user_notes"]["Row"]> & {
    note: DatabaseNote | null;
};