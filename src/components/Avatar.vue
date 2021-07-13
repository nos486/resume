<template>
    <div>
        <img src="@/assets/avatar.jpeg" class="avatar shadow" :style="{width:size,height:size}">
    </div>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        size: {
            type: String,
            default : "200px"
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