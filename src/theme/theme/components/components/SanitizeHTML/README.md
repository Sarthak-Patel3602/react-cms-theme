# 🧼 `SanitizeHTML` Component – HubSpot CMS React

A utility component to safely render user-provided HTML content using DOMPurify and `html-react-parser`.

---

## ✅ Purpose

This component:
- Sanitizes HTML content using `DOMPurify` (prevents XSS attacks).
- Parses and renders the sanitized HTML as React elements.

---

## 📦 Dependencies

```bash
npm install isomorphic-dompurify html-react-parser
```

---

## 🔧 Usage

```jsx
import SanitizeHTML from './SanitizeHTML';

const rawHtml = "<p><strong>Bold</strong> and <script>alert('XSS')</script> clean!</p>";

<SanitizeHTML content={rawHtml} />
```

---

## ⚙️ Props

| Prop     | Type   | Description                         |
|----------|--------|-------------------------------------|
| `content` | string | Raw HTML content to sanitize/render |

---

## 🔐 Security

This component uses `isomorphic-dompurify` to remove potentially harmful content like:
- `<script>` tags
- Inline event handlers (e.g., `onerror`, `onclick`)
- JavaScript URLs

---

## 📝 Notes

- If `content` is empty or undefined, the component returns `null`.
- Output is safe to use inside CMS modules or external APIs that deliver HTML.

---

## 📁 Recommended Structure

```
/components/
  └── SanitizeHTML.jsx
  └── README.md
```