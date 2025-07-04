//Items made by my messy code
//Items
StartupEvents.registry('item', event => {
  event.create('shadow_logo').maxStackSize(64).texture('magical_addons:item/shadow_logo'),
  event.create('unpowered_silver_ingot').maxStackSize(64).texture('magical_addons:item/unpowered_silver_ingot'),
  event.create('unpowered_silver_nugget').maxStackSize(64).texture('magical_addons:item/unpowered_silver_nugget')
})

StartupEvents.modifyCreativeTab('kubejs', event => {
  event.icon = 'magical_addons:textures/unpowered_silver_ingot'
})
Platform.mods.kubejs.name = 'Magical Addons'