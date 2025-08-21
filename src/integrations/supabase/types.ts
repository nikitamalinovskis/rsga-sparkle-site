export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          password_hash: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          password_hash: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          password_hash?: string
          updated_at?: string
        }
        Relationships: []
      }
      blog_categories: {
        Row: {
          created_at: string
          id: string
          language: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          language: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          language?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string | null
          body: string
          canonical_url: string | null
          category_id: string | null
          cover_image: string | null
          cover_image_alt: string | null
          created_at: string
          excerpt: string | null
          featured: boolean | null
          group_id: string | null
          id: string
          language: string
          meta_description: string | null
          meta_title: string | null
          newsletter: boolean | null
          og_description: string | null
          og_image: string | null
          og_title: string | null
          pinned: boolean | null
          published_at: string
          slug: string
          status: string | null
          tags: string[] | null
          title: string
          updated_at: string
          views: number | null
        }
        Insert: {
          author?: string | null
          body: string
          canonical_url?: string | null
          category_id?: string | null
          cover_image?: string | null
          cover_image_alt?: string | null
          created_at?: string
          excerpt?: string | null
          featured?: boolean | null
          group_id?: string | null
          id?: string
          language: string
          meta_description?: string | null
          meta_title?: string | null
          newsletter?: boolean | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          pinned?: boolean | null
          published_at?: string
          slug: string
          status?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
          views?: number | null
        }
        Update: {
          author?: string | null
          body?: string
          canonical_url?: string | null
          category_id?: string | null
          cover_image?: string | null
          cover_image_alt?: string | null
          created_at?: string
          excerpt?: string | null
          featured?: boolean | null
          group_id?: string | null
          id?: string
          language?: string
          meta_description?: string | null
          meta_title?: string | null
          newsletter?: boolean | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          pinned?: boolean | null
          published_at?: string
          slug?: string
          status?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          company: string | null
          consent: boolean | null
          created_at: string
          email: string
          id: string
          language: string
          message: string
          name: string
          notes: string | null
          phone: string | null
          source_page: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          company?: string | null
          consent?: boolean | null
          created_at?: string
          email: string
          id?: string
          language: string
          message: string
          name: string
          notes?: string | null
          phone?: string | null
          source_page?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          company?: string | null
          consent?: boolean | null
          created_at?: string
          email?: string
          id?: string
          language?: string
          message?: string
          name?: string
          notes?: string | null
          phone?: string | null
          source_page?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      media_library: {
        Row: {
          alt_text_en: string | null
          alt_text_lv: string | null
          alt_text_ru: string | null
          created_at: string
          description: string | null
          file_path: string
          file_size: number | null
          file_type: string | null
          filename: string
          folder: string | null
          id: string
          mime_type: string | null
          original_name: string
          thumbnail_path: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          alt_text_en?: string | null
          alt_text_lv?: string | null
          alt_text_ru?: string | null
          created_at?: string
          description?: string | null
          file_path: string
          file_size?: number | null
          file_type?: string | null
          filename: string
          folder?: string | null
          id?: string
          mime_type?: string | null
          original_name: string
          thumbnail_path?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          alt_text_en?: string | null
          alt_text_lv?: string | null
          alt_text_ru?: string | null
          created_at?: string
          description?: string | null
          file_path?: string
          file_size?: number | null
          file_type?: string | null
          filename?: string
          folder?: string | null
          id?: string
          mime_type?: string | null
          original_name?: string
          thumbnail_path?: string | null
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      page_analytics: {
        Row: {
          created_at: string
          date: string
          id: string
          language: string
          page_path: string
          unique_views: number | null
          views: number | null
        }
        Insert: {
          created_at?: string
          date?: string
          id?: string
          language: string
          page_path: string
          unique_views?: number | null
          views?: number | null
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          language?: string
          page_path?: string
          unique_views?: number | null
          views?: number | null
        }
        Relationships: []
      }
      pages: {
        Row: {
          body: Json | null
          breadcrumb_label: string | null
          canonical_url: string | null
          created_at: string
          hero_background: string | null
          hero_cta_label: string | null
          hero_cta_url: string | null
          hero_headline: string | null
          hero_subheadline: string | null
          id: string
          language: string
          meta_description: string | null
          meta_title: string | null
          noindex: boolean | null
          og_description: string | null
          og_image: string | null
          og_title: string | null
          scheduled_at: string | null
          schema_type: string | null
          sidebar: Json | null
          sitemap_changefreq: string | null
          sitemap_enabled: boolean | null
          sitemap_priority: number | null
          slug: string
          status: string | null
          title: string
          twitter_description: string | null
          twitter_image: string | null
          twitter_title: string | null
          updated_at: string
        }
        Insert: {
          body?: Json | null
          breadcrumb_label?: string | null
          canonical_url?: string | null
          created_at?: string
          hero_background?: string | null
          hero_cta_label?: string | null
          hero_cta_url?: string | null
          hero_headline?: string | null
          hero_subheadline?: string | null
          id?: string
          language: string
          meta_description?: string | null
          meta_title?: string | null
          noindex?: boolean | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          scheduled_at?: string | null
          schema_type?: string | null
          sidebar?: Json | null
          sitemap_changefreq?: string | null
          sitemap_enabled?: boolean | null
          sitemap_priority?: number | null
          slug: string
          status?: string | null
          title: string
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Update: {
          body?: Json | null
          breadcrumb_label?: string | null
          canonical_url?: string | null
          created_at?: string
          hero_background?: string | null
          hero_cta_label?: string | null
          hero_cta_url?: string | null
          hero_headline?: string | null
          hero_subheadline?: string | null
          id?: string
          language?: string
          meta_description?: string | null
          meta_title?: string | null
          noindex?: boolean | null
          og_description?: string | null
          og_image?: string | null
          og_title?: string | null
          scheduled_at?: string | null
          schema_type?: string | null
          sidebar?: Json | null
          sitemap_changefreq?: string | null
          sitemap_enabled?: boolean | null
          sitemap_priority?: number | null
          slug?: string
          status?: string | null
          title?: string
          twitter_description?: string | null
          twitter_image?: string | null
          twitter_title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      redirects: {
        Row: {
          created_at: string
          from_url: string
          id: string
          status_code: number | null
          to_url: string
        }
        Insert: {
          created_at?: string
          from_url: string
          id?: string
          status_code?: number | null
          to_url: string
        }
        Update: {
          created_at?: string
          from_url?: string
          id?: string
          status_code?: number | null
          to_url?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          benefits: Json | null
          created_at: string
          cta_label: string | null
          cta_url: string | null
          description: string | null
          gallery: string[] | null
          header_image: string | null
          icon: string | null
          id: string
          language: string
          meta_description: string | null
          meta_title: string | null
          name: string
          og_image: string | null
          ordering_index: number | null
          service_type: string
          short_description: string | null
          slug: string
          status: string | null
          updated_at: string
        }
        Insert: {
          benefits?: Json | null
          created_at?: string
          cta_label?: string | null
          cta_url?: string | null
          description?: string | null
          gallery?: string[] | null
          header_image?: string | null
          icon?: string | null
          id?: string
          language: string
          meta_description?: string | null
          meta_title?: string | null
          name: string
          og_image?: string | null
          ordering_index?: number | null
          service_type: string
          short_description?: string | null
          slug: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          benefits?: Json | null
          created_at?: string
          cta_label?: string | null
          cta_url?: string | null
          description?: string | null
          gallery?: string[] | null
          header_image?: string | null
          icon?: string | null
          id?: string
          language?: string
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          og_image?: string | null
          ordering_index?: number | null
          service_type?: string
          short_description?: string | null
          slug?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          key: string
          updated_at: string
          value: Json | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          value?: Json | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          value?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
