# 🚀 Instrucciones para Subir a GitHub

## Opción 1: Usar GitHub CLI (Recomendado)

```bash
cd c:\Users\cosmo\dewid\muay-thai-club

# Instalar GitHub CLI si no lo tienes
winget install GitHub.cli

# Autenticarse
gh auth login

# Crear repositorio en GitHub
gh repo create muay-thai-club --source=. --remote=origin --push
```

## Opción 2: Manualmente desde GitHub.com

1. Ve a [github.com](https://github.com) y inicia sesión
2. Haz clic en **"New repository"**
3. Nombre: `muay-thai-club`
4. Descripción: `Sitio web oficial del Muay Thai Club Lorquí - Murcia`
5. Selecciona **Public** o **Private**
6. NO inicialices con README (ya lo tenemos)
7. Haz clic en **"Create repository"**

Luego en la terminal:

```bash
cd c:\Users\cosmo\dewid\muay-thai-club

# Agregar el remote (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/muay-thai-club.git

# Renombrar rama a 'main' (opcional, GitHub ya usa 'main' por defecto)
git branch -M main

# Empujar el código
git push -u origin main
```

## Opción 3: Desde VS Code

1. Abre la carpeta en VS Code
2. Haz clic en **Source Control** (Ctrl+Shift+G)
3. Haz clic en **"Publish to GitHub"**
4. Completa los datos del repositorio
5. ¡Listo!

## 📊 Verificar el Repositorio

```bash
# Ver el estado del repositorio
git status

# Ver los remotes
git remote -v

# Ver el historial de commits
git log --oneline
```

## 🎯 Próximos Pasos

1. Configura GitHub Pages para hospedar el sitio:
   - Ve a Settings → Pages
   - Selecciona "main" como rama
   - Selecciona "/" como carpeta
   - ¡Tu sitio estará en: https://TU_USUARIO.github.io/muay-thai-club

2. Personaliza:
   - Reemplaza los números de teléfono y email reales
   - Agrega imágenes de entrenamientos en la carpeta `assets/`
   - Personaliza el formulario de contacto con FormSubmit o Netlify Forms

¡Dale caña! 💪🥊
