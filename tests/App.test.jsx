import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("App", () => {
  it("renders multiple posts", async () => {
    const router = createMemoryRouter(routes);
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );

    const firstPost = await screen.findByText("first post");
    const secondPost = await screen.findByText("second post");

    expect(firstPost).toBeInTheDocument();
    expect(secondPost).toBeInTheDocument();
  });

  it("renders a navbar where user can sign up or login", async () => {
    const router = createMemoryRouter(routes);
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    );
    const login = await screen.findByText(/Login/i);
    expect(login).toBeInTheDocument();
  });
});
