export type ContactEmailPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatSubmittedAt(iso: string): string {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function fieldRow(label: string, value: string, options?: { link?: boolean }) {
  const valueHtml = options?.link
    ? `<a href="mailto:${escapeHtml(value)}" style="color:#8f7350;text-decoration:none;font-weight:600;">${escapeHtml(value)}</a>`
    : `<span style="color:#2c2c2c;font-size:15px;line-height:1.5;">${escapeHtml(value)}</span>`;

  return `
    <tr>
      <td style="padding:14px 0 6px;border-bottom:1px solid #ebe6dc;">
        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#8f7350;">${label}</p>
        <p style="margin:4px 0 0;">${valueHtml}</p>
      </td>
    </tr>`;
}

export function buildContactNotificationHtml(
  payload: ContactEmailPayload,
  submittedAt: string,
): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const messageHtml = escapeHtml(payload.message).replace(/\n/g, '<br />');
  const company = payload.company?.trim() || 'Not provided';
  const when = formatSubmittedAt(submittedAt);
  const replyUrl = `mailto:${encodeURIComponent(payload.email)}?subject=${encodeURIComponent(`RE:WEAVE — re: your message`)}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New contact — ${escapeHtml(payload.name)}</title>
</head>
<body style="margin:0;padding:0;background-color:#ebe6dc;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#ebe6dc;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <!-- Header band -->
          <tr>
            <td style="background-color:#2c2c2c;border-radius:12px 12px 0 0;padding:28px 32px 24px;border-top:4px solid #C8A882;">
              <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#C8A882;">Website contact</p>
              <h1 style="margin:0;font-size:22px;font-weight:600;line-height:1.3;color:#ffffff;">New inquiry received</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:rgba(255,255,255,0.75);">${when}</p>
            </td>
          </tr>
          <!-- Body card -->
          <tr>
            <td style="background-color:#f8f6f3;padding:8px 32px 28px;border-left:1px solid #e6dfd4;border-right:1px solid #e6dfd4;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${fieldRow('Name', payload.name)}
                ${fieldRow('Email', payload.email, { link: true })}
                ${fieldRow('Company', company)}
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                <tr>
                  <td style="background-color:#ffffff;border:1px solid #e6dfd4;border-radius:10px;padding:20px 22px;">
                    <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#8f7350;">Message</p>
                    <p style="margin:0;font-size:15px;line-height:1.65;color:#2c2c2c;">${messageHtml}</p>
                  </td>
                </tr>
              </table>
              <!-- CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="${replyUrl}" style="display:inline-block;background-color:#2c2c2c;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:8px;border:1px solid #C8A882;">Reply to ${escapeHtml(payload.name.split(' ')[0] || payload.name)}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f5f1ea;border-radius:0 0 12px 12px;padding:20px 32px 24px;border:1px solid #e6dfd4;border-top:none;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:0.06em;color:#2c2c2c;">RE<span style="color:#C8A882;">:</span>WEAVE</p>
              <p style="margin:0;font-size:12px;line-height:1.5;color:#6b6358;">
                Sent from the contact form at
                <a href="${escapeHtml(siteUrl)}/contact" style="color:#8f7350;text-decoration:underline;">transformingtextiles.com/contact</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactNotificationText(
  payload: ContactEmailPayload,
  submittedAt: string,
): string {
  const company = payload.company?.trim() || 'Not provided';
  return [
    'RE:WEAVE — New contact form message',
    '',
    `Submitted: ${formatSubmittedAt(submittedAt)}`,
    '',
    `Name:    ${payload.name}`,
    `Email:   ${payload.email}`,
    `Company: ${company}`,
    '',
    'Message:',
    payload.message,
    '',
    `Reply: mailto:${payload.email}`,
  ].join('\n');
}
