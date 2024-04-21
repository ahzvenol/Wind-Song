<template>
    <div>
        <NavBar title="标题" left-arrow @click-left="router.back()" />
        <div id="abcjs-container" style="pointer-events: none;">
            <div id="abcjs-svg" ref="svg"></div>
        </div>
        <div id="button-container">
            <div id="button" @click="play()">开始</div>
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

const synth = new abcjs.synth.CreateSynth()
const audio = new Audio()

function play() {
    audio.currentTime = 0
    audio.play()
}
// const synthControl = new abcjs.synth.SynthController()
onMounted(async () => {
    const visualObj = abcjs.renderAbc(svg.value, `%%staffwidth 135\nL:1/1\n` + notes)
    // await synthControl.setTune(visualObj[0], false)
    // synthControl.setWarp(2)
    await synth.init({ visualObj: visualObj[0] })
    await synth.prime()
    audio.src = synth.download()
    audio.playbackRate = 2
})

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

#button-container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10vh;
    margin-bottom: 5vh;
}

#button {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    color: #ffffff;
    background-color: #007bff;
    cursor: pointer;
    text-align: center;
}

#button::before {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
}
</style>
