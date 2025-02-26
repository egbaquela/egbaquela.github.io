+++
title = "Como usar Julia en Google Colab"
hascode = true
date = Date(2025, 2, 26)
rss = "Como configurar Google Colab para poder ejecutar una sesión de Julia"

tags = ["syntax", "code", "cloud", "colab"]
+++

# Como usar Julia en Google Colab

Por alguna razón, Google todavía no ofrece soporte para Julia en Google Colab, pero eso no impide que se pueda ejecutar este lenguaje en dicha plataforma. Buscando en Internet, encontré dos formas:

* La primera, referenciada en [este repo de _ageron_](https://github.com/ageron/julia_notebooks) consiste en ejecutar la siguiente plantilla: [https://colab.research.google.com/github/ageron/julia_notebooks/blob/master/Julia_Colab_Notebook_Template.ipynb](https://colab.research.google.com/github/ageron/julia_notebooks/blob/master/Julia_Colab_Notebook_Template.ipynb) . La misma se ejecutar un script de bash que se encarga de descargar e instalar _Julia_. Requiere, luego, recargar la página.

* La segunda, consiste en utilizar esta plantilla: [https://colab.research.google.com/drive/1_4Yz3FKO5_uuYvamEfHqwtFT9WpCuSbm?usp=sharing](https://colab.research.google.com/drive/1_4Yz3FKO5_uuYvamEfHqwtFT9WpCuSbm?usp=sharing) , referenciada en [este repo de johnnychen94](https://github.com/johnnychen94/colab-julia-bootstrap). La misma utiliza [_Jill_](https://github.com/johnnychen94/jill.py) para la instalación de _Julia_ mediante _Python_. También requiere recargar la página.

A los dos enlaces llegué a través de estas dos páginas:

* [https://discourse.julialang.org/t/google-colab-compatibility-broken/93004](https://discourse.julialang.org/t/google-colab-compatibility-broken/93004)
* [https://github.com/googlecolab/colabtools/issues/3385](https://github.com/googlecolab/colabtools/issues/3385)

(si, tendría que haber llegado emdiante mejores páginas, pero todavía una de las deudas pendientes en el ecosistema de _Julia_).
