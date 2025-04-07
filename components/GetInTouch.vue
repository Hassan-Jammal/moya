<template>
    <section class="absolute top-0 left-0 w-full -translate-y-1/2">
        <div class="container">
            <div class="relative py-12 px-4 lg:px-24 bg-primary rounded-3xl overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full">
                    <NuxtImg class="w-full h-full object-cover mix-blend-color-burn" src="/images/have-questions-talk-to-us-bg.webp" alt="" width="" height="" />
                </div>

                <div class="flex max-lg:flex-col justify-between items-center gap-4 max-lg:text-center text-white">
                    <div class="flex flex-col gap-4">
                        <h2 class="text-2xl lg:text-5xl font-semibold">Have Questions? Talk To Us</h2>
                        <p class="text-sm">Get in touch with us at Moya easily! Whether you have questions or need assistance.</p>
                    </div>
                    <NuxtLink to="/">
                        <button class="p-2 min-w-[120px] text-sm text-black bg-white hover:text-white hover:bg-black rounded-full select-none transition-all duration-300 ease-in-out">Get in Touch</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>