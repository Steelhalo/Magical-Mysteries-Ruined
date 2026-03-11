//Shaped
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('bewitchment:powered_silver_block', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'bewitchment:unpowered_silver_ingot'
        }
    )
    event.shaped(
        Item.of('bewitchment:unpowered_silver_ingot', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'bewitchment:unpowered_silver_nugget'
        }
    )
    event.shaped(
        Item.of('kubejs:rustic_whip', 1),
        [
            'AAA',
            'A B',
            'A  '
        ],
        {
            A: 'farmersdelight:rope',
            B: 'minecraft:flint'
        }
    )
    event.shaped(
        Item.of('kubejs:decent_whip', 1),
        [
            'AAA',
            'A B',
            'A  '
        ],
        {
            A: 'farmersdelight:rope',
            B: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('kubejs:ancient_whip', 1),
        [
            'AAA',
            'A B',
            'A  '
        ],
        {
            A: 'farmersdelight:rope',
            B: 'amethyst_imbuement:steel_ingot'
        }
    )
    event.shaped(
        Item.of('kubejs:rustic_knife', 1),
        [
            '   ',
            'B  ',
            'A  '
        ],
        {
            A: 'minecraft:stick',
            B: 'minecraft:flint'
        }
    )
    event.shaped(
        Item.of('kubejs:decent_knife', 1),
        [
            '   ',
            'B  ',
            'A  '
        ],
        {
            A: 'minecraft:stick',
            B: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('kubejs:ancient_knife', 1),
        [
            '   ',
            'B  ',
            'A  '
        ],
        {
            A: 'minecraft:stick',
            B: 'amethyst_imbuement:beryl_copper'
        }
    )
    event.shaped(
        Item.of('chipped:mason_table', 1),
        [
            'A  ',
            'BCB',
            'EDE'
        ],
        {
            A: 'minecraft:grindstone',
            B: 'minecraft:iron_ingot',
            C: 'minecraft:crafting_table',
            D: 'minecraft:clay_ball',
            E: '#c:logs'
        }
    )
})