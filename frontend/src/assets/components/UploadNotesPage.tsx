import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../css/UploadNotesPage.css"

const UploadNotesPage = () => {
  const [name, setName] = useState("");
  const [userid, setUserid] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {

    const token = localStorage.getItem("token");

    axios
    .get("http://localhost:5000/api/protected", {
        headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
        setName(res.data.user.name);
        setUserid(res.data.user.id);
    })
    .catch((err) => {
        console.error("Error fetching user:", err);
    });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) {
      setMessage("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("user_id", userid);
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:5000/api/notes", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Upload successful!");
      console.log("Uploaded:", res.data);
    } catch (error) {
      setMessage("Upload failed.");
      console.error(error);
    }
  };

  return (
    <div className="upload-note-page">
      <img src="..//images/backgrounds/featured.png" alt="" className="upload-note-background" />
      <div className="upload-note-section">
        <a href="http://localhost:5173/"className="upload-note-logo">Noteify</a>
        <h2>Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input type="file" accept="image/*" onChange={handleFileChange} required />
          <button type="submit">Upload</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default UploadNotesPage;
