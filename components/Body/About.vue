<template>
    <div class="bg-gray-50 py-16 mt-20 text-blue-600 md:text-gray-800">
        <div id="About me" class="flex justify-center">
            <div class="w-[100px] bg-gray-200 rounded-2xl text-center text-blue-800 md:text-gray-800 font-bold">About me</div>
        </div>
        <div class="flex flex-col md:flex-row justify-around mt-10">
            <div class="mt-10 flex justify-center">
                <div class="bg-blue-900 md:w-[500px] md:h-[500px] w-[450px] h-[500px] rounded-4xl mb-4"></div>
            </div>
            <div>
                <p class="font-bold text-3xl text-center md:text-start hidden md:block">Curious about me? Here you have it:</p>
                <p class="font-bold text-3xl text-center block md:hidden">Curious about me?</p>
                <p class="font-bold text-3xl text-center md:text-start block md:hidden">Here you have it:</p>
                <!--Destop text-->
                <div class="hidden md:block">
                <p class="mt-4">I'm a passionate, <span class="underline">self-proclaimed front-end engineer</span> who
                    specializes in full</p>
                <p>stack development (Vue.js & JavaScript). I am enthusiastic about bringing the</p>
                <p>technical and visual aspects of digital products to life. User experience,</p>
                <p>pixel perfect design, and writing clear, readable, highly performant code</p>
                <p>matters to me.</p>

                <p class="mt-4">I began my journey as a web developer in 2023, and since then, I've</p>
                <p>continued to grow and evolve as a developer, taking on new challenges and</p>
                <p>learning the latest technologies along the way. Now, in my early twenties, 2</p>
                <p>years after starting my web development journey, I'm building cutting-edge</p>
                <p>web applications using modern technologies such as Nuxt.js, JavaScript,</p>
                <p>Nodesjs, Express, Tailwindcss, Supabase and much more.</p>

                <p class="mt-4">I am very much a progressive thinker and enjoy working on products end to</p>
                <p>end, from ideation all the way to development. you can follow me on <NuxtLink
                        to="https://github.com/Lekside081"> GitHub. </NuxtLink>
                </p>

                <p class="mt-4">Finally, some quick bits about me.</p>
                <div class="flex space-x-4 mt-4">
                    <div class="flex space-x-2">
                        <li>H.N.D in Computer Science</li>
                    </div>
                    <div class="flex space-x-2">
                        <li>Avid learner</li>
                    </div>
                </div>
                <div class="flex space-x-19 mt-2">
                    <div class="flex space-x-2">
                        <li>Full time freelancer</li>
                    </div>
                    <div class="flex space-x-2">
                        <li>Aspiring indie hacker</li>
                    </div>
                </div>

                <p class="mt-4">One last thing, I'm available for freelance work, so feel free to reach out and</p>
                <p>say hello! I promise I don't bite 😉</p>
                </div>
                <!--Pone text-->
                <div class="block md:hidden">
                    <p class="mt-4 text-center">I'm a passionate, <span class="underline">self-proclaimed front-end engineer</span>
                    </p>
                <p class="text-center">who specializes in full stack development (Vue.js, Reac-</p>
                <p class="text-center">t.js & Java Script). I am enthusiastic about bringing the</p>
                <p class="text-center">technical and visual aspects of digital products to life.</p>
                <p class="text-center">User experience, pixel  perfect design, and writing clear,</p>
                <p class="text-center">readable, highly performant code matters to me.</p>

                <p class="mt-4 text-center">I began my journey as a web developer in 2023, and</p>
                <p class="text-center">since then, I've continued to grow and evolve as a dev-</p>
                <p class="text-center">eloper, taking on new challenges and learning the late-</p>
                <p class="text-center">st technologies along the way. Now, in my early twent-</p>
                <p class="text-center">ies, 2 years after starting my web development journey,</p>
                <p class="text-center">I'm building cutting-edge web applications using mod-</p>
                <p class="text-center">ern technologies such as Nuxt.js, Next.js, JavaScript, </p>
                <p class="text-center">Nodesjs, Express, Tailwindcss, Supabase and much more.</p>

                <p class="mt-4 text-center">I am very much a progressive thinker and enjoy worki-</p>
                <p class="text-center">ng on products end to end, from ideation all the way</p> 
                <p class="text-center">to development. you can follow me on <NuxtLink
                        to="https://github.com/Lekside081"> GitHub. </NuxtLink>
                </p>

                <p class="mt-4 text-center">Finally, some quick bits about me.</p>
                <div class="flex space-x-5 mt-4 justify-center -ml-6">
                    <div class="flex space-x-2">
                        <li>H.N.D in Computer Science</li>
                    </div>
                    <div class="flex space-x-2">
                        <li>Avid learner</li>
                    </div>
                </div>
                <div class="flex space-x-8 mt-2 justify-center">
                    <div class="flex space-x-">
                        <li>Full time freelancer</li>
                    </div>
                    <div class="flex space-x-2">
                        <li>Aspiring indie hacker</li>
                    </div>
                </div>

                <p class="mt-4 text-center">One last thing, I'm available for freelance work, so feel</p>
                <p class="text-center">free to reach out and say hello! I promise I don't bite 😉</p>
                </div>
            </div>
        </div>
    </div>
</template>