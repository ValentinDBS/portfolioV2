import React from "react";

const App = () => {
  return (
    <header>
      <nav>
        <img src="" alt="Logo" />
        <ul>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="resume.pdf">Resume</a>
          </li>
        </ul>
        <div id="choiceSelection">
          <select name="theme">
            <option value="defaultTheme">Theme</option>
          </select>
          <select name="language">
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default App;
