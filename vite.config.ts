// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇 Ajoute ceci si ton dépôt s'appelle "mon-projet"
export default defineConfig({
	base: "/Project-2/",
	plugins: [react()],
});
