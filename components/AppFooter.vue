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

                <div class="col-span-2 grid sm:grid-cols-3 gap-12 place-items-end items-start">
                    <div class="flex flex-col gap-4 lg:gap-8">
                        <h4 class="text-white font-bold">Solutions</h4>
                        
                        <div class="flex flex-col gap-4">
                            <NuxtLink to="/solutions/core-network/mno-solution">MNO Solution</NuxtLink>
                            <NuxtLink to="/solutions/core-network/fwa-solution">FWA Solution</NuxtLink>
                            <NuxtLink to="/solutions/core-network/enterprise-private-network-solution">Enterprise Solution</NuxtLink>
                            <NuxtLink to="/solutions/4g5g-ran/dense-area-solution">Dense Area Solution</NuxtLink>
                            <NuxtLink to="/solutions/4g5g-ran/rural-area-solution">Rural Area Solution</NuxtLink>
                            <NuxtLink to="/solutions/4g5g-ran/indoor-solution">Indoor Solution</NuxtLink>
                            <NuxtLink to="/solutions/repeater/fiber-solution">Fiber Solution</NuxtLink>
                            <NuxtLink to="/solutions/repeater/wireless-solution">Wireless Solution</NuxtLink>
                            <NuxtLink to="/solutions/repeater/ics-wireless-solution">ICS Wireless Solution</NuxtLink>
                        </div>
                    </div>

                    <div class="flex flex-col gap-4 lg:gap-8">
                        <h4 class="text-white font-bold">Prodcuts</h4>

                        <div class="flex flex-col gap-4">
                            <NuxtLink to="/products/core-network/evolved-packet-core">Eveloved Packet Core (EPC)</NuxtLink>
                            <NuxtLink to="/products/core-network/ip-multimedia-subsystem">IP Multimeda Subsystem (IMS)</NuxtLink>
                            <NuxtLink to="/products/4g5g-ran/baseband-unit">Baseband Unit (BBU)</NuxtLink>
                            <NuxtLink to="/products/4g5g-ran/remote-radio-unit">Remote Radio Unit (RRU)</NuxtLink>
                            <NuxtLink to="/products/4g5g-ran/integrated-enb">Integrated eNB (Outdoor)</NuxtLink>
                            <NuxtLink to="/products/4g5g-ran/femtocell">Femtocell (Indoor)</NuxtLink>
                            <NuxtLink to="/products/repeater/fiber-repeater">Fiber Repeater</NuxtLink>
                            <NuxtLink to="/products/repeater/wireless-repeater">Wireless Repeater</NuxtLink>
                            <NuxtLink to="/products/repeater/ics-wireless-repeater">ICS Repeater</NuxtLink>
                            <NuxtLink to="/products/antenna/omni-fiberglass-antenna">Omni Antenna</NuxtLink>
                            <NuxtLink to="/products/antenna/omni-cluster-antenna">Cluster Antenna</NuxtLink>
                            <NuxtLink to="/products/antenna/panel-antenna">Panel Antenna</NuxtLink>
                        </div>  
                    </div>

                    <div class="flex flex-col gap-4 lg:gap-8">
                        <h4 class="text-white font-bold">Company</h4>

                        <div class="flex flex-col gap-4">
                            <NuxtLink to="/about-us">About Us</NuxtLink>
                            <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                        </div>  
                    </div>
                </div>
            </div>

            <!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                <div class="">
                    <hr class="my-8 border-[#A2A2A2]/50" />

                    <div class="flex gap-4">
                        <NuxtLink to="/" class="flex flex-shrink-0 justify-center items-center size-10 bg-[#3F3F3F]/25 rounded-md">
                            <Icon name="fa6-brands:facebook-f" />
                        </NuxtLink>
                        <NuxtLink to="/" class="flex flex-shrink-0 justify-center items-center size-10 bg-[#3F3F3F]/25 rounded-md">
                            <Icon name="fa6-brands:linkedin-in" />
                        </NuxtLink>
                        <NuxtLink to="/" class="flex flex-shrink-0 justify-center items-center size-10 bg-[#3F3F3F]/25 rounded-md">
                            <Icon name="fa6-brands:youtube" />
                        </NuxtLink>
                    </div>
                </div>
            </div> -->

            <hr class="mb-12 mt-24 border-[#A2A2A2]/50" />

            <div class="flex justify-between items-center">
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
</script>