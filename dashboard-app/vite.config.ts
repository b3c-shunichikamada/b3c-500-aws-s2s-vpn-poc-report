import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({plugins:[tailwindcss()],base:'/b3c-500-poc-reports/',build:{outDir:'../docs',emptyOutDir:false,assetsDir:'dashboard-assets'}});
