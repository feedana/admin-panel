"use client";

import { tenants } from "@/Mock/tenants";
import FavoriteButton from "@/Components/common/FavoriteButton";

export default function TenantsPage() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-6">Tenants</h1>

      <div className="bg-white rounded-lg border">
        {tenants.map((tenant) => (
          <div
            key={tenant.id}
            className="flex items-center justify-between p-4 border-b "
          >
            <div>
              <h2 className="font-semibold">{tenant.name}</h2>
              <p className="text-sm text-gray-500">
                {tenant.adminEmail} • {tenant.plan}
              </p>
              <p className="text-xs text-gray-400">
                Users: {tenant.usersCount} • Storage: {tenant.storageUsed}
              </p>
            </div>



            <FavoriteButton tenant={tenant} />
          </div>
        ))}
      </div>
    </div>
  );
}
