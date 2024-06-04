<template>
    <div>
        <NavBar title="标题" left-arrow @click-left="router.back()" />
        <div id="abcjs-container" style="pointer-events: none;">
            <div v-show="inputColorMode === 0" id="abcjs-empty" ref="empty">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" role="img" fill="currentColor" stroke="currentColor"
                    aria-label="Sheet Music" width="209.55" height="94.617">
                    <title>Sheet Music</title>
                    <g>
                        <g>
                            <path d="M 15 36.64 L 194.55 36.64 L 194.55 37.34 L 15 37.34 z" stroke="none"
                                fill="currentColor" class="abcjs-top-line"></path>
                            <path d="M 15 44.39 L 194.55 44.39 L 194.55 45.09 L 15 45.09 z" stroke="none"
                                fill="currentColor"></path>
                            <path d="M 15 52.14 L 194.55 52.14 L 194.55 52.84 L 15 52.84 z" stroke="none"
                                fill="currentColor"></path>
                            <path d="M 15 59.89 L 194.55 59.89 L 194.55 60.59 L 15 60.59 z" stroke="none"
                                fill="currentColor"></path>
                            <path d="M 15 67.64 L 194.55 67.64 L 194.55 68.34 L 15 68.34 z" stroke="none"
                                fill="currentColor"></path>
                        </g>
                        <g class="" fill="currentColor" stroke="none" data-name="staff-extra clef">
                            <path data-name="clefs.G"
                                d="M 29.689999999999998 22.832000000000008c 0.09 -0.09 0.24 -0.06 0.36 0c 0.12 0.09 0.57 0.6 0.96 1.11c 1.77 2.34 3.21 5.85 3.57 8.73c 0.21 1.56 0.03 3.27 -0.45 4.86c -0.69 2.31 -1.92 4.47 -4.23 7.44c -0.3 0.39 -0.57 0.72 -0.6 0.75c -0.03 0.06 0 0.15 0.18 0.78c 0.54 1.68 1.38 4.44 1.68 5.49l 0.09 0.42l 0.39 0c 1.47 0.09 2.76 0.51 3.96 1.29c 1.83 1.23 3.06 3.21 3.39 5.52c 0.09 0.45 0.12 1.29 0.06 1.74c -0.09 1.02 -0.33 1.83 -0.75 2.73c -0.84 1.71 -2.28 3.06 -4.02 3.72l -0.33 0.12l 0.03 1.26c 0 1.74 -0.06 3.63 -0.21 4.62c -0.45 3.06 -2.19 5.49 -4.47 6.21c -0.57 0.18 -0.9 0.21 -1.59 0.21c -0.69 0 -1.02 -0.03 -1.65 -0.21c -1.14 -0.27 -2.13 -0.84 -2.94 -1.65c -0.99 -0.99 -1.56 -2.16 -1.71 -3.54c -0.09 -0.81 0.06 -1.53 0.45 -2.13c 0.63 -0.99 1.83 -1.56 3 -1.53c 1.5 0.09 2.64 1.32 2.73 2.94c 0.06 1.47 -0.93 2.7 -2.37 2.97c -0.45 0.06 -0.84 0.03 -1.29 -0.09l -0.21 -0.09l 0.09 0.12c 0.39 0.54 0.78 0.93 1.32 1.26c 1.35 0.87 3.06 1.02 4.35 0.36c 1.44 -0.72 2.52 -2.28 2.97 -4.35c 0.15 -0.66 0.24 -1.5 0.3 -3.03c 0.03 -0.84 0.03 -2.94 0 -3c -0.03 0 -0.18 0 -0.36 0.03c -0.66 0.12 -0.99 0.12 -1.83 0.12c -1.05 0 -1.71 -0.06 -2.61 -0.3c -4.02 -0.99 -7.11 -4.35 -7.8 -8.46c -0.12 -0.66 -0.12 -0.99 -0.12 -1.83c 0 -0.84 0 -1.14 0.15 -1.92c 0.36 -2.28 1.41 -4.62 3.3 -7.29l 2.79 -3.6c 0.54 -0.66 0.96 -1.2 0.96 -1.23c 0 -0.03 -0.09 -0.33 -0.18 -0.69c -0.96 -3.21 -1.41 -5.28 -1.59 -7.68c -0.12 -1.38 -0.15 -3.09 -0.06 -3.96c 0.33 -2.67 1.38 -5.07 3.12 -7.08c 0.36 -0.42 0.99 -1.05 1.17 -1.14zm 2.01 4.71c -0.15 -0.3 -0.3 -0.54 -0.3 -0.54c -0.03 0 -0.18 0.09 -0.3 0.21c -2.4 1.74 -3.87 4.2 -4.26 7.11c -0.06 0.54 -0.06 1.41 -0.03 1.89c 0.09 1.29 0.48 3.12 1.08 5.22c 0.15 0.42 0.24 0.78 0.24 0.81c 0 0.03 0.84 -1.11 1.23 -1.68c 1.89 -2.73 2.88 -5.07 3.15 -7.53c 0.09 -0.57 0.12 -1.74 0.06 -2.37c -0.09 -1.23 -0.27 -1.92 -0.87 -3.12zm -2.94 20.7c -0.21 -0.72 -0.39 -1.32 -0.42 -1.32c 0 0 -1.2 1.47 -1.86 2.37c -2.79 3.63 -4.02 6.3 -4.35 9.3c -0.03 0.21 -0.03 0.69 -0.03 1.08c 0 0.69 0 0.75 0.06 1.11c 0.12 0.54 0.27 0.99 0.51 1.47c 0.69 1.38 1.83 2.55 3.42 3.42c 0.96 0.54 2.07 0.9 3.21 1.08c 0.78 0.12 2.04 0.12 2.94 -0.03c 0.51 -0.06 0.45 -0.03 0.42 -0.3c -0.24 -3.33 -0.72 -6.33 -1.62 -10.08c -0.09 -0.39 -0.18 -0.75 -0.18 -0.78c -0.03 -0.03 -0.42 0 -0.81 0.09c -0.9 0.18 -1.65 0.57 -2.22 1.14c -0.72 0.72 -1.08 1.65 -1.05 2.64c 0.06 0.96 0.48 1.83 1.23 2.58c 0.36 0.36 0.72 0.63 1.17 0.9c 0.33 0.18 0.36 0.21 0.42 0.33c 0.18 0.42 -0.18 0.9 -0.6 0.87c -0.18 -0.03 -0.84 -0.36 -1.26 -0.63c -0.78 -0.51 -1.38 -1.11 -1.86 -1.83c -1.77 -2.7 -0.99 -6.42 1.71 -8.19c 0.3 -0.21 0.81 -0.48 1.17 -0.63c 0.3 -0.09 1.02 -0.3 1.14 -0.3c 0.06 0 0.09 0 0.09 -0.03c 0.03 -0.03 -0.51 -1.92 -1.23 -4.26zm 3.78 7.41c -0.18 -0.03 -0.36 -0.06 -0.39 -0.06c -0.03 0 0 0.21 0.18 1.02c 0.75 3.18 1.26 6.3 1.5 9.09c 0.06 0.72 0 0.69 0.51 0.42c 0.78 -0.36 1.44 -0.96 1.98 -1.77c 1.08 -1.62 1.2 -3.69 0.3 -5.55c -0.81 -1.62 -2.31 -2.79 -4.08 -3.15z">
                            </path>
                        </g>
                        <g class="" fill="currentColor" stroke="none" data-name="bar">
                            <path d="M 54.05 67.99L 54.05 36.99L 54.65 36.99L 54.65 67.99z" data-name="bar"></path>
                        </g>
                        <g class="" fill="currentColor" stroke="none" data-name="bar">
                            <path d="M 193.55 67.99L 193.55 36.99L 194.15 36.99L 194.15 67.99z" data-name="bar"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <div v-show="inputColorMode !== 0" id="abcjs-svg" ref="svg"></div>
        </div>
        <div id="button-container">
            <div id="button" @click="play()">开始</div>
        </div>
        <div id="input-container">
            <PasswordInput id="input" :value="input" :length="length - 1" :gutter="10" :mask="false" :focused="true" />
        </div>
        <div class="key-wrapper">
            <div id="key-container">
                <div class="key" @click="() => { buttonInterceptor(() => answer.push(1)) }">↑</div>
                <div class="key" @click="() => { buttonInterceptor(() => answer.push(0)) }">=</div>
                <div class="key" @click="() => { buttonInterceptor(() => answer.push(-1)) }">↓</div>
                <div class="key" @click="() => { buttonInterceptor(() => answer.pop()) }">
                    <svg class="van-key__delete-icon" viewBox="0 0 32 22">
                        <path
                            d="M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
        <!-- <NumberKeyboard show="true" /> -->
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import abcjs from 'abcjs'
import { NavBar } from 'vant'
import { PasswordInput } from 'vant'
import router from '@/router'
import { ArrayUtils, getRandomInt, sliding, withFilter } from '@/util'
import { nodeCompare } from '@/util/abc'

