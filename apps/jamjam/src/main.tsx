import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Suspense } from "react";
import Loading from "@/pages/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
      cacheTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
          <ReactQueryDevtools />
        </React.StrictMode>
      </BrowserRouter>
    </Suspense>
  </QueryClientProvider>,
);
