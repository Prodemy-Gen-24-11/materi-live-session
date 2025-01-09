import { Navigate, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Detail from "./pages/Detail";
import Nested from "./pages/Nested";

function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<Home />}>
          <Route path="nested" element={<Nested />} />
        </Route> */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Layout>
  );
}

export default App;
