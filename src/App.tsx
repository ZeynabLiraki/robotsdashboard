import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout";
import HomePage from "./components/pages/HomePage";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return (
    <>
    
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  );
}
