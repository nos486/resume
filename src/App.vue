<template>
    <div id="app" class="container-fluid container-lg ">
        <div class="row">
            <div class="col-sm-6 col-md-5 col-xl-4 d-flex flex-column p-4 bg-grey lighten-8">
                <div class="d-flex justify-content-center justify-content-sm-start">
                    <User/>
                </div>
                <Contact class="mt-5"/>
                <Skills class="mt-4"/>

            </div>
            <div class="col-sm-6 col-md-7 container p-4 ">
                <About/>
                <Experience class="mt-4"/>
                <Education class="mt-4"/>
                <Licenses class="mt-4"/>
                <Languages class="mt-4"/>
            </div>

            <div class="d-none d-xl-flex flex-column align-items-center col-xl-1 bg-grey lighten-8 position-relative">
                <div :class="'bg-'+$store.getters.mainColor" class="position-absolute h-100 start-0 lighten-8" style="width: 5px"></div>
                <ResumeDownload class="mt-4"/>
                <ShuffleColor class="mt-2"/>
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
import ResumeDownload from "@/components/ResumeDownload";
import ShuffleColor from "@/components/ShuffleColor";

export default {
    name: 'App',
    components: {
        ShuffleColor,
        ResumeDownload,
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
    mounted() {
    },
    methods :{

    }


}
</script>

<style>
.no-float {
    height: 100%;
}

</style>

