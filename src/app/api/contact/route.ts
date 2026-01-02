import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  contact: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name || !body.email || !body.contact || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Name validation
    if (body.name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    // Contact validation
    if (body.contact.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please enter a valid contact number' },
        { status: 400 }
      );
    }

    // Message validation
    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending logic
    // Options:
    // 1. Resend - https://resend.com
    // 2. Nodemailer - https://nodemailer.com
    // 3. SendGrid - https://sendgrid.com
    // 4. AWS SES - https://aws.amazon.com/ses/
    // 5. Mailgun - https://www.mailgun.com

    // For now, log to console (replace with actual email service implementation)
    console.log('Contact Form Submission:', {
      name: body.name,
      email: body.email,
      contact: body.contact,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        message: 'Message sent successfully',
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
