import React from 'react'

function Card() {
    return (
        <>
            <div className='h-[50vh] w-[20vw] border-double border-white border-4 rounded-2xl text-center flex items-center justify-center flex-col gap-4 p-3'>
                <h3 className='text-white text-2xl'>Toggle to change Theme</h3>



                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-9 h-5 bg-neutral-quaternary outline-4 outline-black peer-focus:outline-2 peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:inset-s-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
                        {/* <span class="select-none ms-3 text-sm font-medium text-heading">Toggle me</span> */}
                </label>


            </div>
        </>
    )
}

export default Card