"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 0,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        closeButton={false}
        limit={1}
        className="toastify"       
      />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
