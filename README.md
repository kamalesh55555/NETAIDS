# ICISD Web Application (Improved)

This repository contains the source code for the **ICISD Web Application**, a modern college conference website built with React, TypeScript, and Vite. It features a responsive design, smooth navigation, and is optimized for deployment on Vercel.

---

## 🚀 Live Deployment

🔗 https://srm-icisd-improved-st9q.vercel.app/

---

## ✨ Improvements in this Version

- **Deployment Ready**: The app now handles missing Clerk authentication keys gracefully, preventing crashes on first run.
- **Enhanced UX**: Added smooth scroll behavior, custom text selection colors, and interactive button animations.
- **Fixed Navigation**: Corrected broken links in the header and footer.
- **Optimized UI**: Improved logo scaling and responsive layouts for mobile devices.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion, Lucide React
- **UI Components**: shadcn/ui (Radix UI)
- **Auth**: Clerk (Optional)

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd icisd-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) in your browser.

---

## 📦 Deployment on Vercel

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import your repository.
3. Vercel will automatically detect the Vite project.
4. (Optional) Add `VITE_CLERK_PUBLISHABLE_KEY` in the Environment Variables section if you want to enable authentication.
5. Click **Deploy**.

---

## 📄 License

This project is for educational and conference purposes.
