import { describe, it, expect, vi } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";
import { render, screen } from "@testing-library/react";

window.fetch = vi.fn(() => {
  const postsData = [];

  return Promise.resolve({
    json: () => Promise.resolve(postsData),
  });
});

describe("Login", () => {
  it("renders signup form", () => {
    // const router = createMemoryRouter(routes, {
    //   initialEntries: ["/login"],
    // });
    // render(<RouterProvider router={router} />);
    // const form = screen.getByRole("form");
    // expect(form).toBeInTheDocument();
  });
  it("displays errors on failed login", () => {});
});
