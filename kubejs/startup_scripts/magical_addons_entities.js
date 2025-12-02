//Full Projectile
StartupEvents.registry('entity_type', event => {
    event.create('projectile', 'entityjs:projectile')
    .clientTrackingRange(8)
    .isAttackable(true)
    .mobCategory('misc')
    .item(item => {
        item.canThrow(true)
    })
    .sized(1, 1)
    .renderOffset(0, 0, 0)
    .renderScale(2, 2, 2)
    .updateInterval(3)
    .canHitEntity(entity => {
        return entity.type == "minecraft:player";
    })
    .shouldRenderAtSqrDistance(context => {
        const { entity, distanceToPlayer } = context;
        return distanceToPlayer < 100;
    })
    .onHitBlock(context => {
        const { entity, result } = context;
        entity.getLevel().addParticle('minecraft:end_rod', entity.getX(), entity.getY(), entity.getZ(), 0, 0.05, 0);
    })
    .onHitEntity(context => {
        const { entity, result } = context;
        if (result.entity.living) {
            let potion = result.entity.potionEffects
            potion.add('minecraft:instant_damage', 1, 0, false, true)
        }
    })
    .move(context => {
        const { entity, moverType, position } = context;
        entity.setDeltaMovement(0, 0.2, 0);
    })
})

//Arrows
StartupEvents.registry('entity_type', event => {
    event.create('arrow', 'entityjs:arrow')
        .setKnockback(1)
        .setBaseDamage(4)
        .clientTrackingRange(8)
        .isAttackable(true)
        .sized(3, 3)
        .updateInterval(3)
        .defaultHitGroundSoundEvent("minecraft:block.respawn_anchor.set_spawn")
        .setWaterInertia(1)
        .mobCategory('misc')
        .item(item => {
            item.maxStackSize(64);
        })
        .noItem()
        .textureLocation(entity => {
            return "magical_addons:item/test_arrow"
        })
        .setDamageFunction(entity => {
            return true
        })
        .canHitEntity(entity => {
            return entity.type == "minecraft:zombie";
        })
        .shouldRenderAtSqrDistance(context => {
            const { entity, distanceToPlayer } = context;
            return distanceToPlayer < 300;
        })
        .doPostHurtEffects(context => {
            const { entity, arrow } = context;
            let explosion = entity.block.createExplosion()
            explosion.strength(1)
            explosion.explosionMode('block')
            explosion.explode()
        })
        .move(context => {
            const { entity, moverType, position } = context;
            entity.setDeltaMovement(0, 0.1, 0);
        })
        .onHitBlock(context => {
            const { entity, result } = context;
            entity.getLevel().addParticle('minecraft:flash', entity.getX(), entity.getY(), entity.getZ(), 0, 0.01, 0);
        })
        .onHitEntity(context => {
            const { entity, result } = context;
            if (result.entity.living) {
                let potion = result.entity.potionEffects
                potion.add('minecraft:glowing', 10, 1, false, true)
            }
        })
        .tick(entity => {
            if (entity.getLevel().getBlockState(entity.blockPosition()).getBlock().id == "minecraft:lava") {
                entity.setSecondsOnFire(5);
            }
        })
        .tickDespawn(entity => {
            if (entity.getOwner() == null) return
            if (entity.distanceToEntity(entity.getOwner()) > 100) {
                entity.remove('discarded');
            }
        })
});
//StartupEvents.registry('entity_type', event => {
//    event.create('arrow', 'entityjs:arrow')
//        .setKnockback(5)
//        .setBaseDamage(8)
//        .clientTrackingRange(8)
//        .isAttackable(true)
//        .sized(1, 1)
//        .updateInterval(3)
//        .defaultHitGroundSoundEvent("minecraft:entity.arrow.hit")
//        .setWaterInertia(1)
//        .mobCategory('misc')
//        .item(item => {
//            item.maxStackSize(64);
//        })
//        .textureLocation(entity => {
//            return "kubejs:textures/entity/projectiles/arrow.png"
//        })
//        .setDamageFunction(entity => {
//            return true
//        })
//        .canHitEntity(entity => {
//            return entity.type == "minecraft:zombie";
//        })
//        .shouldRenderAtSqrDistance(context => {
//            const { entity, distanceToPlayer } = context;
//            return distanceToPlayer < 100;
//        })
//        .tryPickup(context => {
//            return !context.player.isCreative();
//        })
//        .doPostHurtEffects(context => {
//            const { entity, arrow } = context;
//            let explosion = entity.block.createExplosion()
//            explosion.strength(1)
//            explosion.explosionMode('block')
//            explosion.explode()
//        })
//        .lerpTo(context => {
//            const { entity, yaw, x, y, z, teleport, posRotationIncrements, pitch } = context;
//            entity.teleportTo(x, y, z);
//        })
//        .move(context => {
//            const { entity, moverType, position } = context;
//            entity.setDeltaMovement(0, 0.1, 0);
//        })
//        .onHitBlock(context => {
//            const { entity, result } = context;
//            entity.getLevel().addParticle('minecraft:campfire_cosy_smoke', entity.getX(), entity.getY(), entity.getZ(), 0, 0, 0);
//        })
//        .onHitEntity(context => {
//            const { entity, result } = context;
//            if (result.entity.living) {
//                let potion = result.entity.potionEffects
//                potion.add('minecraft:luck', 200, 1, false, true)
//            }
//        })
//        .playerTouch(context => {
//            const { player, entity } = context;
//            if (!entity.getLevel().isClientSide() && (entity.onGround() || entity.noPhysics) && entity.shakeTime <= 0) {
//                player.take(entity, 1);
//                entity.discard();
//            }
//        })
//        .tick(entity => {
//            if (entity.getLevel().getBlockState(entity.blockPosition()).getBlock().id == "minecraft:lava") {
//                entity.setSecondsOnFire(5);
//            }
//        })
//        .tickDespawn(entity => {
//            if (entity.getOwner() == null) return
//            if (entity.distanceToEntity(entity.getOwner()) > 100) {
//                entity.remove('discarded');
//            }
//        })