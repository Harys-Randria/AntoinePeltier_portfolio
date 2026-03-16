import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Here you can integrate with an email service like SendGrid, Resend, or similar
    // For now, we'll just log and return success
    console.log('[Contact Form] New message received:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // You can add email sending logic here later
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'noreply@example.com',
    //   to: 'antoine-p@hotmail.com',
    //   subject: `Nouveau message de ${name}`,
    //   html: `<p>${message}</p><p>Email: ${email}</p>`,
    // })

    return NextResponse.json(
      { success: true, message: 'Message reçu avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact API] Error:', error)
    return NextResponse.json(
      { error: 'Erreur lors du traitement du message' },
      { status: 500 }
    )
  }
}
