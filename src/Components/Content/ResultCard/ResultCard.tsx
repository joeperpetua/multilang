import React from "react";
import { Language } from "../../../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ResultCardProps {
  lang: Language;
  translation?: string;
  variations?: string[];
}

function ResultCard({
  lang,
  translation = "",
  variations = [],
}: ResultCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: lang.code });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <article
      ref={setNodeRef}
      style={{ ...style, marginBottom: "16px" }}
      className="border"
    >
      <div className="row no-wrap middle-align">
        <div
          className="min"
          {...attributes}
          {...listeners}
          style={{
            cursor: "grab",
            paddingRight: "12px",
            userSelect: "none",
            fontSize: "1.2rem",
          }}
        >
          ⋮⋮
        </div>
        <div className="min">
          <p className="no-margin">{lang.name}:</p>
        </div>
        <div className="max">
          <div
            className="surface-variant padding"
            id={"translation-" + lang.code}
            style={{ wordBreak: "break-word" }}
          >
            {translation}
          </div>
        </div>
      </div>
      {variations && variations.length > 0 && (
        <details className="top-margin">
          <summary>Possible variations:</summary>
          <p className="small-text top-margin">
            {variations.map((v) => `${v}; `)}
          </p>
        </details>
      )}
    </article>
  );
}

export default ResultCard;
