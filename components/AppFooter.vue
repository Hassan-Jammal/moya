<template lang="">
    <footer class="relative text-[#A2A2A2] text-sm bg-black" :class="isIncluded ? 'py-24' : 'pt-56 pb-24'">
        <GetInTouch v-if="!isIncluded" />

        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-48">
                <div>
                    <div class="flex flex-col gap-4 lg:gap-8">
                        <NuxtLink :to="'/'">
                            <NuxtImg src="/images/logo.svg" alt="Logo" width="100" height="30" />
                        </NuxtLink>

                        <div class="flex items-start gap-4">
                            <div class="flex flex-shrink-0 justify-center items-center size-10 bg-primary rounded-md">
                                <Icon name="fa6-solid:location-dot" class="text-white" />
                            </div>
                            <p>1001, Building B, R&D Center, OFILM Headquarters, Fenghuang Street, Guangming District, Shenzhen, China</p>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="flex flex-shrink-0 justify-center items-center size-10 bg-primary rounded-md">
                                <Icon name="fa6-solid:envelope" class="text-white" />
                            </div>
                            <a href="mailto:info@moya.com">info@moya.com</a>
                        </div>

                        <div class="hidden lg:flex flex-col gap-4 lg:gap-8">
                            <div class="flex flex-col gap-2 mt-8">
                                <div class="relative">
                                    <input v-model="form.newsletter_email" type="text" placeholder="Enter your email to receive latest updates" class="w-full py-4 pl-6 pr-12 border border-[#3F3F3F] rounded-lg bg-transparent text-xs" />
                                    <Icon :disabled="isSubmitting" @click.prevent="handleSubmit" name="fa6-solid:arrow-right" class="absolute top-1/2 right-6 -translate-y-1/2 bg-primary text-xl cursor-pointer transition duration-300 ease-in-out group-hover:translate-x-1" />
                                </div>
                                <div v-if="errors.newsletter_email" class="text-xs text-red-500">{{ errors.newsletter_email }}</div>
                                <div v-if="submissionMessage" :class="{'text-red-500': isError, 'text-gray-500': !isError}">{{ submissionMessage }}</div>
                            </div>

                            <hr class="border-[#A2A2A2]/50" />

                            <div class="flex gap-8">
                                <NuxtLink to="/" class="flex flex-shrink-0 justify-center items-center text-2xl">
                                    <Icon name="fa6-brands:facebook-f" />
                                </NuxtLink>
                                <NuxtLink to="/" class="flex flex-shrink-0 justify-center items-center text-2xl">
                                    <Icon name="fa6-brands:linkedin-in" />
                                </NuxtLink>
                                <NuxtLink to="/" class="flex flex-shrink-0 justify-center items-center text-2xl">
                                    <Icon name="fa6-brands:youtube" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <ul ref="grid" class="md:col-span-2 grid md:grid-cols-3 gap-6 md:gap-12 items-start">
                    <li ref="masonryItems" v-for="(item, index) in menuItems" :key="index" :class="{ 'active': activeIndices.includes(index) }" @click="toggleActive(index)" class="flex flex-col md:gap-10 group">
                        <template v-if="item.clickable">
                            <div class="children-toggle max-md:flex max-md:justify-between max-md:gap-4 text-white hover:text-primary transition-all duration-300 ease-in-out">
                                <NuxtLink :to="`/${item.path}`">{{ item.title }}</NuxtLink>
                                <NuxtImg loading="lazy" v-if="item.links && item.links.length > 0" class="block md:hidden transition-all duration-300 ease-in-out" src="/images/icons/chevron-down-white.svg" alt="Chevron Down White" width="14" height="8" />
                            </div>
                        </template>

                        <!-- Render as text if not clickable -->
                        <template v-else>
                            <div class="children-toggle max-md:flex max-md:justify-between max-md:gap-4 text-white">
                                <span class="text-white font-bold text-base">{{ item.title }}</span>
                                <NuxtImg loading="lazy" v-if="item.links && item.links.length > 0" class="block md:hidden transition-all duration-300 ease-in-out" src="/images/icons/chevron-down-white.svg" alt="Chevron Down White" width="14" height="8" />
                            </div>
                        </template>

                        <ul v-if="item.links && item.links.length > 0" class="children-menu flex flex-col gap-4 max-md:max-h-0 max-md:ml-4 text-[#A2A2A2] overflow-hidden transition-all duration-300 ease-in-out">
                            <li v-for="(subItem, linkIndex) in item.links" :key="linkIndex">
                                <NuxtLink :to="`${subItem.path}`" class="hover:text-primary transition-all duration-300 ease-in-out">{{ subItem.title }}</NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <hr class="mb-12 mt-12 border-[#A2A2A2]/50" />

            <div class="flex lg:hidden flex-col gap-4 lg:gap-8">
                <div class="flex flex-col gap-2">
                    <div class="relative">
                        <input v-model="form.newsletter_email" type="text" placeholder="Enter your email to receive latest updates" class="w-full py-4 px-6 border border-[#3F3F3F] rounded-lg bg-transparent text-xs" />
                        <Icon :disabled="isSubmitting" @click.prevent="handleSubmit" name="fa6-solid:arrow-right" class="absolute top-1/2 right-6 -translate-y-1/2 bg-primary text-xl cursor-pointer transition duration-300 ease-in-out group-hover:translate-x-1" />
                    </div>
                    <div v-if="errors.newsletter_email" class="text-xs text-red-500">{{ errors.newsletter_email }}</div>
                    <div v-if="submissionMessage" :class="{'text-red-500': isError, 'text-gray-500': !isError}">{{ submissionMessage }}</div>
                </div>

                <div class="flex justify-center gap-8">
                    <NuxtLink to="/" class="flex flex-shrink-0 justify-center items-center text-2xl">
                        <Icon name="fa6-brands:facebook-f" />
                    </NuxtLink>
                    <NuxtLink to="/" class="flex flex-shrink-0 justify-center items-center text-2xl">
                        <Icon name="fa6-brands:linkedin-in" />
                    </NuxtLink>
                    <NuxtLink to="/" class="flex flex-shrink-0 justify-center items-center text-2xl">
                        <Icon name="fa6-brands:youtube" />
                    </NuxtLink>
                </div>
            </div>

            <hr class="flex lg:hidden mb-12 mt-12 border-[#A2A2A2]/50" />

            <div class="flex max-sm:flex-col max-sm:gap-4 justify-between items-center">
                <div class="flex gap-4">
                    <!-- <NuxtLink to="/privacy-policy" class="underline">Privacy Policy</NuxtLink>
                    <NuxtLink to="/terms-and-conditions" class="underline">Terms & conditions</NuxtLink>
                    <NuxtLink to="/cookie-policy" class="underline">Cookie Policy</NuxtLink> -->
                    <NuxtLink to="/privacy-policy" exactActiveClass="active" class="underline hover:text-primary transition-all duration-300 ease-in-out">Privacy Policy</NuxtLink>
                    <NuxtLink to="/terms-and-conditions" exactActiveClass="active" class="underline hover:text-primary transition-all duration-300 ease-in-out">Terms & Conditions</NuxtLink>
                </div>

                <p>© {{ new Date().getFullYear() }} Moya. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import { useWindowSize } from '@vueuse/core'

    const route = useRoute();
    const isIncluded = computed(() => route.path === '/' || route.path === '/contact-us' || route.path === '/get-a-quote')

    const grid = ref(null);
    const masonryItems = ref([]);

    function applyMasonryLayout() {
        if (!grid.value) return;

        const rowHeight = 2;
        const gapStr = getComputedStyle(grid.value).getPropertyValue('row-gap');
        const rowGap = parseInt(gapStr);

        masonryItems.value.forEach((item) => {
            const height = item.clientHeight;
            const rowSpan = Math.ceil((height + rowGap) / (rowGap + rowHeight));
            item.style.gridRowEnd = `span ${rowSpan}`;
        });
    }

    onMounted(async () => {
        await nextTick();
        applyMasonryLayout();
        window.addEventListener('resize', applyMasonryLayout);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', applyMasonryLayout);
    });

    // Submission State
    const submissionMessage = ref('');
    const isSubmitting = ref(false);
    const isError = ref(false);

    const form = ref({
        newsletter_email: '',
    });

    const errors = ref({
        newsletter_email: '',
    });

    const validationRules = {
        newsletter_email: {
            required: 'Please enter your email address',
            email: 'Please enter a valid email address',
            safe: 'Your input has invalid value'
        },
    };

    // Submitting the form
    const handleSubmit = async () => {
        // Disable the submit button
        isSubmitting.value = true;

        // Validate form fields
        const isFormValid = validateForm(form, errors, validationRules);

        // If either form or file validation fails, stop submission
        if (!isFormValid) {
            // console.log('Validation failed:', errors.value);
            isSubmitting.value = false; // Re-enable the button
            // submissionMessage.value = 'Please ensure all required fields are correctly filled and try submitting again.'; // Re-enable the butto
            isError.value = true;
            return; // Stop submission if form or file validation fails
        }

        try {
            const API_ENDPOINT = 'https://backend.moya.com/wp-json/contact-form-7/v1/contact-forms/14/feedback';
            const formData = new FormData();

            // Append top-level fields

            Object.keys(form.value).forEach((key) => {
                formData.append(key, form.value[key]);
            });
            formData.append('_wpcf7_unit_tag', 'rte');

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    // 'Content-Type': 'multipart/form-data' // No need to set this header for FormData
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            // console.log("Form submitted successfully:", data);

            if(data.status == 'validation_failed'){
                submissionMessage.value = "Error in submitting your message. Please try again later";
                isError.value = true;

                // Clear error message after 2 seconds
                setTimeout(() => {
                    submissionMessage.value = '';
                }, 2000);
                throw new Error('Validation Error');
            }

            submissionMessage.value = "Thank you for your message."
            isError.value = false;
            // Clear success message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);

            resetForm();
            //Handle success response, such as notifying the user or redirecting
        } catch (error) {
            // console.error("Form submission error:", error);
            // Set error message
            submissionMessage.value = "Error in submitting your message. Please try again later";
            isError.value = true;

            // Clear error message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);
        } finally {
            // Re-enable the submit button
            isSubmitting.value = false;
        }
    };

    // Resetting the form
    const resetForm = () => {
        form.value = {
            newsletter_email: '',
        };
        errors.value = {
            newsletter_email: '',
        };
    };


    const activeIndices = ref([]); // Track the active indices

    const menuItems = ref([
        {
            title: "Solutions",
            clickable: false,
            links: [
                { title: "MNO Solution", path: "/solutions/core-network/mno-solution" },
                { title: "FWA Solution", path: "/solutions/core-network/fwa-solution" },
                { title: "Enterprise Solution", path: "/solutions/core-network/enterprise-private-network-solution" },
                { title: "Dense Area Solution", path: "/solutions/4g5g-ran/dense-area-solution" },
                { title: "Rural Area Solution", path: "/solutions/4g5g-ran/rural-area-solution" },
                { title: "Indoor Solution", path: "/solutions/4g5g-ran/indoor-solution" },
                { title: "Fiber Solution", path: "/solutions/repeater/fiber-solution" },
                { title: "Wireless Solution", path: "/solutions/repeater/wireless-solution" },
                { title: "ICS Wireless Solution", path: "/solutions/repeater/ics-wireless-solution" },
            ]
        },
        {
            title: "Products",
            clickable: false,
            links: [
                { title: "Evolved Packet Core (EPC)", path: "/products/core-network/evolved-packet-core" },
                { title: "IP Multimedia Subsystem (IMS)", path: "/products/core-network/ip-multimedia-subsystem" },
                { title: "Baseband Unit (BBU)", path: "/products/4g5g-ran/baseband-unit" },
                { title: "Remote Radio Unit (RRU)", path: "/products/4g5g-ran/remote-radio-unit" },
                { title: "Integrated eNB (Outdoor)", path: "/products/4g5g-ran/integrated-enb" },
                { title: "Femtocell (Indoor)", path: "/products/4g5g-ran/femtocell" },
                { title: "Fiber Repeater", path: "/products/repeater/fiber-repeater" },
                { title: "Wireless Repeater", path: "/products/repeater/wireless-repeater" },
                { title: "ICS Repeater", path: "/products/repeater/ics-wireless-repeater" },
                { title: "Omni Antenna", path: "/products/antenna/omni-fiberglass-antenna" },
                { title: "Cluster Antenna", path: "/products/antenna/omni-cluster-antenna" },
                { title: "Panel Antenna", path: "/products/antenna/panel-antenna" },
            ]
        },
        // {
        //     title: "Technology",
        //     clickable: false,
        //     links: [
        //         { title: "Innovation", path: "/about-us" },
        //         { title: "Performance", path: "/contact-us" },
        //         { title: "Testing & Certifications", path: "/contact-us" },
        //     ]
        // },
        {
            title: "Company",
            clickable: false,
            links: [
                { title: "About Us", path: "/about-us" },
                { title: "Contact Us", path: "/contact-us" },
            ]
        },
    ]);

    const { width } = useWindowSize() // Optional: width tracking

    // Function to toggle active index
    const toggleActive = (index) => {
        if (width.value <= 640) {
            const indexInArray = activeIndices.value.indexOf(index);
            if (indexInArray === -1) {
                activeIndices.value.push(index); // Add index if not present
            } else {
                activeIndices.value.splice(indexInArray, 1); // Remove index if already present
            }
        }
    };

    const clearActiveOnResize = () => {
        if (width.value > 640) {
            activeIndices.value = []; // Clear active indices if the screen is wider than 640
        }
    };

    onMounted(() => {
        window.addEventListener('resize', clearActiveOnResize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', clearActiveOnResize); // Clean up the listener
    });
</script>