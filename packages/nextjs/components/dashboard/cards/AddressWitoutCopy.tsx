import { Address } from "~~/components/scaffold-eth";

export const AddressWithoutCopy = ({ ...props }) => {
  return (
    <div className="[&_.text-sky-600]:hidden">
      <Address {...props} />
    </div>
  );
};
