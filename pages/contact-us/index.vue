<template>
    <section class="mt-12 py-24 relative">
        <div class="absolute bottom-0 left-0 w-full h-full">
            <NuxtImg class="w-full h-full object-cover" src="images/contact-us-bg.webp" alt="About Us" width="" height="" />
        </div>
		<div class="container relative z-10 text-center text-white py-12">
            <div class="flex flex-col items-center gap-6">
                <ul class="flex items-center flex-wrap gap-2 text-xs">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="flex"><Icon name="fa6-solid:angle-right" /></li>
                    <li>Contact Us</li>
                </ul>
                <h1 class="text-3xl lg:text-4xl font-bold">Connect With Moya’s Team</h1>
                <p class="text-base">If you are interested in our products or need customized solutions, please feel free to contact us</p>
            </div>
        </div>
	</section>

    <section class="py-24 bg-[#F8F8F9]">
        <div class="container">
            <div class="flex flex-col gap-4 lg:gap-8 w-full lg:w-2/3 mx-auto">
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
                        <label for="full-name" class="text-base">Company Name (Optional)</label>
                        <input v-model="form.company_name" type="text" placeholder="Company Name" id="company-name" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                        <div v-if="errors.company_name" class="text-xs text-red-500">{{ errors.company_name }}</div>
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <label for="position" class="text-base">Position (Optional)</label>
                        <input v-model="form.position" type="text" placeholder="Position" id="position" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                        <div v-if="errors.position" class="text-xs text-red-500">{{ errors.position }}</div>
                    </div>
                </div>
                <div class="flex max-lg:flex-col gap-4 lg:gap-8 justify-between items-start">
                    <div class="flex flex-col gap-1 w-full">
                        <label for="subject" class="text-base">Subject</label>
                        <input v-model="form.subject" type="text" placeholder="Subject" id="subject" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                        <div v-if="errors.subject" class="text-xs text-red-500">{{ errors.subject }}</div>
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
                        <label for="partnership" class="text-base">How would you like to partner with us?</label>
                        <input v-model="form.partnership" type="text" placeholder="How would you like to partner with us?" id="partnership" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                        <div v-if="errors.partnership" class="text-xs text-red-500">{{ errors.partnership }}</div>
                    </div>
                    <div class="flex flex-col gap-1 w-full">
                        <label for="territory" class="text-base">Territory you would like to cover</label>
                        <input v-model="form.territory" type="text" placeholder="Territory you would like to cover" id="territory" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none" />
                        <div v-if="errors.territory" class="text-xs text-red-500">{{ errors.territory }}</div>
                    </div>
                </div>
                <div class="flex max-lg:flex-col gap-4 lg:gap-8 justify-between items-start">
                    <div class="flex flex-col gap-1 w-full">
                        <label for="message" class="text-base">Message</label>
                        <textarea v-model="form.message" rows="8" placeholder="Message" id="message" class="w-full h-full min-h-14 py-3 px-3 text-base bg-transparent border border-[#D4D4D4] rounded-lg outline-none resize-none"></textarea>
                        <div v-if="errors.message" class="text-xs text-red-500">{{ errors.message }}</div>
                    </div>
                </div>
                <div class="flex items-baseline gap-2">
                    <input v-model="isAcknowledged" type="checkbox" class="inline cursor-pointer">
                    <p class="inline text-sm text-[#ACA8A8]">Yes, I agree to receive communications about Moya products and solutions and to the processing of my personal data under the <NuxtLink :to="'/privacy-policy'" class="text-primary">Privacy Policy</NuxtLink>, and <NuxtLink :to="'terms-and-conditions'" class="text-primary">Terms & Conditions</NuxtLink>.</p>
                </div>
                <div class="flex flex-col gap-1 w-full">
                    <button :disabled="!isAcknowledged || isSubmitting" @click.prevent="handleSubmit" class="min-w-[120px] mx-auto p-2 text-white bg-primary rounded-full select-none transition-all duration-300 ease-in-out disabled:bg-[#D4D4D4] mt-14">Submit</button>
                    <div v-if="submissionMessage" :class="{'text-red-500': isError, 'text-gray-500': !isError}">{{ submissionMessage }}</div>
                </div>
            </div>
        </div>
	</section>

    <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35695.49557126097!2d35.51830641787561!3d33.89156967306351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1742460030154!5m2!1sen!2slb" width="100%" height="500p" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

</template>

<script setup>
	import { useCountry } from '~/composables/useCountry';

    useSeoMeta({
        title: 'Contact Us',
        description: '',

        ogTitle: 'Contact Us',
        ogDescription: '',
        ogImage: 'https://moya.com/images/og-image-1200x630.png',

        twitterTitle: 'Contact Us',
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
        });
    });

    const form = ref({
        full_name: '',
        email: '',
        company_name: '',
        position: '',
        subject: '',
        code: '',
        mobile: '',
        website: '',
        partnership: '',
        territory: '',
        message: '',
    });

    const errors = ref({
        full_name: '',
        email: '',
        company_name: '',
        position: '',
        subject: '',
        code: '',
        mobile: '',
        website: '',
        partnership: '',
        territory: '',
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
            safe: 'Your input has invalid value'
        },
        position: {
            safe: 'Your input has invalid value'
        },
        subject: {
            required: 'Please enter your subject',
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
        partnership: {
            required: 'Please enter how would you like to partner with us',
            safe: 'Your input has invalid value'
        },
        territory: {
            required: 'Please enter the territory that you would like to cover',
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
            subject: '',
            code: selectedCountry.value ? selectedCountry.value.code : initialCode.value,
            mobile: '',
            website: '',
            partnership: '',
            territory: '',
            message: '',
        };
        errors.value = {
            full_name: '',
            email: '',
            company_name: '',
            position: '',
            subject: '',
            code: '',
            mobile: '',
            website: '',
            partnership: '',
            territory: '',
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