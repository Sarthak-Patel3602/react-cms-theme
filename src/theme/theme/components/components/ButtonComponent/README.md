# 🔘 Button Component (Custom HubSpot CMS)

A custom React button component that supports HubSpot CMS fields such as CTA, text, icons, link, size, and style.

---

## ✅ Usage Example

```jsx
<Button
  ariaLabel="Read More"
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  buttonStyle="primary"
  buttonSize="medium"
  buttonType="button"
  iconFieldPath="buttonContentIcon"
  showIcon={true}
  iconPosition="right"
>
  Learn More
</Button>
```

---

## ⚙️ Component Props

| Prop Name               | Type      | Required | Description                                        |
|-------------------------|-----------|----------|----------------------------------------------------|
| `ariaLabel`             | string    | ❌       | Accessibility label                                |
| `href`                  | string    | ❌       | Link URL                                           |
| `target`                | string    | ❌       | Link target attribute (`_blank`, `_self`, etc.)    |
| `rel`                   | string    | ❌       | Link rel attribute                                 |
| `buttonStyle`           | string    | ✅       | One of: `primary`, `secondary`, `tertiary`, `accent` |
| `buttonSize`            | string    | ✅       | One of: `small`, `medium`, `large`                 |
| `buttonType`            | string    | ✅       | `button` or `cta`                                  |
| `ctaFieldpath`          | string    | ❌       | HubSpot CTA field path                             |
| `iconFieldPath`         | string    | ❌       | Icon field path for display                        |
| `iconPosition`          | string    | ❌       | Position of icon: `left` or `right`                |
| `showIcon`              | boolean   | ❌       | Whether to show icon                               |
| `additionalClassArray`  | string[]  | ❌       | Extra class names to add to the button             |
| `children`              | ReactNode | ❌       | Button text content                                |

---

## 📦 CMS Fields (Used in Sidebar)

### 🧩 `ButtonContent.jsx`

| Field Name                  | Type        | Description                          |
|-----------------------------|-------------|--------------------------------------|
| `buttonContentType`         | ChoiceField | Select between "cta" or "button"     |
| `buttonContentText`         | TextField   | Sets the button text                 |
| `buttonContentLink`         | LinkField   | Sets the button `href`               |
| `buttonContentShowIcon`     | Boolean     | Toggles icon visibility              |
| `buttonContentIcon`         | IconField   | Selects icon                         |
| `buttonContentIconPosition` | ChoiceField | Icon alignment (left or right)       |
| `ctaField`                  | CtaField    | CTA field used when type is `cta`    |

### 🎨 `ButtonStyle.jsx`

| Field Name            | Type        | Description                           |
|------------------------|-------------|---------------------------------------|
| `buttonStyleVariant`   | ChoiceField | Style: `primary`, `secondary`, etc.   |
| `buttonStyleSize`      | ChoiceField | Size: `small`, `medium`, `large`      |

---

## 📝 Notes

- Uses `styled-components` for styling (`StyledButton`, `StyledIcon`).
- Class names are dynamically built based on selected options.
- Icon is shown only if `showIcon` is true.
- Supports HubSpot’s `<Cta />` rendering for CTA buttons.
- Visibility of CMS fields is controlled via `advancedVisibility` rules.

---

## 📁 Location

This component should live under:

```
/components/Button/
  - Button.jsx
  - ButtonContent.jsx
  - ButtonStyle.jsx
  - README.md (this file)
```