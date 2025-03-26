import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./assets/components/HomePage";
import LoginPage from "./assets/components/LoginPage";
import SignupPage from "./assets/components/SignupPage";
import ProfilePage from "./assets/components/ProfilePage";
import UploadNotesPage from "./assets/components/UploadNotesPage";
import Notes from "./assets/components/Notes";
import NotesView from "./assets/components/NotesView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:searchKey" element={<Notes />} />
        <Route path="/notes/upload" element={<UploadNotesPage />} />
        <Route path="/notes/view/:searchKey" element={<NotesView />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
