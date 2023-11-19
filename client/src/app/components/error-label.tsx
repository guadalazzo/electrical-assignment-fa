"use client";
const ErrorLabel = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div
      className="bg-[#fed7d7] border border-[#fc8181] text-[#c53030] px-4 py-3 rounded relative mt-4"
      role="alert"
    >
      <strong className="font-bold">{title}</strong>
      <span className="block sm:inline">{subtitle}</span>
    </div>
  );
};
export default ErrorLabel;
