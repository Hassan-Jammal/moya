<template lang="">
    <header id="header" class="flex flex-col justify-center items-center h-[var(--header-height)] fixed top-0 left-0 w-full text-sm transition-transform duration-300 ease-in-out bg-black z-50" :class="{ '-translate-y-full': isScrolledDown, 'translate-y-0': isNavOpen }">
        <div class="container flex justify-between items-center">
            <!-- Logo -->
            <NuxtLink @click="closeNav" :to="'/'">
                <NuxtImg src="/images/logo.svg" alt="Logo" width="100" height="30" />
            </NuxtLink>

            <!-- Desktop Navigation -->
            <HeaderDesktopHeader :menuItems="menuItems" />

            <!-- Mobile Menu Toggle Icon -->
            <div id="nav-toggle" class="block lg:hidden rounded cursor-pointer" :class="{ toggled: isNavOpen }" dir="rtl" @click="toggleNav">
                <div class="line1 w-[20px] h-[3px] bg-white rounded-3xl transition-all duration-300 ease-in-out"></div>
                <div class="line2 my-1 w-3/4 h-[3px] bg-white rounded-3xl transition-all duration-300 ease-in-out"></div>
                <div class="line3 w-[20px] h-[3px] bg-white rounded-3xl transition-all duration-300 ease-in-out"></div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <HeaderMobileHeader :menuItems="menuItems" v-model:isNavOpen="isNavOpen" />
    </header>
</template>

