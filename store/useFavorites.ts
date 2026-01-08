"use client";

import { create } from "zustand";
import { Tenant } from "@/Types/tenant";

interface FavoritesState {
  tenants: Tenant[];
  toggleTenant: (tenant: Tenant) => any;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  tenants: [],

  toggleTenant: (tenant) =>
    set((state) => {
      const exists = state.tenants.find((t) => t.id === tenant.id);
      return {
        tenants: exists
          ? state.tenants.filter((t) => t.id !== tenant.id)
          : [...state.tenants, tenant],
      };
    }),

  isFavorite: (id) => {
    return get().tenants.some((t) => t.id === id);
  },
}));
