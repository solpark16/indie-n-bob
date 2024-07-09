"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new QueryClient();

function ProviderLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default ProviderLayout;
