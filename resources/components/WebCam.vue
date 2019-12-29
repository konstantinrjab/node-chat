<template>
    <div class="">
        <div class="css-containerVideoMe">
            <video ref="video" class="css-video" autoplay/>
        </div>
        <canvas ref="canvas"/>
    </div>
</template>

<script>
    export default {
        name: "WebCam",
        mounted() {
            navigator.mediaDevices.getUserMedia({video: true})
                .then(mediaStream => {
                    this.$refs.video.srcObject = mediaStream;
                    this.$refs.video.play();

                    this.$refs.canvas.getContext('2d').drawImage(this.$refs.video, 0, 0, 100, 100);
                    this.$socket.emit('videoStream', this.$refs.canvas.toDataURL('image/webp'));
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

    .css-video {
        width: 150px;
        height: 90px;
    }
</style>