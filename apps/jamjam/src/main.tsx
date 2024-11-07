import Loading from "@/pages/Loading";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './_shared/store/todo/store.js';
import App from "./App.js";
import "./index.css";

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
          <Provider store={store}>
          <App />
          </Provider>
          <ReactQueryDevtools />
        </React.StrictMode>
      </BrowserRouter>
    </Suspense>
  </QueryClientProvider>,
);
