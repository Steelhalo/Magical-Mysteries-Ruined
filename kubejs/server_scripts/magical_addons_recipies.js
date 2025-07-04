//Shapless
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:unpowered_silver_nugget', 9),
        [
            'kubejs:unpowered_silver_ingot'
        ]
    )
    event.shapeless(
        Item.of('kubejs:unpowered_silver_ingot', 9),
        [
            'kubejs:unpowered_silver_block'
        ]
    )
    //Whip Colours
    event.shapeless(
        Item.of('kubejs:rustic_whip_red', 1),
        [
            '#magical_addons:whip',
            'minecraft:red_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_orange', 1),
        [
            '#magical_addons:whip',
            'minecraft:orange_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_yellow', 1),
        [
            '#magical_addons:whip',
            'minecraft:yellow_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_green', 1),
        [
            '#magical_addons:whip',
            'minecraft:green_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_lime', 1),
        [
            '#magical_addons:whip',
            'minecraft:lime_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_blue', 1),
        [
            '#magical_addons:whip',
            'minecraft:blue_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_cyan', 1),
        [
            '#magical_addons:whip',
            'minecraft:cyan_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_light_blue', 1),
        [
            '#magical_addons:whip',
            'minecraft:light_blue_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_pink', 1),
        [
            '#magical_addons:whip',
            'minecraft:pink_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_magenta', 1),
        [
            '#magical_addons:whip',
            'minecraft:magenta_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_purple', 1),
        [
            '#magical_addons:whip',
            'minecraft:purple_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_white', 1),
        [
            '#magical_addons:whip',
            'minecraft:white_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_grey', 1),
        [
            '#magical_addons:whip',
            'minecraft:grey_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_light_grey', 1),
        [
            '#magical_addons:whip',
            'minecraft:light_grey_dye'
        ]
    )
    event.shapeless(
        Item.of('kubejs:rustic_whip_black', 1),
        [
            '#magical_addons:whip',
            'minecraft:black_dye'
        ]
    )
        event.shapeless(
        Item.of('kubejs:rustic_whip_brown', 1),
        [
            '#magical_addons:whip',
            'minecraft:brown_dye'
        ]
    )
})
//Shaped
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:unpowered_silver_block', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:unpowered_silver_ingot'
        }
    )
    event.shaped(
        Item.of('kubejs:unpowered_silver_ingot', 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'kubejs:unpowered_silver_nugget'
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
})

//Furnace Smelting
ServerEvents.recipes(event => {
    event.smelting('kubejs:unpowered_silver_ingot', 'bewitchment:raw_silver').xp(0.35)
  })