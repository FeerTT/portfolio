import nodemailer from 'nodemailer';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { Name, Email, Phone, Message } = req.body;

  const transporter = nodemailer.createTransport({
    service:"gmail", 
    port: 587,
    secure: false,
    tls:{
        rejectUnauthorized:false,
    },
    auth: {
      user: 'tastymeals2023@gmail.com',
      pass: 'mxfatahjlfrnzutn',
    },
  });
  const mailOptions = {
    from: 'tastymeals2023@gmail.com',
    to: 'fernandotrillobaron25@hotmail.com', 
    subject: 'Nuevo mensaje de contacto',
    html: `
      <p><strong>Nombre:</strong> ${Name}</p>
      <p><strong>Email:</strong> ${Email}</p>
      <p><strong>Teléfono:</strong> ${Phone}</p>
      <p><strong>Mensaje:</strong> ${Message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico', error);
    res.status(500).json({ error: 'Ocurrió un error al enviar el correo electrónico' });
  }
}