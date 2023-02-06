import React, { useEffect, useState } from "react";

const App = () => {
  const [isDropdownButton, setIsDropdownButton] = useState(false);
  // useEffect(() => {
  //   document.addEventListener("click", (e: any) => {
  //     const isDropdownButton = e.target.matches("[data-dropdown-button]");
  //     if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
  //       return;

  //     let currentDropdown: Element;
  //     if (isDropdownButton) {
  //       currentDropdown = e.target.closest("[data-dropdown]");
  //       console.log(currentDropdown);
  //       currentDropdown.classList.toggle("active");
  //     }

  //     document
  //       .querySelectorAll("[data-dropdown].active")
  //       .forEach((dropdown) => {
  //         if (dropdown === currentDropdown) return;
  //         dropdown.classList.remove("active");
  //       });
  //   });
  // }, []);

  return (
    <section
      onClick={(e: any) => {
        setIsDropdownButton(e.target.matches("[data-dropdown-button]"));
        console.log(isDropdownButton);
        // console.log(e.target.matches("[data-dropdown-button]"));
        if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
          return;

        let currentDropdown: Element;
        if (isDropdownButton) {
          currentDropdown = e.target.closest("[data-dropdown]");

          currentDropdown.classList.toggle("active");
          console.log(currentDropdown);
        }

        e.target
          .querySelectorAll("[data-dropdown].active")
          .forEach((dropdown: any) => {
            if (dropdown === currentDropdown) return;
            dropdown.classList.remove("active");
            setIsDropdownButton(e.target.matches("[data-dropdown-button]"));
          });
      }}
    >
      <header>
        <nav>
          <img src="" alt="Logo" />
          <ul id="navigation">
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="resume.pdf">Resume</a>
            </li>
          </ul>
          <div className="dropdown" data-dropdown>
            <button className="selection-user" data-dropdown-button>
              Ico
            </button>
            <div className="dropdown-menu">Dropdown Content</div>
          </div>
          <button className="selection-user" data-dropdown-button>
            Ico
          </button>
          {/* End of choiceSelection */}
        </nav>
        {/* End of nav */}
      </header>
      {/*  */}
    </section>
  );
};

export default App;
