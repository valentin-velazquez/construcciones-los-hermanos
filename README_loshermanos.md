# Construcciones Los Hermanos — Sitio Web

Sitio web profesional para empresa de construcción y refacción.

## Stack

- HTML / CSS / JavaScript vanilla (sin frameworks)
- Fuentes: Barlow Condensed + Barlow (Google Fonts)
- Deploy: Vercel (subdominio gratuito)
- Control de versiones: GitHub

## Estructura

```
construcciones-los-hermanos/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
```

## Funcionalidades

- Hero con llamada a la acción
- Ticker animado con los servicios
- Grilla de 9 servicios con animaciones al hacer scroll
- Sección de zona de cobertura
- Formulario que genera un mensaje pre-armado y abre WhatsApp
- Botón flotante de WhatsApp con acceso directo a Luis y Jorge
- Diseño mobile-first

## Contacto

- Luis: 11 4528-7281
- Jorge: 11 3821-1980

## Deploy

Conectado a Vercel via GitHub.
Cada `git push` a `main` redeploya automáticamente.

Para actualizar el sitio en el futuro:

```powershell
git add .
git commit -m "descripción del cambio"
git push
```
