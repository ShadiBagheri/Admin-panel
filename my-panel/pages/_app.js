import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "../styles/globals.css";
import "../styles/index.css";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>
               <Component {...pageProps} />;
         </QueryClientProvider>
}
