import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// On-demand route (runs on Vercel serverless), not prerendered at build time.
export const prerender = false;

// SMTP della casella Netsons (nessun servizio esterno a pagamento).
const SMTP_HOST = import.meta.env.SMTP_HOST || 'smtp.novaterra.work';
const SMTP_PORT = Number(import.meta.env.SMTP_PORT || 465);
const SMTP_USER = import.meta.env.SMTP_USER;
const SMTP_PASS = import.meta.env.SMTP_PASS;

const TO_EMAIL = import.meta.env.CONTACT_TO_EMAIL || 'info@novaterra.work';
// Mittente: deve essere una casella reale sul dominio (di norma la stessa SMTP_USER).
const FROM_EMAIL = import.meta.env.CONTACT_FROM_EMAIL || SMTP_USER || 'info@novaterra.work';

function redirect(path: string): Response {
  return new Response(null, { status: 303, headers: { Location: path } });
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect('/contatti?error=true');
  }

  // Honeypot: se compilato è un bot → fingiamo successo senza inviare.
  const honeypot = (form.get('bot-field') || '').toString().trim();
  if (honeypot) {
    return redirect('/contatti?success=true');
  }

  const name = (form.get('name') || '').toString().trim();
  const email = (form.get('email') || '').toString().trim();
  const details = (form.get('details') || '').toString().trim();
  const privacyConsent = form.get('privacyConsent') != null;
  const newsletterConsent = form.get('newsletterConsent') != null;

  if (!name || !email || !details || !privacyConsent || !isValidEmail(email)) {
    return redirect('/contatti?error=true');
  }

  if (!SMTP_USER || !SMTP_PASS) {
    console.error('[contact] Credenziali SMTP mancanti (SMTP_USER / SMTP_PASS)');
    return redirect('/contatti?error=true');
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // 465 = SSL, 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject = `Nuova richiesta dal sito — ${name}`;
  const text = [
    `Nome / Azienda: ${name}`,
    `Email: ${email}`,
    '',
    'Dettagli progetto:',
    details,
    '',
    `Newsletter: ${newsletterConsent ? 'Sì' : 'No'}`,
    `Privacy accettata: ${privacyConsent ? 'Sì' : 'No'}`,
  ].join('\n');

  const html = `
    <h2>Nuova richiesta dal sito Novaterra</h2>
    <p><strong>Nome / Azienda:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Dettagli progetto:</strong><br>${escapeHtml(details).replace(/\n/g, '<br>')}</p>
    <hr>
    <p><strong>Newsletter:</strong> ${newsletterConsent ? 'Sì' : 'No'}</p>
    <p><strong>Privacy accettata:</strong> ${privacyConsent ? 'Sì' : 'No'}</p>
  `;

  try {
    await transporter.sendMail({
      from: `Sito Novaterra <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error('[contact] Errore invio SMTP:', err);
    return redirect('/contatti?error=true');
  }

  return redirect('/contatti?success=true');
};
