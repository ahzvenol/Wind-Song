<template>
    <router-view v-slot="{ Component }">
        <transition :name="transition" mode="out-in">
            <component :is="Component" :key="route.fullPath" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from "vue-router"
import router from '@/router'

const route = useRoute()
const transition = ref("slide-left")
router.beforeEach((to, from) => {
    //如果to索引大于from索引,判断为前进状态,反之则为后退状态
    const toIndex = to.meta.index as number
    const fromIndex = from.meta.index as number
    transition.value = toIndex < fromIndex ? 'slide-right' : 'slide-left'
})
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
}

.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
</style>

<style scoped>
</style>
