const Cell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center bg-white w-20 h-20 rounded text-center text-[57px]">
      {children}
    </div>
  );
};
export default Cell;
