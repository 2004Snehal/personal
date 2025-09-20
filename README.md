 professional profiles and CV
- **SEO Optimized**: Meta tags and structured data for search engines

## 📁 Project Structure

```
portfolio-website/
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   │   ├── index.html              # HTML template
│   │   └── favicon.ico             # Website icon
│   ├── src/                        # Source code
│   │   ├── components/             # React components
│   │   │   ├── ui/                 # Shadcn UI components
│   │   │   ├── AboutSection.tsx    # About me section
│   │   │   ├── AchievementsSection.tsx # Achievements and stats
│   │   │   ├── ContactSection.tsx  # Contact information
│   │   │   ├── CVSection.tsx       # Resume/CV section
│   │   │   ├── HeroSection.tsx     # Landing hero section
│   │   │   ├── HodosSection.tsx    # Startup showcase
│   │   │   ├── Navigation.tsx      # Header navigation
│   │   │   ├── Portfolio.tsx       # Main portfolio container
│   │   │   ├── ProjectsSection.tsx # Projects showcase
│   │   │   ├── ThemeProvider.tsx   # Dark/light mode provider
│   │   │   └── TimelineSection.tsx # Professional timeline
│   │   ├── hooks/                  # Custom React hooks
│   │   │   └── use-toast.ts        # Toast notifications
│   │   ├── lib/                    # Utility libraries
│   │   │   └── queryClient.ts      # React Query setup
│   │   ├── pages/                  # Page components
│   │   │   └── not-found.tsx       # 404 page
│   │   ├── App.tsx                 # Main App component
│   │   ├── index.css               # Global styles and theme
│   │   └── main.tsx                # React entry point
│   ├── package.json                # Frontend dependencies
│   └── tsconfig.json               # TypeScript configuration
├── server/                         # Backend Express server
│   ├── routes.ts                   # API routes
│   ├── storage.ts                  # Data storage interface
│   ├── index.ts                    # Server entry point
│   └── vite.ts                     # Vite dev server setup
├── shared/                         # Shared types and schemas
│   └── schema.ts                   # Data models and types
├── attached_assets/                # Static assets and uploads
│   ├── image_1758046521081.png     # IIT Kharagpur campus photo
│   └── [other uploaded files]
├── design_guidelines.md            # Design system documentation
├── drizzle.config.ts              # Database configuration
├── package.json                   # Root dependencies
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite build configuration
└── README.md                      # This file
```

## 🚀 Local Development Setup

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   SESSION_SECRET=your_session_secret_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5000`

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Format code
npm run format
```

## 🌐 Deployment Options

### Option 1: Replit Deployment (Recommended)

Replit offers multiple deployment options for your portfolio:

#### Static Deployment (Best for Portfolio)
- **Cost**: Most affordable option
- **Best for**: Portfolio websites, landing pages
- **Features**: Automatic caching, fast CDN, custom domains

**Steps to Deploy:**
1. Click the **"Publish"** button in your Replit workspace
2. Select **"Static Deployment"**
3. Choose your domain name (or use provided `.replit.app` domain)
4. Click **"Deploy"**

#### Autoscale Deployment (For Dynamic Features)
- **Cost**: Scales based on usage
- **Best for**: Interactive applications with backend features
- **Features**: Auto-scaling, custom domains, zero downtime

**Steps to Deploy:**
1. Click **"Publish"** → **"Autoscale Deployment"**
2. Configure your deployment settings
3. Set up custom domain (optional)
4. Deploy your application

### Option 2: GitHub Pages (Free Static Hosting)

#### For React Applications (Build Required)

1. **Prepare your repository**
   ```bash
   # Build the project
   npm run build
   
   # The build output will be in dist/ folder
   ```

2. **Create deployment repository**
   ```bash
   # Create a new repository named: your-username.github.io
   # Or any name for project pages: portfolio-website
   ```

3. **Set up GitHub Actions for automatic deployment**
   
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
     workflow_dispatch:
   
   permissions:
     contents: read
     pages: write
     id-token: write
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
   
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'
   
         - name: Install dependencies
           run: npm ci
   
         - name: Build project
           run: npm run build
   
         - name: Setup Pages
           uses: actions/configure-pages@v4
   
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'
   
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

4. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: **GitHub Actions**
   - Your site will be available at: `https://username.github.io/repository-name`

#### Manual Static Deployment

1. **Build and prepare files**
   ```bash
   npm run build
   cp -r dist/* ./github-pages-folder/
   ```

2. **Create GitHub repository**
   - Repository name: `your-username.github.io` (for user page)
   - Make sure it's **public**

3. **Upload files**
   ```bash
   git add .
   git commit -m "Deploy portfolio website"
   git push origin main
   ```

### Option 3: Other Hosting Platforms

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify
1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Required for session management
SESSION_SECRET=your_secure_random_string_here

# Optional: Analytics and tracking
VITE_GOOGLE_ANALYTICS=your_ga_tracking_id
VITE_HOTJAR_ID=your_hotjar_id
```

### Theme Customization

Edit `client/src/index.css` to customize colors and design:

```css
:root {
  /* Primary brand colors */
  --primary: 230 85% 60%;
  --primary-foreground: 210 40% 98%;
  
  /* Background colors */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  
  /* Add your custom colors here */
}
```

### Content Updates

#### Personal Information
Update personal details in:
- `client/src/components/HeroSection.tsx` - Name, tagline, description
- `client/src/components/AboutSection.tsx` - Biography and education
- `client/src/components/ContactSection.tsx` - Contact information

#### Professional Experience
- `client/src/components/TimelineSection.tsx` - Career timeline
- `client/src/components/HodosSection.tsx` - Startup experience
- `client/src/components/ProjectsSection.tsx` - Portfolio projects

#### Resume/CV
- `client/src/components/CVSection.tsx` - Update Google Drive link

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px  
- **Mobile**: 320px - 767px

Key mobile features:
- Touch-friendly navigation
- Optimized images and loading
- Readable typography on small screens
- Smooth scroll and animations

## 🔍 SEO Features

- **Meta tags**: Title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Structured data**: JSON-LD for better search indexing
- **Sitemap**: Generated automatically
- **Fast loading**: Optimized assets and code splitting

## 🧪 Testing

### Manual Testing Checklist

- [ ] All navigation links work
- [ ] Smooth scrolling between sections
- [ ] Responsive design on different screen sizes
- [ ] Dark/light theme toggle
- [ ] External links open in new tabs
- [ ] Contact form validation (if enabled)
- [ ] Project videos load properly
- [ ] CV download/view functionality

### Automated Testing

```bash
# Run type checking
npm run type-check

# Build test (ensures no build errors)
npm run build
```

## 🛠 Maintenance

### Regular Updates

1. **Content Updates**
   - Update achievements and projects
   - Refresh professional timeline
   - Update contact information

2. **Technical Updates**
   ```bash
   # Update dependencies
   npm update
   
   # Check for security vulnerabilities
   npm audit
   
   # Fix vulnerabilities
   npm audit fix
   ```

3. **Performance Monitoring**
   - Monitor page load speeds
   - Check mobile responsiveness
   - Validate SEO performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- **Email**: palsnehal004@gmail.com
- **LinkedIn**: [snehal-pal-4735b4266](https://linkedin.com/in/snehal-pal-4735b4266)
- **GitHub**: [2004Snehal](https://github.com/2004Snehal)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**