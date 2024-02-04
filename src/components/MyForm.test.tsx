import MyForm from "./MyForm";
import { render, screen, within } from "../utils/testUtils";
import { faker } from "@faker-js/faker";
import { userEvent } from "@testing-library/user-event";

describe("<MyForm />", () => {
  it("renders the page title", () => {
    const titleValue = faker.lorem.words();
    render(<MyForm />, { title: titleValue });
    expect(
      screen.getByRole("heading", { name: titleValue }),
    ).toBeInTheDocument();
  });

  it("searches for a service", async () => {
    render(<MyForm />);
    await userEvent.type(
      screen.getByRole("textbox", { name: /service name/i }),
      "200",
    );
    await userEvent.click(screen.getByRole("button", { name: /search/i }));
    const resultSectionElement = await screen.findByRole("region", {
      name: /result/i,
    });
    expect(
      within(resultSectionElement).getByRole("heading", { name: /test/i }),
    ).toBeInTheDocument();
    expect(
      within(resultSectionElement).getByText(/lore ipsum/i),
    ).toBeInTheDocument();
  });

  it("displays an error message if the service is not found", async () => {
    render(<MyForm />);
    await userEvent.type(
      screen.getByRole("textbox", { name: /service name/i }),
      "404",
    );
    await userEvent.click(screen.getByRole("button", { name: /search/i }));
    expect(
      within(await screen.findByRole("alert")).getByText(/service not found/i),
    ).toBeInTheDocument();
  });
});
