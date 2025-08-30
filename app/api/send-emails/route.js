// pages/api/send-emails.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { 
    firstName, 
    lastName, 
    email, 
    phone, 
    company, 
    projectType, 
    budget, 
    message, 
    timeline 
  } = req.body;

  // Validación básica
  if (!firstName || !email) {
    return res.status(400).json({ message: 'Nombre y email son requeridos' });
  }

  try {
    // Configurar el transportador
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Template para email de confirmación al cliente
    const clientEmailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Solicitud</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
              ¡Solicitud Recibida!
            </h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">
              Gracias por contactarnos
            </p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <div style="margin-bottom: 30px;">
              <h2 style="color: #2d3748; margin: 0 0 15px 0; font-size: 24px;">
                Hola ${firstName}${lastName ? ` ${lastName}` : ''},
              </h2>
              <p style="color: #4a5568; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
                Hemos recibido tu solicitud de proyecto y nos pondremos en contacto contigo pronto. 
                A continuación, un resumen de la información que nos proporcionaste:
              </p>
            </div>

            <!-- Project Details -->
            <div style="background-color: #f7fafc; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #667eea;">
              <h3 style="color: #2d3748; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">
                Detalles del Proyecto
              </h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-weight: 500; width: 120px;">Teléfono:</td>
                  <td style="padding: 8px 0; color: #2d3748;">${phone || 'No especificado'}</td>
                </tr>
                ${message ? `
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 500; vertical-align: top;">Mensaje:</td>
                    <td style="padding: 8px 0; color: #2d3748;">${message}</td>
                  </tr>
                ` : ''}
              </table>
            </div>

            <!-- Next Steps -->
            <div style="background-color: #edf2f7; border-radius: 8px; padding: 20px; text-align: center;">
              <h3 style="color: #2d3748; margin: 0 0 15px 0; font-size: 18px;">Próximos Pasos</h3>
              <p style="color: #4a5568; margin: 0; line-height: 1.6;">
                Nuestro equipo revisará tu solicitud y te contactaremos dentro de las próximas 24-48 horas 
                para discutir los detalles de tu proyecto.
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #2d3748; padding: 20px; text-align: center;">
            <p style="color: #a0aec0; margin: 0; font-size: 14px;">
              Este es un correo automático. Para consultas urgentes, puedes contactarnos directamente.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Template para email al CEO/empresa
    const ceoEmailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nueva Solicitud de Proyecto</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%); padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
              🚨 Nueva Solicitud de Proyecto
            </h1>
            <p style="color: #fed7d7; margin: 10px 0 0 0; font-size: 16px;">
              Requiere tu atención
            </p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
            <!-- Client Info -->
            <div style="background-color: #f7fafc; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #4299e1;">
              <h2 style="color: #2d3748; margin: 0 0 20px 0; font-size: 20px;">Información del Cliente</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-weight: 600; width: 120px;">Nombre:</td>
                  <td style="padding: 8px 0; color: #2d3748; font-weight: 500;">${firstName}${lastName ? ` ${lastName}` : ''}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0; color: #2d3748;">
                    <a href="mailto:${email}" style="color: #4299e1; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-weight: 600;">Teléfono:</td>
                  <td style="padding: 8px 0; color: #2d3748;">
                    ${phone ? `<a href="tel:${phone}" style="color: #4299e1; text-decoration: none;">${phone}</a>` : 'No proporcionado'}
                  </td>
                </tr>
              </table>
            </div>

            ${message ? `
              <!-- Message -->
              <div style="background-color: #f0fff4; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #38a169;">
                <h2 style="color: #2d3748; margin: 0 0 15px 0; font-size: 20px;">Mensaje del Cliente</h2>
                <div style="background-color: #ffffff; border-radius: 6px; padding: 20px; border: 1px solid #e2e8f0;">
                  <p style="color: #2d3748; margin: 0; line-height: 1.6; font-size: 16px;">${message}</p>
                </div>
              </div>
            ` : ''}

            <!-- Action Required -->
            <div style="background-color: #fed7e2; border-radius: 8px; padding: 20px; text-align: center; border: 2px dashed #f56565;">
              <h3 style="color: #742a2a; margin: 0 0 10px 0; font-size: 18px;">⏰ Acción Requerida</h3>
              <p style="color: #822727; margin: 0; font-weight: 500;">
                Contactar al cliente dentro de las próximas 24 horas
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #2d3748; padding: 20px; text-align: center;">
            <p style="color: #a0aec0; margin: 0; font-size: 14px;">
              Solicitud recibida el ${new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email de confirmación al cliente
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✅ Confirmación de tu solicitud de proyecto',
      html: clientEmailTemplate,
    };

    // Email de notificación al CEO
    const ceoMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CEO_EMAIL, // Nueva variable de entorno
      subject: `🚨 Nueva consulta: ${firstName}${lastName ? ` ${lastName}` : ''} - Formulario de contacto`,
      html: ceoEmailTemplate,
    };

    // Enviar ambos emails
    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(ceoMailOptions)
    ]);

    res.status(200).json({ 
      message: 'Emails enviados exitosamente',
      details: 'Email de confirmación enviado al cliente y notificación enviada al equipo'
    });

  } catch (error) {
    console.error('Error enviando emails:', error);
    res.status(500).json({ 
      message: 'Error interno del servidor',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Error al procesar la solicitud'
    });
  }
}