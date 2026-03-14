# Instalación

### 1. PALSCHEMA
🔹 Instala [PalSchema](https://www.nexusmods.com/palworld/mods/2361). Sigue las [instrucciones oficiales de instalación](https://okaetsu.github.io/PalSchema/docs/installation) de PalSchema para evitar problemas. Omite este paso si ya lo tienes instalado.

### 2. UE4SS
🔹 Instala la última versión [experimental de UE4SS](https://github.com/Okaetsu/RE-UE4SS/releases/tag/experimental-palworld). Omite este paso si ya lo tienes instalado.

### 3. MOD
🔹 Ve al directorio de instalación de Palworld. En Steam, puedes hacer clic derecho en el juego y seleccionar Administrar > Explorar archivos locales. Si usas el explorador de archivos, la ruta debería ser similar a esta: ``C:\Archivos de programa (x86)\Steam\steamapps\common\Palworld``

🔹 Descarga el [mod](https://www.nexusmods.com/palworld/mods/3313?tab=files) y extráelo directamente al directorio de Palworld que acabas de abrir. Asegúrate de descargar la versión del mod para tu plataforma.

🔹 Después de extraer los archivos, deberías tener la siguiente estructura:
```
📁 Palworld
└── 📁 Pal
    └── 📁 Binaries
        └── 📁 Win64/WinGDK (steam/gamepass)
            └── 📁 ue4ss
                └── 📁 Mods
                    └── 📁 PalSchema
                        └── 📁 Mods
                            └── 📁 LegendaryPouch
                                ├── 📁 items
                                │   └── 📄 colossal_pouch.jsonc
                                ├── 📁 raw
                                │   ├── 📄 colossal_pouch_icon.jsonc
                                │   ├── 📄 colossal_pouch_icon_dt.jsonc
                                │   ├── 📄 colossal_pouch_recipe.jsonc
                                │   └── 📄 colossal_pouch_techtree.jsonc
                                ├── 📁 resources
                                │   ├── 📁 images
                                |   │   └── 📄 T_itemicon_Essential_Colossal_Pouch.png
                                └── 📁 translations
                                    ├── 📁 en
                                    │   └── 📄 pouch_translations.json
                                    └── 📁 es
                                        └── 📄 pouch_translations.json
```

🔹 Si hiciste todo correctamente, ¡disfruta del mod!

:::info[**Importante**]

Si tu directorio PalSchema no coincide, probablemente hayas descargado una versión desactualizada de UE4SS, PalSchema o ambos. Esto puede causar problemas como que los mods de planos y los archivos jsonc no funcionen. Consulta los pasos [**#1**](#1-palschema) y [**#2**](#2-ue4ss).

:::