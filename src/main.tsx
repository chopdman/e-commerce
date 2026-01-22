import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import {
  QueriesObserver,
  QueryClient,
  QueryClientContext,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 ,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClinet}>
        <ReactQueryDevtools initialIsOpen={false}/>
          <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
