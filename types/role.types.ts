import { Database } from "./database.types";
import { DatabaseProfile } from "./profiles.types";

export type DatabaseRole = Database["public"]["Tables"]["roles"]["Row"] & {};

export interface DatabaseProfileRoles extends Omit<DatabaseProfile, "role"> {
    role: DatabaseRole | null;
}
