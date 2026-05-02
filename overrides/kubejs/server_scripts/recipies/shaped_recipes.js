//Shaped recipes
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gobber2:gobber2_ingot', 2),
        [
            'AB ',
            'CD ',
            '   '
        ], {
            A: 'gobber2:gobber2_glob',
            B: 'minecraft:diamond',
            C: 'minecraft:iron_ingot',
            D: 'minecraft:gold_ingot'
        })
    event.shaped(
        Item.of('gobber2:gobber2_ingot_nether', 2),
        [
            'AB ',
            'BC ',
            '   '
        ], {
            A: 'gobber2:gobber2_glob_nether',
            B: 'gobber2:gobber2_ingot',
            C: 'minecraft:netherite_scrap'
        })
    event.shaped(
        Item.of('gobber2:gobber2_ingot_end', 2),
        [
            'AB ',
            'BC ',
            '   '
        ], {
            A: 'gobber2:gobber2_glob_end',
            B: 'gobber2:gobber2_ingot_nether',
            C: 'minecraft:chorus_flower'
        })
    // Trim dupes, can't set a count of more than one for callbacks so this is the best way
    event.shaped(
        Item.of('deeperdarker:warden_upgrade_smithing_template', 2),
        [
            'BAB',
            'BCB',
            'BBB'
        ], {
            A: 'deeperdarker:warden_upgrade_smithing_template',
            B: 'minecraft:sculk_catalyst',
            C: 'forbidden_arcanus:darkstone'
        })
    event.shaped(
        Item.of('kubejs:gobber_smithing_template', 2),
        [
            'BAB',
            'BCB',
            'BBB'
        ], {
            A: 'kubejs:gobber_smithing_template',
            B: 'gobber2:gobber2_ingot',
            C: 'minecraft:deepslate'
        })
    event.shaped(
        Item.of('kubejs:nether_gobber_smithing_template', 2),
        [
            'BAB',
            'BCB',
            'BBB'
        ], {
            A: 'kubejs:nether_gobber_smithing_template',
            B: 'gobber2:gobber2_ingot_nether',
            C: 'minecraft:netherrack'
        })
    event.shaped(
        Item.of('kubejs:end_gobber_smithing_template', 2),
        [
            'BAB',
            'BCB',
            'BBB'
        ], {
            A: 'kubejs:end_gobber_smithing_template',
            B: 'gobber2:gobber2_ingot_end',
            C: 'minecraft:end_stone'
        })
    event.shaped(
        Item.of('kubejs:dragon_gobber_smithing_template', 2),
        [
            'BAB',
            'BCB',
            'BBB'
        ], {
            A: 'kubejs:dragon_gobber_smithing_template',
            B: 'apothic_enchanting:infused_breath',
            C: 'minecraft:purpur_block'
        })
})
// Script recipes
ServerEvents.recipes(event => {
    // Repeating scripts
    const compacting = (output, input) => {
        event.shaped(output, [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: input
        })
}
    const chest = (output, inerInput, outerInput) => {
        event.shaped(output, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: outerInput,
            B: inerInput
        })
    }
    const armorTrimDupe = (output, trim, resource, stone) => {
        event.shaped(output, [
            'BAB',
            'BCB',
            'BBB'
        ], {
            A: trim,
            B: resource,
            C: stone
        })
    }
    const dragonTier = (output, A, B, C, D) => {
        event.shaped(output, [
            'ABA',
            'CDC',
            'ACA'
        ], {
            A: A,
            B: B,
            C: C,
            D: D
        })
    }

    // Recipe calls
    chest('kubejs:gobber_smithing_template', 'deeperdarker:warden_upgrade_smithing_template', 'gobber2:gobber2_ingot')
    chest('kubejs:nether_gobber_smithing_template', 'kubejs:gobber_smithing_template', 'gobber2:gobber2_ingot_nether')
    chest('kubejs:end_gobber_smithing_template', 'kubejs:nether_gobber_smithing_template', 'gobber2:gobber2_ingot_end')
    chest('kubejs:dragon_gobber_smithing_template', 'kubejs:end_gobber_smithing_template', 'apothic_enchanting:infused_breath')
    chest('deeperdarker:warden_upgrade_smithing_template', 'minecraft:netherite_upgrade_smithing_template', 'minecraft:sculk_catalyst')
    dragonTier('gobber2:dragon_star', 'apothic_enchanting:infused_breath', 'minecraft:dragon_head', 'gobber2:gobber2_ingot_end', 'minecraft:nether_star')
    dragonTier('gobber2:dragon_elytra', 'apothic_enchanting:infused_breath', 'minecraft:dragon_head', 'gobber2:gobber2_ingot_end', 'deeperdarker:soul_elytra')
})  