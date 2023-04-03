<template>
     <div class="space-y-5 px-6">
        <div class="relative flex items-start">
            <div class="flex h-6 items-center">
                <input
                    :id="index"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    v-model="standardSelection"
                />
            </div>
            <div class="ml-3 text-sm leading-6">
                <label :for="index" class="font-bold text-gray-900 cursor-pointer">{{ standard.code }}</label>
                <p class="text-gray-500">{{ standard.description }}</p>
            </div>
        </div>
     </div>
</template>

<script>
    export default {
        props: ['standard', 'index'],
        computed: {
            standardSelection: {
                get() {
                    return this.$store.getters['standards/standardSelection'](this.standard.code)
                },
                set(value) {
                    this.$store.dispatch('standards/setStandardSelection', {key: this.standard.code, value})
                },
            }
        },
    }
</script>
