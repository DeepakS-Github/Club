import React from 'react'

function Gallery() {
  return (
    <div class="container mx-auto px-5 py-2 lg:pt-12">
  <h2 class="mb-12 text-center text-3xl font-bold">Gallery</h2>
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://source.unsplash.com/Ap3hKZApMbg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://source.unsplash.com/r1P6hhg55Ws" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://source.unsplash.com/B2nGoi1dsI4" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://source.unsplash.com/KUT74M7MA4I" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://source.unsplash.com/_UIN-pFfJ7c" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://source.unsplash.com/S9NeuDnV0mg" />
      </div>
    </div>
  </div>
</div>
  )
}

export default Gallery