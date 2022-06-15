import { Route, Routes } from "react-router-dom";

import Nominations from "./pages/Nominatins";
import Form from "./pages/Form";

const App = () => {
  return (
    <Routes>
      <Route path={"/nominations"} element={<Nominations />} exact={true} />
      <Route path={"/nominations/new"} element={<Form />} exact={true} />
    </Routes>
  );
}

export default App;
