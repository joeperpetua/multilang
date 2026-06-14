import React, { useState, useMemo } from "react";
import LanguageItem from "./LanguageItem/LanguageItem";
import { useAppContext } from "../../context/AppContext";
import { languages as allLanguages } from "../../lib/languages";

import "./Menu.css";
import { AiOutlineClose } from "react-icons/ai";

function Menu() {
  const { languages, setLanguages, menuOpen } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");

  const sortedAndFilteredLanguages = useMemo(() => {
    // First filter by search
    const filtered = allLanguages.filter((lang) =>
      lang.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // Then sort: added languages first
    return filtered.sort((a, b) => {
      const aAdded = languages.some((l) => l.code === a.code);
      const bAdded = languages.some((l) => l.code === b.code);

      if (aAdded && !bAdded) return -1;
      if (!aAdded && bAdded) return 1;
      return 0; // maintain original alphabetical order if both are same state
    });
  }, [searchQuery, languages]);

  return (
    <div className={`Menu ${menuOpen ? "opened" : "closed"}`}>
      <div
        className="menu-layout padding large-padding"
        style={{ overflowY: "auto" }}
      >
        <div className="row middle-align" style={{ marginBottom: "16px" }}>
          <h5 className="max no-margin">Target languages:</h5>
        </div>

        <div
          className="menu-languages-grid"
          style={{ height: "auto", maxHeight: "30vh" }}
        >
          {languages.map((element) => {
            return <LanguageItem key={element.code} lang={element} />;
          })}
        </div>

        <div
          className="row middle-align"
          style={{ marginTop: "32px", marginBottom: "16px" }}
        >
          <h5 className="max no-margin">Available languages:</h5>
        </div>

        <div className="field suffix border" style={{ marginBottom: "24px" }}>
          <input
            type="text"
            placeholder="Search languages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <i
              onClick={() => setSearchQuery("")}
              title="Clear search"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                pointerEvents: "auto",
              }}
            >
              <AiOutlineClose />
            </i>
          )}
        </div>

        <div
          className="menu-languages-grid"
          style={{ height: "auto", flex: 1 }}
        >
          {sortedAndFilteredLanguages
            .filter((l) => !languages.some((sl) => sl.code === l.code))
            .map((element) => {
              return (
                <LanguageItem
                  key={element.code}
                  lang={element}
                  onLanguageAdded={() => setSearchQuery("")}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
