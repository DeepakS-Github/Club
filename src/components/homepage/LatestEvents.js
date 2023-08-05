import React from 'react'
import { Link } from 'react-router-dom'


function LatestEvents() {
  return (
    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32">
        <h2 class="mb-12 text-center text-3xl font-bold">Latest Events</h2>
  
        <div class="grid gap-6 lg:grid-cols-3">

          <Link to={'/events'}>
          <div
            class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/051.jpg"
              class="w-full align-middle transition duration-300 ease-linear" />
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div class="flex h-full items-end justify-start">
                  <div class="m-6 text-white">
                    <h5 class="mb-3 text-lg font-bold">I miss the sun</h5>
                    <p>
                      <small
                        >Published <u>13.01.2022</u> by Anna Maria Doe</small
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
          </div>
          </Link>
         
          <Link to={'/events'}>
          <div
            class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/044.jpg"
              class="w-full align-middle transition duration-300 ease-linear" />
            
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div class="flex h-full items-end justify-start">
                  <div class="m-6 text-white">
                    <h5 class="mb-3 text-lg font-bold">
                      Adventure in the desert
                    </h5>
                    <p>
                      <small>Published <u>12.01.2022</u> by Mark Equel</small>
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>

          </div>
          </Link>


          <Link to={'/events'}>
          <div
            class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/045.jpg"
              class="w-full align-middle transition duration-300 ease-linear" />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div class="flex h-full items-end justify-start">
                  <div class="m-6 text-white">
                    <h5 class="mb-3 text-lg font-bold">Lonely mountain</h5>
                    <p>
                      <small
                        >Published <u>10.01.2022</u> by Bilbo baggins</small
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </a>
          </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LatestEvents