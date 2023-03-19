<template>
    <dl class="space-y-4 mx-6 my-6">
      <Disclosure as="div" v-for="(sub_domain, index) in subDomains" :key="index" v-slot="{ open }">
        <dt>
          <DisclosureButton class="flex w-full text-left text-gray-900">
            <span class="mr-6 flex h-7 items-center">
              <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
              <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
            </span>
            <span class="text-base font-semibold leading-7">{{ sub_domain.name }}</span>
          </DisclosureButton>
        </dt>
            <transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
            >
                <DisclosurePanel as="dd" class="pr-12">
                    <standards :standards="sub_domain.standards" />
                </DisclosurePanel>
            </transition>
      </Disclosure>
    </dl>
</template>

<script>
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
    import Standards from './Standards.vue';
    export default {
        components: {
            Disclosure,
            DisclosureButton,
            DisclosurePanel,
            MinusSmallIcon,
            PlusSmallIcon,
            Standards
        },
        props: ['subDomains']
    }
</script>
