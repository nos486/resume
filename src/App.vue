<template>
    <div id="app" class="container p-5 p-sm-auto">
        <div class="row">
            <div class="col-lg-4 col-md-6 d-flex flex-column pt-5  lighten-8">
                <div class="d-flex justify-content-center justify-content-md-start">
                    <User></User>
                </div>
                <Contact class="mt-4"></Contact>
                <Skills class="mt-3"></Skills>
            </div>
            <div class="col-lg-8 col-md-6 container pt-5 ">
                <Experience></Experience>
                <Education class="mt-4"></Education>
            </div>
        </div>

    </div>

</template>

<script>

import User from "@/components/User";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default {
    name: 'App',
    components: {
        Skills,
        Experience,
        Education,
        Contact,
        User,
    },
    data: function () {
        return {
        }
    },
}
</script>

