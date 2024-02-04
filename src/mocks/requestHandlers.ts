import { http, HttpResponse } from "msw";

export const requestHandlers = [
  http.get("/api/test/:id", ({ params }) => {
    const { id } = params;
    if (id === "200") {
      return HttpResponse.json(
        { title: "test", description: "lore ipsum" },
        { status: 200 },
      );
    }
    return HttpResponse.json({}, { status: 404 });
  }),
];
