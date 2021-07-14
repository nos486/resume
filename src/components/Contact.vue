<template>
    <div>
        <item title="Contact">

            <IconText icon="fa fa-map-marked-alt" text="Tehran, Iran"></IconText>
            <IconText icon="fa fa-phone" text="+98 912 8895140" href="tel: +989128895140"></IconText>
            <IconText icon="fab fa-google" text="Nos486@gmail.com" href="mailto: nos486@gmail.com"></IconText>
            <IconText icon="fab fa-github" text="Github.com/nos486" href="https://github.com/nos486"></IconText>
            <IconText icon="fab fa-linkedin" text="Linkedin.com/in/nos486" href="https://www.linkedin.com/in/nos486/"></IconText>
        </item>

    </div>
</template>

<script>
import Item from "@/components/UI/Item";
import IconText from "@/components/UI/IconText";

export default {
    name: "Contact",
    components: {IconText, Item}
}
</script>

