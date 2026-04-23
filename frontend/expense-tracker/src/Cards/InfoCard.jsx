import React from 'react'

const InfoCard = ({icon, label,value, color}) => {
  return (
    <div className='card flex gap-6 items-center hover:-translate-y-2 cursor-default'>
        <div className={`w-16 h-16 flex items-center justify-center text-[28px] text-white ${color} rounded-2xl drop-shadow-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110`}>
            {icon}
        </div>
        <div>
            <h6 className='text-slate-500 text-[13px] font-semibold uppercase tracking-wider mb-1'>{label}</h6>
            <span className='text-2xl font-bold text-slate-800 tracking-tight'>₱ {value}</span>
        </div>
    </div> 
  )
}

export default InfoCard