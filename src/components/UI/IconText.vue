<template>
    <div class="d-flex align-items-center">
        <i :class="icon" class="me-1"></i>
        <div v-if="href" >
            <a :href="href" class="text-muted" style="text-decoration: none;">{{ text }} </a>
        </div>
        <div v-else>{{text}}</div>
    </div>
</template>
<script>
export default {
    name: 'IconText',
    props : {
        icon : {
            type : String,
            default : "fa fa-code"
        },
        text : {
            type : String,
            default : "Code :)"
        },
        href : {
            type : String,
            default : null
        },
    }
}
</script>
