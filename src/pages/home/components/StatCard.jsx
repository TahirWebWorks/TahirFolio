import React from 'react';

function StatCard({number, title}) {
    return (
        <div>
            <div className="h-32 sm:h-40 lg:h-full flex flex-col items-center justify-center text-center bg-[#191818] rounded-2xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-white">{number}</div>
                <div className="text-gray-400 mt-2 text-sm sm:text-base">{title}</div>
            </div>
        </div>
    )
}

export default StatCard;