ClientEvents.tick(event => {
    const range = 8
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
    const range = 6
    const {player, player:{block:{pos}, age}, level} = event
    if(age % 20) return;

    for (let dx = -range; dx <= range; dx++) {
        for (let dy = -range; dy <= range; dy++) {
            for (let dz = -range; dz <= range; dz++) {
                let checkPos = pos.offset(dx, dy, dz)
                let block = level.getBlock(checkPos)
                if (block.id == "kubejs:purple_star_block") {
                    for (let i = 0; i < 15; i++) {
                        let rx = Math.random();
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
    const range = 9
    const {player, player:{block:{pos}, age}, level} = event
    if(age % 1) return;

    for (let dx = -range; dx <= range; dx++) {
        for (let dy = -range; dy <= range; dy++) {
            for (let dz = -range; dz <= range; dz++) {
                let checkPos = pos.offset(dx, dy, dz)
                let block = level.getBlock(checkPos)
                if (block.id == "kubejs:spiting_lava_particle_block") {
                    for (let i = 0; i < 2; i++) {
                        let rx = Math.random();
                        let ry = -Math.random();
                        let rz = Math.random()
                        level.spawnParticles(
                            "minecraft:lava",
                            true,
                            checkPos.x + rx,
                            checkPos.y + ry,
                            checkPos.z + rz,
                            0, 0, 0,
                            1,
                            0 
                        )
                    }
                }
                if(age % 10) return;

                if (block.id == "kubejs:spiting_lava_particle_block") {
                    for (let i = 0; i < 8; i++) {
                        let rx = Math.random();
                        let ry = -Math.random();
                        let rz = Math.random()
                        level.spawnParticles(
                            "minecraft:lava",
                            true,
                            checkPos.x + rx,
                            checkPos.y + ry,
                            checkPos.z + rz,
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
    if(age % 10) return;

    for (let dx = -range; dx <= range; dx++) {
        for (let dy = -range; dy <= range; dy++) {
            for (let dz = -range; dz <= range; dz++) {
                let checkPos = pos.offset(dx, dy, dz)
                let block = level.getBlock(checkPos)
                if (block.id == "bewitchment:powered_silver_block") {
                    let face = Math.floor(Math.random() * 6) + 1
                    if (face == 1) {
                        for (let i = 0; i < 1; i++) {
                        let ry = Math.random();
                        let rz = Math.random()
                        level.spawnParticles(
                            "minecraft:dust 1 1 1 1",
                            true,
                            checkPos.x + -0.1,
                            checkPos.y + ry,
                            checkPos.z + rz,
                            0, 0, 0,
                            1,
                            0
                        )
                    }
                    } else if (face == 2) {
                        for (let i = 0; i < 1; i++) {
                        let rx = Math.random();
                        let ry = Math.random()
                        level.spawnParticles(
                            "minecraft:dust 1 1 1 1",
                            true,
                            checkPos.x + rx,
                            checkPos.y + ry,
                            checkPos.z + 1.1,
                            0, 0, 0,
                            1,
                            0 
                        )
                    }
                    } else if (face == 3) {
                    for (let i = 0; i < 1; i++) {
                        let rx = Math.random();
                        let ry = Math.random()
                        level.spawnParticles(
                            "minecraft:dust 1 1 1 1",
                            true,
                            checkPos.x + rx,
                            checkPos.y + ry,
                            checkPos.z + -0.1,
                            0, 0, 0,
                            1,
                            0 
                        )
                    }
                    } else if (face == 4) {
                    for (let i = 0; i < 1; i++) {
                        let rx = Math.random();
                        let rz = Math.random()
                        level.spawnParticles(
                            "minecraft:dust 1 1 1 1",
                            true,
                            checkPos.x + rx,
                            checkPos.y + -0.1,
                            checkPos.z + rz,
                            0, 0, 0,
                            1,
                            0 
                        )
                    }
                    } else if (face == 5) {
                    for (let i = 0; i < 1; i++) {
                        let rx = Math.random();
                        let rz = Math.random()
                        level.spawnParticles(
                            "minecraft:dust 1 1 1 1",
                            true,
                            checkPos.x + rx,
                            checkPos.y + 1.1,
                            checkPos.z + rz,
                            0, 0, 0,
                            1,
                            0 
                        )
                    }
                    } else if (face == 6) {
                    for (let i = 0; i < 1; i++) {
                        let ry = Math.random();
                        let rz = Math.random()
                        level.spawnParticles(
                            "minecraft:dust 1 1 1 1",
                            true,
                            checkPos.x + 1.1,
                            checkPos.y + ry,
                            checkPos.z + rz,
                            0, 0, 0,
                            1,
                            0 
                        )
                    }
                    }
                }
            }
        }
    }
})