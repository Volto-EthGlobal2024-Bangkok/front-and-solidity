import { PlusIcon } from "@heroicons/react/24/outline";

export default function AccountsPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Accounts</h1>
        <button className="btn btn-primary gap-2">
          <PlusIcon className="h-4 w-4" />
          Connect another wallet
        </button>
      </div>

      <div className="space-y-4">
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title text-lg">My accounts</h2>
            {/* Account list content would go here */}
          </div>
        </div>

        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title text-lg">Watching accounts</h2>
            {/* Watching accounts list content would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
