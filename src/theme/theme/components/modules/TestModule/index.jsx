import React from "react";
import "./module.css";

export function Component(props) {
  const {

    /* ============================
       CONTENT GROUP
    ============================ */
    groupContent: {
      singleLineText,
      showSection,
      numberValue,
      colorPicker,
      richTextContentHTML,
    },

    /* ============================
       OPTIONS GROUP
    ============================ */
    groupOptions: {
      dropdownOption,
      radioOption,
      checkboxGroup,
    },

    /* ============================
       MEDIA FIELDS
    ============================ */
    mediaFields: {
      image,
      fileUpload,
    },

    /* ============================
       SPECIAL INPUTS
    ============================ */
    specialInputs: {
      contactEmail,
      dateField,
      eventDateTime,
    },

  } = props;

  return (
    <section className="testmodule-wrapper">

      {/* ========== CONTENT GROUP ========== */}
      {showSection && (
        <div className="content-section">

          <h2>{singleLineText}</h2>

          <p>Number Value: {numberValue}</p>

          <p style={{ color: colorPicker }}>
            Selected Color: {colorPicker}
          </p>

          <div
            className="rich-text-content"
            dangerouslySetInnerHTML={{ __html: richTextContentHTML }}
          ></div>

        </div>
      )}

      {/* ========== OPTIONS GROUP ========== */}
     <div className="options-section">
        <h3>Options</h3>

        <p>Dropdown Selected: {dropdownOption}</p>
        <p>Radio Selected: {radioOption}</p>

        <p>Selected Checkbox Values:</p>
        <ul>
          {checkboxGroup?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* ========== MEDIA GROUP ========== */}
      <div className="media-section">
        <h3>Media</h3>

        {image?.src && (
          <div>
            <img
              src={image.src}
              alt={image.alt || "Image"}
              style={{ maxWidth: "300px" }}
            />
          </div>
        )}

        {fileUpload?.url && (
          <div>
            <a href={fileUpload.url} download>
              Download File
            </a>
          </div>
        )}
      </div>

      {/* ========== SPECIAL INPUTS ========== */}
      <div className="special-section">
        <h3>Special Inputs</h3>

        <p>Email: {contactEmail}</p>
        <p>Date: {dateField}</p>
        <p>Date and Time: {eventDateTime}</p>
      </div>

    </section>
  );
}

export { fields } from "./fields.jsx";

export const meta = {
  label: "TestModule",
  content_types: ["BLOG_LISTING", "BLOG_POST", "SITE_PAGE", "LANDING_PAGE"],
};
