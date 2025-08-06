# Layout Components

Hệ thống layout responsive cho ứng dụng AI Chat với 2 layout chính:

## Components

### 1. DesktopLayout
Layout cho màn hình PC với sidebar và main content area.

**Props:**
- `children`: Nội dung chính
- `sidebar`: Component sidebar tùy chỉnh (optional)

**Features:**
- Sidebar cố định bên trái
- Header với title
- Main content area với scroll
- Responsive design

### 2. MobileLayout
Layout cho màn hình mobile với bottom navigation.

**Props:**
- `children`: Nội dung chính
- `title`: Tiêu đề trang (optional, default: "AI Chat")

**Features:**
- Header với title
- Bottom navigation với icons
- Main content area với scroll
- Touch-friendly design

### 3. ResponsiveLayout
Component chính để tự động chuyển đổi giữa Desktop và Mobile layout.

**Props:**
- `children`: Nội dung chính
- `title`: Tiêu đề trang (optional)
- `sidebar`: Component sidebar tùy chỉnh (optional)

**Features:**
- Tự động detect screen size
- Chuyển đổi layout dựa trên breakpoint (768px)
- Responsive design

## Usage

### Cách sử dụng cơ bản:

```tsx
import { ResponsiveLayout } from '@/components/layout';

export default function MyPage() {
  return (
    <ResponsiveLayout title="My Page">
      <div>Your content here</div>
    </ResponsiveLayout>
  );
}
```

### Sử dụng với custom sidebar:

```tsx
import { ResponsiveLayout } from '@/components/layout';

function CustomSidebar() {
  return (
    <div className="px-4 space-y-2">
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
        Custom Link 1
      </a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
        Custom Link 2
      </a>
    </div>
  );
}

export default function MyPage() {
  return (
    <ResponsiveLayout title="My Page" sidebar={<CustomSidebar />}>
      <div>Your content here</div>
    </ResponsiveLayout>
  );
}
```

### Sử dụng layout riêng lẻ:

```tsx
import { DesktopLayout, MobileLayout } from '@/components/layout';

// Chỉ sử dụng Desktop layout
export default function DesktopOnlyPage() {
  return (
    <DesktopLayout>
      <div>Desktop only content</div>
    </DesktopLayout>
  );
}

// Chỉ sử dụng Mobile layout
export default function MobileOnlyPage() {
  return (
    <MobileLayout title="Mobile Page">
      <div>Mobile only content</div>
    </MobileLayout>
  );
}
```

## Breakpoints

- **Desktop**: >= 768px (md breakpoint)
- **Mobile**: < 768px

## Styling

Tất cả components sử dụng Tailwind CSS classes và có thể tùy chỉnh dễ dàng:

- Background colors: `bg-gray-50`, `bg-white`
- Text colors: `text-gray-900`, `text-gray-600`, `text-gray-500`
- Border colors: `border-gray-200`
- Shadow: `shadow-sm`, `shadow-lg`
- Hover effects: `hover:bg-gray-100`, `hover:text-blue-600`

## Customization

Bạn có thể tùy chỉnh:

1. **Colors**: Thay đổi các class màu sắc
2. **Spacing**: Điều chỉnh padding và margin
3. **Typography**: Thay đổi font sizes và weights
4. **Icons**: Thay thế SVG icons trong navigation
5. **Layout**: Điều chỉnh width của sidebar hoặc height của components 