import { DarkModeToggle } from "~~/components/settings/DarkModeToggle";

export default function PreferencesPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Preferences</h1>
      </div>

      <div className="space-y-4">
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title text-lg">Theme Settings</h2>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
