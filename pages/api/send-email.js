"use server";
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstname, lastname,   
 email, phone, service, message } = req.body;
 console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth:   
 {
      user: process.env.NEXT_PUBLIC_BREVO_USER, // Tu email de Brevo
      pass: process.env.NEXT_PUBLIC_BREVO_PASS // Tu API key de Brevo
    },
  });

  const mailOptions = {
    from: 'ali.potosi@gmail.com', // Tu email de Brevo
    to: 'ali.potosi@gmail.com', // Aquí puedes poner un email fijo o el email del usuario
    subject: "mensaje desde el portafolio",
    text: `
      Nombre: ${firstname} ${lastname}
      Email: ${email}
      Teléfono: ${phone}
      Servicio: ${service}
      Mensaje: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);   

    res.status(500).json({ message: 'Error sending email'   
 });
  }
}