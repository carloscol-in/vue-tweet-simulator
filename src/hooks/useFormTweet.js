import { ref } from 'vue'

export default function useFormTweet() {
    const showForm = ref(true);

    const openCloseForm = () => {
        showForm.value = !showForm.value
    }

    return {
        showForm,
        openCloseForm,
    }
}