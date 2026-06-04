# Portafolio Pokédex

##GITHUB PAGES LINK
https://chon211205.github.io/portfolio/

Este portafolio está dirigido principalmente a una audiencia académica y profesional inicial: docentes, compañeros, reclutadores junior o personas que quieran revisar mi progreso como desarrollador web en formación. La intención no es presentarme como un producto terminado, sino como alguien que está construyendo criterio técnico, aprendiendo a organizar proyectos y explorando una identidad visual propia. Por eso el portafolio funciona como una Pokédex: cada sección muestra información personal, habilidades, proyectos y contacto de una forma más interactiva y memorable que una página tradicional.

También está pensado para oportunidades relacionadas con desarrollo web frontend, proyectos académicos, prácticas profesionales o trabajos donde se valore la capacidad de aprender distintas tecnologías. En lugar de mostrar solo una lista de repositorios, el sitio intenta explicar qué hice, qué tecnologías usé y qué aprendí en cada proyecto. Esto ayuda a que la persona que lo vea entienda no solo el resultado final, sino también el proceso detrás de cada trabajo.

## Tecnologías utilizadas

Para construir el portafolio elegí HTML, CSS y JavaScript porque son tecnologías directas, ligeras y adecuadas para un sitio estático publicado en GitHub Pages. HTML me permitió estructurar las páginas de forma clara; CSS fue la base para crear la estética inspirada en una Pokédex, con tarjetas, paneles, colores, sombras y diseño responsivo; JavaScript se usó para agregar interactividad, especialmente el cambio de idioma y algunos comportamientos visuales.

También decidí usar Lucide Icons por CDN para los íconos del menú, botones y secciones. Esta decisión ayudó a mantener una interfaz más visual sin tener que diseñar cada ícono desde cero. Además, al ser un portafolio estático, usar CDN hace que el proyecto sea fácil de publicar sin instalar dependencias ni configurar un proceso de build.

GitHub Pages fue elegido como plataforma de publicación porque encaja bien con la naturaleza del proyecto. El sitio no necesita backend ni base de datos propia, así que publicarlo como archivos estáticos es suficiente. Para que funcionara correctamente en GitHub Pages, se usaron rutas relativas en los enlaces, hojas de estilo, scripts e imágenes. Esto permite que el portafolio funcione aunque esté alojado dentro de una ruta de repositorio, como suele ocurrir en GitHub Pages.

## Tecnología que decidí no usar

Una tecnología del curso que decidí no usar directamente para este portafolio fue React. Aunque React aparece en algunos de los proyectos presentados dentro del portafolio, no lo utilicé para construir el sitio principal. La razón fue que el portafolio no necesitaba una arquitectura de componentes compleja ni manejo avanzado de estado. Usar React habría agregado configuración, dependencias y un proceso de build que no eran necesarios para una página relativamente simple.

También fue una decisión práctica pensando en GitHub Pages. Un sitio con HTML, CSS y JavaScript puro es más fácil de publicar, revisar y mantener. En este caso preferí demostrar dominio de fundamentos web antes que usar una herramienta más grande solo por usarla. React habría sido útil si el portafolio tuviera filtros dinámicos complejos, consumo de APIs o una estructura de datos más grande, pero para esta versión decidí mantenerlo más directo.

## Riesgos y decisiones seguras

El mayor riesgo fue la dirección visual del portafolio. En lugar de hacer una página sobria y tradicional, decidí inspirarla en una Pokédex. Esa decisión podía salir mal si la estética se veía demasiado cargada o si la navegación dejaba de ser clara. Sin embargo, tomé ese riesgo porque quería que el portafolio tuviera personalidad y fuera más fácil de recordar. Además, Pokémon es una referencia importante para mí, así que la estética también comunica algo personal.

Otro riesgo fue agregar varias páginas internas, un selector de idioma y una vista de proyectos con iframe. Esto hizo que la estructura fuera más interesante, pero también aumentó la posibilidad de errores con rutas, enlaces o archivos que no cargaran al publicarse. Aun así, decidí hacerlo porque quería que el sitio se sintiera como una experiencia navegable y no solo como una página larga.

La parte en la que la jugué seguro fue la elección de tecnologías base. Usar HTML, CSS y JavaScript puro redujo la complejidad del despliegue y me permitió concentrarme en el contenido, el diseño y la organización. También fue una decisión segura usar GitHub Pages, porque es una forma estándar y accesible de publicar portafolios estáticos. En resumen, me arriesgué en la identidad visual y en la experiencia de navegación, pero jugué seguro en la base técnica para que el sitio pudiera funcionar de forma estable.

## Qué mejoraría con otra semana

Si tuviera otra semana, mejoraría primero la accesibilidad y la pulidez visual. Revisaría contrastes, tamaños de texto, navegación con teclado, textos alternativos de imágenes y estados de foco. También corregiría con más detalle los textos para que todas las traducciones estén completas y bien revisadas en cada idioma.

Otra mejora importante sería hacer la sección de proyectos más dinámica. En lugar de escribir cada proyecto directamente en HTML, podría guardar la información en un archivo de datos y generar las tarjetas con JavaScript. Esto haría más fácil agregar nuevos proyectos sin repetir tanto código. También mejoraría la vista móvil, especialmente en la sección de proyectos, para que el iframe y las tarjetas se sientan más cómodos en pantallas pequeñas.

Finalmente, agregaría más contenido profesional: enlaces a demos cuando existan, capturas más cuidadas de cada proyecto, una descripción más concreta de mi rol en cada trabajo y una sección de aprendizajes o retos técnicos. Con eso el portafolio no solo se vería más completo, sino que también comunicaría mejor mi crecimiento como desarrollador.
