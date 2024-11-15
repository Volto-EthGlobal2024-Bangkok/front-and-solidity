import { Address } from "~~/components/scaffold-eth";

interface AccountCardProps {
  address: string;
  balance: string;
}

export const AccountCard = ({ address, balance }: AccountCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Address address={address} format="long" />
            <span className="text-lg font-bold">{balance}</span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary flex-1">Add Account</button>
            <button className="btn btn-secondary flex-1">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
