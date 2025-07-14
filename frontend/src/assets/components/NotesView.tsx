import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/NotesView.css";
import { useParams } from "react-router-dom";

function NotesView() {
    const [name, setName] = useState("");
    const [userid, setUserid] = useState("");
    const [notes, setNotesView] = useState([]);
    const [search, setSearch] = useState("");
    const { searchKey } = useParams();
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

        // Fetch top notes
        if(searchKey !== undefined){
            axios
            .get(`http://localhost:5000/api/notes/${searchKey}`) 
            .then((res) => {
                setNotesView(res.data);
            })
            .catch((err) => {
                console.error("Error fetching books:", err);
            });
        }
    }, []);
    console.log(notes);

    const handleSearch = () => {
        window.location.href = `http://localhost:5173/notes/${search}`;
    };

    const handleDelete = async (note) => {
        try {
          const res = await axios.delete(`http://localhost:5000/api/notes/${note.id}`);
          console.log("Deleted all items:", res.data);
          window.location.href = `http://localhost:5173/notes/`;
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div className="notes-view-page">
        <img src="../..//images/backgrounds/search.png" alt="" className="notes-view-background" />
        <div className="notes-view-section">
            <a href="http://localhost:5173/"className="login-logo">Noteify</a>
            {notes.length === 0 ? (
                <h1>NOT FOUND</h1>
            ) : (
                <div className="note-content">
                    <div className="note-image">
                        <img src={`http://localhost:5000${notes.image_path}`} alt="" />
                    </div>
                    <div className="notes-view-right-section">
                        <h1>{notes.title}</h1>
                        <div className="notes-btns">
                            <button onClick={() => handleView(notes)}>View</button>
                            {notes?.user_id === userid && <button onClick={() => handleDelete(notes)}>Delete</button>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>

  );
}

export default NotesView;
