import { defineConfig } from 'vite'
import { resolve } from 'path'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [basicSsl(), react()],
  resolve: {
    alias: {'@': resolve(__dirname, './src'),
    }
  }
})
