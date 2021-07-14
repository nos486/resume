<template>
    <div id="app" class="container-fluid container-lg">
        <div class="row">
            <div class="col-sm-6 col-md-5 col-xl-4 d-flex flex-column p-4 bg-grey lighten-8">
                <div class="d-flex justify-content-center justify-content-sm-start">
                    <User></User>
                </div>
                <Contact class="mt-3"></Contact>
                <Skills class="mt-3"></Skills>

            </div>
            <div class="col-sm-6 col-md-7 col-xl-8 container p-4 ">
                <About></About>
                <Experience class="mt-4"></Experience>
                <Education class="mt-4"></Education>
                <Licenses class="mt-4"></Licenses>
                <Languages class="mt-4"></Languages>
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
import Licenses from "@/components/Licenses";
import About from "@/components/About";
import Languages from "@/components/Languages";

export default {
    name: 'App',
    components: {
        Languages,
        About,
        Licenses,
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

<style>
.no-float {
    height: 100%;
}

</style>

