# SF Pro Display Font Guide

## Cấu hình Font

Font SF Pro Display đã được cấu hình trong ứng dụng với các weights và styles khác nhau:

### Font Weights Available:

1. **Ultralight (100)** - Italic
2. **Thin (200)** - Italic  
3. **Light (300)** - Italic
4. **Regular (400)** - Normal
5. **Medium (500)** - Normal
6. **Semibold (600)** - Italic
7. **Bold (700)** - Normal
8. **Heavy (800)** - Italic
9. **Black (900)** - Italic

## Cách sử dụng

### 1. Sử dụng CSS Classes:

```css
/* Các class có sẵn */
.sf-pro-ultralight    /* Weight: 100, Style: Italic */
.sf-pro-thin          /* Weight: 200, Style: Italic */
.sf-pro-light         /* Weight: 300, Style: Italic */
.sf-pro-regular       /* Weight: 400, Style: Normal */
.sf-pro-medium        /* Weight: 500, Style: Normal */
.sf-pro-semibold      /* Weight: 600, Style: Italic */
.sf-pro-bold          /* Weight: 700, Style: Normal */
.sf-pro-heavy         /* Weight: 800, Style: Italic */
.sf-pro-black         /* Weight: 900, Style: Italic */
```

### 2. Sử dụng trong JSX/TSX:

```tsx
// Sử dụng class names
<h1 className="sf-pro-bold">Bold Title</h1>
<p className="sf-pro-regular">Regular text</p>
<span className="sf-pro-medium">Medium weight text</span>

// Kết hợp với Tailwind
<div className="text-2xl sf-pro-bold text-gray-900">
  Large Bold Text
</div>
```

### 3. Sử dụng CSS Variables:

```css
/* Font family */
font-family: var(--font-sf-pro-display);

/* Kết hợp với font-weight */
font-family: var(--font-sf-pro-display);
font-weight: 400; /* Regular */
font-weight: 500; /* Medium */
font-weight: 700; /* Bold */
```

## Best Practices

### 1. Typography Hierarchy:

```tsx
// Headings
<h1 className="text-3xl sf-pro-bold">Main Heading</h1>
<h2 className="text-2xl sf-pro-semibold">Section Heading</h2>
<h3 className="text-xl sf-pro-medium">Subsection Heading</h3>

// Body text
<p className="sf-pro-regular">Regular body text</p>
<p className="sf-pro-medium">Medium weight for emphasis</p>

// Small text
<span className="text-sm sf-pro-regular">Small text</span>
```

### 2. Responsive Typography:

```tsx
// Responsive font sizes
<h1 className="text-2xl md:text-3xl lg:text-4xl sf-pro-bold">
  Responsive Heading
</h1>
```

### 3. Color Combinations:

```tsx
// Dark text on light background
<h1 className="text-gray-900 sf-pro-bold">Dark Text</h1>

// Light text on dark background  
<h1 className="text-white sf-pro-bold">Light Text</h1>

// Muted text
<p className="text-gray-600 sf-pro-regular">Muted text</p>
```

## File Structure

```
src/
├── app/
│   ├── fonts.ts          # Font configuration
│   ├── fonts.css         # Font utility classes
│   └── globals.css       # Global styles with font imports
public/
└── fonts/
    └── SF-Pro/           # Font files
        ├── SFPRODISPLAYREGULAR.OTF
        ├── SFPRODISPLAYMEDIUM.OTF
        ├── SFPRODISPLAYBOLD.OTF
        └── ... (other weights)
```

## Performance

- Fonts được load với `display: swap` để tránh layout shift
- Sử dụng `next/font/local` để tối ưu performance
- Font files được serve từ `/public/fonts/` directory

## Browser Support

SF Pro Display được hỗ trợ trên tất cả các trình duyệt hiện đại:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Fallback Fonts

Nếu SF Pro Display không load được, hệ thống sẽ fallback về:
```css
font-family: var(--font-sf-pro-display), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
``` 