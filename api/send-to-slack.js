// Vercel Serverless Function - Backend Proxy for Slack webhook
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Use the same Slack webhook URL as local development
    const slackWebhookUrl = process.env.VITE_SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/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';
    
    console.log('Backend proxy: Sending to Slack webhook...');
    console.log('Environment variable VITE_SLACK_WEBHOOK_URL:', process.env.VITE_SLACK_WEBHOOK_URL);
    console.log('Using webhook URL:', slackWebhookUrl);
    console.log('Form data:', { name, email, message: message.substring(0, 100) + '...' });
    
    const payload = {
      text: `📧 New Contact Form Submission from ${name}`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "📧 New Contact Form Submission",
            emoji: true
          }
        },
        {
          type: "divider"
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${name}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message:*\n${message}`
          }
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submitted from Vercel proxy on ${new Date().toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
              })}`
            }
          ]
        }
      ]
    };

    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Vercel-Proxy/1.0'
      },
      body: JSON.stringify(payload),
    });

    console.log('Slack response status:', response.status);
    console.log('Slack response headers:', Object.fromEntries(response.headers));
    
    if (!response.ok) {
      const responseText = await response.text();
      console.log('Slack error response:', responseText);
      throw new Error(`Failed to send to Slack: ${response.status} - ${responseText}`);
    }

    const responseData = await response.text();
    console.log('Slack success response:', responseData);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully via proxy',
      proxy: 'Vercel'
    });
  } catch (error) {
    console.error('Backend proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to send message', 
      details: error.message,
      proxy: 'Vercel'
    });
  }
}