const svg = ref()
// const empty = ref()
const input = ref("")

const answer = reactive<Array<number>>([])

const inputColorMode = ref(0)

const inputColor = ref({ default: '#D6D6D6', focus: "#59A4E8" })

const buttonInterceptor = withFilter(() => answer.length < 4 && inputColorMode.value === 0)

watch(
    inputColorMode,
    () => {
        if (inputColorMode.value === 1) {
            inputColor.value = { default: '#377E21', focus: "#377E21" }
        } else if (inputColorMode.value === -1) {
            inputColor.value = { default: '#EA3322', focus: "#EA3322" }
        }
    }
)

watch(
    () => answer,
    () => {
        input.value = answer.map(e => ({ 1: '↑', 0: '=', [-1]: '↓' }[e])).join("")
        if (answer.length === 4) {
            if (ArrayUtils.sameElements(answer, correctAnswer)) {
                inputColorMode.value = 1
            } else {
                inputColorMode.value = -1
            }
        }
    },
    { deep: true }
)

const length = ref(5)

const notes = Array(length.value).fill("")
    .map(_ => {
        // 生成A-G范围内的随机ASCII码（65到71之间）
        const charCode = getRandomInt(65, 71)
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

const correctAnswer = sliding(notes, 2).map(e => nodeCompare(e[0], e[1]))

const synth = new abcjs.synth.CreateSynth()
const audio = new Audio()

function play() {
    audio.currentTime = 0
    audio.play()
}

const abcHeaders = `%%staffwidth 135\nL:1/1\n`

onMounted(async () => {
    // abcjs.renderAbc(empty.value, abcHeaders + "|z|")
    const visualObj = abcjs.renderAbc(svg.value, abcHeaders + notes.join(" ") + "|")
    await synth.init({
        visualObj: visualObj[0],
        options: { soundFontUrl: '/soundfonts', }
    })
    await synth.prime()
    audio.src = synth.download()
    audio.playbackRate = 2
})

</script>

<style scoped lang="less">
#abcjs-container {
    display: inline-flex;
    justify-content: center;
    width: 100vw;

    >div {
        height: 160px !important;
    }

    #abcjs-empty {
        width: 200px;
    }

    #abcjs-svg {
        width: 200px;
    }

}


#button-container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5vh;
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

    &::before {
        display: inline-block;
        content: "";
        height: 100%;
        vertical-align: middle;
    }
}

#input-container {
    display: flex;
    justify-content: center;

    #input {
        display: block;
        width: 270px;
    }

    :deep(*) {
        cursor: default !important;
    }

    :deep(.van-password-input__item) {
        border: 3px solid v-bind('inputColor.default');
        border-radius: 10px;
    }

    :deep(.van-password-input__item--focus) {
        border: 3px solid v-bind('inputColor.focus');
        border-radius: 10px;
    }

}

.key-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 75px;
}

#key-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 270px;
}

.key {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #ECEDEC;
    border-radius: 10px;
    font-weight: bold;
}
</style>
