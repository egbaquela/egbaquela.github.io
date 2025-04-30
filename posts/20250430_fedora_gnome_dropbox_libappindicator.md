+++
title = "¿Como hacer para que desaparezca la advertencia sobre _libappindicator_ de _Dropbox_ en _Gnome_ en _Fedora Linux_?"
hascode = true
date = Date(2025, 4, 30)
rss = "¿Como hacer para que desaparezca la advertencia sobre _libappindicator_ en _Gnome_ en _Fedora Linux_?"

tags = ["Fedora", "Gnome", "Dropbox"]
+++

# ¿Como hacer para que desaparezca la advertencia sobre _libappindicator_ en _Gnome_ en _Fedora Linux_?

Desde ayer me apareció la advertencia, porque por algún cambio en _Dropbox_, necesita tener instalada dicha biblioteca para seguir funcionando en _Gnome_. La solución, extraida de [https://hackmd.io/@rob-tn/gnome-dropbox](https://hackmd.io/@rob-tn/gnome-dropbox), es:

```
sudo dnf install gnome-shell-extension-appindicator libappindicator-gtk3
sudo reboot
gnome-extensions show appindicatorsupport@rgcjonas.gmail.com
gnome-extensions enable appindicatorsupport@rgcjonas.gmail.com
```
