export const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-lg leading-relaxed dark:text-blue-200">{children}</p>
  );
};

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-lg leading-relaxed dark:text-gray-100">{children}</p>
  );
};
