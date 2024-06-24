<template>
    <div>
        <div id="container">
            <template v-if="active === 0">
                <div class="cell-container">
                    <Cell class="cell-block" title="Ear Training" is-link to="/ear-training" />
                    <Cell class="cell-block" title="Music Theory" is-link to="/music-theory" />
                </div>
            </template>
        </div>
        <Tabbar v-model="active" active-color="#1989fa">
            <TabbarItem icon="music-o">
                练习
            </TabbarItem>
        </Tabbar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cell } from 'vant'
import { Tabbar, TabbarItem } from 'vant'

const active = ref(0)

</script>

<style scoped lang="less">
#container {
    width: 100vw;
    height: 100vh;
    background-color: #F7F8FA;
}

.cell-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px 20px 0;
}

.cell-block {
    border-radius: 3px;
    margin: 0 0 12px;
    color: white;
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);

    :deep(.van-cell__right-icon) {
        color: white !important;
    }
}
</style>
