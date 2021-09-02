import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthProvider from "./auth/contexts/AuthProvider";
import ManualProvider from "./hooks/useManual";
import Routes from "./routes";

const theme = createTheme({
  typography: {
    fontFamily: ["Gilroy"].join(","),
  },
});
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ManualProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </ManualProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
