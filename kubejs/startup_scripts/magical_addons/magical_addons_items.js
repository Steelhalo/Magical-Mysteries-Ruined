//Items
StartupEvents.registry('item', event => {
  event.create('shadow_logo').maxStackSize(64).texture('magical_addons:item/shadow_logo'),
  event.create('bewitchment:unpowered_silver_ingot').maxStackSize(64).texture('magical_addons:item/unpowered_silver_ingot'),
  event.create('bewitchment:unpowered_silver_nugget').maxStackSize(64).texture('magical_addons:item/unpowered_silver_nugget'),
  event.create('sleeping_eye_of_ender').maxStackSize(64).texture('magical_addons:item/sleeping_eye_of_ender')
})

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.icon = 'kubejs:sleeping_eye_of_ender',
  event.displayName = Text.white('Magical Addons')
  event.removeSearch('bewitchment:unpowered_silver_ingot'),
  event.removeSearch('bewitchment:unpowered_silver_nugget')
  event.removeSearch('bewitchment:powered_silver_block')
})
StartupEvents.modifyCreativeTab('bewitchment:tab', event => {
  event.addAfter('bewitchment:silver_block', 'bewitchment:powered_silver_block')
  event.addAfter('bewitchment:raw_silver', 'bewitchment:unpowered_silver_ingot')
  event.addAfter('bewitchment:unpowered_silver_ingot', 'bewitchment:unpowered_silver_nugget')
})
Platform.mods.kubejs.name = 'Magical Addons'