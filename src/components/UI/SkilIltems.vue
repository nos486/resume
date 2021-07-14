<template>
    <div class="mb-2">
        <h6><i :class="icon"></i> <b>{{title}}</b></h6>
        <div class="d-flex justify-content-start flex-wrap">
            <div v-for="(item,index) in list" :key="index" :class="'bg-'+$store.getters.mainColor" class=" text-white rounded pt-1 pb-1 p-2 me-1 mb-1">{{ item }}</div>
        </div>

    </div>
</template>

<script>
export default {
    name: "SkillItems",
    props: {
        title: {
            type: String,
            default: "Title"
        },
        icon: {
            type: String,
            default: "fa fa-info"
        },
        list : {
            type : Array,
            default : ()=>{
                return ["Skill 1","Skill 2"]
            }
        }
    }
}
</script>

<style scoped>

</style>