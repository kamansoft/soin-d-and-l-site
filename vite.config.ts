
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { execSync } from 'child_process';

// Generate gallery data before build
const generateGalleryPlugin = () => ({
  name: 'generate-gallery',
  buildStart() {
    try {
      execSync('node scripts/generate-gallery.js', { stdio: 'inherit' });
    } catch (error) {
      console.warn('Failed to generate gallery data:', error);
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    generateGalleryPlugin(),
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
