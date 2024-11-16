import { PlusIcon } from "@heroicons/react/24/outline";

interface TokensCardProps {
  tokens: unknown[]; // TODO: Define proper data type
}

export const TokensCard = ({ tokens }: TokensCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-4">
        {tokens.length > 0 ? (
          <div className="flex flex-col gap-3">
            {/* TODO: Implement token list display */}
            <button className="btn btn-neutral btn-sm gap-2">
              <PlusIcon className="h-4 w-4" />
              Add Token
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4 text-base-content/70">
            <div className="text-3xl">😕</div>
            <h3 className="text-lg font-semibold">No tokens to show</h3>
            <p className="text-sm">Looks like this account is missing some tokens.</p>
          </div>
        )}
      </div>
    </div>
  );
};
