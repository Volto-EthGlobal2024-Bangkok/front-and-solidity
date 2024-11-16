import { PaperAirplaneIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Address, Balance } from "~~/components/scaffold-eth";

interface AccountCardProps {
  address: string;
}

export const AccountCard = ({ address }: AccountCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl max-w-[500px]">
      <div className="card-body p-4">
        <div className="flex flex-col gap-3">
          <Balance address={address} />
          <Address address={address} format="long" />
          <div className="flex gap-2 w-full">
            <button className="btn btn-neutral btn-sm gap-2 flex-1">
              <PlusIcon className="h-4 w-4" />
              Add Account
            </button>
            <button className="btn btn-neutral btn-sm gap-2 flex-1">
              <PaperAirplaneIcon className="h-4 w-4" />
              Send To
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
