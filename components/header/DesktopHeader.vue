<template>
    <nav class="hidden lg:block">
        <!--  44px to match the height of the other 2 dropdown -->
        <ul class="flex items-center gap-12">
            <li v-for="(item, index) in menuItems" :key="index" :class="['group relative', { 'pointer-events-none': disableHover }]">
                <div class="flex justify-between items-center gap-2">
                    <!-- Link if clickable -->
                    <NuxtLink v-if="item.clickable" :to="`/${item.path}`" class="transition-all duration-300 ease-in-out text-white hover:text-primary">{{ item.title }}</NuxtLink>
                    
                    <!-- Title if not clickable -->
                    <div v-else class="flex justify-center items-center gap-2 text-white cursor-pointer group">
                        <span class="transition-all duration-300 ease-in-out group-hover:text-primary">{{ item.title }}</span>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="stroke-white group-hover:stroke-primary transition-colors duration-300 ease-in-out" d="M1 1L7 7L13 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <!-- Dropdown if children exist -->
                    <template v-if="item.links && item.links.length">
                        <!-- Invisible hover buffer (1.5 padding, 1px border bottom) -->
                        <div class="absolute top-full left-0 h-[var(--header-height)] w-full group-hover:block hidden before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-transparent before:w-5 before:h-5"></div>

                        <!-- Children Routes Dropdown -->
                        <div class="nav fixed top-[var(--header-height)] left-0 z-[1] w-full py-24 border-2 border-t border-[#D4D4D422] bg-white overflow-hidden invisible opacity-0 group-hover:visible group-hover:opacity-100 shadow-lg transition-opacity duration-300 ease-in-out">
                            <div class="container">
                                <div class="col-span-2 flex justify-between gap-x-8">
                                    <div v-for="(subItem, subItemIndex) in item.links" :key="subItemIndex" class="w-full flex flex-col text-black gap-6">
                                        <template v-if="subItem.subLinks && subItem.subLinks.length">
                                            <!-- Title (clickable or not) -->
                                            <NuxtLink v-if="subItem.clickable" :to="`/${subItem.path}`" class="font-Harmony font-bold text-lg hover:text-primary transition-colors duration-300">{{ subItem.title }}</NuxtLink>
                                            <span v-else class="font-Harmony font-bold text-lg text-black">{{ subItem.title }}</span>

                                            <!-- SubLinks container with gap-3 -->
                                            <div class="flex flex-col gap-6">
                                                <div v-for="(subLink, subLinkIndex) in subItem.subLinks" :key="subLinkIndex" class="flex flex-col gap-3">
                                                    <!-- Main sublink -->
                                                    <div v-if="subLink.subSubLinks && subLink.subSubLinks.length" :to="`/${subItem.path}/${subLink.path}`" class="transition-all duration-300 font-semibold">{{ subLink.title }}</div>
                                                    <NuxtLink v-else :to="`/${subItem.path}/${subLink.path}`" exactActiveClass="active" :class="['transition-all duration-300 cursor-pointer', subLink.subSubLinks && subLink.subSubLinks.length ? 'font-semibold' : '' ]">{{ subLink.title }}</NuxtLink>

                                                    <!-- SubSubLinks -->
                                                    <div v-if="subLink.subSubLinks && subLink.subSubLinks.length" class="flex flex-col gap-2">
                                                        <NuxtLink v-for="(subSubLink, subSubLinkIndex) in subLink.subSubLinks" :key="subSubLinkIndex" :to="`/${subItem.path}/${subLink.path}/${subSubLink.path}/`" exactActiveClass="active" class="text-sm rounded-full transition-all duration-300 cursor-pointer">{{ subSubLink.title }}</NuxtLink>
                                                    </div>
                                                </div>
                                            </div>

                                            <NuxtLink v-if="subItem.showDiveLink" :to="`/${subItem.path}`" class="flex items-center gap-1 text-primary">
                                                <span>Take a deeper dive</span>
                                                <Icon name="fa6-solid:arrow-right" class="cursor-pointer transition-transform duration-300 ease-in-out" />
                                            </NuxtLink>
                                        </template>
                                        
                                        <!-- Regular link if no subLinks -->
                                        <NuxtLink v-else :to="`/${subItem.path}`" class="hover:text-primary transition-all duration-300 ease-in-out">{{ subItem.title }}</NuxtLink>
                                    </div>
                                </div>

                                <!-- <div class="w-full flex flex-col gap-4 border-l border-t-0 text-black pl-6 xl:pl-12">
                                    <p class="text-[#A2A2A2] uppercase text-sm">Featured Items</p>
                                    <div class="flex flex-col gap-4">
                                        <div class="w-full flex gap-4 border rounded-lg p-4">
                                            <div class="flex-shrink-0">
                                                <NuxtImg class="w-[80px]" src="/images/core-network-menu.webp" alt="Core Network" width="86" height="72" />
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <p class="text-sm">MNO Solution</p>
                                                <p class="text-[10px] text-[#A2A2A2]">End-to-end solution compliant with 3GPP standards, offering full functionality, third-party device integration, and scalable user capacity from 100 to 10 million</p>
                                            </div>
                                        </div>
                                        <div class="w-full flex gap-4 border rounded-lg p-4">
                                            <div class="flex-shrink-0">
                                                <NuxtImg class="w-[80px]" src="/images/4g-lte-micro-bbu-menu.webp" alt="4G LTE MICRO BBU" width="86" height="72" />
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <p class="text-sm">4G LTE BBU</p>
                                                <p class="text-[10px] text-[#A2A2A2]">Distributed Site - Micro BBU</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </template>
                </div>
            </li>
        </ul>
    </nav>

    <div class="hidden lg:flex justify-between items-center gap-6">
        <NuxtLink to="/get-a-quote">
            <button class="p-2 min-w-[120px] text-white bg-primary hover:text-black hover:bg-white rounded-full select-none transition-all duration-300 ease-in-out">Get a Quote</button>
        </NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps({
        menuItems: Array,
    });

    const disableHover = ref(false)
    const route = useRoute()

    watch(route, () => {
        disableHover.value = true
        // Re-enable hover after short delay
        setTimeout(() => {
            disableHover.value = false
        }, 600) // enough to avoid re-hover edge cases
    })
</script>