"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dataTestid?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ children, dataTestid, onClick }) => {
  return (
    <button
      data-testid={dataTestid}
      onClick={onClick}
      className="w-188 bg-grey-100 border-3 border-grey-border hover:border-dark-grey font-medium py-13 px-18 rounded-[25px] text-grey-400 hover:text-dark-grey mt-40"
    >
      {children}
    </button>
  );
};
export default Button;
