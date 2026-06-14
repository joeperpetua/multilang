import React, { useState } from "react";
import TextInput from "./TextInput/TextInput";
import ResultCard from "./ResultCard/ResultCard";
import { useAppContext } from "../../context/AppContext";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const NoLanguage = ({ openMenu }: { openMenu: () => void }) => (
  <div className="center-align padding top-margin">
    <p>No languages selected</p>
    <button className="primary" onClick={openMenu}>
      Add languages
    </button>
  </div>
);

function Content() {
  const { languages, setLanguages, setMenuOpen } = useAppContext();
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [variations, setVariations] = useState<Record<string, string[]>>({});

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = languages.findIndex((l) => l.code === active.id);
      const newIndex = languages.findIndex((l) => l.code === over.id);
      setLanguages(arrayMove(languages, oldIndex, newIndex));
    }
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const handleClear = () => {
    setTranslations({});
    setVariations({});
  };

  return (
    <div
      className="grid padding large-padding"
      style={{
        margin: "0 auto",
        minHeight: "70vh",
        width: "100%",
        paddingTop: "10vh",
      }}
    >
      <div className="s0 m0 l1">
        <span />
      </div>
      <div className="s12 m12 l4">
        <TextInput
          onTranslationResult={setTranslations}
          onVariationsResult={setVariations}
          onClear={handleClear}
        />
      </div>
      <div className="s12 m12 l6">
        {languages.length === 0 ? <NoLanguage openMenu={openMenu} /> : null}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={languages.map((l) => l.code)}
            strategy={verticalListSortingStrategy}
          >
            {languages.map((element) => {
              return (
                <ResultCard
                  key={element.code}
                  lang={element}
                  translation={translations[element.code]}
                  variations={variations[element.code]}
                />
              );
            })}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default Content;
