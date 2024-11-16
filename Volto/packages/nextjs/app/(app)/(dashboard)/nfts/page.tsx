import { Squares2X2Icon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";

const DashboardNFTs: NextPage = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center gap-4">
      <Squares2X2Icon className="w-16 h-16 text-base-content/20" />
      <div className="text-center">
        <h3 className="font-bold text-lg">No NFTs to show</h3>
        <p className="text-base-content/60">This account has not yet added any NFTs</p>
      </div>
    </div>
  );
};

export default DashboardNFTs;
