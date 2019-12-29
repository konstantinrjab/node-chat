<template>
    <div class="">
        <div class="css-containerVideoMe">
            <video ref="video" id="videoMe" autoplay/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WebCam",
        mounted() {
            navigator.mediaDevices.getUserMedia({video: true})
                .then(mediaStream => {
                    this.$refs.video.srcObject = mediaStream;
                    this.$refs.video.play()
                })
                .catch(error => console.error('getUserMedia() error:', error))
        },
    }
</script>

<style scoped>

    .css-containerVideoMe {
        position: absolute;
        right: 5px;
        top: 15px;
    }

    #videoMe {
        width: 150px;
        height: 90px;
    }
</style>