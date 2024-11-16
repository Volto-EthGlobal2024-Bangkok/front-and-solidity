import { ClockIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";

const OnHoldTransactions: NextPage = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center gap-4">
      {/* Placeholder for the graph */}
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
        <p className="text-base-content/60">Graph will be here</p>
      </div>
      {/* List of transactions on hold */}
      <div className="text-center mt-4">
        <ClockIcon className="w-16 h-16 text-base-content/20" />
        <h3 className="font-bold text-lg">Transactions on Hold</h3>
        <ul className="text-base-content/60">
          <li>Transaction 1 - Pending</li>
          <li>Transaction 2 - Pending</li>
          <li>Transaction 3 - Pending</li>
          {/* Add more transactions as needed */}
        </ul>
      </div>
    </div>
  );
};

export default OnHoldTransactions;
