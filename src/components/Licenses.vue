<template>
    <item title="Licenses & certifications">
        <div>
            <SubItem title="Microsoft Certified IT Professional (MCITP)" icon="fab fa-microsoft">
                <b>Cybertech Co.</b> - 200354<br>
                <small>May 2015</small>
            </SubItem>

            <SubItem title="Cisco Certified Network Professional (CCNP Route)" icon="fa fa-server" >
                <b>Cybertech Co.</b> - 115214<br>
                <small>Mar 2015</small>
            </SubItem>

            <SubItem title="Cisco Certified Network Professional (CCNP Switch)" icon="fa fa-network-wired">
                <b>Cybertech Co.</b> - 106336<br>
                <small>Dec 2013</small>
            </SubItem>

            <SubItem title="Cisco Certified Network Associate (CCNA)" icon="fa fa-network-wired">
                <b>Cybertech Co.</b> - 104315<br>
                <small>Sep 2013</small>
            </SubItem>

            <SubItem title="CompTIA Network+" icon="fa fa-ethernet">
                <b>Cybertech Co.</b> - 104316<br>
                <small>Sep 2013</small>
            </SubItem>

        </div>

    </item>
</template>
<script>
import Item from "@/components/UI/Item"
import SubItem from "@/components/UI/SubItem"

export default {
    name: 'Licenses',
    components: {Item, SubItem}
}
</script>
