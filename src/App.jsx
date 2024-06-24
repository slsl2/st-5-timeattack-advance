import QueryClientSetup from "../QueryClientSetup";
import Router from "./shared/Router";

function App() {
  return (
    <QueryClientSetup>
      <Router />
    </QueryClientSetup>
  );
}

export default App;
