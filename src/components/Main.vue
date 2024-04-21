<template>
    <div>
        <div id="container">
            <template v-if="active === 0">
                <CellGroup>
                    <Cell title="Ear Training" is-link to="/ear-training" />
                    <Cell title="Music Theory" is-link to="/music-theory" />
                </CellGroup>
            </template>
        </div>
        <Tabbar v-model="active" active-color="#1989fa">
            <TabbarItem icon="music-o">
                练习
            </TabbarItem>
        </Tabbar>
    <!-- <Tabs>
        <Tab title="标签 1">内容 1</Tab>
        <Tab title="标签 2">内容 2</Tab>
    </Tabs> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CellGroup, Cell } from 'vant'
import { Tabbar, TabbarItem } from 'vant'

const active = ref(0)
// import { Tabs, Tab } from 'vant'

</script>

<style scoped>
#container {
    width: 100vw;
    height: 100vh;
    background-color: #F7F8FA;
}
</style>
