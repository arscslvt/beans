import { NoteContext } from "@/context/notes-context";
import React from "react";

export const useNote = () => React.useContext(NoteContext);
