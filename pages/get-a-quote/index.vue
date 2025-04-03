<template>
    <svg class="absolute" width="100%" viewBox="0 0 1440 1137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M703 545.718C327.56 545.718 33.763 934.376 -1 1137V0H1443C1208.75 523.706 895.533 599.562 703 545.718Z" fill="#2B6FF6"/>
    </svg>
    <section class="mt-12 py-24 relative">
        <div class="container">
            

            <div class="w-full 2xl:w-2/3 mx-auto">
                <div class="flex flex-col gap-4 text-white">
                    <ul class="flex items-center flex-wrap gap-2 text-xs">
                        <li><NuxtLink to="/">Home</NuxtLink></li>
                        <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                        <li>Get a Quote</li>
                    </ul>
                    <h1 class="text-3xl lg:text-4 xl font-bold">Get a Quote</h1>
                    <p class="text-sm">Complete the form below and get in touch with us</p>
                </div>
                
                <div class="flex flex-col gap-4 lg:gap-8 py-16 px-24 bg-[#F8F8F9] rounded-2xl mt-24">
                    <div class="flex max-lg:flex-col gap-4 lg:gap-8 justify-between items-start">
                        <div class="flex flex-col gap-1 w-full">
                            <label for="full-name" class="text-base">Full Name</label>
                            <input v-model="form.full_name" type="text" placeholder="Full Name" id="full-name" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                            <div v-if="errors.full_name" class="text-xs text-red-500">{{ errors.full_name }}</div>
                        </div>
                        <div class="flex flex-col gap-1 w-full">
                            <label for="email-address" class="text-base">Email Address</label>
                            <input v-model="form.email" type="text" placeholder="Email Address" id="email-address" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                            <div v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</div>
                        </div>
                    </div>
                    <div class="flex max-lg:flex-col gap-4 lg:gap-8 justify-between items-start">
                        <div class="flex flex-col gap-1 w-full">
                            <label for="full-name" class="text-base">Company Name</label>
                            <input v-model="form.company_name" type="text" placeholder="Company Name" id="company-name" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                            <div v-if="errors.company_name" class="text-xs text-red-500">{{ errors.company_name }}</div>
                        </div>
                        <div class="flex flex-col gap-1 w-full">
                            <label for="position" class="text-base">Position</label>
                            <input v-model="form.position" type="text" placeholder="Position" id="position" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                            <div v-if="errors.position" class="text-xs text-red-500">{{ errors.position }}</div>
                        </div>
                    </div>
                    <div class="flex max-lg:flex-col gap-4 lg:gap-8 justify-between items-start">
                        <div class="flex flex-col gap-1 w-full">
                            <label for="country" class="text-base">Country</label>
                            <select v-model="form.country" name="country" id="country" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none">
                                <option value="" disabled>Select</option>
                                <option v-for="country in countriesData" :key="country.code" :value="country.name">
                                    {{ country.name }}
                                </option>
                            </select>
                            <div v-if="errors.country" class="text-xs text-red-500">{{ errors.country }}</div>
                        </div>
                    </div>
                    <div class="flex max-lg:flex-col gap-4 lg:gap-8 justify-between items-start">
                        <div class="flex flex-col gap-1 w-full">
                            <label for="mobile-number" class="text-base">Mobile Number</label>
                            <div class="relative flex flex-row items-start gap-4">
                                <div class="flex flex-col gap-1 w-[160px]">
                                    <div @click="toggleDropdown" class="custom-dropdown w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none cursor-pointer">
                                        <div id="selected-country" class="flex justify-start items-center gap-2 select-none">
                                            <NuxtImg loading="lazy" :src="`/images/flags/${selectedCountry.iso2 || 'LB' }.svg`" :alt="selectedCountry.name || 'Lebanon'" width="20" height="20" />
                                            <span>+{{ selectedCountry.code || '961' }}</span>
                                        </div>
                                    </div>
                                    <input v-model="form.code" type="hidden" id="code">
                                    <div v-if="errors.code" class="text-xs text-red-500">{{ errors.code }}</div>
                                </div>

                                <ul v-if="showDropdown" ref="dropdownContainer" @scroll="handleScroll" class="dropdown-container shadow-black/20 shadow-md absolute top-full left-0 w-full max-h-[200px] text-sm rounded-xl bg-white text-black mt-2 overflow-auto z-50">
                                    <input v-model="searchQuery" type="text" id="search" placeholder="Search" class="sticky top-0 left-0 w-full bg-white px-4 py-2 border-b border-b-[#D4D4D4] outline-0 z-10">
                                    <template v-for="country in filteredCountries">
                                        <li v-if="country.status == 1" :key="country.id" @click="selectCountry(country)" class="flex gap-2 text-black p-2 hover:bg-[#D4D4D4] cursor-pointer">
                                            <NuxtImg loading="lazy" :src="`/images/flags/${country.iso2}.svg`" :alt="country.name" width="20" height="20" />
                                            <span class="text-xs text-[#73788B]">(+{{ country.code }})</span>
                                            <span class="text-xs">{{ country.name }}</span>
                                        </li>
                                    </template>
                                </ul>

                                <div class="flex flex-col gap-1 w-full">
                                    <input v-model="form.mobile" type="text" id="mobile" placeholder="Mobile Number" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none">
                                    <div v-if="errors.mobile" class="text-xs text-red-500">{{ errors.mobile }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1 w-full">
                            <label for="website" class="text-base">Website</label>
                            <input v-model="form.website" type="text" placeholder="https://example.com" id="website" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                            <div v-if="errors.website" class="text-xs text-red-500">{{ errors.website }}</div>
                        </div>
                    </div>
                    <div class="flex max-lg:flex-col gap-4 lg:gap-8 justify-between items-start">
                        <div class="flex flex-col gap-1 w-full">
                            <label for="business_type" class="text-base">Type of Business</label>
                            <input v-model="form.business_type" type="text" placeholder="Type of Business" id="business_type" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                            <div v-if="errors.business_type" class="text-xs text-red-500">{{ errors.business_type }}</div>
                        </div>
                        <div class="flex flex-col gap-1 w-full">
                            <label for="area_density" class="text-base">Density of area you want to cover</label>
                            <input v-model="form.area_density" type="text" placeholder="Density of area you want to cover" id="area_density" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                            <div v-if="errors.area_density" class="text-xs text-red-500">{{ errors.area_density }}</div>
                        </div>
                    </div>
                    <div class="flex max-lg:flex-col gap-4 lg:gap-8 justify-between items-start">
                        <div class="flex flex-col gap-1 w-full">
                            <label for="project_stage" class="text-base">At what stage is your project?</label>
                            <input v-model="form.project_stage" type="text" placeholder="At what stage is your project?" id="project_stage" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                            <div v-if="errors.project_stage" class="text-xs text-red-500">{{ errors.project_stage }}</div>
                        </div>
                        <div class="flex flex-col gap-1 w-full">
                            <label for="required_number" class="text-base">Specify approximate number of required items</label>
                            <input v-model="form.required_number" type="text" placeholder="Specify approximate number of required items" id="required_number" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                            <div v-if="errors.required_number" class="text-xs text-red-500">{{ errors.required_number }}</div>
                        </div>
                    </div>
                    <div class="flex max-lg:flex-col gap-4 lg:gap-8 justify-between items-start">
                        <div class="flex flex-col gap-1 w-full">
                            <label for="message" class="text-base">Message</label>
                            <textarea v-model="form.message" rows="8" placeholder="Message" id="message" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none resize-none"></textarea>
                            <div v-if="errors.message" class="text-xs text-red-500">{{ errors.message }}</div>
                        </div>
                    </div>
                    <div class="flex justify-between items-baseline gap-2">
                        <input v-model="isAcknowledged" type="checkbox" class="inline cursor-pointer">
                        <p class="inline text-sm text-[#ACA8A8]">Yes, I agree to receive communications about Moya products and solutions and to the processing of my personal data under the <NuxtLink :to="'/privacy-policy'" class="text-primary">Privacy Policy</NuxtLink>, and <NuxtLink :to="'terms-and-conditions'" class="text-primary">Terms & Conditions</NuxtLink>.</p>
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <button :disabled="!isAcknowledged || isSubmitting" @click.prevent="handleSubmit" class="min-w-[120px] mx-auto p-2 text-white bg-primary hover:text-black hover:bg-white rounded-full select-none transition-all duration-300 ease-in-out disabled:bg-[#D4D4D4] mt-14">Submit</button>
                        <div v-if="submissionMessage" :class="{'text-red-500': isError, 'text-gray-500': !isError}">{{ submissionMessage }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
	import { useCountry } from '~/composables/useCountry';

    useSeoMeta({
        title: 'Get a quote',
        description: '',

        ogTitle: 'Get a quote',
        ogDescription: '',
        ogImage: '',

        twitterTitle: 'Get a quote',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const { selectedCountry, detectCountry, countriesData } = useCountry();

    const emit = defineEmits();

    const route = useRoute();
    const currentPath = route.path;
    const currentRoute = computed(() => route.path);

    // Country-related State
    const countries = ref([]);
    const showDropdown = ref(false);
    const placeholder = 'Code';
    const filteredCountries = ref([]);
    const searchQuery = ref('');
    const dropdownContainer = ref(null);
    const lastLoadedIndex = ref(0);
    const searchFlag = ref(false);
    const initialCode = ref(''); // Store initial value
    const initialCountry = ref(''); // Store initial value
    const isAcknowledged = ref(false)

    // Submission State
    const submissionMessage = ref('');
    const isSubmitting = ref(false);
    const isError = ref(false);

    onMounted(async () => {
        // Load initial countries in the country code dropdown
        loadInitialCountries();

        // Detect country immediately on component mount and assign it to form.value.code
        detectCountry().then(() => {
            initialCode.value = selectedCountry.value.code
            form.value.code = selectedCountry.value.code;

            initialCountry.value = selectedCountry.value.name
			form.value.country = selectedCountry.value.name;
        });
    });

    const form = ref({
        full_name: '',
        email: '',
        company_name: '',
        position: '',
        country: '',
        code: '',
        mobile: '',
        website: '',
        business_type: '',
        area_density: '',
        project_stage: '',
        required_number: '',
        message: '',
    });

    const errors = ref({
        full_name: '',
        email: '',
        company_name: '',
        position: '',
        country: '',
        code: '',
        mobile: '',
        website: '',
        business_type: '',
        area_density: '',
        project_stage: '',
        required_number: '',
        message: '',
    });

    const validationRules = {
        full_name: {
            required: 'Please enter your full name',
            safe: 'Your input has invalid value'
        },
        email: {
            required: 'Please enter your email address',
            email: 'Please enter a valid email address',
            safe: 'Your input has invalid value'
        },
        company_name: {
            required: 'Please enter your company name',
            safe: 'Your input has invalid value'
        },
        position: {
            required: 'Please enter your position',
            safe: 'Your input has invalid value'
        },
        country: {
            required: 'Please enter your country',
            safe: 'Your input has invalid value'
        },
        code: {
            required: 'Please choose your country code',
            code: 'Please enter a valid country code',
            safe: 'Your input has invalid value'
        },
        mobile: {
            required: 'Please enter your mobile number',
            numeric: 'Please enter a valid numeric phone number',
            length: 'Please enter a valid phone number',
            safe: 'Your input has invalid value'
        },
        website: {
            required: 'Please enter your website',
            url: 'Please enter your a valid url',
            safe: 'Your input has invalid value'
        },
        business_type: {
            required: 'Please specify your business type',
            safe: 'Your input has invalid value'
        },
        area_density: {
            required: 'Please specify the density of area',
            safe: 'Your input has invalid value'
        },
        project_stage: {
            required: 'Please specify at what stage is your project',
            safe: 'Your input has invalid value'
        },
        required_number: {
            required: 'Please enter the approximate number of required items',
            safe: 'Your input has invalid value'
        },
        message: {
            required: 'Please enter your message',
            safe: 'Your input has invalid value'
        },
    };

    // Submitting the form
    const handleSubmit = async () => {
        if(!isAcknowledged) {
            isSubmitting.value = false; // Re-enable the button
            submissionMessage.value = 'please confirm'; // Re-enable the button
            isError.value = true;
            return
        }

        // Disable the submit button
        isSubmitting.value = true;

        // Validate form fields
        const isFormValid = validateForm(form, errors, validationRules);

        // If either form or file validation fails, stop submission
        if (!isFormValid) {
            // console.log('Validation failed:', errors.value);
            isSubmitting.value = false; // Re-enable the button
            submissionMessage.value = 'Please ensure all required fields are correctly filled and try submitting again.'; // Re-enable the butto
            isError.value = true;
            return; // Stop submission if form or file validation fails
        }

        try {
            const API_ENDPOINT = 'https://backend.moya.com/wp-json/contact-form-7/v1/contact-forms/13/feedback';
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
            full_name: '',
            email: '',
            company_name: '',
            position: '',
			country: selectedCountry.value ? selectedCountry.value.name : initialCountry.value,
            code: selectedCountry.value ? selectedCountry.value.code : initialCode.value,
            mobile: '',
            website: '',
            business_type: '',
            area_density: '',
            project_stage: '',
            required_number: '',
            message: '',
        };
        errors.value = {
            full_name: '',
            email: '',
            company_name: '',
            position: '',
			country: '',
            code: '',
            mobile: '',
            website: '',
            business_type: '',
            area_density: '',
            project_stage: '',
            required_number: '',
            message: '',
        };
        isAcknowledged.value = false
    };

    // Choosing Country
    const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;

        // Reset country list and lastLoadedIndex when closing the dropdown
        if (!showDropdown.value) {
            resetDropdown();
        }
    };

    const resetDropdown = () => {
        countries.value = [];
        lastLoadedIndex.value = 0;
        filteredCountries.value = [];
        searchFlag.value = false
        searchQuery.value = ''
        loadInitialCountries();
    };

    const closeDropdown = () => {
        loadInitialCountries();
    };

    const selectCountry = (country) => {
        selectedCountry.value = country;
        form.value.code = country.code;
        emit('select', country);
        showDropdown.value = false;
        resetDropdown()
    };

    const loadInitialCountries = () => {
        loadNextCountries();
    };

    const loadNextCountries = () => {
        const batchSize = 10;
        const startIndex = lastLoadedIndex.value;
        const endIndex = startIndex + batchSize;
        const nextBatch = countriesData.slice(startIndex, endIndex);

        countries.value = [...countries.value, ...nextBatch];
        lastLoadedIndex.value = endIndex;
        filteredCountries.value = countries.value;
    };

    const handleScroll = () => {
        const container = dropdownContainer.value;
        if (searchQuery.value === '' && container.scrollTop + container.clientHeight >= container.scrollHeight - 20) {
            if (!searchFlag.value) {
                loadNextCountries();
            }
        }
    };

    const searchCountries = () => {
        const searchResults = countriesData.filter((country) =>
            country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        if (searchQuery.value != '') {
            filteredCountries.value = searchResults;
            searchFlag.value = true
        }
        else {
            resetDropdown();
        }
    };

    watch(searchQuery, searchCountries);
</script>

<style lang="sass" scoped>

</style>