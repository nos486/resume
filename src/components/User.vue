<template>
    <div class="position-relative">
        <Avatar src="@/assets/avatar.jpeg"></Avatar>
        <div :class="$store.getters.mainColor+'-text'" class=" position-absolute end-0" style="margin-top: -4px">
            SEP 1994
            <i class="fa fa-clock"></i>
        </div>
        <div class="d-flex flex-column mt-2">
            <div :class="$store.getters.mainColor+'-text'" class="display-5 darken-3"><b>SINA</b> NOSRATI</div>
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