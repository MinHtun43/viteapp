import React from 'react'

const Container = ({ children }) => {
  return (
    <section className='max-w-screen lg:max-w-[700px] md:max-w-[700px] mx-auto'>{children}</section>
  )
}

export default Container
