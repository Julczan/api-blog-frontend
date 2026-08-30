import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";

window.fetch = vi.fn(() => {
  const postData = {
    id: 1,
    title: "first post",
    text: "Its the first post",
    createdAt: "2026-08-27T19:13:28.303Z",
    updatedAt: "2026-08-27T19:13:28.303Z",
    authorId: 1,
    comments: [{ id: 1, text: "comment" }],
  };
  return Promise.resolve({
    json: () => Promise.resolve(postData),
  });
});

describe("Post page", () => {
  it("renders a single post with comments", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/posts/1"],
    });
    render(<RouterProvider router={router} />);

    const post = await screen.findByText("Its the first post");
    const firstComment = await screen.findByText("comment");

    screen.debug();

    expect(post).toBeInTheDocument();
    expect(firstComment).toBeInTheDocument();
  });
});
