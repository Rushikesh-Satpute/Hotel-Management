import React from 'react'

function DefaultLayout({ children }) {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Dark mode background */}
        <div className="absolute inset-0 bg-cover bg-center dark:bg-[url('./bg.jpg')]"></div>

        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>

    </>
  )
}

export default DefaultLayout;
