+++
title = "Links sobre como desarrollar un sitio basado en Pluto"
hascode = true
date = Date(2025, 12, 1)
rss = "Una lista de links a tutoriales y paquetes sobre como desarrollar un sitio web basado en Pluto"

tags = ["julialang", "Pluto"]
+++

# Links sobre como desarrollar un sitio basado en Pluto

Estoy en plan de migrar el [repositorio](https://github.com/egbaquela/tutoriales_io_julia) con los notebooks que utilizo en *Investigación Operativa* a una forma mas ordenada y accesible, similar al curso [Computational Thinking](https://computationalthinking.mit.edu/Fall24/) del MIT. Buceando un poco en el repo de dicho curso, en [Discouse](https://discourse.julialang.org/) y en otros lados, comencé a recopilar material sobre como convertir notebooks de [Pluto](https://plutojl.org/) en un sitio estático. Acá van:

* [Pluto Pages](https://github.com/JuliaPluto/PlutoPages.jl?tab=readme-ov-file): es el sistema utilizado para construir la versión actual del curso [Computational Thinking](https://computationalthinking.mit.edu/Fall24/) del MIT, cuyo código fuente se puede encontrar [acá](https://github.com/mitmath/computational-thinking/tree/Fall24).
* [Pluto Slider Server](https://github.com/JuliaPluto/PlutoSliderServer.jl): un componente de *Pluto Pages* usado en conjunto con [Franklin](https://github.com/JuliaDocs/Franklin.jl) para el curso [Computacao Cientifica](https://storopoli.github.io/Computacao-Cientifica/) de [Jose Storopoli](https://storopoli.com/). Su código fuente se puede encontrar [acá](https://github.com/storopoli/Computacao-Cientifica). 
* Interesantemente, *Pluto slider Server* se puede usar también para *simular* estáticamente la reactividad de Pluto. Mas info [acá](https://itabrah2.web.engr.illinois.edu/posts/prepluto/).

Algunos ejemplos de cursos creados de esta manera se pueden ver en:

* Computational Thinking (MIT): [https://computationalthinking.mit.edu/](https://computationalthinking.mit.edu/)
* Ciência de Dados e Computação Científica com Julia: [https://storopoli.github.io/Computacao-Cientifica/](https://storopoli.github.io/Computacao-Cientifica/)
* Julia for Deep Learning: [https://apxml.com/courses/julia-deep-learning](https://apxml.com/courses/julia-deep-learning)
* Cuadernos interactivos de probabilidad y estadística: [https://github.com/Santymax98/Probabilidad_y_estadistica](https://github.com/Santymax98/Probabilidad_y_estadistica)

Por otro lado, al momento de distribuir los materiales del curso, es buena idea precompilar los paquetes, para evitar la deserción de potenciales alumos por el tiempo de instalación de paquetes y primeras ejecuciones:

* JUMBO, versión precompilada y repo que sirve de base para crear versiones precompiladas propias: [https://github.com/JanisErdmanis/Jumbo](https://github.com/JanisErdmanis/Jumbo)
* Curso en Pluto precompilado: [https://github.com/jbrea/PrecompilePlutoCourse.jl](https://github.com/jbrea/PrecompilePlutoCourse.jl)

Para dar un poco mas de dinamismo, tenemos estos repos:

* PlutoUI: [https://featured.plutojl.org/basic/plutoui.jl](https://featured.plutojl.org/basic/plutoui.jl)
* Pluto Teaching Tools: [https://juliapluto.github.io/PlutoTeachingTools.jl/example.html](https://juliapluto.github.io/PlutoTeachingTools.jl/example.html)