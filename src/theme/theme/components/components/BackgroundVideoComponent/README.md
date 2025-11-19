# 🎥 BackgroundVideo Component (Custom HubSpot CMS)

A performant background video component for React + HubSpot CMS that supports lazy loading via IntersectionObserver, a poster image fallback, and conditional rendering based on a toggle.

---

## ✅ Usage Example

```jsx
<BackgroundVideo
  showVideo={true}
  videoUrl="https://example.com/video.mp4"
  videoPosterUrl="https://example.com/poster.jpg"
  autoPlay={true}
  loop={true}
  muted={true}
  playsInline={true}
  altText="Background Video"
>
  <h1>Overlay Content</h1>
</BackgroundVideo>
```

---

## ⚙️ Component Props

| Prop Name         | Type      | Required | Default  | Description                                      |
|-------------------|-----------|----------|----------|--------------------------------------------------|
| `showVideo`       | boolean   | ✅       | `false`  | Whether to render the background video           |
| `videoUrl`        | string    | ✅       | `''`     | URL of the video file                            |
| `videoPosterUrl`  | string    | ✅       | `''`     | Poster image used before the video loads         |
| `autoPlay`        | boolean   | ❌       | `true`   | Whether the video should autoplay                |
| `loop`            | boolean   | ❌       | `true`   | Whether the video should loop                    |
| `muted`           | boolean   | ❌       | `true`   | Whether the video should be muted                |
| `playsInline`     | boolean   | ❌       | `true`   | Whether the video should play inline             |
| `videoType`       | string    | ❌       | `video/mp4` | Type of the video file                       |
| `altText`         | string    | ❌       | `'Background video'` | Accessible label for the section       |
| `children`        | ReactNode | ❌       | -        | Content rendered on top of the video             |

---

## 📦 CMS Fields (Sidebar Inputs)

### 🧩 `BackgroundVideoContent.jsx`

| Field Name        | Type        | Description                                 |
|-------------------|-------------|---------------------------------------------|
| `showVideo`       | Boolean     | Toggle to show/hide the background video    |
| `videoUrl`        | TextField   | URL for the video                           |
| `videoPosterUrl`  | ImageField  | Fallback image shown before video loads     |

> Visibility of `videoUrl` and `videoPosterUrl` is controlled by the `showVideo` toggle using advanced visibility rules.

---

## 📝 Notes

- Uses `IntersectionObserver` to **lazy load** the video only when in viewport.
- Shows a `poster` image for SEO and better performance before loading the video.
- Ensures accessibility using `aria-label`, `aria-hidden`, and poster fallback.
- Falls back to static children content if `showVideo` is `false`.

---

## 📁 Recommended Structure

```
/components/BackgroundVideo/
  - BackgroundVideo.jsx
  - BackgroundVideoContent.jsx
  - README.md (this file)
```