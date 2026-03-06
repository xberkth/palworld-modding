# Instalación

### 1. PALSCHEMA
🔹 Instala [PalSchema](https://www.nexusmods.com/palworld/mods/2361). Sigue las [instrucciones oficiales de instalación](https://okaetsu.github.io/PalSchema/docs/installation) de PalSchema para evitar problemas. Omite este paso si ya lo tienes instalado.

### 2. UE4SS
🔹 Instala la última versión [experimental de UE4SS](https://github.com/Okaetsu/RE-UE4SS/releases/tag/experimental-palworld). Omite este paso si ya lo tienes instalado.

### 3. MOD
🔹 Ve al directorio de instalación de Palworld. En Steam, puedes hacer clic derecho en el juego y seleccionar Administrar > Explorar archivos locales. Si usas el explorador de archivos, la ruta debería ser similar a esta: ``C:\Archivos de programa (x86)\Steam\steamapps\common\Palworld``

🔹 Descarga el [mod](https://www.nexusmods.com/palworld/mods/3290?tab=files) y extráelo directamente al directorio de Palworld que acabas de abrir. Asegúrate de descargar la versión del mod para tu plataforma.

🔹 Después de extraer los archivos, deberías tener la siguiente estructura:
```
📁 Palworld
└── 📁 Pal
    ├── 📁 Binaries
    │   └── 📁 Win64/WinGDK (steam/gamepass)
    │       └── 📁 ue4ss
    │           └── 📁 Mods
    │               └── 📁 PalSchema
    │                   └── 📁 Mods
    │                       └── 📁 RanchExpansion
    │                           ├── 📁 blueprints
    │                           │   ├── 📄 bp_eikthyrdeer.jsonc
    │                           │   ├── 📄 bp_nox.jsonc
    │                           │   ├── 📄 bp_pengullet.jsonc
    │                           │   ├── 📄 bp_rushoar.jsonc
    │                           │   └── 📄 bp_sparkit.jsonc
    │                           ├── 📁 raw
    │                           │   ├── 📄 eikthyrdeer.jsonc
    │                           │   ├── 📄 nox.jsonc
    │                           │   ├── 📄 pengullet.jsonc
    │                           │   ├── 📄 rushoar.jsonc
    │                           │   └── 📄 sparkit.jsonc
    │                           └── 📁 translations
    │                               ├── 📁 en
    │                               │   └── 📄 pal_skill_desc.json
    │                               └── 📁 es
    │                                   └── 📄 pal_skill_desc.json
    └── 📁 Content
        └── 📁 Paks
            ├── 📄 RanchExpansion_P.pak
            ├── 📄 RanchExpansion_P.ucas (gamepass version only)
            └── 📄 RanchExpansion_P.utoc (gamepass version only)
```

🔹 Si hiciste todo correctamente, ¡disfruta del mod!

:::info[**Importante**]

Si tu directorio PalSchema no coincide, probablemente hayas descargado una versión desactualizada de UE4SS, PalSchema o ambos. Esto puede causar problemas como que los mods de planos y los archivos jsonc no funcionen. Consulta los pasos [**#1**](#1-palschema) y [**#2**](#2-ue4ss).

:::