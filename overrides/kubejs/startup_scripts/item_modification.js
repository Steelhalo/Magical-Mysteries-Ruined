ItemEvents.modification(event => {
    const gobberTools = event.get('#c:gobber').getObjectIds()
    gobberTools.forEach(item => {
        item.fireResistant = true
    })
})