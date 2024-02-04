import React from "react";

const titleContext = React.createContext<
  { title: string; setTitle: (value: string) => void } | undefined
>(undefined);
titleContext.displayName = "TitleContext";

export function TitleProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  const [title, setTitle] = React.useState<string>(value);
  return (
    <titleContext.Provider value={{ title, setTitle }}>
      {children}
    </titleContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTitle() {
  const context = React.useContext(titleContext);
  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider");
  }
  return context;
}
