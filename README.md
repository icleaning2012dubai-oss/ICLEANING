# 🧹 iCleaning - Professional Cleaning Services Website

Modern, multilingual cleaning services website built with Next.js 16, featuring an integrated shopping cart and Stripe payment processing.

## ✨ Features

- 🌍 **Multilingual Support** - English, Russian, Arabic
- 🛒 **Shopping Cart** - Add services to cart and checkout
- 💳 **Stripe Integration** - Secure online payments
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 16
- 🎨 **Modern UI** - Beautiful design with Tailwind CSS
- 🔒 **Secure** - PCI compliant payment processing

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account (for payments)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd clining
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Add your Stripe keys to `.env.local`:
```env
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
```

Get your keys from: https://dashboard.stripe.com/apikeys

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 💳 Stripe Payment Setup

**Quick Setup Guide:** See [STRIPE_QUICKSTART.md](./STRIPE_QUICKSTART.md)

**Full Documentation:** See [STRIPE_INTEGRATION.md](./STRIPE_INTEGRATION.md)

**Setup Checklist:** See [STRIPE_CHECKLIST.md](./STRIPE_CHECKLIST.md)

### Test Payment

Use these test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- 3D Secure: `4000 0025 0000 3155`

More test cards: https://stripe.com/docs/testing

## 📁 Project Structure

```
clining/
├── app/
│   ├── api/
│   │   ├── create-checkout-session/  # Stripe checkout
│   │   ├── webhooks/stripe/          # Payment webhooks
│   │   └── checkout-session/         # Session info
│   ├── checkout/
│   │   ├── page.tsx                  # Checkout page
│   │   └── success/                  # Success page
│   ├── components/                   # React components
│   ├── contexts/                     # Context providers
│   ├── locales/                      # Translations
│   └── services/                     # Service pages
├── public/                           # Static assets
└── .env.local                        # Environment variables
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Payments:** Stripe
- **Icons:** Heroicons (via SVG)
- **Image Optimization:** Next.js Image

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌍 Supported Languages

- 🇬🇧 English (en)
- 🇷🇺 Russian (ru)
- 🇦🇪 Arabic (ar)

Language files are located in `app/locales/`

## 🎨 Services Offered

1. **Carpet Cleaning** - Deep cleaning and stain removal
2. **Sofa & Mattresses** - Upholstery cleaning
3. **Curtains & Blinds** - Textile care
4. **Regular Cleaning** - Routine maintenance
5. **Deep Cleaning** - Thorough sanitization
6. **Air Conditioner** - AC cleaning and maintenance

## 🔒 Security

- ✅ Environment variables stored securely
- ✅ PCI DSS compliant payment processing via Stripe
- ✅ No credit card data stored on servers
- ✅ Webhook signature verification
- ✅ HTTPS required for production

## 📝 Configuration

### Environment Variables

Required variables in `.env.local`:

```env
# Stripe (required for payments)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Next.js
NEXT_TELEMETRY_DISABLED=1
```

### Currency

Default currency is AED (UAE Dirham). To change, edit:
`app/api/create-checkout-session/route.ts`

```typescript
currency: 'aed' // Change to: usd, eur, gbp, etc.
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

1. Build the project: `npm run build`
2. Set environment variables
3. Run: `npm start`

**Important:** Configure webhook URL in Stripe Dashboard:
`https://yourdomain.com/api/webhooks/stripe`

## 📚 Documentation

- [Stripe Quick Start](./STRIPE_QUICKSTART.md) - Get started in 5 minutes
- [Stripe Integration Guide](./STRIPE_INTEGRATION.md) - Complete setup guide
- [Stripe Usage Examples](./STRIPE_USAGE_GUIDE.md) - Code examples
- [Setup Checklist](./STRIPE_CHECKLIST.md) - Step-by-step checklist

## 🤝 Support

For Stripe-related issues:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)

For Next.js issues:
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)

## 📄 License

This project is private and proprietary.

## ⚠️ Important Notes

- Always use **test mode** during development
- Never commit `.env.local` to version control
- Test webhook events before going live
- Use HTTPS in production
- Keep Stripe keys secure

---

Made with ❤️ for professional cleaning services
