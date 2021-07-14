<template>
    <Item title="Skills">
        <SkillItems title="Programing Languages" icon="fa fa-code" :list="programingLanguages"></SkillItems>
        <SkillItems title="DB" icon="fa fa-database" :list="dbList"></SkillItems>
        <SkillItems title="Frameworks And Technologies" icon="fab fa-dev" :list="technologiesList"></SkillItems>
        <SkillItems title="Software" icon="fab fa-uncharted" :list="softwareList"></SkillItems>
        <SkillItems title="Other" icon="fa fa-user-plus" :list="otherList"></SkillItems>
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
            programingLanguages : ["JavaScript","Python","Dart","Bash Script","C#","JAVA","C++"],
            technologiesList: ["Express.js","Django","Electron","Flutter","Vue.js","jQuery","BootStrap","JWt","Socket.io","Mapbox GL","SASS","Docker","GIT"],
            dbList: ["MongoDB","Postgres","SQLite","Redis"],
            softwareList :["Unity","Visual Studio","JetBrains IDE","Photoshop","Illustrator","Inkscape","DaVinci Resolve","Arduino","SOLIDWORKS","FreeCAD","Cura"],
            otherList : ["Software Design","Server Configuration","R&D","System Administration","Graphic Design","3D Modeling","Digital electronics"],

        }
    },
}
</script>