import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { DocPage } from "./pages/DocPage";

export function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<DocPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
