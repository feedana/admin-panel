"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useFavoritesStore } from "@/store/useFavorites";

const FavoritesIcon = () => {
  const count = useFavoritesStore((state) => state.tenants.length);

  return (
    <Link href="/favorites" className="relative">
      <Heart
        size={22}
        className="text-gray-600 hover:text-red-500 transition"
      />

      {count > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
};

export default FavoritesIcon;
