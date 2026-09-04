import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/posts", () => {
    return HttpResponse.json([
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
    ]);
  }),

  http.get("/posts/:postId", ({ params }) => {
    if (params.postId === "3") {
      return HttpResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return HttpResponse.json({
      id: 1,
      title: "first post",
      text: "Its the first post",
      createdAt: "2026-08-27T19:13:28.303Z",
      updatedAt: "2026-08-27T19:13:28.303Z",
      authorId: 1,
    });
  }),
  http.get("/posts/:postId/comments", ({ params }) => {
    if (params.postId === "2") {
      return HttpResponse.json([]);
    }
    return HttpResponse.json([
      { id: 1, author: { username: "Julek" }, text: "comment" },
      { id: 2, author: { username: "Test" }, text: "Second comment" },
    ]);
  }),

  http.post("signup", () => {
    return HttpResponse.json(
      { messages: ["Passwords do not match!", "Username already exists"] },
      { status: 400 },
    );
  }),
];
