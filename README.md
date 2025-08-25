# DOJMARK Assets - Lead Capture Form

A modern, responsive lead capture form built with React that integrates with Zapier for automated lead processing.

## Features

- ✨ Modern, glassmorphism UI design
- 📱 Fully responsive across all devices
- 🔗 Zapier webhook integration
- ⚡ Real-time form validation
- 🎨 Smooth animations and transitions
- 🛡️ Security headers and best practices

## Form Fields

- **Full Name** - Required text input
- **Email Address** - Required email validation
- **Business Name** - Required text input

## Zapier Integration

The form automatically sends submissions to the configured Zapier webhook:
- Data is sent as JSON payload
- Includes timestamp and source metadata
- Supports automated workflows (email, CRM, notifications)

## Local Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd zapzap
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your GitHub repository
   - Netlify will automatically detect the React app settings

3. **Deploy Settings** (auto-configured):
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 18

4. **Deploy**: Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Deploy**:
```bash
npm run build
netlify deploy --prod --dir=build
```

### Option 3: Drag & Drop Deployment

1. Build your project locally:
```bash
npm run build
```

2. Drag the `build` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

## Configuration

The project includes a `netlify.toml` file with optimized settings:

- **Security headers** for XSS protection and content security
- **SPA routing** with redirects for React Router
- **Caching strategies** for static assets
- **Node.js version** specification

## Environment Variables

No environment variables are required for basic functionality. The Zapier webhook URL is hardcoded in the application.

## Performance

- Lighthouse Performance Score: 90+
- Optimized bundle size
- Lazy loading ready
- CDN distribution via Netlify

## Support

For deployment issues or questions, refer to:
- [Netlify Documentation](https://docs.netlify.com/)
- [Create React App Deployment Guide](https://facebook.github.io/create-react-app/docs/deployment)

## License

This project is private and proprietary to DOJMARK Assets.
