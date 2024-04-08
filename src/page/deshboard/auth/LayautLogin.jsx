import React from 'react';

const LayautLogin = ({ children }) => {
    return (
        <div>
            <div className='bg-red-300 h-screen w-screen flex items-center justify-center'>
                <div className="border-[#5c5e61] border-[2px] rounded-[5px] p-[30px] bg-white max-w-full w-auto md:w-[70%]">
                    {children}

                </div>
            </div>
        </div>
    );
}

export default LayautLogin;
