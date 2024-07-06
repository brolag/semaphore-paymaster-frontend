import cx from "classnames";

interface ButtonProps {
  label: string;
  isLoading: boolean;
  handleRegister: () => void;
  color: "blue" | "purple" | "green" | "red" | "pink";
}

export default function Button({
    color,
  label,
  isLoading,
  handleRegister,
}: ButtonProps) {

    const className = cx({
        "bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500": color === "blue",
        "bg-purple-500 text-white hover:bg-purple-700 focus:ring-purple-500": color === "purple",
        "bg-green-500 text-white hover:bg-green-700 focus:ring-green-500": color === "green",
        "bg-red-500 text-white hover:bg-red-700 focus:ring-red-500": color === "red",
        "bg-pink-500 text-white hover:bg-pink-700 focus:ring-pink-500": color === "pink",
    }, 
    "flex justify-center items-center px-4 py-2 rounded-lg focus:outline-none focus:ring-2  focus:ring-opacity-50 w-full"
    )

  return (
    <button
      onClick={handleRegister}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? <div className="spinner"></div> : label}
    </button>
  );
}