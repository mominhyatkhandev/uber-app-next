import React from 'react'

const AutoCompleteAddress = () => {
  return (
    <div className='mt-5'>
        <div>
            <label className='text-slate-400'>Where From</label>
            <input type='text' className='bg-white p-1 border-[1px] w-full rounded-sm outline-none focus:border-yellow-300'/>
        </div>
        <div className='mt-2'>
            <label className='text-slate-400'>Where To</label>
            <input type='text' className='bg-white p-1 border-[1px] w-full rounded-sm outline-none focus:border-yellow-300'/>
        </div>
    </div>
  )
}

export default AutoCompleteAddress