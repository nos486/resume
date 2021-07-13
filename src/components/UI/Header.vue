<template>
    <div class="d-flex justify-content-start align-items-center w-100 p-5">
       <User></User>
    </div>

</template>

<script>
import User from "@/components/User";
export default {
name: "Header",
    components: {User, }
}
</script>

<style scoped>
</style>