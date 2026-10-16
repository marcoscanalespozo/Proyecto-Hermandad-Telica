# Hermandad Santiago Apóstol de Telica — versión 1

Primera maqueta estática responsive del sitio web, realizada con HTML, CSS, JavaScript y Bootstrap 5.

## Requisitos
- Navegador moderno.
- Conexión a internet para cargar Bootstrap y las fotografías externas de demostración.

## Cómo abrir
1. Descomprime el ZIP.
2. Abre la carpeta `hermandad-santiago-telica-v1`.
3. Abre `index.html` en el navegador.

También puedes abrir la carpeta en Visual Studio Code y usar la extensión Live Server.

## Estructura
```text
hermandad-santiago-telica-v1/
├── index.html              # Inicio público
├── blog.html               # Listado, búsqueda y filtros demostrativos
├── articulo.html           # Plantilla de artículo
├── login.html              # Formulario de acceso (solo visual)
├── registro.html           # Formulario de registro (solo visual)
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos y diseño responsive
│   ├── js/
│   │   └── main.js         # Interacciones de la maqueta
│   └── img/
│       └── logo-hermandad.jpg # Logotipo original aportado
└── README.md
```

## Qué funciona en esta maqueta
- Navegación entre páginas.
- Diseño adaptable a móviles y computadoras.
- Búsqueda y filtros visuales en el blog.
- Menú de notificaciones demostrativo.
- Validación de coincidencia de contraseñas en el formulario.
- Año actual automático en el pie de página.

## Qué todavía NO funciona
Esta versión no tiene backend ni base de datos. Por tanto:
- No crea ni guarda cuentas reales.
- No autentica usuarios.
- No protege artículos exclusivos.
- No envía notificaciones reales.
- No dispone aún de un panel administrativo funcional.
- Las publicaciones y actividades son contenido de ejemplo.

**No uses esta maqueta para recopilar contraseñas reales.** El formulario de acceso y el de registro son demostrativos.

## Siguiente fase recomendada
1. Crear backend con Node.js y Express.
2. Crear base de datos MySQL para usuarios, roles, artículos, categorías y notificaciones.
3. Implementar contraseñas cifradas, sesiones seguras y validación del lado del servidor.
4. Crear el panel administrativo con editor visual y gestión de imágenes.
5. Conectar la campana a notificaciones persistentes por usuario.
6. Añadir política de privacidad, datos oficiales de contacto y enlace real de Facebook cuando exista.

## Personalización
- Colores principales: azul `#12304A`, dorado `#D8A83E`, gris claro `#F2F4F7` y blanco.
- El logotipo se conserva como archivo original y no se recolorea.
- Las fotografías son imágenes externas de demostración y pueden cambiarse por fotografías autorizadas de la hermandad.
