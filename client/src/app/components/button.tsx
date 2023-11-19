"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="w-[188px] bg-[#F3F4F6] border-[3px] border-[#D2D5DA] hover:border-[#374151] font-medium py-[13px] px-[20px] rounded-[25px] text-[#9CA3AF] hover:text-[#374151] mt-[40px]">
      {children}
    </button>
  );
};
export default Button;
