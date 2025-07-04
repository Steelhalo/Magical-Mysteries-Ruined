//Shapeless
ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('amethyst_imbuement:gem_dust', 1),
    [
      'hexcasting:scroll'
    ]
  )
  event.shapeless(
    Item.of('amethyst_imbuement:gem_dust', 1),
    [
      'hexcasting:scroll_medium'
    ]
  )
  event.shapeless(
    Item.of('amethyst_imbuement:gem_dust', 1),
    [
      'hexcasting:scroll_small'
    ]
  )
  event.shapeless(
    Item.of('minecraft:bone_meal', 3),
    [
      'ecologics:seashell'
    ]
  )
})

//Shaped
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('bewitchment:athame', 1),
    [
      ' A ',
      'B  ',
      '   '
    ],
    {
      A: 'kubejs:unpowered_silver_ingot',
      B: 'minecraft:flint'
    }
)
})

//Replace Input
ServerEvents.recipes(event => {
  event.replaceInput(
    {input: 'botania:quartz_dark' },
    'botania:quartz_dark',
    '#c:smoky_quartz'
  )
  event.replaceInput(
    {input: 'mythicmetals:steel_ingot'},
    'mythicmetals:steel_ingot',
    'amethyst_imbuement:steel_ingot'
  )
})

//Replace Output
ServerEvents.recipes(event => {

})