<template>
    <Item title="Skills">
        <SkillItems title="Frontend" icon="fa fa-laptop-code" :list="frontendList"></SkillItems>
        <SkillItems title="Backend" icon="fa fa-server" :list="backendList"></SkillItems>
        <SkillItems title="DevOps" icon="fab fa-dev" :list="devopsList"></SkillItems>
    </Item>
</template>
<script>
import Item from "@/components/UI/Item"
import SkillItems from "@/components/UI/SkilIltems"

export default {
    name: 'Skills',
    components: {Item, SkillItems},
    data: function () {
        return {
            backendList: ["Linux","Python","NodeJs","MongoDB"],
            frontendList: ["VueJs","ES7","SASS"],
            devopsList: ["Docker","WebServer"],
        }
    },
}
</script>