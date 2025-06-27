import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, subject, message, newsletter } = body

    // Simulation d'envoi d'email (remplace Nodemailer qui ne fonctionne pas en Next.js)
    const emailData = {
      to: "louraknouhaila@gmail.com",
      from: email,
      subject: `[Zen_Mind Contact] ${subject || "Nouveau message"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Nouveau message depuis Zen_Mind</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject || "Non spécifié"}</p>
            <p><strong>Newsletter:</strong> ${newsletter ? "Oui" : "Non"}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #7c3aed;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Envoyé depuis zen-mind.ma le ${new Date().toLocaleString("fr-FR")}
          </p>
        </div>
      `,
    }

    // Log pour simulation (en production, utilise un service d'email comme Resend)
    console.log("Email à envoyer:", emailData)

    // Simulation d'envoi réussi
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès à Nohaila",
    })
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de l'envoi. Veuillez réessayer.",
      },
      { status: 500 },
    )
  }
}
