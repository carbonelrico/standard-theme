# Create the base directory
New-Item -ItemType Directory -Force -Path "theme-engine"

# Create sub-directories
$dirs = @(
    "theme-engine/assets",
    "theme-engine/utils",
    "theme-engine/plugins"
)

foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Force -Path $dir
}

# Create the empty files
$files = @(
    "theme-engine/assets/main.css",
    "theme-engine/utils/scheduler.ts",
    "theme-engine/plugins/theme-driver.ts",
    "theme-engine/tailwind.preset.js",
    "theme-engine/nuxt.config.ts",
    "theme-engine/package.json"
)

foreach ($file in $files) {
    New-Item -ItemType File -Force -Path $file
}