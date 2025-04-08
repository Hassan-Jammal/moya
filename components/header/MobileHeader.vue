<template>
    <nav id="mobile-nav" :class="{ '-translate-x-full': !isNavOpen }"
        class="block lg:hidden fixed top-[var(--header-height)] left-0 h-dvh w-full bg-white z-[2]">
        <!-- Scrollable content container with bottom padding -->
        <div class="container relative h-full pb-48 overflow-y-scroll">
            <ul class="flex flex-col gap-6 pt-6">
                <li v-for="(item, itemIndex) in menuItems" :key="itemIndex">
                    <!-- Link if clickable -->
                    <NuxtLink v-if="item.clickable" :to="`/${item.path}`" class="link text-black">{{ item.title }}</NuxtLink>

                    <!-- Title if not clickable -->
                    <div v-else @click="toggleActive(itemIndex)" class="flex justify-between items-center">
                        <span class="text-black">{{ item.title }}</span>
                        <NuxtImg v-if="item.links && item.links.length" class="transition-transform duration-300 ease-in-out" :class="{ 'rotate-180': activeIndices[itemIndex] }" src="/images/icons/chevron-down-black.svg" alt="Chevron Down" width="10" height="6" />
                    </div>

                    <!-- Child Items -->
                    <ul v-if="item.links && item.links.length" :class="activeIndices[itemIndex] ? 'max-h-[700px] mt-2' : 'max-h-0'" class="children-menu flex flex-col gap-4 px-4 bg-[#ECECEE] rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
                        <li v-for="(subItem, subItemIndex) in item.links" :key="subItemIndex" :class="{ 'mt-4': subItemIndex === 0, 'mb-4': subItemIndex === item.links.length - 1 }">
                            <div v-if="subItem.subLinks && subItem.subLinks.length" @click.stop="toggleActive(`${itemIndex}-${subItemIndex}`)" class="flex justify-between items-center">
                                <NuxtLink v-if="subItem.subLinks.clickable" :to="`/${subItem.path}`" class="font-Harmony font-bold">{{ subItem.title }}</NuxtLink>
                                <span v-else class="font-Harmony font-bold">{{ subItem.title }}</span>
                                <NuxtImg v-if="subItem.subLinks && subItem.subLinks.length" class="transition-transform duration-300 ease-in-out" :class="{ 'rotate-180': activeIndices[`${itemIndex}-${subItemIndex}`] }" src="/images/icons/chevron-down-black.svg" alt="Chevron Down" width="10" height="6" />
                            </div>

                            <NuxtLink v-else :to="`/${subItem.path}`" class="link">{{ subItem.title }}</NuxtLink>

                            <!-- Sub-links -->
                            <ul v-if="subItem.subLinks && subItem.subLinks.length" :class="activeIndices[`${itemIndex}-${subItemIndex}`] ? 'max-h-[700px] mt-2' : 'max-h-0'" class="pl-4 flex flex-col gap-2 transition-all duration-500 ease-in-out overflow-hidden">
                                <li v-for="(subSubItem, subSubIndex) in subItem.subLinks" :key="subSubIndex">
                                    <NuxtLink :to="`/${subItem.path}/${subSubItem.path}`" class="link">{{ subSubItem.title }}</NuxtLink>
                                    <!-- :to="`/${subItem.path}/${subLink.path}`" -->
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <!-- Featured Items -->
            <div class="w-full flex flex-col gap-4 border-t text-black pt-6 mt-6">
                <p class="text-[#A2A2A2] uppercase text-sm">Featured Items</p>
                <div class="flex flex-col gap-4">
                    <div class="w-full flex items-center gap-4 border rounded-lg p-4">
                        <NuxtImg src="/images/core-network-menu.webp" alt="Core Network" width="86" height="72" />
                        <div class="flex flex-col gap-2">
                            <p class="text-sm">MNO Solution</p>
                            <p class="text-[10px] text-[#A2A2A2]">End-to-end solution compliant with 3GPP standards, offering full functionality, third-party device integration, and scalable user capacity from 100 to 10 million.</p>
                        </div>
                    </div>
                    <div class="w-full flex items-center gap-4 border rounded-lg p-4">
                        <NuxtImg src="/images/4g-lte-micro-bbu-menu.webp" alt="4G LTE MICRO BBU" width="86" height="72" />
                        <div class="flex flex-col gap-2">
                            <p class="text-sm">4G LTE BBU</p>
                            <p class="text-[10px] text-[#A2A2A2]">Distributed Site - Micro BBU</p>
                        </div>
                    </div>
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