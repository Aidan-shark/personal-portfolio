import React from 'react'


const Achievement = ({ title, amount, icon}) => {

    return (
    
    <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md">
        <span className="text-yellow-500 text-3xl">
            {icon}
        </span>
        <div className="flex flex-col">
            <span className="text-2xl font-bold">{amount}</span>
            <span className="text-sm text-gray-400">{title}</span>
        </div>
        </div>
    );
};
export default Achievement 