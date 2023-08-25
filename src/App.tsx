import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { appStore } from "./redux_utilis/appStore";
import SideBar from "./components/SideBar/SideBar";

const queryClient = new QueryClient()
function App() {

  return (
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <SideBar />
        <Outlet />
      </QueryClientProvider>
    </Provider>
  )
}

export default App;