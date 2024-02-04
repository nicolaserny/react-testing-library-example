import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { requestHandlers } from "../src/mocks/requestHandlers";

const server = setupServer(...requestHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
