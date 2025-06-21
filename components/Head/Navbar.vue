<template>
    <div class="">
        <div class="Navbar z-10 flex items-center justify-between bg-gray-50 lg:px-10 py-3">
            <div class="basis-1/2 flex text-white py-3 text-2xl">
                <NuxtLink to="/">
                    <!-- <p class="font-bold">Niflare</p> -->
                </NuxtLink>
                <NuxtLink to="/">
                    <div class="text-black font-bold text-3xl">
                        < SS />
                    </div>
                </NuxtLink>
            </div>

            <div class="basis-1/2 flex flex-col md:flex-row justify-between md:px-4">
                <NuxtLink to="#About me">
                    <p class="text-black">About</p>
                </NuxtLink>


                <NuxtLink to="#Work">
                    <div class="text-black">Work</div>
                </NuxtLink>

                <NuxtLink to="#Testimonials">
                    <div class="text-black">Testimonials</div>
                </NuxtLink>

                <NuxtLink to="#Contact">
                    <div class="text-black">Contact</div>
                </NuxtLink>

                <NuxtLink to="#learnwithus">
                    <div class="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </div>
                </NuxtLink>
                <NuxtLink to="/Resume">
                    <div>
                        <button class="bg-black text-white font-bold py-1.5 px-5 rounded-2xl">
                            CV
                        </button>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style>
.Navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
</style>