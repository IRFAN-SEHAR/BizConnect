<<<<<<< HEAD
# BizConnect React + Vite Landing Page

A responsive WhatsApp-contact landing page. It does not include user accounts, a database, or JWT because none are needed for this use case.

## 1. Configure the business details

Open `src/config.js` and replace:
- `BUSINESS_NAME` with the real business name.
- `WHATSAPP_NUMBER` with the owner's WhatsApp number in international digits-only format.
  - Pakistan example: `03001234567` becomes `923001234567`.
  - Do not include `+`, spaces, or hyphens.
- Edit `WHATSAPP_MESSAGE` if desired.

## 2. Run locally

Install Node.js (LTS), then in this folder run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually http://localhost:5173.

## 3. Test the production build

```bash
npm run build
npm run preview
```

Vite creates the production website in `dist/`.

## 4. Deploy on Netlify

Push this project to a GitHub repository, then import that repository into Netlify.

For a project whose `package.json` is in the repository root:
- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: leave blank / repository root
- Production branch: `main`

Netlify provides an HTTPS URL and manages the TLS certificate for its hosted site. Check the Netlify dashboard for certificate provisioning and deploy status.

## 5. HTTPS and JWT

HTTPS is what provides the browser's secure connection indicator. Netlify provisions HTTPS for its hosted domain.

JWT is for authentication/authorization between a client and a backend API. This static contact landing page has no login or protected API, so JWT would add complexity without providing a benefit. Never put a JWT secret in frontend React code.
=======
# BizConnect
this is a simple one landing page site , it contains whatsapp number to contact interactive cool design
>>>>>>> 827fa509dfd7b446124c486ef3e12ca4d59077f8
