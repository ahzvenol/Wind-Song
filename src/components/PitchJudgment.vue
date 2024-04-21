<template>
    <div>
        <NavBar title="标题" left-arrow @click-left="router.back()" />
        <div id="abcjs-container" style="pointer-events: none;">
            <div id="abcjs-svg" ref="svg"></div>
        </div>
        <PasswordInput :value="value" :length="length - 1" :mask="false" :focused="true" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import abcjs from 'abcjs'
import { NavBar } from 'vant'
import { PasswordInput, NumberKeyboard } from 'vant'
import router from '@/router'
import { getRandomInt } from '@/util'

const svg = ref()
const value = ref("")

const length = ref(5)

const notes = Array(length.value).fill("")
    .map(_ => {
        // 生成a-g范围内的随机ASCII码（97到103之间）
        const charCode = getRandomInt(97, 103)
        // 将ASCII码转换为字符并返回
        return String.fromCharCode(charCode)
    })
    .map(e => {
        // ♯ ♭ 或 none
        const semitone = (getRandomInt(0, 1) ? "^" : "_").repeat(getRandomInt(0, 1))
        // 随机生成C2到B6的音
        const scale = (getRandomInt(0, 1) ? "," : "'").repeat(getRandomInt(0, 2))
        return semitone + e + scale
    })
    .join(" ") + "|"

console.log(notes)

onMounted(async () => {
    // const notes = "B c d e|"
    const visualObj = abcjs.renderAbc(svg.value, `%%staffwidth 135\nL:1/1\n` + notes)
    const synth = new abcjs.synth.CreateSynth()
    await synth.init({ visualObj: visualObj[0] })
    await synth.prime()
    synth.start()
})
// const myContext = new AudioContext()
// const visualObj = abcjs.renderAbc(svg.value, "X:1\nK:Bb\nB c d e\n")
// const synth = new abcjs.synth.CreateSynth()
// synth.init({
//     audioContext: myContext,
//     visualObj: visualObj[0],
//     millisecondsPerMeasure: 500,
//     options: {
//         soundFontUrl: "https:/path/to/soundfont/folder",
//         pan: [-0.3, 0.3]
//     }
// })
//     .then(function (results) {
//         // Ready to play. The results are details about what was loaded.

//         synth.prime().then((response) => {
//             console.log(response.status)

//             synth.start()
//         })
//     })
//     .catch(function (reason) {
//         console.log(reason)
//     })
</script>

<style scoped>
#abcjs-container {
    display: inline-flex;
    justify-content: center;
    width: 100vw;
}

#abcjs-svg {
    width: 200px;
}
</style>
