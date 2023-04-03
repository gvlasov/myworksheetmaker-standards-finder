<template>
     <div class="space-y-5 px-6">
        <StandardCheckbox v-for="(standard, index) in standards" :standard="standard" :index="index"/>
     </div>
</template>

<script>
    import StandardCheckbox from "@/Components/StandardCheckbox.vue";
    export default {
        components: {StandardCheckbox},
        props: ['standards'],
        computed: {
            standardSelection: (code) => {
                return {
                    get() {
                        return this.$store.getters['standards/standardSelection'](code)
                    },
                    set(value) {
                        this.$store.dispatch('standards/setStandardSelection', code, value)
                    },
                }
            }
        },
    }
</script>
