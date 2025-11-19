# 🔠 HeadingComponent (Custom HubSpot CMS)

A flexible and sanitized heading component designed for HubSpot CMS. It supports dynamic heading levels, visual style variants, and custom colors using CMS fields.

---

## ✅ Usage Example

```jsx
<HeadingComponent
  headingLevel="h2"
  heading="<strong>Welcome</strong> to our site!"
  headingStyleVariant="display_1"
  headingStyleColor={{ rgba: "#ff5733" }}
/>
```

---

## ⚙️ Component Props

| Prop Name             | Type     | Required | Description                                                  |
|------------------------|----------|----------|--------------------------------------------------------------|
| `headingLevel`         | string   | ✅       | The HTML heading tag to render (`h2`, `h3`, etc.)            |
| `heading`             | string   | ✅       | The text or HTML string content of the heading               |
| `headingStyleVariant` | string   | ❌       | Visual style variant (e.g. `display_1`, `h1`, `h2`, etc.)     |
| `headingStyleColor`   | object   | ❌       | RGBA color object (e.g. `{ rgba: "#000000" }`)               |

> Uses `SanitizedContent` to safely render inner HTML content.

---

## 🧩 CMS Fields (Sidebar Controls)

### 📄 `HeadingContent.jsx`

| Field Name                | Type        | Description                                                          |
|---------------------------|-------------|----------------------------------------------------------------------|
| `headingAndTextHeading`   | TextField   | The actual heading text (can include HTML)                           |
| `headingAndTextHeadingLevel` | ChoiceField | Heading level selection (`h2` to `h6`)                              |

### 🎨 `HeadingStyles.jsx`

| Field Name            | Type        | Description                                                  |
|------------------------|-------------|--------------------------------------------------------------|
| `headingStyleVariant` | ChoiceField | Visual appearance of the heading (`display_1`, `h1`, etc.)    |
| `headingStyleColor`   | ColorField  | Sets the heading color, including opacity                    |

---

## 📝 Notes

- The component maps selected `headingStyleVariant` to a class for styling.
- Inline color styling is applied via the `headingStyleColor.rgba` value.
- Content is sanitized using `SanitizedContent` to prevent XSS.
- Recommended for rendering CMS-editable headings with design consistency.

---

## 📁 Recommended Structure

```
/components/Heading/
  - HeadingComponent.jsx
  - HeadingContent.jsx
  - HeadingStyles.jsx
  - README.md (this file)
```