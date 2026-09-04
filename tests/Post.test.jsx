import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";

describe("Post page", () => {
  it("renders a single post with comments", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/posts/1"],
    });
    render(<RouterProvider router={router} />);
    const post = await screen.findByText("Its the first post");
    const firstComment = await screen.findByText("comment");
    const authorUsername = await screen.findByText("Julek");
    const secondAuthor = await screen.findByText("Test");
    expect(post).toBeInTheDocument();
    expect(firstComment).toBeInTheDocument();
    expect(authorUsername).toBeInTheDocument();
    expect(secondAuthor).toBeInTheDocument();
  });

  it("renders an error page when the post is not found", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/posts/3"],
    });
    render(<RouterProvider router={router} />);
    const error = await screen.findByText(/Post not found/i);
    expect(error).toBeInTheDocument();
  });

  it("renders 'no comments yet' message when there are no comments", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/posts/2"],
    });
    render(<RouterProvider router={router} />);

    const post = await screen.findByText("Its the first post");
    const error = await screen.findByText(/No comments yet/i);
    screen.debug();
    expect(post).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });
});
