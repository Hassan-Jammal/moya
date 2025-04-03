<template lang="">
    <footer class="relative text-[#A2A2A2] text-sm bg-black" :class="isIncluded ? 'py-24' : 'pt-56 pb-24'">
        <GetInTouch v-if="!isIncluded" />

        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                <div>
                    <div class="flex flex-col gap-4 lg:gap-8">
                        <NuxtLink :to="'/'">
                            <NuxtImg src="/images/logo.svg" alt="Logo" width="100" height="30" />
                        </NuxtLink>

                        <div class="flex items-center gap-4">
                            <div class="flex flex-shrink-0 justify-center items-center size-10 bg-primary rounded-md">
                                <Icon name="fa6-solid:location-dot" class="text-white" />
                            </div>
                            <p>1001, Building B, R&D Center, OFILM Headquarters, Fenghuang Street, Guangming District, Shenzhen, China</p>
                        </div>

                        <div class="flex items-center gap-4">
                            <div class="flex flex-shrink-0 justify-center items-center size-10 bg-primary rounded-md">
                                <Icon name="fa6-solid:envelope" class="text-white" />
                            </div>
                            <a href="mailto:evan.wu@montymobile.com">evan.wu@montymobile.com</a>
                        </div>

                        <div class="flex flex-col gap-2 mt-8">
                            <div class="relative">
                                <input v-model="form.newsletter_email" type="text" placeholder="Enter your email to receive latest updates" class="w-full py-4 px-6 border border-[#3F3F3F] rounded-lg bg-transparent text-xs" />
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

                <ul class="col-span-2 grid sm:grid-cols-3 gap-6 lg:gap-12 lg:justify-items-end !items-start">
                    <li v-for="(item, index) in menuItems" :key="index" :class="{ 'active': activeIndices.includes(index) }" @click="toggleActive(index)" class="flex flex-col sm:gap-10 group">
                        <template v-if="item.clickable">
                            <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 text-white hover:text-primary transition-all duration-300 ease-in-out">
                                <NuxtLink :to="`/${item.path}`">{{ item.title }}</NuxtLink>
                                <NuxtImg loading="lazy" v-if="item.links && item.links.length > 0" class="block sm:hidden transition-all duration-300 ease-in-out" src="/images/icons/chevron-down-white.svg" alt="Chevron Down White" width="14" height="8" />
                            </div>
                        </template>

                        <!-- Render as text if not clickable -->
                        <template v-else>
                            <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 text-white">
                                <span class="text-white font-bold text-base">{{ item.title }}</span>
                                <NuxtImg loading="lazy" v-if="item.links && item.links.length > 0" class="block sm:hidden transition-all duration-300 ease-in-out" src="/images/icons/chevron-down-white.svg" alt="Chevron Down White" width="14" height="8" />
                            </div>
                        </template>

                        <ul v-if="item.links && item.links.length > 0" class="children-menu flex flex-col gap-4 max-sm:max-h-0 max-sm:ml-4 text-[#D4D4D4] overflow-hidden transition-all duration-300 ease-in-out">
                            <li v-for="(subItem, linkIndex) in item.links" :key="linkIndex">
                                <NuxtLink :to="`${subItem.link}`" class="hover:text-primary transition-all duration-300 ease-in-out">{{ subItem.name }}</NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- <ul class="col-span-2 grid sm:grid-cols-3 gap-12 lg:place-items-end items-start">
                    <li class="flex flex-col gap-4 lg:gap-8">
                        <h4 class="text-white font-bold">Solutions</h4>
                        
                        <ul :class="{ 'active': activeIndices.includes(index) }" @click="toggleActive(index)" class="flex flex-col gap-4 group">
                            <li 
                                v-for="(solution, idx) in solutions" 
                                :key="idx" 
                                class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out"
                            >
                            <NuxtLink :to="solution.link">{{ solution.name }}</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <li class="flex flex-col gap-4 lg:gap-8">
                        <h4 class="text-white font-bold">Prodcuts</h4>

                        <ul class="flex flex-col gap-4">
                            <li class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/core-network/evolved-packet-core">Eveloved Packet Core (EPC)</NuxtLink>
                            </li>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/core-network/ip-multimedia-subsystem">IP Multimeda Subsystem (IMS)</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/4g5g-ran/baseband-unit">Baseband Unit (BBU)</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/4g5g-ran/remote-radio-unit">Remote Radio Unit (RRU)</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/4g5g-ran/integrated-enb">Integrated eNB (Outdoor)</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/4g5g-ran/femtocell">Femtocell (Indoor)</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/repeater/fiber-repeater">Fiber Repeater</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/repeater/wireless-repeater">Wireless Repeater</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/repeater/ics-wireless-repeater">ICS Repeater</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/antenna/omni-fiberglass-antenna">Omni Antenna</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/antenna/omni-cluster-antenna">Cluster Antenna</NuxtLink>
                            </div>
                                <div class="children-toggle max-sm:flex max-sm:justify-between max-sm:gap-4 transition-all duration-300 ease-in-out">
                                <NuxtLink to="/products/antenna/panel-antenna">Panel Antenna</NuxtLink>
                            </div>
                        </ul>  
                    </li>

                    <li class="flex flex-col gap-4 lg:gap-8">
                        <h4 class="text-white font-bold">Company</h4>

                        <ul class="flex flex-col gap-4">
                            <NuxtLink to="/about-us">About Us</NuxtLink>
                            <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                        </ul>  
                    </li>
                </ul> -->
            </div>

            <hr class="mb-12 mt-12 border-[#A2A2A2]/50" />

            <div class="flex max-sm:flex-col max-sm:gap-4 justify-between items-center">
                <div class="flex gap-4">
                    <NuxtLink to="/privacy-policy" class="underline">Privacy Policy</NuxtLink>
                    <NuxtLink to="/terms-and-conditions" class="underline">Terms & conditions</NuxtLink>
                    <NuxtLink to="/cookie-policy" class="underline">Cookie Policy</NuxtLink>
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
            newsletter_email: 'Please enter a valid email address',
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
                { name: "MNO Solution", link: "/solutions/core-network/mno-solution" },
                { name: "FWA Solution", link: "/solutions/core-network/fwa-solution" },
                { name: "Enterprise Solution", link: "/solutions/core-network/enterprise-private-network-solution" },
                { name: "Dense Area Solution", link: "/solutions/4g5g-ran/dense-area-solution" },
                { name: "Rural Area Solution", link: "/solutions/4g5g-ran/rural-area-solution" },
                { name: "Indoor Solution", link: "/solutions/4g5g-ran/indoor-solution" },
                { name: "Fiber Solution", link: "/solutions/repeater/fiber-solution" },
                { name: "Wireless Solution", link: "/solutions/repeater/wireless-solution" },
                { name: "ICS Wireless Solution", link: "/solutions/repeater/ics-wireless-solution" },
            ]
        },
        {
            title: "Products",
            clickable: false,
            links: [
                { name: "Evolved Packet Core (EPC)", link: "/products/core-network/evolved-packet-core" },
                { name: "IP Multimedia Subsystem (IMS)", link: "/products/core-network/ip-multimedia-subsystem" },
                { name: "Baseband Unit (BBU)", link: "/products/4g5g-ran/baseband-unit" },
                { name: "Remote Radio Unit (RRU)", link: "/products/4g5g-ran/remote-radio-unit" },
                { name: "Integrated eNB (Outdoor)", link: "/products/4g5g-ran/integrated-enb" },
                { name: "Femtocell (Indoor)", link: "/products/4g5g-ran/femtocell" },
                { name: "Fiber Repeater", link: "/products/repeater/fiber-repeater" },
                { name: "Wireless Repeater", link: "/products/repeater/wireless-repeater" },
                { name: "ICS Repeater", link: "/products/repeater/ics-wireless-repeater" },
                { name: "Omni Antenna", link: "/products/antenna/omni-fiberglass-antenna" },
                { name: "Cluster Antenna", link: "/products/antenna/omni-cluster-antenna" },
                { name: "Panel Antenna", link: "/products/antenna/panel-antenna" },
            ]
        },
        {
            title: "Company",
            clickable: false,
            links: [
                { name: "About Us", link: "/about-us" },
                { name: "Contact Us", link: "/contact-us" },
            ]
        }
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