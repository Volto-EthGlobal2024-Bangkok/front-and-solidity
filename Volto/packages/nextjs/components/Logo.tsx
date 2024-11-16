import { clsx } from "./utils";

export const Logo = ({ className, size = "lg" }: { className?: string; size?: "lg" | "sm" }) => {
  return (
    <svg
      className={clsx(className)}
      xmlns="http://www.w3.org/2000/svg"
      width={size === "sm" ? "38" : "200"}
      height={size === "sm" ? "38" : "200"}
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      fillOpacity="0.8"
      viewBox="0 0 2480 3507.43"
    >
      <path
        fill="transparent"
        stroke="#FEFEFE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="2.36"
        d="M-.84 513.78h2480v2480H-.84z"
      />
      <path
        fill="#729B25"
        d="m848.33 893.94 212.49-212.49c98.09-98.09 258.59-98.09 356.67 0l180.73 180.72 660.88 660.89 178.34 178.33-178.34 178.34-841.61 841.61-178.33 178.33-178.34-178.33-841.61-841.61-178.33-178.34 807.45-807.45z"
      />
      <path
        fill="#2D6409"
        fillOpacity=".812"
        d="M1354.02 2784.81 2417.73 1721.1l19.71-19.71v-1024c0-27.73-15.78-51.41-41.37-62.09-25.58-10.68-53.51-5.25-73.23 14.25l-375.89 371.78-707.79 700.06v1198.28l114.86-114.86z"
      />
    </svg>
  );
};
