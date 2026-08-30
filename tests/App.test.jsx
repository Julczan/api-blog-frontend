import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";

window.fetch = vi.fn(() => {
  const postsData = [
    {
      id: 1,
      title: "first post",
      text: "Its the first post",
      createdAt: "2026-08-27T19:13:28.303Z",
      updatedAt: "2026-08-27T19:13:28.303Z",
      authorId: 1,
    },
    {
      id: 2,
      title: "second post",
      text: "Its the second post",
      createdAt: "2026-08-27T19:13:28.303Z",
      updatedAt: "2026-08-27T19:13:28.303Z",
      authorId: 2,
    },
  ];
  return Promise.resolve({
    json: () => Promise.resolve(postsData),
  });
});

describe("App", () => {
  it("renders multiple posts", async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);

    const postTitle = await screen.findByText("Its the first post");

    screen.debug();

    expect(postTitle).toBeInTheDocument();
  });
});
