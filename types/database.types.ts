export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      features: {
        Row: {
          created_at: string | null
          description: string | null
          display_name: string | null
          feature_name: string
          id: string
          note_id: number | null
          version: string
          visibility: Database["public"]["Enums"]["feature_visibility"]
          whats_new: Json[] | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_name?: string | null
          feature_name: string
          id?: string
          note_id?: number | null
          version: string
          visibility?: Database["public"]["Enums"]["feature_visibility"]
          whats_new?: Json[] | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_name?: string | null
          feature_name?: string
          id?: string
          note_id?: number | null
          version?: string
          visibility?: Database["public"]["Enums"]["feature_visibility"]
          whats_new?: Json[] | null
        }
        Relationships: [
          {
            foreignKeyName: "whats-new_duplicate_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          emoji: string | null
          icon: string | null
          id: number
          title: string
          visibility: Database["public"]["Enums"]["note_visibility"]
        }
        Insert: {
          created_at?: string
          created_by?: string
          description?: string | null
          emoji?: string | null
          icon?: string | null
          id?: number
          title?: string
          visibility?: Database["public"]["Enums"]["note_visibility"]
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          emoji?: string | null
          icon?: string | null
          id?: number
          title?: string
          visibility?: Database["public"]["Enums"]["note_visibility"]
        }
        Relationships: [
          {
            foreignKeyName: "notes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar: string | null
          created_at: string
          email: string | null
          full_name: string | null
          handle: string
          role: string
          session_update: string | null
          user_id: string
          visible: boolean
        }
        Insert: {
          avatar?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          handle: string
          role?: string
          session_update?: string | null
          user_id?: string
          visible?: boolean
        }
        Update: {
          avatar?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          handle?: string
          role?: string
          session_update?: string | null
          user_id?: string
          visible?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "profiles_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_session_update_fkey"
            columns: ["session_update"]
            isOneToOne: false
            referencedRelation: "features"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          description: string | null
          display_name: string
          id: string
        }
        Insert: {
          description?: string | null
          display_name: string
          id?: string
        }
        Update: {
          description?: string | null
          display_name?: string
          id?: string
        }
        Relationships: []
      }
      shared_notes: {
        Row: {
          by: string | null
          created_at: string
          note_id: number
          user_id: string
        }
        Insert: {
          by?: string | null
          created_at?: string
          note_id: number
          user_id?: string
        }
        Update: {
          by?: string | null
          created_at?: string
          note_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shared_notes_by_fkey"
            columns: ["by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "shared_notes_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shared_notes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
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
            foreignKeyName: "sources_last_edited_by_fkey"
            columns: ["last_edited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
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
      user_features: {
        Row: {
          created_at: string
          enabled: boolean
          feature_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean
          feature_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          enabled?: boolean
          feature_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_features_feature_fkey"
            columns: ["feature_id"]
            isOneToOne: false
            referencedRelation: "features"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_features_user_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_profile_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      feature_visibility:
        | "public"
        | "public-test"
        | "unpublished-test"
        | "unpublished"
      invitation_status: "pending" | "refused" | "accepted"
      note_visibility: "public" | "private"
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

