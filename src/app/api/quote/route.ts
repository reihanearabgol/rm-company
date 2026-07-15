import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { kv } from '@vercel/kv'
import { generateLeadId, leadKey, LEADS_LIST_KEY } from '@/lib/leads'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { fullName, email, phone, projectType, address, city, postalCode, description, budget, contactMethod, timeline, referral } = body

    // Save lead to KV
    const id = generateLeadId()
    const lead = {
      id,
      name: fullName,
      email,
      phone: phone || '',
      projectType: projectType || '',
      budget: budget || '',
      message: description || '',
      address: address || '',
      city: city || '',
      postalCode: postalCode || '',
      contactMethod: contactMethod || '',
      timeline: timeline || '',
      referral: referral || '',
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      notes: '',
    }

    await kv.hset(leadKey(id), lead)
    await kv.lpush(LEADS_LIST_KEY, id)

    // Send email to owner
    await resend.emails.send({
      from: 'R&M Company <onboarding@resend.dev>',
      to: 'arabgol.reihane.official@gmail.com',
      subject: 'New Quote Request — R&M Company',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0908; color: #e8dcc8; padding: 40px;">
          <div style="border-bottom: 1px solid #c9a96e; padding-bottom: 24px; margin-bottom: 32px;">
            <h1 style="font-size: 24px; font-weight: 300; color: #c9a96e; margin: 0;">R&M Company</h1>
            <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #a09890; margin: 8px 0 0;">New Quote Request</p>
          </div>

          <h2 style="font-size: 20px; font-weight: 300; color: #e8dcc8; margin-bottom: 24px;">Project Consultation Request</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #a09890; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; width: 140px;">Full Name</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #e8dcc8;">${fullName}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #a09890; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #e8dcc8;">${email}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #a09890; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #e8dcc8;">${phone}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #a09890; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Project Type</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #e8dcc8;">${projectType}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #a09890; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Address</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #e8dcc8;">${address}, ${city} ${postalCode}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #a09890; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Budget</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #e8dcc8;">${budget}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #a09890; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Contact Via</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #e8dcc8;">${contactMethod || 'Not specified'}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #a09890; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Timeline</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #e8dcc8;">${timeline || 'Not specified'}</td></tr>
            <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #a09890; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Referral</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(201,169,110,0.1); color: #e8dcc8;">${referral || 'Not specified'}</td></tr>
          </table>

          <div style="margin-top: 32px; padding: 24px; border: 1px solid rgba(201,169,110,0.2); background: #1c1b19;">
            <p style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #a09890; margin: 0 0 12px;">Project Description</p>
            <p style="color: #e8dcc8; line-height: 1.8; margin: 0;">${description}</p>
          </div>

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(201,169,110,0.1); text-align: center;">
            <p style="font-size: 11px; color: #a09890; letter-spacing: 0.1em;">R&M Company · Luxury Renovation · Toronto</p>
            <p style="font-size: 11px; color: #a09890;">+1 (250) 884-2728 · arabgol.reihane.official@gmail.com</p>
          </div>
        </div>
      `,
    })

    // Send confirmation to client
    await resend.emails.send({
      from: 'R&M Company <onboarding@resend.dev>',
      to: email,
      subject: 'We received your quote request — R&M Company',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0908; color: #e8dcc8; padding: 40px;">
          <div style="border-bottom: 1px solid #c9a96e; padding-bottom: 24px; margin-bottom: 32px;">
            <h1 style="font-size: 24px; font-weight: 300; color: #c9a96e; margin: 0;">R&M Company</h1>
            <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #a09890; margin: 8px 0 0;">Luxury Renovation · Toronto</p>
          </div>
          <h2 style="font-size: 20px; font-weight: 300; color: #e8dcc8; margin-bottom: 16px;">Dear ${fullName},</h2>
          <p style="color: #a09890; line-height: 1.8; margin-bottom: 24px;">Thank you for reaching out to R&M Company. We have received your consultation request and a member of our team will be in touch within 48 hours.</p>
          <p style="color: #a09890; line-height: 1.8; margin-bottom: 32px;">We look forward to learning more about your project and exploring how we can bring your vision to life.</p>
          <div style="text-align: center; padding: 24px; border: 1px solid rgba(201,169,110,0.2);">
            <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #c9a96e; margin: 0 0 8px;">Questions in the meantime?</p>
            <p style="color: #e8dcc8; margin: 0;">+1 (250) 884-2728</p>
          </div>
          <div style="margin-top: 40px; text-align: center;">
            <p style="font-size: 11px; color: #a09890;">R&M Company · Luxury Renovation · Toronto</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
