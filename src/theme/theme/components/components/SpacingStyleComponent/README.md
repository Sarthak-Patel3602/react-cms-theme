# 🧱 CommonStylesSpacingFields & Utilities

This module provides comprehensive spacing and background controls for HubSpot CMS React components. It is intended to be used inside modules that require visual flexibility across screen sizes.

---

## 📦 Components

### `CommonStylesSpacingFields`

Wraps multiple CMS fields to control:

- **Background types:** Image, color, gradient, or video
- **Spacing:** Padding and margin across breakpoints
- **Overlay options** for added color layering

#### Fields Included:
- `background_option`: Select type (image, color, gradient, video)
- `bg_image`, `bg_color`, `bg_gradient`, `videoPosterUrl`
- `enable_overlay_color` + `overlay_color`
- `desktopSpacing`, `laptopSpacing`, `tabletSpacing`, `mobileSpacing`

### `CommonStylesSpacingContentFields`

Used with `video_bg` option:
- `videoUrl`: Background video source
- `hide_video_mobile`: Toggle for mobile video display

---

## 🧠 Utility

### `getSpacingStyle(fieldValues)`

Parses the CMS field group `groupStyle.groupSpacingandBackground.spacing` and returns spacing values for all screen sizes in the following format:

```js
{
  desktop: {
    paddingTop: "20px",
    marginBottom: "40px",
    ...
  },
  laptop: { ... },
  tablet: { ... },
  mobile: { ... },
}
```

#### Example Usage

```js
const spacing = getSpacingStyle(moduleFieldValues);
const style = { ...spacing.desktop }; // apply as inline style
```

---

## 💡 Notes

- Use `visibility` conditions to show/hide fields based on `background_option`.
- Customize field defaults for branding consistency.
- Overlay color respects alpha opacity.

---

## 📁 Location

- `/components/CommonStylesSpacingFields.jsx`
- `/components/CommonStylesSpacingContentFields.jsx`
- `/components/getSpacingStyle.js`

---

## 📌 Recommended Usage

Integrate this as a shared group in modules where you want consistent background and spacing logic:

```jsx
<FieldGroup name="groupStyle">
  <CommonStylesSpacingFields />
  <CommonStylesSpacingContentFields bgVideoFieldVisibility={...} />
</FieldGroup>
```

---
