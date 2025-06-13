<template>
    <nav id="mobile-nav" :class="{ '-translate-x-full': !isNavOpen }" class="block lg:hidden fixed top-[var(--header-height)] left-0 h-dvh w-full bg-white z-[2] transition-all duration-500 ease-in-out">
        <!-- Scrollable content container with bottom padding -->
        <div class="container relative h-full pb-48 overflow-y-scroll">
            <ul class="flex flex-col pt-6 divide-y divide-[#E5E5E5]">
                <li v-for="(item, itemIndex) in menuItems" :key="itemIndex" class="py-6">
                    <div v-if="item.clickable" class="flex justify-between items-center"><NuxtLink :to="`/${item.path}`" class="text-xl font-bold link">{{ item.title }}</NuxtLink></div>
                    <div v-else @click="toggleActive(itemIndex)" class="flex justify-between items-center cursor-pointer"><span class="text-xl font-bold" :class="{ 'textprimary': activeIndices[itemIndex] }">{{ item.title }}</span><NuxtImg v-if="item.links && item.links.length" class="transition-transform duration-300" :class="{ 'rotate-180': activeIndices[itemIndex] }" src="/images/icons/chevron-down-black.svg" alt="Chevron Down" width="10" height="6" /></div>

                    <ul v-if="item.links && item.links.length" :class="activeIndices[itemIndex] ? 'max-h-[2000px]' : 'max-h-0'" class="overflow-hidden transition-all duration-500 ease-in-out flex flex-col">
                        <li v-for="(subItem, subItemIndex) in item.links" :key="subItemIndex" :class="[subItemIndex === 0 ? 'pt-4' : 'pt-4', subItemIndex === item.links.length - 1 ? 'pb-0' : 'pb-4']">
                            <div @click.stop="toggleActive(`${itemIndex}-${subItemIndex}`)" class="flex justify-between items-center cursor-pointer">
                                <div>
                                    <NuxtLink v-if="subItem.clickable" :to="`/${subItem.path}`" class="font-Harmony font-bold text-lg link">{{ subItem.title }}</NuxtLink>
                                    <span v-else class="font-Harmony font-bold text-lg">{{ subItem.title }}</span>
                                    <p class="text-xs text-[#A2A2A2]">{{ subItem.sub_title }}</p>
                                </div>
                                <NuxtImg v-if="subItem.subLinks && subItem.subLinks.length" class="transition-transform duration-300" :class="{ 'rotate-180': activeIndices[`${itemIndex}-${subItemIndex}`] }" src="/images/icons/chevron-down-black.svg" alt="Chevron" width="10" height="6" />
                            </div>

                            <ul v-if="subItem.subLinks && subItem.subLinks.length" :class="activeIndices[`${itemIndex}-${subItemIndex}`] ? 'max-h-[1500px]' : 'max-h-0'" class="overflow-hidden transition-all duration-500 ease-in-out flex flex-col">
                                <li v-for="(subLink, subLinkIndex) in subItem.subLinks" :key="subLinkIndex" :class="[subLinkIndex === 0 ? 'pt-3' : 'pt-2', subLinkIndex === subItem.subLinks.length - 1 ? 'pb-0' : 'pb-2']">

                                    <div @click.stop="toggleActive(`${itemIndex}-${subItemIndex}-${subLinkIndex}`)" class="flex items-center gap-4 cursor-pointer" :class="{'justify-between': !subLink.icon}">
                                        <NuxtImg v-if="subLink.icon" class="w-min" :src="`/images/icons/${subLink.icon}.svg`" :alt="subLink.title" width="100" height="100" />
                                        <NuxtLink v-if="!subLink.subSubLinks || !subLink.subSubLinks.length" :to="`/${subItem.path}/${subLink.path}`" class="transition-all duration-300 link">{{ subLink.title }}</NuxtLink>
                                        <span v-else class="font-semibold">{{ subLink.title }}</span>
                                        <NuxtImg v-if="subLink.subSubLinks && subLink.subSubLinks.length" class="transition-transform duration-300" :class="{ 'rotate-180': activeIndices[`${itemIndex}-${subItemIndex}-${subLinkIndex}`] }" src="/images/icons/chevron-down-black.svg" alt="Chevron" width="10" height="6" />
                                    </div>

                                    <ul v-if="subLink.subSubLinks && subLink.subSubLinks.length" :class="activeIndices[`${itemIndex}-${subItemIndex}-${subLinkIndex}`] ? 'max-h-[1000px]' : 'max-h-0'" class="overflow-hidden transition-all duration-500 ease-in-out flex flex-col pl-4 mt-1">
                                        <li v-for="(subSubLink, subSubIndex) in subLink.subSubLinks" :key="subSubIndex" :class="[subItemIndex === 0 ? 'pt-3' : 'pt-2', subItemIndex === item.links.length - 1 ? 'pb-0' : 'pb-2']">
                                            <NuxtLink :to="`/${subItem.path}/${subLink.path}/${subSubLink.path}`" class="text-sm text-black transition-all duration-300 link">{{ subSubLink.title }}</NuxtLink>
                                        </li>
                                    </ul>
                                </li>
                                <NuxtLink v-if="subItem.showDiveLink" :to="`/${subItem.path}`" class="flex items-center gap-1 text-primary group text-primary mt-6 link">
                                    <span>Take a deeper dive</span>
                                    <Icon name="fa6-solid:arrow-right" class="cursor-pointer transition duration-300 ease-in-out group-hover:translate-x-1" />
                                </NuxtLink>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
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