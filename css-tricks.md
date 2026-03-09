CSS tricks and patterns from Sajid (iamsajid.com/css-tricks). Use these techniques when writing CSS for this project or any frontend work. Apply the relevant pattern when the user asks for styling help.

---

## 1. Better Shadows

Combine two shadows — one dark and close, one light and spread — for natural depth.

```css
/* Combined: natural depth */
.card {
  box-shadow: 0px 4px 4px #00000030, 0px 12px 12px #00000015;
}

/* Dark only: tight, close shadow */
.tight-shadow {
  box-shadow: 0px 4px 4px #00000030;
}

/* Light only: soft, spread shadow */
.soft-shadow {
  box-shadow: 0px 12px 12px #00000015;
}
```

---

## 2. Gradient Borders

Use the `padding-box` / `border-box` trick for gradient borders on any element.

```css
.gradient-border {
  background: linear-gradient(var(--bg), var(--bg)) padding-box,
    linear-gradient(45deg, #ffe537 0%, #537fe7 100%) border-box;
  border: solid 2px transparent;
  border-radius: 8px;
}
```

---

## 3. Gradient Text

Apply `background-clip: text` to create gradient-colored text.

```css
.gradient-text {
  display: inline-block;
  background: linear-gradient(45deg, #ffe537 0%, #537fe7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

---

## 4. Button Styles

### Moody (Glow)

```css
.moody {
  box-shadow: 0 0 16px var(--accent);
}
.moody:hover {
  box-shadow: 0 0 24px var(--accent);
}
```

### Dashing (Gradient Border)

```css
.dashing {
  background: linear-gradient(var(--bg), var(--bg)) padding-box,
    linear-gradient(45deg, #ffe537 0%, #537fe7 100%) border-box;
  border: solid 2px transparent;
}
.dashing:hover {
  border: solid 2px var(--text);
}
```

### Dashing Fill (Animated Gradient Background)

```css
.dashing-fill {
  background: linear-gradient(270deg, #ffe537, #537fe7, #ffe537, #537fe7);
  background-size: 300% 300%;
  animation: bg 10s ease-in-out infinite;
}
.dashing-fill:hover {
  animation: bg 2s ease-in-out infinite;
}
@keyframes bg {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 50%; }
}
```

### Crispy (Solid Offset Shadow)

```css
.crispy {
  border: solid 1px var(--accent);
  box-shadow: 0 2px var(--accent);
}
.crispy:hover {
  box-shadow: 0 4px var(--accent);
}
```

---

## 5. Hover Effects

### Scale

```css
.scale {
  transition: 0.3s ease-in-out;
}
.scale:hover {
  scale: 1.05;
}
```

### Float (Translate Up)

```css
.float {
  transition: 0.3s ease-in-out;
}
.float:hover {
  transform: translateY(-12px);
}
```

### Text Fill (Stroke to Solid)

```css
.fill-text {
  color: transparent;
  -webkit-text-stroke-color: var(--text);
  -webkit-text-stroke-width: 1px;
  transition: 0.3s ease-in-out;
}
.fill-text:hover {
  color: var(--text);
}
```

### SVG Fill (Stroke to Filled)

```css
svg {
  fill: none;
  stroke: var(--text);
  stroke-width: 10;
  transition: 0.3s ease-in-out;
}
svg:hover {
  fill: var(--text);
}
```

### Reveal (Fade In Child)

```css
.reveal span {
  opacity: 0;
  transition: 0.3s ease-in-out;
}
.reveal:hover span {
  opacity: 1;
}
```

---

## 6. Animations

### Bounce

```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}
.bounce {
  animation: bounce 2s infinite ease-in-out;
}
```

### Pulse

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
.pulse {
  animation: pulse 1s infinite ease-in-out;
}
```

### Flip

```css
@keyframes flip {
  0% { transform: rotateY(0); }
  100% { transform: rotateY(360deg); }
}
.flip {
  animation: flip 2s infinite linear;
}
```

### Spinner (Gradient Border Rotation)

```css
.spinner {
  background: linear-gradient(var(--bg), var(--bg)) padding-box,
    linear-gradient(45deg, #ffe537 0%, #537fe7 100%) border-box;
  border: solid 8px transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 4s ease-in-out infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

---

## 7. Dynamic Sizes

### Viewport-based font size

```css
.responsive-text {
  font-size: 5vw;
}
```

### Clamped font size (min, preferred, max)

```css
.clamped-text {
  font-size: clamp(24px, 5vw, 72px);
}
```

### Flex ratios for proportional columns

```css
.flex-container {
  display: flex;
  gap: 20px;
}
.flex-container :nth-child(1) { flex: 1; }
.flex-container :nth-child(2) { flex: 2; }
.flex-container :nth-child(3) { flex: 3; }
```

---

## 8. Custom List Markers (Emoji)

Replace default bullets with emoji using `list-style`.

```css
li {
  list-style: "🔹 ";
}
li:nth-child(2) {
  list-style: "✅ ";
}
li:nth-child(3) {
  list-style: "⭐ ";
}
```

---

## 9. Radio Cards

Turn plain radio buttons into styled card selectors.

```css
.radio-cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.radio-card {
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(45deg, hsl(0, 0%, 20%), hsl(0, 0%, 15%));
  position: relative;
  flex: 1;
  min-width: 150px;
}

/* Hide default radio, use custom circle */
.radio-card input[type="radio"] {
  appearance: none;
  cursor: pointer;
}

.radio-card input[type="radio"]::before {
  content: '';
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  border: solid 2px var(--text);
  border-radius: 50%;
}

.radio-card input[type="radio"]:checked::before {
  border-color: var(--accent);
  background-color: var(--accent);
}
```

---

## 10. Image Card Component

Clean card with image, text, and gradient-border button.

```css
.card {
  max-width: min(90vw, 400px);
  display: flex;
  flex-direction: column;
  background: #333;
  border-radius: 8px;
  overflow: hidden;
}

.card img {
  width: 100%;
  border-radius: 0;
}

.card-body {
  padding: 20px;
}

.card .btn {
  display: inline-block;
  text-decoration: none;
  color: #f9f9f9;
  background: linear-gradient(#1e1e1e, #1e1e1e) padding-box,
    linear-gradient(45deg, #ffe537 0%, #537fe7 100%) border-box;
  border: solid 2px transparent;
  border-radius: 8px;
  padding: 12px 24px;
  transition: 0.2s ease-in-out;
}
```

---

## Quick Reference: CSS Variables Pattern

Sajid's variable convention — define everything in `:root`, reference everywhere.

```css
:root {
  --ff: "Montserrat", sans-serif;
  --colorp: #f9f9f9;      /* primary text */
  --colora: #ffe537;       /* accent */
  --colora2: #537fe7;      /* accent 2 */
  --colorbody: #1e1e1e;    /* background */
  --colors: #333;          /* surface */
  --transition: 0.3s ease-in-out;

  /* Font shorthand: weight size/line-height family */
  --h2: bold 36px/48px var(--ff);
  --p: 18px/30px var(--ff);
}
```
