/* if (typeof __teleport_final_clean_loaded === 'undefined') {
  var __teleport_final_clean_loaded = true;

  var SRC_X = 125, SRC_Y = 10, SRC_Z = -250;
  var DST_X = 141, DST_Y = 9, DST_Z = -277;
  var CHECK_INTERVAL_TICKS = 10;
  var COOLDOWN_TICKS = 40;

  var __teleport_final_clean_state = __teleport_final_clean_state || { tick: 0, lastTeleported: new Map() };

  __teleport_final_clean_state.getPlayersList = __teleport_final_clean_state.getPlayersList || function(event) {
    try {
      if (event.server && event.server.players) return event.server.players;
      if (event.server && event.server.playerManager && typeof event.server.playerManager.getPlayerList === 'function') return event.server.playerManager.getPlayerList();
      if (event.server && typeof event.server.getPlayerList === 'function') return event.server.getPlayerList();
      if (event.server && typeof event.server.getPlayers === 'function') return event.server.getPlayers();
    } catch (e) {}
    return [];
  };

  __teleport_final_clean_state.getPlayerBlockPos = __teleport_final_clean_state.getPlayerBlockPos || function(pl) {
    try {
      if (!pl) return null;
      if (typeof pl.blockPosition === 'function') {
        var bp = pl.blockPosition();
        return { x: bp.getX(), y: bp.getY(), z: bp.getZ() };
      }
      if (pl.entity) {
        var ent = pl.entity;
        if (typeof ent.blockPosition === 'function') {
          var bp2 = ent.blockPosition();
          return { x: bp2.getX(), y: bp2.getY(), z: bp2.getZ() };
        }
        if (typeof ent.getX === 'function' && typeof ent.getY === 'function' && typeof ent.getZ === 'function') {
          return { x: Math.floor(ent.getX()), y: Math.floor(ent.getY()), z: Math.floor(ent.getZ()) };
        }
      }
      if (typeof pl.x === 'number' && typeof pl.y === 'number' && typeof pl.z === 'number') {
        return { x: Math.floor(pl.x), y: Math.floor(pl.y), z: Math.floor(pl.z) };
      }
      if (typeof pl.getX === 'function' && typeof pl.getY === 'function' && typeof pl.getZ === 'function') {
        return { x: Math.floor(pl.getX()), y: Math.floor(pl.getY()), z: Math.floor(pl.getZ()) };
      }
    } catch (e) {}
    return null;
  };

  __teleport_final_clean_state.teleportNative = __teleport_final_clean_state.teleportNative || function(pl, tx, ty, tz, event) {
    try {
      if (pl.entity) {
        try {
          var ent = pl.entity;
          if (ent.connection && typeof ent.connection.teleport === 'function') {
            var yaw = (typeof ent.yRot === 'number') ? ent.yRot : (typeof ent.getYRot === 'function' ? ent.getYRot() : 0.0);
            var pitch = (typeof ent.xRot === 'number') ? ent.xRot : (typeof ent.getXRot === 'function' ? ent.getXRot() : 0.0);
            ent.connection.teleport(tx, ty, tz, yaw, pitch);
            return 'connection.teleport';
          }
          try {
            if (typeof ent.teleportTo === 'function') {
              if (ent.getLevel && typeof ent.getLevel === 'function') {
                var worldObj = ent.getLevel();
                try {
                  ent.teleportTo(worldObj, tx, ty, tz, yaw || 0.0, pitch || 0.0);
                  return 'teleportTo(world,x,y,z,yaw,pitch)';
                } catch (e) {
                  try {
                    ent.teleportTo(tx, ty, tz);
                    return 'teleportTo(x,y,z)';
                  } catch (e2) {}
                }
              } else {
                try {
                  ent.teleportTo(tx, ty, tz);
                  return 'teleportTo(x,y,z)';
                } catch (e3) {}
              }
            }
          } catch (e5) {}
          if (typeof ent.moveTo === 'function') {
            ent.moveTo(tx, ty, tz);
            return 'entity.moveTo';
          }
          if (typeof ent.setPos === 'function') {
            ent.setPos(tx, ty, tz);
            return 'entity.setPos';
          }
        } catch (eNative) {}
      }
      try {
        var target = null;
        if (pl.uuid && typeof pl.uuid.toString === 'function') target = pl.uuid.toString();
        else if (pl.name) target = pl.name;
        else if (pl.entity && typeof pl.entity.getUUID === 'function') target = pl.entity.getUUID().toString();
        if (event && event.server && target) {
          var cmd = 'execute as ' + target + ' run tp @s ' + tx + ' ' + ty + ' ' + tz;
          if (typeof event.server.runCommandSilent === 'function') {
            event.server.runCommandSilent(cmd);
            return 'server.runCommandSilent(execute as)';
          } else if (typeof event.server.runCommand === 'function') {
            event.server.runCommand(cmd);
            return 'server.runCommand(execute as)';
          } else if (event.server.getCommandManager && typeof event.server.getCommandManager === 'function') {
            try {
              var cm = event.server.getCommandManager();
              if (cm && typeof cm.execute === 'function') {
                cm.execute(event.server.createCommandSourceStack(), cmd);
                return 'commandManager.execute';
              }
            } catch (ecm) {}
          }
        }
      } catch (eCmd) {}
    } catch (e) {}
    return 'failed';
  };

  ServerEvents.tick(function(event) {
    try {
      __teleport_final_clean_state.tick++;
      if (__teleport_final_clean_state.tick % CHECK_INTERVAL_TICKS !== 0) return;

      var players = __teleport_final_clean_state.getPlayersList(event);
      if (!players) return;

      var iterate = function(pl) {
        try {
          if (!pl) return;
          if (typeof pl.isSpectator === 'function' && pl.isSpectator()) return;

          var pos = __teleport_final_clean_state.getPlayerBlockPos(pl);
          if (!pos) return;

          var matchExact = (pos.x === SRC_X && pos.y === SRC_Y && pos.z === SRC_Z);
          var matchFloored = (Math.floor(pos.x) === SRC_X && Math.floor(pos.y) === SRC_Y && Math.floor(pos.z) === SRC_Z);
          if (!(matchExact || matchFloored)) return;

          var key;
          try {
            if (pl.uuid && typeof pl.uuid.toString === 'function') key = pl.uuid.toString();
            else if (pl.entity && typeof pl.entity.getUUID === 'function') key = pl.entity.getUUID().toString();
            else if (pl.name) key = String(pl.name);
            else key = pos.x + ',' + pos.y + ',' + pos.z;
          } catch (e) { key = pos.x + ',' + pos.y + ',' + pos.z; }

          var last = __teleport_final_clean_state.lastTeleported.get(key) || -999999;
          if (__teleport_final_clean_state.tick - last < COOLDOWN_TICKS) return;

          var tx = DST_X + 0.5, ty = DST_Y, tz = DST_Z + 0.5;

          var res = __teleport_final_clean_state.teleportNative(pl, tx, ty, tz, event);

          console.log('teleport-final: player=' + (pl.name || key) + ' pos=' + pos.x + ',' + pos.y + ',' + pos.z + ' result=' + res);

          if (res !== 'failed') {
            __teleport_final_clean_state.lastTeleported.set(key, __teleport_final_clean_state.tick);
          }
        } catch (inner) {
          console.log('teleport-final: per-player error: ' + String(inner));
        }
      };

      if (typeof players.forEach === 'function') {
        players.forEach(iterate);
      } else {
        for (var i = 0; i < players.length; i++) iterate(players[i]);
      }
    } catch (e) {
      console.log('teleport-final: tick error: ' + String(e));
    }
  });
}
  */