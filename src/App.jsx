import Routers from "./router/Routers.jsx";
import TanStackQueryProvider from "./providers/TanStackQueryProvider.jsx";

function App() {

  return (
      <TanStackQueryProvider>
          <Routers/>
      </TanStackQueryProvider>
  )
}

export default App
