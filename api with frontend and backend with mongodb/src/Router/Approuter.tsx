import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "../ApiShow/project";
import AddProject from "../ApiShow/AddProject";
export default function Apprrouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="add/" element={<AddProject />} />
          <Route path="add/:id" element={<AddProject />} />
        </Routes>
      </Router>
    </>
  );
}