import React from 'react'

const TimeLine = () => {
  const timeline = [
    {
      time: '20 May 2021',
      title: 'Recovery',
      description: 'Recovery of the patient'
    },
    {
      time: '15 May 2021',
      title: 'Treatment',
      description: 'Treatment of the patient'
    },
    {
      time: '12 May 2021',
      title: 'Diagnosis',
      description: 'Diagnosis of the patient'
    },
    {
      time: '10 May 2021',
      title: 'First Visit to Shushila Tiwari Hospital',
      description: 'First visit to the hospital'
    }
  ]
  return (
    <section className='bg-[#ECF6FC] rounded-t-2xl p-2 relative'>
      <div className='absolute bg-black left-6 lg:left-56 w-2 h-[95%] bottom-0'></div>
      <ul className='flex flex-col justify-evenly gap-16 lg:pl-[12.5rem]'>
        {timeline.map((item, index) => (
          <li key={index} className='flex gap-2'>
            <div className='bg-black w-10 h-10 rounded-full'></div>
            <div className='flex flex-col gap-1'>
              <p className='text-lg lg:text-xl font-robo-bold lg:absolute left-20 translate-y-2'>{item.time}</p>
              <p className='text-xl font-robo-bold'>{item.title}</p>
              <p className='text-lg'>{item.description}</p>
            </div>
          </li>
        ))}

      </ul>
    </section>
  )
}

export default TimeLine;