export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      notes: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          emoji: string | null
          icon: string | null
          id: number
          title: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          emoji?: string | null
          icon?: string | null
          id?: number
          title?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          emoji?: string | null
          icon?: string | null
          id?: number
          title?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          handle: string
          user_id: string
          visible: boolean
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          handle: string
          user_id?: string
          visible?: boolean
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          handle?: string
          user_id?: string
          visible?: boolean
        }
        Relationships: []
      }
      sources: {
        Row: {
          content: Json | null
          created_at: string
          id: number
          last_edited_at: string
          last_edited_by: string | null
          note_id: number | null
          source_ref: number | null
          version_note: string | null
        }
        Insert: {
          content?: Json | null
          created_at?: string
          id?: number
          last_edited_at?: string
          last_edited_by?: string | null
          note_id?: number | null
          source_ref?: number | null
          version_note?: string | null
        }
        Update: {
          content?: Json | null
          created_at?: string
          id?: number
          last_edited_at?: string
          last_edited_by?: string | null
          note_id?: number | null
          source_ref?: number | null
          version_note?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sources_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sources_source_ref_fkey"
            columns: ["source_ref"]
            isOneToOne: false
            referencedRelation: "sources"
            referencedColumns: ["id"]
          },
        ]
      }
      user_notes: {
        Row: {
          created_at: string
          id: number
          note_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          note_id: number
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          note_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_notes_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
