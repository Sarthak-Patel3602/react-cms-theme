# 🖼️ `renderImage` Utility – HubSpot CMS React

A utility function to render HubSpot image fields in a structured, accessible, and performance-optimized way.

---

## ✅ Usage Example

```jsx
import renderImage from './utils/imageRenderer';

const imageField = {
  src: 'https://cdn.example.com/image.jpg',
  alt: 'Hero Banner',
  size_type: 'auto_custom_max',
  max_width: 800,
  max_height: 600,
  loading: 'lazy'
};

<renderImage imageField={image_field} />
```

---

## ⚙️ Accepted `imageField` Properties

| Property          | Type     | Description                                                  |
|-------------------|----------|--------------------------------------------------------------|
| `src`             | string   | Image URL (required)                                         |
| `alt`             | string   | Alternative text for accessibility                          |
| `loading`         | string   | HTML loading attribute (default: `'lazy'`)                  |
| `size_type`       | string   | `'auto'`, `'auto_custom_max'`, `'exact'`                     |
| `width`           | number   | Used when `size_type` is `'exact'`                           |
| `height`          | number   | Used when `size_type` is `'exact'`                           |
| `max_width`       | number   | Used when `size_type` is `'auto_custom_max'`                |
| `max_height`      | number   | Used when `size_type` is `'auto_custom_max'`                |

---

## 🧠 Behavior by `size_type`

| `size_type`        | Behavior                                                             |
|--------------------|----------------------------------------------------------------------|
| `auto`             | Responsive image with `maxWidth: 100%`, `height: auto`               |
| `auto_custom_max`  | `width: 100%` with `maxWidth` and `maxHeight` limits                 |
| `exact`            | Fixed width and height as specified in the field                    |

---

## 🛡️ Accessibility

- `alt` attribute is mandatory for screen readers. A fallback `'default alt text'` is added.
- `fetchpriority="high"` is added for performance.

---

## 📁 Recommended Folder Structure

```
/utils/
  └── imageRenderer.js
  └── README.md
```

---

## 📌 Notes

- This utility is especially helpful in CMS modules using image fields.
- It will not render anything if `src` is not defined.