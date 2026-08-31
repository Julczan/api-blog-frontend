import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";

const postData = {
  id: 1,
  title: "first post",
  text: "Its the first post",
  createdAt: "2026-08-27T19:13:28.303Z",
  updatedAt: "2026-08-27T19:13:28.303Z",
  authorId: 1,
};

const commentsData = [
  { id: 1, author: { username: "Julek" }, text: "comment" },
  { id: 2, author: { username: "Test" }, text: "Second comment" },
];

describe("Post page", () => {
  it("renders a single post with comments", async () => {
    window.fetch = vi
      .fn()
      .mockResolvedValueOnce({ json: () => Promise.resolve(postData) })
      .mockResolvedValueOnce({ json: () => Promise.resolve(commentsData) });

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
    window.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ message: "Post not found" }),
    });
    const router = createMemoryRouter(routes, {
      initialEntries: ["/posts/5"],
    });
    render(<RouterProvider router={router} />);

    const error = await screen.findByText(/Post not found/i);

    screen.debug();

    expect(error).toBeInTheDocument();
  });
});
