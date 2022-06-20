import { Route, Routes } from "react-router-dom";

import Nominations from "./pages/Nominations";
import CreateNominations from "./pages/CreateNominations";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} exact={true} />
      <Route path={"/nominations"} element={<Nominations />} exact={true} />
      <Route path={"/nominations/new"} element={<CreateNominations />} exact={true} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here! Check type errors in url</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
