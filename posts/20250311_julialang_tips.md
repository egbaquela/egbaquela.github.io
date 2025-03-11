+++
title = "Tips para el lenguaje de programación Julia"
hascode = true
date = Date(2025, 3, 11)
rss = "Un conjunto de tips de tareas frecuentes, aburridas y/o complicadas, que no quiero tener que buscar una y otra vez en la web."

tags = ["syntax", "code", "julialang"]
+++

# Tips para el lenguaje de programación Julia
En este post voy a incluir todo el código de _Julia_ que busco a cada rato, en general para tareas menores. Principalmente para tener un solo lugar de búsqueda. 


## Escribir un dataframe en un archivo excel

```julia
XLSX.writetable("new_file.xlsx", "sheet1" => df)
```

Extraido de: [https://stackoverflow.com/questions/76090037/how-to-save-changes-of-dataframe-from-julia-to-excel-as-new-excel](https://stackoverflow.com/questions/76090037/how-to-save-changes-of-dataframe-from-julia-to-excel-as-new-excel)