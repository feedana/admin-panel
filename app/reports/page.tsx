export default function ReportsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Tenant Growth Report</h1>
        <p className="text-sm text-gray-500">
          General overview of organizations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border shadow-sm p-6 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Total Active Tenants
          </p>
          <p className="text-4xl font-bold">12</p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6 text-center">
          <p className="text-sm text-gray-500 mb-2">
            New (This Month)
          </p>
          <p className="text-4xl font-bold text-green-500">+2</p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Total Storage Used
          </p>
          <p className="text-4xl font-bold text-blue-600">
            4.2 TB
          </p>
        </div>
      </div>
    </div>
  );
}
