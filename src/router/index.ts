import { createRouter, createWebHashHistory } from "vue-router"

import Main from '../components/Main.vue'
import EarTraining from "@/components/EarTraining.vue"
import MusicTheory from "@/components/MusicTheory.vue"
import PitchJudgment from "@/components/PitchJudgment.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Main, meta: { index: 1 } },
        { path: '/ear-training', component: EarTraining, meta: { index: 2 } },
        { path: '/music-theory', component: MusicTheory, meta: { index: 2 } },
        { path: '/ear-training/pitch-judgment', component: PitchJudgment, meta: { index: 3 } },
    ],
})

router.beforeEach((to, from, next) => {
    next()
})

export default router