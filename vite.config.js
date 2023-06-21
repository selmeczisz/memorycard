import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'


export default defineConfig({
  plugins: [
    UnoCSS({
      shortcuts:[  
        {h1:'backdrop-blur text-center text-10 font-800 c-blue-600 p-2'},
        {container:'bg-gradient-to-b from-blue-50 to-blue-600 w-full min-h-full absolute top-0 left-0'},
        {btn:'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'},
        {s4: 'bg-gray-200 p-1 text-center w-[11vw] h-[11vw] text-[9vw] flex items-center justify-center'},
        {s8: 'bg-gray-200 p-1 text-center w-[6vw] h-[6vw] text-[4vw] flex items-center justify-center'},

      ],
      
        }),
      
    
    react()]})
      
