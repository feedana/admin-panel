
"use client";

import { useFavoritesStore } from "@/store/useFavorites";

export default function FavoritesPage() {
  const tenants = useFavoritesStore((state) => state.tenants);

  if (tenants.length === 0) {
    return (
      <div className="p-8 text-gray-500">
        No favorite tenants yet.
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-6">Favorite Tenants</h1>

      <div className="grid grid-cols-2 gap-4">
        {tenants.map((tenant) => (
          <div
            key={tenant.id}
            className="bg-white p-4 rounded-lg border"
          >
            <h2 className="font-semibold">{tenant.name}</h2>
            <p className="text-sm text-gray-500">
              {tenant.adminEmail}
            </p>
            <p className="text-sm mt-1">
              {tenant.plan} • {tenant.usersCount} users
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
