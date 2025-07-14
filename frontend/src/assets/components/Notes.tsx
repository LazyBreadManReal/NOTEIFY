import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/Notes.css";
import { useParams } from "react-router-dom";

function Notes() {
    const [name, setName] = useState("");
    const [userid, setUserid] = useState("");
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");
    const { searchKey } = useParams();
    const scrollRef = useRef(null);
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
            .get(`http://localhost:5000/api/search/${searchKey}`) 
            .then((res) => {
                setNotes(res.data);
            })
            .catch((err) => {
                console.error("Error fetching books:", err);
            });
        } else {
            axios
            .get("http://localhost:5000/api/notes")
            .then((res) => {
                setNotes(res.data);
            })
            .catch((err) => {
                console.error("Error fetching books:", err);
            });
        }
    }, []);

    const handleSearch = () => {
        window.location.href = `http://localhost:5173/notes/${search}`;
    };

    const handleView = (note) => {
        window.location.href = `http://localhost:5173/notes/view/${note.id}`;
    }

  return (
    <div className="notes-page">
        <img src="..//images/backgrounds/search.png" alt="" className="notes-background" />
        <div className="notes-section">
            <a href="http://localhost:5173/"className="login-logo">Noteify</a>
            <div className="notes-search-section">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="notes-cards-section">
                {notes
                    .map((note) => (
                    <div key={note.id} className="notes-card">
                        <img src={`http://localhost:5000${note.image_path}`} alt="" />
                        <h3>{note.title}</h3>
                        <button onClick={()=> handleView(note)}>View</button>
                    </div>
                ))}
            </div>
        </div>
    </div>

  );
}

export default Notes;
