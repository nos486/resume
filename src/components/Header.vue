<template>
    <div class="d-flex justify-content-between align-items-center w-100 p-5">
        <div class="d-flex flex-column">
            <b class="display-4">Sina Nosrati</b>
            <h5><i class="fa fa-code"></i> Full-Stack Developer</h5>
        </div>
        <Avatar src="@/assets/avatar.jpeg"></Avatar>
    </div>

</template>

<script>
import Avatar from "@/components/Avatar";
export default {
name: "Header",
    components: {Avatar}
}
</script>

<style scoped>
</style>