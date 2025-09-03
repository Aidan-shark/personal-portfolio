import React from 'react'
import { FaGithub } from "react-icons/fa";


const Achievement = () => {

    return <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md">
        <span className="text-yellow-500 text-3xl">
            <FaGithub />
        </span>
        <div className="flex flex-col">
            <span className="text-2xl font-bold">333</span>
            <span className="text-sm text-gray-400">Github repos</span>
        </div>
        </div>
}
export default Achievement 