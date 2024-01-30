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
      className="w-188 bg-grey-100 border-[3px] border-grey-border hover:border-[#374151] font-medium py-[13px] px-[20px] rounded-[25px] text-[#9CA3AF] hover:text-[#374151] mt-[40px]"
    >
      {children}
    </button>
  );
};
export default Button;
