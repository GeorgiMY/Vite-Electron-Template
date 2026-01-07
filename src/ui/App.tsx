import { useState } from 'react'
import { Button } from "@/components/ui/button"
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='text-center mt-5'>
            <h1 className="text-3xl font-bold">
                Electron + Vite + React + Typescript + TailWindCSS + ShadCN
            </h1>
            <div className='flex justify-center items-center my-5'>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="w-32 h-32" alt="React logo" />
                </a>
            </div>
            <div className="card">
                <button className='bg-gray-300 py-4 px-5 rounded-xl cursor-pointer mb-4 hover:bg-sky-400 active:bg-sky-300' onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/ui/App.tsx</code> to change the page
                </p>

                <p>
                    You can add ShadCN elements using <code>npx shadcn@latest add element</code>
                </p>
            </div>

            <Button className='mb-10 mt-5 cursor-pointer' variant="outline">ShadCN Button</Button>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                href="https://buymeacoffee.com/georgimy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold bg-yellow-300 text-black py-4 px-5 rounded-xl cursor-pointer hover:bg-yellow-400 active:outline-2 active:outline-offset-2 transition-colors"
                >
                ☕ Buy me a coffee ☕
                </a>

                <a
                href="https://x.com/GeorgiMY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold bg-black text-white py-4 px-5 rounded-xl cursor-pointer hover:bg-neutral-800 active:outline-2 active:outline-offset-2 transition-colors"
                >
                Follow me on X @GeorgiMY
                </a>
            </div>
        </div>
    )
}

export default App
