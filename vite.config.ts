import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const alias = [
  {
    find: '@leafygreen-ui/emotion',
    replacement: 'src/mocks/leafygreen-ui-emotion.ts',
  },
];

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias },
  plugins: [react()],
});
