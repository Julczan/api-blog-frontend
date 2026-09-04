import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";

describe("App", () => {
  it("renders multiple posts", async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const firstPost = await screen.findByText("Its the first post");
    const secondPost = await screen.findByText("Its the second post");

    expect(firstPost).toBeInTheDocument();
    expect(secondPost).toBeInTheDocument();
  });

  it("renders a navbar where user can sign up od login", async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const login = await screen.findByText(/Login/i);

    expect(login).toBeInTheDocument();
  });
});
