import {Database} from "@/types/database.types";

export type DatabaseProfile = Partial<Database["public"]["Tables"]["profiles"]["Row"]> & {
}