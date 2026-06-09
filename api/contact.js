export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, country, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !toEmail) {
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const emailBody = {
    sender: {
      name: 'Agrosapro Contact Form',
      email: 'msagrosolverkft@gmail.com',
    },
    to: [{ email: toEmail, name: 'Agrosapro' }],
    replyTo: { email: email, name: name },
    subject: `Új megkeresés — ${name}${company ? ` — ${company}` : ''}`,
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2D5A1B;">Új megkeresés — Agrosapro</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #797979; width: 120px;">Név</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
          ${company ? `<tr><td style="padding: 8px 0; color: #797979;">Cég</td><td style="padding: 8px 0; font-weight: 600;">${company}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #797979;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2D5A1B;">${email}</a></td></tr>
          ${country ? `<tr><td style="padding: 8px 0; color: #797979;">Ország</td><td style="padding: 8px 0;">${country}</td></tr>` : ''}
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #F7F7F7; border-radius: 8px; border-left: 3px solid #2D5A1B;">
          <p style="margin: 0; color: #1C1C1E; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <p style="margin-top: 24px; color: #797979; font-size: 13px;">Elküldve az agrosapro.eu kapcsolati űrlapján keresztül</p>
      </div>
    `,
  };

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(emailBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo error:', errorData);
      return res.status(500).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Server error.' });
  }
}
