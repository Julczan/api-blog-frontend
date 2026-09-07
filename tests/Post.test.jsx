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
    expect(post).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  it("renders 'home' button", async () => {
    // const router = createMemoryRouter(routes, {
    //   initialEntries: ["/posts/2"],
    // });
    // render(<RouterProvider router={router} />);
    // const button = await screen.findByRole("button", {name: "Home"});
    // expect(button).toBeInTheDocument();
  });

  it("renders 'leave a comment' section", async () => {
    // const router = createMemoryRouter(routes, {
    //   initialEntries: ["/posts/2"],
    // });
    // render(<RouterProvider router={router} />);
    // const comment = await screen.findByRole("textarea", {name: "Comment"})
    // expect(comment).toBeInTheDocument();
  });

  it("displays error when unauthenticated user tries to comment a post", async () => {
    // const user = userEvent.setup()
    //   const router = createMemoryRouter(routes, {
    //     initialEntries: ["/posts/2"],
    //   });
    //   render(<RouterProvider router={router} />);
    // const commentInput = screen.getByLabelText("Comment");
    //   fireEvent.change(commentInput, { target: { value: "test" } });
    //   const submitBtn = await screen.findByRole("button", {name: "Submit"})
    //   await user.click(button);
    //   const error = await screen.findByText(/Please sign up or login to leave a comment/i);
    //   expect(error).toBeInTheDocument();
  });
});
