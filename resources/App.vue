<template>
    <div class="">
        <chat></chat>
        <web-cam></web-cam>
    </div>
</template>

<script>
    import WebCam from "./components/WebCam.vue";
    import Chat from "./components/Chat.vue";

    export default {
        name: "App",
        components: {WebCam, Chat}
    }
</script>

<style>
    body {
        font-family: Georgia, Tahoma, Arial, sans-serif;
        background: #343a40;
    }
</style>