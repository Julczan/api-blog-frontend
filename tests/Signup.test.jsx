import { describe, it, expect } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";
import { render, screen } from "@testing-library/react";

describe("Signup", () => {
  it("renders signup form", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/signup"],
    });
    render(<RouterProvider router={router} />);

    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  // it("displays errors when signup fails", async () => {
  //   const router = createMemoryRouter(routes, {
  //     initialEntries: ["/signup"],
  //   });
  //   render(<RouterProvider router={router} />);
  //   const usernameError = await screen.findByText("Username already exists");
  //   const passwordError = await screen.findByText("Passwords do not match!");
  //   expect(usernameError).toBeInTheDocument();
  //   expect(passwordError).toBeInTheDocument();
  // });
});
