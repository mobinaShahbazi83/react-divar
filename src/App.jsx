import { BrowserRouter} from "react-router-dom";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./configs/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./Layout/Layout";


function App() {
  const queryClient = new QueryClient({defaultOptions : defaultOptions});
  return (
  <QueryClientProvider client={queryClient}>
     <BrowserRouter>
     <Layout>
     <Router/>
     </Layout>
   </BrowserRouter>
   <ReactQueryDevtools/>
  </QueryClientProvider>
  );
}

export default App;
