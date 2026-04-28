LootJS.lootTables(event => {
    let ids = event.getLootTableIds(/.*chests\/.*/)
    for (let id of ids) {
        console.log(id)
        event.getLootTable(id)
        .removeItem("irons_spellbooks:scroll")
        .removeItem("ars_additions:imbued_spell_parchment")
        .removeItem("ars_nouveau:whirlisprig_shards")
        .removeItem("ars_nouveau:caster_tome")
        .removeItem("ars_nouveau:warp_scroll")
        .removeItem("ars_nouveau:drygmy_shard")
        .removeItem("ars_nouveau:wixie_shards")
        .removeItem("ars_nouveau:split_arrow")
        .removeItem("ars_nouveau:amplify_arrow")
        .removeItem("ars_nouveau:pierce_arrow")
        .removeItem("ars_nouveau:wilden_wing")
    }
})