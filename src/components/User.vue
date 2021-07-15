<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <Avatar/>
        <div :class="$store.getters.mainColor+'-text'" class="w-100 text-end" style="margin-bottom: -20px">
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