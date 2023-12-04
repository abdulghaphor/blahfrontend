import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Update, Updates } from "./pages";
import backend from "././api";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        async action({ request }) {
          try {
            const formData = await request.formData();
            console.log(formData.get("title"), formData.get("content"));
            backend.post("/", {
              title: formData.get("title"),
              content: formData.get("content"),
            });
            return redirect("/updates");
          } catch (error) {
            return { error };
          }
        },
      },
      {
        path: "updates",
        Component: Updates,
        async loader() {
          try {
            const { data } = await backend.get("/");
            return { contentList: data };
          } catch (error) {
            return { error };
          }
        },
      },
      {
        path: "updates/:updateId",
        Component: Update,
        async loader({ params }) {
          try {
            const updateId = params.updateId;
            const { data } = await backend.get(`/${updateId}`);
            return { data };
          } catch (error) {
            return { error };
          }
        },
      },
    ],
  },
]);

export default router;
