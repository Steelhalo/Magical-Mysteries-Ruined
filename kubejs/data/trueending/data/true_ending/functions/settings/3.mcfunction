
tellraw @s [{"translate": " "}]


execute if score guardphantom trueEnding_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: The guarding phantom surronding caged towers. This feature also adds 4 extra blocks of obsidian on the corners of the caged towers."}]}},{"translate":"Caged Tower Phantoms: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/guardphantom_0"}}]
execute if score guardphantom trueEnding_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: The guarding phantom surronding caged towers. This feature also adds 4 extra blocks of obsidian on the corners of the caged towers."}]}},{"translate":"Caged Tower Phantoms: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/guardphantom_1"}}]



tellraw @s [{"translate": " "}]

execute if score music_boss trueEnding_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: The music that plays during the Ender Dragon fight"}]}},{"translate":"Boss Music: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/music_boss_0"}}]
execute if score music_boss trueEnding_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: The music that plays during the Ender Dragon fight"}]}},{"translate":"Boss Music: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/music_boss_1"}}]

tellraw @s [{"translate": " "}]

execute if score music_defeat trueEnding_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: The music that plays upon defeating the Ender Dragon"}]}},{"translate":"Defeat Music: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/music_defeat_0"}}]
execute if score music_defeat trueEnding_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Description: The music that plays upon defeating the Ender Dragon"}]}},{"translate":"Defeat Music: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:action/music_defeat_1"}}]


tellraw @s [{"translate": " "}]



tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- Page 2","hoverEvent":{"action":"show_text","contents":[{"translate":"Previous Page"}]},"clickEvent":{"action":"run_command","value":"/function true_ending:settings/2"}},{"translate":"         - 3/3 -        ","color": "gray","italic": false}]

tellraw @s [{"translate": " "}]
