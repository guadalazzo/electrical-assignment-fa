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
      className="bg-salmon border border-salmon-dark text-red px-4 py-3 rounded relative mt-4"
      role="alert"
    >
      <strong className="font-bold">{title}</strong>
      <span className="block sm:inline">{subtitle}</span>
    </div>
  );
};
export default ErrorLabel;
