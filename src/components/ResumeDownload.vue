<template>
    <button type="button" class="btn circle circle-lg btn-light" @click="downloadResume">
        <i class="fa fa-download"></i>
    </button>
</template>
<script>
export default {
    name: 'ResumeDownload',
    methods :{
        downloadResume : function () {
            window.open("https://ccns.ir/dl/resume.pdf", '_blank').focus();

        }
    }
}
</script>