<script setup>
    const isOnTop = ref(true);
    const lastScrollPosition = ref(0);
    const isScrolledDown = ref(false);
    const isScrolledUp = ref(false);
    const scrollThreshold = 200;
    const isNavOpen = ref(false);

    const menuItems = ref([
        {
            title: "Solutions",
            clickable: false,
            links: [
                {
                    title: "Core Network",
                    clickable: false,
                    sub_title: "Core Strength for a Connected World.",
                    path: "solutions/core-network",
                    subLinks: [
                        { title: "MNO Solution", path: "mno-solution", icon: "mno-solution" },
                        { title: "MVNO Solution", path: "mvno-solution", icon: "mvno-solution" },
                        { title: "FWA Solution", path: "fwa-solution", icon: "fwa-solution" },
                        { title: "Enterprise Solution", path: "enterprise-private-network-solution", icon: "enterprise-private-network-solution" },
                    ]
                },
                {
                    title: "RAN",
                    clickable: false,
                    sub_title: "Smarter Networks, Stronger Connections.",
                    path: "solutions/ran",
                    subLinks: [
                        { title: "Dense Area Solution", path: "dense-area-solution", icon: "dense-area-solution" },
                        { title: "Rural Area Solution", path: "rural-area-solution", icon: "rural-area-solution" },
                        { title: "Indoor Solution", path: "indoor-solution", icon: "indoor-solution" }
                    ]
                },
                {
                    title: "Repeater",
                    clickable: false,
                    sub_title: "Boosting Signals, Bridging Distances.",
                    path: "solutions/repeater",
                    subLinks: [
                        { title: "Fiber Solution", path: "fiber-solution", icon: "fiber-solution" },
                        { title: "Wireless Solution", path: "wireless-solution", icon: "wireless-solution" },
                        { title: "ICS Wireless Solution", path: "ics-wireless-solution", icon: "ics-wireless-solution" }
                    ]
                }
            ]
        },
        {
            title: "Products",
            clickable: false,
            links: [
                {
                    title: "Core Network",
                    path: "products/core-network",
                    clickable: true,
                    subLinks: [
                        { title: "Evolved Packet Core (EPC)", path: "evolved-packet-core/evolved-packet-core" },
                        { title: "IP Multimedia Subsystem (IMS)", path: "ip-multimedia-subsystem/ip-multimedia-subsystem" },
                        { title: "Gateway GPRS Support Node (GGSN)", path: "gateway-gprs-support-node/gateway-gprs-support-node" },
                        { title: "Online Charging System (OCS)", path: "online-charging-system/online-charging-system" },
                        { title: "Diameter Routing Agent (DRA)", path: "diameter-routing-agent/diameter-routing-agent" },
                        { title: "Policy And Charging Rules Function (PCRF)", path: "policy-and-charging-rules-function/policy-and-charging-rules-function" },
                    ]
                },
                {
                    title: "RAN",
                    path: "products/ran",
                    clickable: true,
                    subLinks: [
                        { 
                            title: "BBU", 
                            path: "baseband-unit",
                            subSubLinks: [
                                { title: "4G LTE Micro BBU", path: "4g-lte-micro-bbu" },
                                { title: "4G LTE Macro BBU", path: "4g-lte-macro-bbu" },
                                { title: "4G LTE pHUB", path: "4g-lte-phub" },
                            ]
                        },
                        { 
                            title: "RRU", 
                            path: "remote-radio-unit", 
                            subSubLinks: [
                                { title: "4G LTE pRRU", path: "4g-lte-prru" },
                                { title: "4G LTE 2T2R RRU", path: "4g-lte-2t2r-rru" },
                                { title: "4G LTE 4T4R RRU", path: "4g-lte-4t4r-rru" },
                            ]
                        },
                        { 
                            title: "Integrated eNB", 
                            path: "integrated-enb", 
                            subSubLinks: [
                                { title: "4G LTE Macro eNB 2x20W", path: "4g-lte-macro-enb-2x20w" },
                                { title: "4G LTE Macro eNB 2x40W", path: "4g-lte-macro-enb-2x40w" },
                                { title: "4G LTE Macro eNB 4x40W/2x60W", path: "4g-lte-macro-enb-4x40w2x60w" },
                            ]
                        },
                        { 
                            title: "Femtocell", 
                            path: "femtocell", 
                            subSubLinks: [
                                { title: "Femtocell Indoor 2x50mw", path: "femtocell-indoor-2x50mw" },
                                { title: "Femtocell Indoor 2x250mw", path: "femtocell-indoor-2x250mw" },
                            ]
                        }
                    ]
                },
                {
                    title: "Repeater",
                    path: "products/repeater",
                    clickable: true,
                    subLinks: [
                        { title: "Fiber", path: "fiber-repeater/fiber-repeater" },
                        { title: "Wireless", path: "wireless-repeater/wireless-repeater" },
                        { title: "ICS Wireless", path: "ics-wireless-repeater/ics-wireless-repeater" }
                    ]
                },
                {
                    title: "Antenna",
                    path: "products/antenna",
                    clickable: true,
                    subLinks: [
                        { title: "Omni Fiberglass", path: "omni-fiberglass-antenna/omni-fiberglass-antenna" },
                        { title: "Omni Cluster", path: "omni-cluster-antenna/omni-cluster-antenna" },
                        { title: "Panel", path: "panel-antenna/panel-antenna" }
                    ]
                }
            ]
        },
        // {
        //     title: "Technology",
        //     clickable: false,
        //     links: [
        //         {
        //             title: "Innovation",
        //             path: "technology/innovation",
        //             clickable: true,
        //         },
        //         {
        //             title: "Performance",
        //             path: "technology/performance",
        //             clickable: true,
        //         },
        //         {
        //             title: "Testing & Certifications",
        //             path: "technology/testing-and-certifications",
        //             clickable: true,
        //         }
        //     ]
        // },
        {
            title: "About Us",
            clickable: true,
            path: "about-us"
        },
        {
            title: "Contact Us",
            clickable: true,
            path: "contact-us"
        }
    ]);

    const closeNav = () => {
        isNavOpen.value = !isNavOpen.value;
        document.body.classList.remove("overflow-y-hidden");
    };

    const toggleNav = () => {
        isNavOpen.value = !isNavOpen.value;
        document.body.classList.toggle("overflow-y-hidden", isNavOpen.value);
    };

    const checkScrollPosition = () => {
        // Check if the user is at the top of the page on mount
        isOnTop.value = window.scrollY === 0;
    };
    
    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        // Determine the scroll direction
        const scrollDirection = currentScrollPosition > lastScrollPosition.value ? 'down' : 'up';

        // Set the value for isScrolledUp if the user is scrolling up
        isScrolledUp.value = scrollDirection === 'up';

        // Check if the user has scrolled down more than the threshold
        isScrolledDown.value = scrollDirection === 'down' && currentScrollPosition > scrollThreshold;

        // Check if the user is at the top of the page
        isOnTop.value = currentScrollPosition === 0;

        // Update the last scroll position
        lastScrollPosition.value = currentScrollPosition;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        checkScrollPosition();
    });
</script>