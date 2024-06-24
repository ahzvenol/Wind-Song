<template>
    <div class="container">
        <NavBar title="练耳" left-arrow @click-left="router.back()" />
        <div class="cell-container">
            <Cell class="cell-block" title="Pitch Judgment" is-link to="/ear-training/pitch-judgment" size="large" />
            <Cell class="cell-block" title="Pitch Judgment" is-link to="/ear-training/pitch-judgment" size="large" />
            <Cell class="cell-block" title="Pitch Judgment" is-link to="/ear-training/pitch-judgment" size="large" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { NavBar } from 'vant'
import { Cell } from 'vant'
import router from '@/router'

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.cell-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 46px 20px 20px;
    background-color: #F7F8FA;
}

.cell-block {
    margin: 0 0 12px;
    font-weight: 600;
    font-size: 14px;
    border-radius: 99px;
    transition: opacity.3s;
}
</style>
