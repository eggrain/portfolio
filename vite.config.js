import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '',
    plugins: [react()],
    server: {    
        open: true,
        // this sets a default port to 3000  
    },
})
