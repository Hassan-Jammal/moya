<template>
    <nav class="hidden lg:block">
        <!--  44px to match the height of the other 2 dropdown -->
        <ul class="flex items-center gap-12">
            <li v-for="(item, index) in menuItems" :key="index" class="relative group">
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
                        <div class="nav fixed top-[var(--header-height)] left-0 z-[1] w-full py-24 border-2 border-t border-[#D4D4D422] bg-white overflow-hidden invisible opacity-0 group-hover:visible group-hover:opacity-100 shadow-lg transition-opacity duration-300 ease-in-out" @mouseleave="hideNav" ref="navMenu">
                            <div class="container grid grid-cols-3 gap-6 xl:gap-12">
                                <div class="col-span-2 flex justify-evenly gap-x-4">
                                    <div v-for="(subItem, subItemIndex) in item.links" :key="subItemIndex" class="flex flex-col text-black gap-8">
                                        <!-- Check if the subItem has subLinks -->
                                        
                                        <template v-if="subItem.subLinks && subItem.subLinks.length">
                                            <NuxtLink v-if="subItem.clickable" :to="`/${subItem.path}`" class="font-Harmony font-bold">{{ subItem.title }}</NuxtLink>
                                            <span v-else class="font-Harmony font-bold">{{ subItem.title }}</span>
                                            <div class="flex flex-col gap-6">
                                                <NuxtLink v-for="(subLink, subLinkIndex) in subItem.subLinks" :key="subLinkIndex" :to="`/${subItem.path}/${subLink.path}`" @click="hideNav" class="link rounded-full hover:bg-primary/15 cursor-pointer select-none transition-all duration-300 ease-in-out">{{ subLink.title }}</NuxtLink>
                                            </div>
                                        </template>

                                        <!-- If subItem doesn't have subLinks, treat it as a normal link -->
                                        <NuxtLink v-else :to="`/${subItem.path}`" class="link hover:text-primary transition-all duration-300 ease-in-out">{{ subItem.title }}</NuxtLink>
                                    </div>
                                </div>
                                <div class="w-full flex flex-col gap-4 border-l border-t-0 text-black pl-6 xl:pl-12">
                                    <p class="text-[#A2A2A2] uppercase text-sm">Featured Items</p>
                                    <div class="flex flex-col gap-4">
                                        <div class="w-full flex items-center gap-4 border rounded-lg p-4">
                                            <div class="flex-shrink-0">
                                                <NuxtImg class="w-full" src="/images/core-network-menu.png" alt="Core Network" width="86" height="72" />
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <p class="text-sm">MNO Solution</p>
                                                <p class="text-[10px] text-[#A2A2A2]">End-to-end solution compliant with 3GPP standards, offering full functionality, third-party device integration, and scalable user capacity from 100 to 10 million</p>
                                            </div>
                                        </div>
                                        <div class="w-full flex items-center gap-4 border rounded-lg p-4">
                                            <div class="flex-shrink-0">
                                                <NuxtImg class="w-full" src="/images/4g-lte-micro-bbu-menu.png" alt="4G LTE MICRO BBU" width="86" height="72" />
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <p class="text-sm">4G LTE BBU</p>
                                                <p class="text-[10px] text-[#A2A2A2]">Distributed Site - Micro BBU</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

    
    const navMenu = ref(null);

    const hideNav = () => {
        if (navMenu.value) {
            navMenu.value.classList.remove('group-hover:visible', 'group-hover:opacity-100');
            navMenu.value.classList.add('invisible', 'opacity-0');
        }
    };
</script>