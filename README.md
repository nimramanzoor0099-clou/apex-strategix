# Apex Strategix website

React + Vite website.

## Run
```bash
npm install
npm run dev
```
Build for hosting: `npm run build` (upload the `dist` folder to any static host).

## How the contact form works
The form no longer sends email. When a visitor fills it in and presses **Send on WhatsApp**,
WhatsApp opens with all their details pre-written to **0312-2954527** (`https://wa.me/923122954527`).
The enquiry reaches the office number once the visitor presses Send in WhatsApp.
No server, SMTP or password is needed. File attachments are not supported by this method.

Contact details (email, phone, WhatsApp, hours) live in `contact` in `src/data.js`.
To change the WhatsApp number, edit `whatsapp` there (format: `https://wa.me/92XXXXXXXXXX`, no 0, no spaces).
