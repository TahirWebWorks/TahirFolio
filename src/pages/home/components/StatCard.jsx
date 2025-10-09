import React from 'react';

function StatCard({number, title}) {
    return (
        <div>
            <div className="h-full flex flex-col items-center justify-center text-center bg-[#191818] rounded-2xl">
                <div className="text-3xl font-bold">{number}</div>
                <div className="text-gray-600 mt-2">{title}</div>
                <h2>Welcome</h2>
            </div>
        </div>
    )
}

export default StatCard;