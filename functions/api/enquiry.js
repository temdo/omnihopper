// Cloudflare Pages Function: POST /api/enquiry
// Sends the inquiry by email through Resend (https://resend.com).
// Required environment variables (set in the Cloudflare dashboard, never in code):
//   RESEND_API_KEY  - API key of the Resend account
//   ENQUIRY_TO      - destination address for inquiries
//   ENQUIRY_FROM    - verified sender, e.g. "OmniHopper <enquiries@omnihopper.com>"

const clean = (v, max = 4000) => String(v ?? '').trim().slice(0, max);

export async function onRequestPost({ request, env }) {
  const form = await request.formData();
  if (clean(form.get('company_site'))) return new Response(null, { status: 204 }); // honeypot

  const name = clean(form.get('name'), 200);
  const email = clean(form.get('email'), 200);
  const type = clean(form.get('type'), 100);
  const message = clean(form.get('message'));
  const organisation = clean(form.get('organisation'), 200);
  if (!name || !email || !type || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response('Missing or invalid fields', { status: 400 });
  }
  if (!env.RESEND_API_KEY || !env.ENQUIRY_TO || !env.ENQUIRY_FROM) {
    return new Response('Inquiry delivery is not configured', { status: 503 });
  }

  const text = [`Inquiry: ${type}`, `Name: ${name}`, `Organisation: ${organisation || '-'}`, `Email: ${email}`, '', message].join('\n');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.ENQUIRY_FROM, to: [env.ENQUIRY_TO], reply_to: email, subject: `OmniHopper inquiry: ${type}`, text }),
  });
  return new Response(null, { status: res.ok ? 204 : 502 });
}
