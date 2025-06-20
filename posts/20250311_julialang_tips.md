+++
title = "Tips para el lenguaje de programación Julia"
hascode = true
date = Date(2025, 3, 11)
rss = "Un conjunto de tips de tareas frecuentes, aburridas y/o complicadas, que no quiero tener que buscar una y otra vez en la web."

tags = ["syntax", "code", "julialang"]
+++

# Tips para el lenguaje de programación Julia
Código _Julia_ para tareas menores que hago a cada rato y que no quiero tener que andar buscando en la web. Si a alguien le sirve, bienvenido. 

\toc

## Escribir un dataframe en un archivo excel

```julia
using DataFrames
using XLSX

XLSX.writetable("new_file.xlsx", "sheet1" => df)
```

Extraido de: [https://stackoverflow.com/questions/76090037/how-to-save-changes-of-dataframe-from-julia-to-excel-as-new-excel](https://stackoverflow.com/questions/76090037/how-to-save-changes-of-dataframe-from-julia-to-excel-as-new-excel)

## Leer un dataframe desde un archivo excel

```julia
using DataFrames
using XLSX

df = DataFrame(XLSX.readtable("new_file.xlsx", "sheet1"))
```

## Escribir un dataframe en un archivo CSV

```julia
using DataFrames
using CSV

CSV.write("new_file.csv", df)
```


## Leer un dataframe desde un archivo CSV

```julia
using DataFrames
using CSV

df = CSV.read("new_file.csv", DataFrame)
```

## Escribir un dataframe en un archivo CSV usando un pipe

```julia
using DataFrames
using CSV

df |> CSV.write("new_file.csv")
```

# Modificar los valores de una columna de un dataframe cuando la fila cumpla alguna condición

Tip extraído de [este post](https://stackoverflow.com/questions/66586623/julia-dataframe-preferred-way-to-update-values-in-one-column-based-on-the-valu) de Stack Overflow.

```julia
using DataFrames

function filter_transform!(df, pred, args...)
    fdf = filter(pred, df; view=true)
    fdf .= DataFrames.transform(copy(fdf), (col => f => col for (col,f) in args)...)
end

# Ejemplo de uso
# Cambia el valor de 'column2' a 200 en aquellos casos que 'column1' sea mayor a 100
filter_transform!(df, :column1 => >(100), :column2 => column2->200)
```


## Cambiar el tipo de dato de una columna de un dataframe

```julia
using DataFrames

df.columna = Int64.(df.columna)
```

Ahora bien, si a los datos del dataframe los queresmo utilizar con algún modelo de _Machine Learning_, con la biblioteca _MLJ_, la transformación debe hacerse mediante la función _coerce_, que no solo cambia el tipo en memoria, sinó que le asocia una interpretación en el contexto del _aprendizaje automático_. Por ejemplo, si queremos convertir una columna a un tipo de data (para _aprendizaje automático_) del tipo categórico:

```julia
using DataFrames
using ScientificTypes

coerce!(df, :columna => ScientificTypes.Multiclass)
```

Y si queremos convetir todas las columnas del tipo _Count_ (el tipo de dato con el cual se asocian los enteros) a _Continuous_ (el tipo de datos asociados a reales), podemos hacer:

```julia
using DataFrames
using ScientificTypes

coerce!(df, ScientificTypes.Count => ScientificTypes.Continuous)
```

_coerce!_ es muy potente porque cambia las dos cosas, la forma de almacenar el dato en memoria, como la interpretación del dato.

## Agrupar un Dataframe
Supongamos que tenemos un dataframe con una columna llamada fecha, otra tipo y una última llamada cantidad, donde para cada combinación de fecha y tipo hay un valor de cantidad. Por ejemplo:

```julia
using DataFrames, Dates

fechas = Dates.Date.(["2025-03-01", "2025-03-01", "2025-03-02", "2025-03-02"])
tipos = ["tipo a", "tipo b", "tipo c", "tipo d"]
cantidades = [1,2,3,4]

df = DataFrame(fecha=fechas, tipo=tipos, cantidad=cantidades)
```

Si queremos generar un nuevo dataframe que agrupe por fecha la suma de la columna cantidades para todos los tipos, podemos hacer:

```julia
gdf = groupby(df, [:fecha])
summary = combine(gdf, :cantidad => sum)
rename!(summary, :cantidad_sum=>:total)
```

Esto devuelve un dataframe con las columnas fecha y total.

## Crear un dataframe vacío pero con nombre de columnas
Una forma, si son pocas columnas, es:

```julia
using DataFrames

df = DataFrame(
	columna1=Int[],
	columna2=String[],
	columna3=Float64[]
)
```

Ahora, si el número de columnas es muy grande, podemos hacer:

```julia
using DataFrames

nodenames = ["columna1", "columna2", "columna3"]
df = DataFrame([[] for _ = nodenames] , nodenames)
```

Extraido de [https://discourse.julialang.org/t/how-to-make-empty-dataframe-with-column-names/77936](https://discourse.julialang.org/t/how-to-make-empty-dataframe-with-column-names/77936), hay que adaptarlo si queremos definir tipos tambien.

## Averiguar que modelos de aprendizaje automático puedo usar con mis datos (usando MLJ)
Dado un conjunto de predictores _Xtrain_ y una variable a predecir _ytrain_, el siguiente código nos lista (en un dataframe) todos los modelos que permiten el tipo de datos asociado a las features y al target:

```julia
using MLJ

DataFrame(models(matching(Xtrain,ytrain)))
```

Ahora bien, si queremos averiguar si, para un modelo particular, los predictores o la variable dependiente son compatibles. Por ejemplo, con un _DecisionTreeClassifier_ del paquete _DecisionTreeInterface_:

```julia
using MLJ
using DecisionTreeInterface

println("¿Es el formato del target compatible?: ", 
	scitype(ytrain) <: target_scitype(DecisionTreeClassifier()))

println("¿Es el formato de las features compatible?: ", 
	scitype(Xtrain) <: input_scitype(DecisionTreeClassifier()))
```

## Convertir días a enteros

Cuando restamos dos fechas, el tipo de datos devuelto es el tipo _Dates.Day_. Para convertirlo en entero, lo cual usualmente se necesita para realizar operaciones sobre diferencias temporales, podemos usar la función _Dates.value_:

```julia
using Dates

Dates.value(Dates.Date("2025-03-01") - Dates.Date("2025-01-01"))
```

## Guardar y leer una estructura en un archivo binario

Para guardar:

```julia
using JLD2

x = (1, "a")
save_object("mytuple.jld2", x)
```

Para leer:

```julia
using JLD2

x = load_object("mytuple.jld2")
```

(extraido de [https://stackoverflow.com/questions/67143280/save-data-in-julia](https://stackoverflow.com/questions/67143280/save-data-in-julia)).


