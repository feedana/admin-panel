import React from "react";

const SubscriptionsPage = () => {
  return (
    <div className="p-8">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Subscriptions</h1>
        <p className="text-sm text-gray-500">
          Active tenant licenses.
        </p>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="pb-3 font-medium">ORGANIZATION</th>
              <th className="pb-3 font-medium">PACKAGE</th>
              <th className="pb-3 font-medium">START DATE</th>
              <th className="pb-3 font-medium">RENEWAL</th>
              <th className="pb-3 font-medium">AMOUNT</th>
              <th className="pb-3 font-medium">STATUS</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-sm border-b last:border-none">
              <td className="py-4 font-medium">ACME Corp</td>
              <td className="py-4">Enterprise</td>
              <td className="py-4">2025-01-01</td>
              <td className="py-4">2026-01-01</td>
              <td className="py-4">₼1990</td>
              <td className="py-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
