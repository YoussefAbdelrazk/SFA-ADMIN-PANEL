# Franca Admin Panel - لوحة تحكم فرانكا

A modern, responsive admin dashboard built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components. The dashboard features Arabic RTL support and is designed for fitness/training platform management.

## 🚀 Features

- **Arabic RTL Support**: Full right-to-left layout with Arabic typography
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Works perfectly on all device sizes
- **TypeScript**: Full type safety and better development experience
- **Component-Based Architecture**: Modular and maintainable code structure

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Arabic font support
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── Dashboard/           # Dashboard-specific components
│   │   ├── Dashboard.tsx    # Main dashboard component
│   │   ├── KPICard.tsx      # KPI metric cards
│   │   ├── VisitorChart.tsx # Visitor statistics chart
│   │   ├── TopPerformers.tsx # Top trainers and videos
│   │   └── index.ts         # Component exports
│   ├── DashboardLayout/     # Layout components
│   │   ├── DashboardLayout.tsx # Main layout wrapper
│   │   └── index.ts
│   ├── Header/              # Header components
│   │   ├── Header.tsx       # Top header with search and profile
│   │   └── index.ts
│   ├── Sidebar/             # Navigation sidebar
│   │   ├── Sidebar.tsx      # Left navigation menu
│   │   └── index.ts
│   └── ui/                  # shadcn/ui components
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
└── lib/
    └── utils.ts             # Utility functions (cn helper)
```

## 🎨 Components Overview

### Dashboard Layout
- **DashboardLayout**: Main wrapper with RTL support
- **Sidebar**: Left navigation with Arabic menu items
- **Header**: Top header with search, notifications, and user profile

### Dashboard Components
- **KPICard**: Displays key performance indicators with metrics
- **VisitorChart**: Chart component for visitor statistics
- **TopPerformers**: Lists of top trainers and videos

### Navigation Items
- الرئسيه (Dashboard)
- العملاء (Clients)
- ارسال اشعار (Send Notification)
- المدربين (Trainers)
- الفيديوهات (Videos)
- البرامج (Programs)
- وحده التحكم (Control Unit)
- الاشتراكات (Subscriptions)
- إدارة FAQ (Manage FAQ)
- إدارة من نحن (Manage About Us)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd franca-admin-panel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install shadcn/ui components** (already done)
   ```bash
   npx shadcn@latest add avatar input button card badge separator tabs
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Features

### Arabic RTL Support
- Full right-to-left layout support
- Cairo font family for Arabic text
- Proper RTL scrollbars and navigation
- Arabic placeholder text and labels

### Responsive Design
- Mobile-first approach
- Grid-based layout system
- Flexible card layouts
- Optimized for all screen sizes

### Modern UI Components
- shadcn/ui components for consistency
- Tailwind CSS for styling
- Lucide React icons
- Smooth hover effects and transitions

## 🔧 Customization

### Adding New Components
1. Create component in appropriate folder
2. Export from index.ts file
3. Import and use in Dashboard component

### Styling
- Use Tailwind CSS classes
- Follow existing color scheme (purple theme)
- Maintain RTL support with `dir="rtl"`

### Adding New Navigation Items
1. Update `navigationItems` array in `Sidebar.tsx`
2. Add appropriate icon from Lucide React
3. Update routing if needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The project is ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the development team for any contributions or questions.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
