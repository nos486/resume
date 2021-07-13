<template>
    <item title="Experience">
        <div>
            <SubItem title="Full-Stack developer" icon="fa fa-code">
                <b>Scientific Green Incorporation (SGI)</b> Mar 2020 – Present
            </SubItem>

            <SubItem title="R&D management" icon="fa fa-search">
                <b>ASE</b> Apr 2018 – Mar 2020
            </SubItem>

            <SubItem title="IT manager" icon="fa fa-network-wired">
                <b>NIACO Atlas Qeshm</b> Dec 2016 – Mar 2018
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