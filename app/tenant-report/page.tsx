"use client";

import { tenants } from "@/Mock/tenants";
import { Tenant } from "@/Types/tenant";
import FavoriteButton from "@/Components/common/FavoriteButton";

export default function TenantReportPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Tenant Report</h1>
      <p className="text-gray-500 mb-6">
        Analytics and tenant growth overview.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tenants.map((tenant: Tenant) => (
          <div
            key={tenant.id}
            className="border rounded-lg p-4 flex justify-between items-center hover:shadow-md hover:bg-gray-200 transition-shadow cursor-pointer"
          >
            <div>
              <h2 className="font-semibold">{tenant.name}</h2>
              <p className="text-sm text-gray-500">
                {tenant.adminEmail}
              </p>

              <div className="mt-2 text-sm">
                <p>Users: {tenant.usersCount}</p>
                <p>Storage: {tenant.storageUsed} GB</p>
                <p>Plan: {tenant.plan}</p>
              </div>
            </div>

          



            <FavoriteButton tenant={tenant} />
          </div>
        ))}
      </div>
    </div>
  );
}
