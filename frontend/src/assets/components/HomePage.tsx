import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/HomePage.css";

function HomePage() {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        window.location.href = `http://localhost:5173/notes/${search}`;
    };
  return (
    <div className="home-page">
        <div className="section">
            <img src="src/assets/images/backgrounds/home-page.png" alt="" className="background" />
            <div className="navbar">
                <div className="navbar-left-section">
                    <a href="">
                        <img src="src/assets/images/icons/menu.png" alt="Menu" className="menu-img"/>
                        <span>MENU</span>
                    </a>
                    <a href="http://localhost:5173/notes">
                        <img src="src/assets/images/icons/search.png" alt="Explore Notes" className="search-img"/>
                        <span>EXPLORE NOTES</span>
                    </a>
                    <a href="http://localhost:5173/notes/upload">
                        UPLOAD
                    </a>
                </div>
                <div className="navbar-right-section">
                    <a href="">
                        MY NOTES (0)
                    </a>
                    <a href="http://localhost:5173/profile">
                        PROFILE
                    </a>
                    <a href="http://localhost:5173/login">
                        SIGN IN
                    </a>
                </div>
            </div>
            <div className="website-title">
                <h1>Noteify</h1>
                <p>Your Notes, Your Knowledge</p>
            </div>
        </div>
        <div className="section sec2">
        <img src="src/assets/images/backgrounds/welcome.png" alt="" className="background" />
            <div className="welcome-message-container">
                <div className="welcome-message">
                    <h1>Welcome To Noteify</h1>
                    <p>A smart platform for sharing and discovering notes, tailored to your learning needs.</p>
                </div>
            </div>
        </div>
        <div className="section sec3">
        <img src="src/assets/images/backgrounds/search.png" alt="" className="background" />
            <div className="search-bar">
                <input type="text" placeholder="I AM LOOKING FOR..." onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={handleSearch}>BROWSE</button>
            </div>
            <div className="upload-container">
                <div className="upload-box">
                    <button className="upload-button" onClick={() => (window.location.href = `http://localhost:5173/notes/upload`)}>
                        <span>⬆ Upload Files</span>
                    </button>
                    <p>or Drop files here</p>
                </div>
                <p className="upload-message">
                    Start by searching for or uploading your notes. It's that simple!
                </p>
            </div>
        </div>
        <div className="section sec4">
        <img src="src/assets/images/backgrounds/featured.png" alt="" className="background" />
            <div className="featured-notes-section">
                <h1>
                    Featured Notes
                </h1>
                <div className="featured-cards-section">
                    <div className="featured-cards">
                        <div className="featured-card">
                            <h2>
                                Math
                            </h2>
                            <img src="src/assets/images//placeholder.jpg" alt="" />
                            <div className="stars">
                                <img src="src/assets/images/icons/star-filled.png" alt="" />
                                <img src="src/assets/images/icons/star-filled.png" alt="" />
                                <img src="src/assets/images/icons/star-filled.png" alt="" />
                            </div>
                            <p>ratings</p>
                            <div className="cards-btn">
                                <button className="Download">Download</button>
                                <button className="View Details">View Details</button>
                            </div>
                        </div>
                        <div className="featured-card">
                            <h2>
                                Math
                            </h2>
                            <img src="src/assets/images//placeholder.jpg" alt="" />
                            <div className="stars">
                                <img src="src/assets/images/icons/star-filled.png" alt="" />
                                <img src="src/assets/images/icons/star-filled.png" alt="" />
                                <img src="src/assets/images/icons/star-filled.png" alt="" />
                            </div>
                            <p>ratings</p>
                            <div className="cards-btn">
                                <button className="Download">Download</button>
                                <button className="View Details">View Details</button>
                            </div>
                        </div>
                        <div className="featured-card">
                            <h2>
                                Math
                            </h2>
                            <img src="src/assets/images//placeholder.jpg" alt="" />
                            <div className="stars">
                                <img src="src/assets/images/icons/star-filled.png" alt="" />
                                <img src="src/assets/images/icons/star-filled.png" alt="" />
                                <img src="src/assets/images/icons/star-filled.png" alt="" />
                            </div>
                            <p>ratings</p>
                            <div className="cards-btn">
                                <button className="Download">Download</button>
                                <button className="View Details">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section sec5">
        <img src="src/assets/images/backgrounds/footer.png" alt="" className="background" />
            <div className="footer-header">
                <h1>Connect & Stay Noteify-d</h1>
                <div className="socials">
                    <a href=""><img src="src/assets/images/icons/instagram.png" alt="" /></a>
                    <a href=""><img src="src/assets/images/icons/twitter.png" alt="" /></a>
                    <a href=""><img src="src/assets/images/icons/facebook.png" alt="" /></a>
                </div>
            </div>
            <div className="footer-content">
                <div className="website-title">
                    <h1>Noteify</h1>
                    <p>Your Notes, Your Knowledge</p>
                </div>
            </div>
            <div className="footer-footer">
                <a href="">Noteify 2025</a>
                <a href="">Terms & conditions</a>
                <a href="">Privacy policy</a>
                <a href="">Help</a>
                <a href="">About</a>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
