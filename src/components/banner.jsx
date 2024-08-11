import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Understand User Flow.
          <strong className="font-extrabold text-gray-800 sm:block"> Increase Conversion. </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
          numquam ea!
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="block w-full rounded bg-grey-600 px-12 py-3 text-sm font-medium text-red shadow hover:bg-grey-700 focus:outline-none focus:ring active:bg-grey-500 sm:w-auto"
            href={'/recipes'}
          >
            Explore Recipes
          </Link>
  
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner