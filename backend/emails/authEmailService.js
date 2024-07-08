import { createTransport } from "../config/nodemailer.js"

export async function sendEmailVerification() {
    const transporter = createTransport(
        "sandbox.smtp.mailtrap.io",
        2525,
       "e507a3259a8be6",
       "69bdd5ec5fb35e"
    )

    // Enviar el mail
    const info = await transporter.sendMail({
        from: 'AppSalon',
        to: 'correo@correo.com',
        subject: "AppSalon - Confirma tu cuenta",
        text: "AppSalon - Confirma tu cuenta",
        html: 'Probando email'
    })

    console.log('Mensaje enviado', info.messageId)
}