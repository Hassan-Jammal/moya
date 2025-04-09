<template>
    <nav id="mobile-nav" :class="{ '-translate-x-full': !isNavOpen }" class="block lg:hidden fixed top-[var(--header-height)] left-0 h-dvh w-full bg-white z-[2] transition-all duration-500 ease-in-out">
        <!-- Scrollable content container with bottom padding -->
        <div class="container relative h-full pb-48 overflow-y-scroll">
            <ul class="flex flex-col gap-6 pt-6">
                <li v-for="(item, itemIndex) in menuItems" :key="itemIndex" class="border-b border-[#E5E5E5] pb-6">
                    <!-- Link if clickable -->
                    <NuxtLink v-if="item.clickable" :to="`/${item.path}`" class="link text-xl font-bold">{{ item.title }}</NuxtLink>

                    <!-- Title if not clickable -->
                    <div v-else @click="toggleActive(itemIndex)" class="flex justify-between items-center">
                        <span class="text-xl font-bold transition-all duration-300 ease-in-out" :class="{ 'text-primary': activeIndices[itemIndex] }">{{ item.title }}</span>
                        <NuxtImg v-if="item.links && item.links.length" class="transition-transform duration-300 ease-in-out" :class="{ 'rotate-180': activeIndices[itemIndex] }" :src="`/images/icons/chevron-down-${activeIndices[itemIndex] ? 'primary': 'black'}.svg`" alt="Chevron Down" width="10" height="6" />
                    </div>

                    <!-- Child Items -->
                    <ul v-if="item.links && item.links.length" :class="activeIndices[itemIndex] ? 'max-h-[1000px]' : 'max-h-0'" class="children-menu flex flex-col gap-12 rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
                        <li v-for="(subItem, subItemIndex) in item.links" :key="subItemIndex" :class="{ 'mt-4': subItemIndex === 0, 'mb-4': subItemIndex === item.links.length - 1 }">
                            <div v-if="subItem.subLinks && subItem.subLinks.length" @click.stop="toggleActive(`${itemIndex}-${subItemIndex}`)" class="flex justify-between items-center">
                                <NuxtLink v-if="subItem.subLinks.clickable" :to="`/${subItem.path}`" class="flex flex-col gap-1">
                                    <span class="text-base font-Harmony font-bold">{{ subItem.title }}</span>
                                    <p class="text-xs text-[#A2A2A2]">{{ subItem.sub_title }}</p>
                                </NuxtLink>
                                <div v-else class="flex flex-col gap-1">
                                    <span class="text-base font-Harmony font-bold">{{ subItem.title }}</span>
                                    <p class="text-xs text-[#A2A2A2]">{{ subItem.sub_title }}</p>
                                </div>
                                <!-- <NuxtImg v-if="subItem.subLinks && subItem.subLinks.length" class="transition-transform duration-300 ease-in-out" :class="{ 'rotate-180': activeIndices[`${itemIndex}-${subItemIndex}`] }" src="/images/icons/chevron-down-black.svg" alt="Chevron Down" width="10" height="6" /> -->
                            </div>

                            <NuxtLink v-else :to="`/${subItem.path}`" class="link">{{ subItem.title }}</NuxtLink>

                            <!-- Sub-links -->
                            <ul v-if="subItem.subLinks && subItem.subLinks.length" :class="activeIndices[`${itemIndex}-${subItemIndex}`] ? 'max-h-[700px]' : 'max-h-[700px]'" class="flex flex-col gap-4 mt-6 transition-all duration-500 ease-in-out overflow-hidden">
                                <li v-for="(subSubItem, subSubIndex) in subItem.subLinks" :key="subSubIndex">
                                    <div class="flex items-center gap-4">
                                        <NuxtImg v-if="subSubItem.icon" class="w-min" :src="`/images/icons/${subSubItem.icon}.svg`" :alt="subSubItem.title" width="100" height="100" />
                                        <NuxtLink :to="`/${subItem.path}/${subSubItem.path}`" exactActiveClass="active" class="link text-lg font-bold">{{ subSubItem.title }}</NuxtLink>
                                    </div>
                                    <!-- :to="`/${subItem.path}/${subLink.path}`" -->
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <!-- Featured Items -->
            <div class="w-full flex flex-col gap-4 text-black pt-6 mt-6">
                <p class="text-[#A2A2A2] uppercase text-sm">Featured Items</p>
                <div class="flex flex-col gap-4">
                    <NuxtLink to="/solutions/core-network/mno-solution" class="link w-full flex items-center gap-4 border rounded-lg p-4">
                        <NuxtImg class="link" src="/images/core-network-menu.webp" alt="Core Network" width="86" height="72" />
                        <div class="link flex flex-col gap-2">
                            <p class="link text-sm">MNO Solution</p>
                            <p class="link text-[10px] text-[#A2A2A2]">End-to-end solution compliant with 3GPP standards, offering full functionality, third-party device integration, and scalable user capacity from 100 to 10 million.</p>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/products/4g5g-ran/baseband-unit" class="link w-full flex items-center gap-4 border rounded-lg p-4">
                        <NuxtImg class="link" src="/images/4g-lte-micro-bbu-menu.webp" alt="4G LTE MICRO BBU" width="86" height="72" />
                        <div class="link flex flex-col gap-2">
                            <p class="link text-sm">4G LTE BBU</p>
                            <p class="link text-[10px] text-[#A2A2A2]">Distributed Site - Micro BBU</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Get Quote Button positioned absolutely at the bottom of the nav -->
        <div class="absolute bottom-[var(--header-height)] left-1/2 -translate-x-1/2 flex lg:hidden justify-center items-center gap-6 w-full bg-white border-t py-2 z-[3]">
            <NuxtLink to="/get-a-quote" class="link">
                <button class="link py-2 px-6 text-white bg-primary rounded-full select-none transition-all duration-300 ease-in-out">Get a Quote</button>
            </NuxtLink>
        </div>
    </nav>
</template>


<script setup>
    const props = defineProps({
        menuItems: { type: Array, required: true },
        isNavOpen: { type: Boolean, default: false },
    });

    const emit = defineEmits(["update:isNavOpen"]);
    const activeIndices = ref([]); // Track active dropdown indices

    const closeNav = () => {
        emit("update:isNavOpen", false);
        document.body.classList.remove("overflow-y-hidden");
    };

    // Function to toggle active indices
    const toggleActive = (index) => {
        activeIndices.value[index] = !activeIndices.value[index];
    };

    // Handle global click to close the menu
    const handleGlobalClick = (event) => {
        if (event.target.classList.contains("link")) {
            closeNav();
            document.body.classList.toggle("overflow-y-hidden", false);
        }
    };

    onMounted(() => {
        document.body.addEventListener("click", handleGlobalClick);
    });

    onUnmounted(() => {
        document.body.removeEventListener("click", handleGlobalClick);
    });
</script>