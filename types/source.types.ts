import { Database } from "@/types/database.types";

export type DatabaseSource = Database["public"]["Tables"]["sources"]["Row"] & {
    content: any;
};
