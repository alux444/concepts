import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { DocPage } from "./pages/DocPage";
import { AiSkillsPage } from "./pages/AiSkillsPage";

export function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ai-skills" element={<AiSkillsPage />} />
          <Route path="/claude" element={<Navigate to="/ai-skills" replace />} />
          <Route path="/docs/*" element={<DocPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
