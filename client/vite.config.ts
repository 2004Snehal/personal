import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Conditionally import Replit plugins only if available
const isReplit = process.env.REPL_ID !== undefined;
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig(async () => {
  const plugins = [react()];
  
  // Add Replit plugins only in Replit environment and not in production
  if (isReplit && !isProduction) {
    try {
      const { default: runtimeErrorOverlay } = await import("@replit/vite-plugin-runtime-error-modal");
      const { cartographer } = await import("@replit/vite-plugin-cartographer");
      
      plugins.push(runtimeErrorOverlay());
      plugins.push(cartographer());
    } catch (error) {
      console.log("Replit plugins not available, continuing without them");
    }
  }
  
  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "../shared"),
        "@assets": path.resolve(__dirname, "../attached_assets"),
      },
    },
    build: {
      outDir: path.resolve(__dirname, "../dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: false,
      },
    },
  };
});
