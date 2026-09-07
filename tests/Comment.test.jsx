import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";

describe("Comment page", () => {
  it("renders a comment with username and timestamp", async () => {
    // const router = createMemoryRouter(routes, {
    //   initialEntries: ["/posts/1/comments/1"],
    // });
    // render(<RouterProvider router={router} />);
    // const post = await screen.findByText("Its the first post");
    // const firstComment = await screen.findByText("comment");
    // const authorUsername = await screen.findByText("Julek");
    // const secondAuthor = await screen.findByText("Test");
    // expect(post).toBeInTheDocument();
    // expect(firstComment).toBeInTheDocument();
    // expect(authorUsername).toBeInTheDocument();
    // expect(secondAuthor).toBeInTheDocument();
  });
});
