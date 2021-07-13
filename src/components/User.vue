<template>
    <div>
        <Avatar src="@/assets/avatar.jpeg"></Avatar>
        <div class="d-flex flex-column mt-2">
            <div class="display-5 orange-text darken-3"><b>SINA</b> NOSRATI</div>
            <h5 class="text-secondary"><i class="fa fa-laptop-code"></i> Full-Stack Developer</h5>
        </div>
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
    name: "User",
    components: {Avatar}
}
</script>

<style scoped>

</style>