<template>
    <nav class="hidden lg:block">
        <ul class="flex justify-between items-center gap-8">
            <li v-for="(item, index) in menuItems" :key="index" class="group relative flex justify-between items-center gap-2">
                <!-- Parent Menu Start (Solutions, Products ...) -->
                    <!-- Menu if clickable, it doesn't have a Submenu (Contact Us, About Us) -->
                    <NuxtLink v-if="item.clickable" :to="`/${item.path}`" class="transition-all duration-300 ease-in-out text-white hover:text-primary">{{ item.title }}</NuxtLink>

                    <!-- Title if not clickable, it doesn have a Submenu (Solutions, Products, Technology) -->
                    <div v-else class="flex justify-center items-center gap-2 text-white cursor-pointer group">
                        <span class="transition-all duration-300 ease-in-out group-hover:text-primary">{{ item.title }}</span>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="stroke-white group-hover:stroke-primary transition-colors duration-300 ease-in-out" d="M1 1L7 7L13 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                <!-- Parent Menu End (Solutions, Products ...) -->

                <!-- Dropdown if Submenu exist -->
                <template v-if="item.links && item.links.length">
                    <!-- Invisible hover buffer (this is used when you are navigating to the submenu items) -->
                    <div class="absolute top-full left-0 h-[var(--header-height)] w-full group-hover:block hidden before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-transparent before:w-5 before:h-5"></div>

                    <!-- White Nav Start -->
                        <ul class="overflow-visible nav fixed top-[var(--header-height)] -translate-x-1/2 w-max min-w-[280px] flex flex-col gap-4 pt-8 pb-32 px-4 bg-white overflow-hidden invisible opacity-0 group-hover:visible group-hover:opacity-100 shadow-lg transition-opacity duration-300 ease-in-out">
                            <li v-for="(levelOneSubItem, levelOneSubItemIndex) in item.links" :key="levelOneSubItemIndex" class="group/levelOneItem relatve w-full flex flex-col gap-6">
                                
                                <template v-if="levelOneSubItem.subLinks && levelOneSubItem.subLinks.length">
                                    <!-- Check If Level One Submenu is clickable, if it's clickable then the level one submenu has a page on it's own. If not, then the Level One Submenu doesn't have a page on its own. Both may have or may not have a submenu. -->
                                    <NuxtLink v-if="levelOneSubItem.clickable" :to="`/${levelOneSubItem.path}`" class="group/icon flex justify-between items-center gap-12 py-2 px-4 group-hover/levelOneItem:text-white group-hover/levelOneItem:bg-primary rounded-lg transition duration-300 ease-in-out">
                                        <span class="font-Harmony font-bold text-sm">{{ levelOneSubItem.title }}</span>
                                        <Icon name="fa6-solid:arrow-right" class="invisible opacity-0 group-hover/icon:visible group-hover/icon:opacity-100 group-hover/levelOneItem:visible group-hover/levelOneItem:opacity-100 text-white flex-shrink-0 text-sm cursor-pointer" />
                                    </NuxtLink>
                                    

                                    <!-- Check If Level One Submenu is clickable, if it's clickable then the level one submenu has a page on it's own. If not, then the Level One Submenu doesn't have a page on its own. Both may have or may not have a submenu. -->
                                    <div v-else :to="`/${levelOneSubItem.path}`" class="group/icon flex justify-between items-center gap-12 py-2 px-4 hover:text-white hover:bg-primary rounded-lg transition duration-300 ease-in-out">
                                        <span class="font-Harmony font-bold text-sm">{{ levelOneSubItem.title }}</span>
                                        <Icon name="fa6-solid:arrow-right" class="invisible opacity-0 group-hover/icon:visible group-hover/icon:opacity-100 group-hover/levelOneItem:visible group-hover/levelOneItem:opacity-100 text-white flex-shrink-0 text-sm cursor-pointer" />
                                    </div>
                                </template>
                                
                                <!-- If Level One Submenu doesn't have a Submenu (Technology ...) -->
                                <template v-else>
                                    <NuxtLink v-if="levelOneSubItem.clickable" :to="`/${levelOneSubItem.path}`" class="flex justify-between items-center gap-12 py-2 px-4 font-Harmony font-bold text-sm hover:text-white hover:bg-primary rounded-lg transition duration-300 ease-in-out">{{ levelOneSubItem.title }}</NuxtLink>
                                    <span v-else class="flex justify-between items-center gap-12 py-2 px-4 font-Harmony font-bold text-sm hover:text-white hover:bg-primary rounded-lg transition duration-300 ease-in-out">{{ levelOneSubItem.title }}</span>
                                </template>

                                <!-- Invisible hover buffer (this is used when you are navigating to the submenu items) -->
                                <div class="absolute top-0 right-0 h-full h-full w-4 group-hover/levelOneItem:block hidden before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-transparent before:w-5 before:h-5"></div>
                                
                                <!-- Level Two Links (Category Pages; MNO, EPC, BBU, Repeater, Antenna ) -->
                                <ul v-if="levelOneSubItem.subLinks && levelOneSubItem.subLinks.length" class="absolute top-0 left-full w-max min-w-[280px] h-full flex flex-col gap-2 py-8 px-4 bg-white invisible opacity-0 group-hover/levelOneItem:visible group-hover/levelOneItem:opacity-100">
                                    <li v-for="(levelTwoSubItem, levelTwoSubItemIndex) in levelOneSubItem.subLinks" :key="levelTwoSubItemIndex" class="group/levelTwoItem relatve w-full flex flex-col gap-6">
                                        <div v-if="levelTwoSubItem.subSubLinks && levelTwoSubItem.subSubLinks.length" class="group/icon flex justify-between items-center gap-12 py-2 px-4 group-hover/levelTwoItem:text-white group-hover/levelTwoItem:bg-primary rounded-lg transition duration-300 ease-in-out">
                                            <span class="font-Harmony text-sm">{{ levelTwoSubItem.title }}</span>
                                            <Icon name="fa6-solid:arrow-right" class="invisible opacity-0 group-hover/icon:visible group-hover/icon:opacity-100 group-hover/levelTwoItem:visible group-hover/levelTwoItem:opacity-100 text-white flex-shrink-0 text-sm cursor-pointer" />
                                        </div>
                                    
                                        <NuxtLink v-else :to="`/${levelOneSubItem.path}/${levelTwoSubItem.path}`" class="flex justify-between items-center gap-12 py-2 px-4 font-Harmony text-sm hover:text-white hover:bg-primary rounded-lg transition duration-300 ease-in-out">{{ levelTwoSubItem.title }}</NuxtLink>

                                        <!-- Invisible hover buffer (this is used when you are navigating to the submenu items) -->
                                        <div class="absolute top-0 right-0 h-full h-full w-4 group-hover/levelTwoItem:block hidden before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-transparent before:w-5 before:h-5"></div>
                                    
                                        <!-- Level Three Links (Inner pages) -->
                                        <ul v-if="levelTwoSubItem.subSubLinks && levelTwoSubItem.subSubLinks.length" class="absolute top-0 left-full w-max min-w-[280px] h-full flex flex-col gap-4 py-8 px-4 bg-white invisible opacity-0 group-hover/levelTwoItem:visible group-hover/levelTwoItem:opacity-100">
                                            <li v-for="(levelThreeSubItem, levelThreeSubItemIndex) in levelTwoSubItem.subSubLinks" :key="levelThreeSubItemIndex" class="relatve w-full flex flex-col gap-6">
                                                <NuxtLink :to="`/${levelOneSubItem.path}/${levelTwoSubItem.path}/${levelThreeSubItem.path}`" class="group/icon flex justify-between items-center gap-12 py-2 px-4 font-Harmony text-sm hover:text-white hover:bg-primary rounded-lg transition duration-300 ease-in-out">{{ levelThreeSubItem.title }}</NuxtLink>
                                            </li>
                                            
                                            <!-- <li class="mt-auto">
                                                <NuxtLink :to="`/${levelOneSubItem.path}`">
                                                    <button class="p-2 min-w-[120px] text-primary bg-transparent border border-primary hover:text-white hover:bg-primary rounded-full select-none transition-all duration-300 ease-in-out">View full details</button>
                                                </NuxtLink>
                                            </li> -->
                                        </ul>
                                    </li>

                                    <li v-if="levelOneSubItem.clickable && levelOneSubItem.subLinks?.length" class="group/levelTwoItem relatve w-full flex flex-col gap-6 mt-auto px-4">
                                        <NuxtLink :to="`/${levelOneSubItem.path}`" class="block">
                                            <button class="p-1 min-w-[120px] text-primary bg-transparent border border-primary hover:text-white hover:bg-primary rounded-full select-none transition-all duration-300 ease-in-out">View full details</button>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    <!-- White Nav End -->
                </template>
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