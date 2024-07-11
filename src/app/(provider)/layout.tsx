"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

function ProviderLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}

export default ProviderLayout;
