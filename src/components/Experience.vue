<template>
    <item title="Experience">
        <div>
            <SubItem title="Freelance programmer" icon="fa fa-file-code">
                <b>Freelance</b> Mar 2020 – Present
            </SubItem>

            <SubItem title="Full-Stack developer" icon="fa fa-code">
                <b>Scientific Green Incorporation (SGI)</b> Mar 2020 – Present
                <li class="mt-1">
                    Developing apps for the inner organization usage
                </li>
            </SubItem>

            <SubItem title="R&D management" icon="fa fa-search">
                <b>ASE</b> Apr 2018 – Mar 2020
                <li class="mt-1">
                    Working on new electronic ideas, designing and building them.
                </li>
                <li>
                    Developing apps to control electronic devices with pc or mobile phones
                </li>
            </SubItem>

            <SubItem title="IT manager" icon="fa fa-network-wired">
                <b>NIACO Atlas Qeshm</b> Dec 2016 – Mar 2018
                <li class="mt-1">
                    Managed network systems, ESXi servers, and PCoIP clients.
                </li>

            </SubItem>
        </div>
    </item>
</template>
<script>
import Item from "@/components/UI/Item"
import SubItem from "@/components/UI/SubItem"

export default {
    name: 'Experience',
    components: {Item, SubItem}
}
</script>