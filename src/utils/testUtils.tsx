import { RenderOptions, render } from "@testing-library/react";
import React from "react";
import { TitleProvider } from "../providers/TitleProvider";

function customRender(
  ui: React.ReactElement,
  options?: RenderOptions & { title?: string },
) {
  const { title, ...otherOptions } = options || {};
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <TitleProvider value={title || ""}>{children}</TitleProvider>;
  };
  return render(ui, { wrapper: AllTheProviders, ...otherOptions });
}

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };
