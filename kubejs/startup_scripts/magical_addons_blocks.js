//Blocks
StartupEvents.registry('block', event => {
  event.create('unpowered_silver_block', 'basic')
    .displayName('Unpowered Silver Block')
    .soundType('metal')
    .hardness(2.5)
    .resistance(3.5)
    .fullBlock(true)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .textureAll('magical_addons:block/unpowered_silver_block')
})