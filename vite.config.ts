import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Conditionally import Replit plugins only if available
const isReplit = process.env.REPL_ID !== undefined;
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig(async () => {
  const plugins: any[] = [react()];
  
  // Add Replit plugins only in Replit environment and not in production
  if (isReplit && !isProduction) {
    try {
      const runtimeErrorOverlay = await import("@replit/vite-plugin-runtime-error-modal");
      const cartographer = await import("@replit/vite-plugin-cartographer");
      
      plugins.push(runtimeErrorOverlay.default());
      plugins.push(cartographer.cartographer());
    } catch (error) {
      console.log("Replit plugins not available, continuing without them");
    }
  }
  
  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: false,
      },
    },
  };
});
