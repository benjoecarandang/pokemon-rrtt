import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { paths } from "../config/paths";
import MainLayout from "../components/layouts/MainLayout";
// import { ProtectedRoute } from "@/lib/auth";

// import {
//   default as AppRoot,
//   ErrorBoundary as AppRootErrorBoundary
// } from "./routes/app/root";

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component
  };
};

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      //to fix, connect ot paths.ts
      path: "/",
      element: <MainLayout children={null} />,
      children: [
        {
          path: "/pokemons",
          lazy: () =>
            import("../features/Pokemons/PokemonList").then(convert(queryClient)),
        },
        {
          children: [
            {
              path: "/pokemon/:id",
              lazy: () =>
                import("../features/Pokemons/PokemonDetails").then(convert(queryClient)),
              children: []
            }
          ]
        },
        {
          children: [
            {
              path: "type/:type", // Add the dynamic type route here
              lazy: () =>
                import("../features/Pokemons/PokemonList").then(convert(queryClient))
            }
          ]
        }
      ]
    },
    {
      path: "*",
      lazy: () => import("./routes/NotFound").then(convert(queryClient))
    }
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
