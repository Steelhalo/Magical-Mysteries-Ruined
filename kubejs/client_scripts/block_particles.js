ClientEvents.tick(event => {
    const range = 11
    const {player, player:{block:{pos}, age}, level} = event
    if(age % 20) return;

    for (let dx = -range; dx <= range; dx++) {
        for (let dy = -range; dy <= range; dy++) {
            for (let dz = -range; dz <= range; dz++) {
                let checkPos = pos.offset(dx, dy, dz)
                let block = level.getBlock(checkPos)
                if (block.id == "kubejs:purple_drip_block") {
                    level.spawnParticles(
                        "bosses_of_mass_destruction:pillar_spawn_indicator",
                        true,
                        checkPos.x + 0.5,
                        checkPos.y + 0.5,
                        checkPos.z + 0.5,
                        0, 0, 0,
                        1,
                        0 
                    )
                }
            }
        }
    }
})

//Try to get this working /particle amethyst_imbuement:colored_end_rod 0.54 0.196 0.72 1 ~1 ~1 ~1 0 0 0 0 1 force

ClientEvents.tick(event => {
    const range = 8
    const {player, player:{block:{pos}, age}, level} = event
    if(age % 20) return;

    for (let dx = -range; dx <= range; dx++) {
        for (let dy = -range; dy <= range; dy++) {
            for (let dz = -range; dz <= range; dz++) {
                let checkPos = pos.offset(dx, dy, dz)
                let block = level.getBlock(checkPos)
                if (block.id == "kubejs:purple_star_block") {
                    for (let i = 0; i < 15; i++) {
                        let rx = Math.random()
                        let ry = -Math.random();
                        let rz = Math.random()
                        level.spawnParticles(
                            "minecraft:portal",
                            true,
                            checkPos.x + 0.5,
                            checkPos.y + ry,
                            checkPos.z + 0.5,
                            0, 0, 0,
                            1,
                            0 
                        )
                    }
                }
            }
        }
    }
})

ClientEvents.tick(event => {
    const range = 8
    const {player, player:{block:{pos}, age}, level} = event
    if(age % 20) return;

    for (let dx = -range; dx <= range; dx++) {
        for (let dy = -range; dy <= range; dy++) {
            for (let dz = -range; dz <= range; dz++) {
                let checkPos = pos.offset(dx, dy, dz)
                let block = level.getBlock(checkPos)
                if (block.id == "kubejs:spiting_lava_particle_block") {
                    for (let i = 0; i < 15; i++) {
                        let rx = Math.random()
                        let ry = -Math.random();
                        let rz = Math.random()
                        level.spawnParticles(
                            "minecraft:lava",
                            true,
                            checkPos.x + 0.5,
                            checkPos.y + ry,
                            checkPos.z + 0.5,
                            0, 0, 0,
                            1,
                            0 
                        )
                    }
                }
            }
        }
    }
})