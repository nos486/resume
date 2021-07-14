<template>
    <button type="button" class="btn circle circle-lg btn-light" @click="shuffleColor">
        <i class="fa fa-sync"></i>
    </button>
</template>
<script>
export default {
    name: 'ShuffleColor',
    data: function () {
        return {
            colors:["red","pink","purple","indigo","blue","light-blue","cyan","green","light-green","amber","orange","brown"]
        }
    },
    mounted() {
        this.shuffleColor()
    },
    methods :{
        shuffleColor(){
            let colorIndex = Math.floor(Math.random() * (this.colors.length -1))
            this.$store.commit("mainColor",this.colors[colorIndex])
        }
    }
}
</script>
