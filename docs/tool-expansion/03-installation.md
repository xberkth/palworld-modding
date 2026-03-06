# Installation

### 1. PALSCHEMA
🔹 Install [PalSchema](https://www.nexusmods.com/palworld/mods/2361). Follow the official PalSchema [installation instructions](https://okaetsu.github.io/PalSchema/docs/installation) to avoid any issue. Skip this step if you already have it installed.

### 2. UE4SS
🔹 Install the latest [experimental UE4SS](https://github.com/Okaetsu/RE-UE4SS/releases/tag/experimental-palworld). Skip this step if you already have it installed.

### 3. MOD
🔹 Go to your Palworld installation directory. On Steam, you can right-click the game, select Manage > Browse local files. If you are using the file explorer, path should be something like this: ``C:\Program Files (x86)\Steam\steamapps\common\Palworld``

🔹 Download the [mod](https://www.nexusmods.com/palworld/mods/3296?tab=files) and extract it directly to the Palworld directory that you just opened. Make sure to download the version of the mod for your platform.

🔹 After extracting the files, you should have the following structure:
```
📁 Palworld
└── 📁 Pal
    └── 📁 Binaries
        └── 📁 Win64/WinGDK (steam/gamepass)
            └── 📁 ue4ss
                └── 📁 Mods
                    └── 📁 PalSchema
                        └── 📁 Mods
                            └── 📁 ToolExpansion
                                ├── 📁 items
                                │   ├── 📄 tool_metal_axe.jsonc
                                │   ├── 📄 tool_metal_pickaxe.jsonc
                                │   ├── 📄 tool_refined_metal_axe.jsonc
                                │   ├── 📄 tool_refined_metal_pickaxe.jsonc
                                │   ├── 📄 tool_pal_metal_axe.jsonc
                                │   └── 📄 tool_pal_metal_pickaxe.jsonc
                                ├── 📁 raw
                                │   ├── 📄 metal_axe_bp_drop.jsonc
                                │   ├── 📄 metal_pickaxe_bp_drop.jsonc
                                │   ├── 📄 refined_metal_axe_bp_drop.jsonc
                                │   ├── 📄 refined_metal_pickaxe_bp_drop.jsonc
                                │   ├── 📄 pal_metal_axe_bp_drop.jsonc
                                │   ├── 📄 pal_metal_pickaxe_bp_drop.jsonc
                                │   └── 📄 tool_recipes.jsonc
                                └── 📁 translations
                                    ├── 📁 en
                                    │   └── 📄 bp_translations.json
                                    └── 📁 es
                                        └── 📄 bp_translations.json
```

🔹 If you did everything correctly, enjoy playing with the mod!

:::info[**Important**]

If your PalSchema directory doesn't match, you've most likely downloaded an outdated version of UE4SS, PalSchema or both. This may result in issues like blueprint mods and jsonc files not working. Refer to steps [**#1**](#1-palschema) and [**#2**](#2-ue4ss).

:::