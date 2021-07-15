<template>
    <div :style="{width:size,height:size}">
        <img src="@/assets/avatar-2-1.png" class="avatar position-absolute" :style="{width:size,height:size}">
        <img ref="avatarHead" src="@/assets/avatar-2-2.png" class="avatar position-absolute"
             :style="{width:size,height:size}">
    </div>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        size: {
            type: String,
            default: "220px",
        }
    },
    data :function(){
        return {
            colors: {
                "red": -20,
                "pink": -40,
                "purple": -90,
                "indigo": -150,
                "blue": -160,
                "light-blue": -180,
                "cyan": -190,
                "green": -240,
                "light-green": -280,
                "amber": -340,
                "orange": -360
            }
        }
    },
    computed: {
        mainColor: function (){
            return this.$store.getters.mainColor
        }
    },
    watch: {
        mainColor : function(){
            this.setColor()
        }
    },
    mounted() {
        this.setColor()
    },
    methods :{
        setColor(){
            this.$refs["avatarHead"].style.webkitFilter = `hue-rotate(${this.colors[this.$store.getters.mainColor]}deg)`
        }
    }


}
</script>

<style scoped>
.avatar {
    vertical-align: middle;
    border-radius: 50%;
}
</style>