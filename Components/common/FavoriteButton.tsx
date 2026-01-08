"use client";

import { Heart } from "lucide-react";
import { Tenant } from "@/Types/tenant";
import { useFavoritesStore } from "@/store/useFavorites";

const FavoriteButton = ({ tenant }: { tenant: Tenant }) => {
  const { toggleTenant, isFavorite } = useFavoritesStore();

  const active = isFavorite(tenant.id);

  return (
    <button
      type="button"
      title={active ? "Remove from favorites" : "Add to favorites"}
      onClick={() => toggleTenant(tenant)}
    >
      <Heart
        size={18}
        className={`transition ${
          active ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </button>
  );
};

export default FavoriteButton;
