# Urwa Urooj — Portfolio
Static site: HTML5, CSS3, vanilla JS, Bootstrap 5 + Bootstrap Icons (CDN), Google Fonts.

## Run
Open `index.html` in a browser, or serve the folder: `python3 -m http.server` then visit http://localhost:8000. Internet is needed for the CDN assets.

## Edit
- Services, projects, skills, process, "Why work with me": data arrays at the top of `js/script.js`.
- Colors: CSS variables at the top of `css/style.css`.
- Social links: replace the `href="#"` icons in `index.html` (contact + footer).
- Profile photo: add one to `images/profile/` and replace the `.avatar` div with an `<img>` with alt text.
- Project images: add to `images/portfolio/` and replace `.thumb` icons (only use real work).
- SEO: update canonical and Open Graph URLs (`https://example.com/`) once deployed.
- Contact form: client-side validation only. Connect a service (Formspree, Netlify Forms, EmailJS) at the TODO in `script.js`.
