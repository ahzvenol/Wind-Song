<template>
    <NavBar title="标题" left-arrow @click-left="router.back()" />
</template>

<script setup lang="ts">
import { NavBar } from 'vant'
import router from '@/router'


</script>

<style scoped></style>