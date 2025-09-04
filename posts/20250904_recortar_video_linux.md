+++
title = "¿Como recortar un video por línea de comandos en Linux?"
hascode = false
date = Date(2025, 9, 04)
rss = "Recortar la duración de un video por línea de comandos usando ffmpeg en linux"

tags = ["video", "linux", "ffmpeg"]
+++

# ¿Como recortar un video por línea de comandos en Linux?

La forma mas fácil, usar ffmpeg:

```
ffmpeg -i input.mp4 -ss 00:00:00 -to 00:08:48 -c copy output.mp4
```

En este caso, generamos una copia de una parte del video original, desde su inicio (00:00:00) hasta el la posición indicada por *-to* (00:08:48). La herramienta es mucho mas completa que esto, se puede buscar mas en su documentación oficial: [https://ffmpeg.org/ffmpeg.html](https://ffmpeg.org/ffmpeg.html)
