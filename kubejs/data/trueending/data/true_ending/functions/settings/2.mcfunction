
tellraw @s [{"translate": " "}]


execute if score pearlbreaking trueEnding_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: Dropped ender pearl items breaking from an Ender Dragon attack."},{"text":" Implemented to prevent massive farming of ender pearls when endermen are killed by the many new dragon attacks.","color": "gray"}]}},{"translate":"Pearls Break From Attacks: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/pearlbreaking_0"}}]
execute if score pearlbreaking trueEnding_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: Dropped ender pearl items breaking from an Ender Dragon attack."},{"text":" Implemented to prevent massive farming of ender pearls when endermen are killed by the many new dragon attacks.","color": "gray"}]}},{"translate":"Pearls Break From Attacks: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/pearlbreaking_1"}}]



tellraw @s [{"translate": " "}]


execute if score crystalcount trueEnding_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: When an End Crystal is destroyed, a text display is shown briefly to players with how many End Crystals are left to destroy"}]}},{"translate":"End Crystal Counter: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/crystalcount_0"}}]
execute if score crystalcount trueEnding_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: When an End Crystal is destroyed, a text display is shown briefly to players with how many End Crystals are left to destroy"}]}},{"translate":"Dragon Trail: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/crystalcount_1"}}]

tellraw @s [{"translate": " "}]

execute if score dragontrail trueEnding_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: The particle trail of the Ender Dragon"}]}},{"translate":"Dragon Trail: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/dragontrail_0"}}]
execute if score dragontrail trueEnding_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: The particle trail of the Ender Dragon"}]}},{"translate":"Dragon Trail: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/dragontrail_1"}}]


tellraw @s [{"translate": " "}]




tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- Page 1","hoverEvent":{"action":"show_text","contents":[{"translate":"Previous Page"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:settings/1"}},{"translate":"         - 2/3 -        ","color": "gray","italic": false},{"translate":"Page 3 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"Next Page"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:settings/3"}}]

tellraw @s [{"translate": " "}]
