# Deploying to Netlify

Follow these steps to deploy your Eagles Cricket Club website to Netlify:

1. **Prepare Your Repository**
   - Push your code to a GitHub repository
   - Make sure your repository is public or you have access to connect it to Netlify

2. **Sign Up/Login to Netlify**
   - Go to [Netlify](https://www.netlify.com)
   - Sign up for a free account if you don't have one
   - Log in to your account

3. **Deploy Your Site**
   - Click the "Add new site" button
   - Select "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your GitHub repository
   - Configure the build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - (These are already configured in your netlify.toml file)

4. **Wait for Deployment**
   - Netlify will start building and deploying your site
   - This usually takes 1-3 minutes
   - You'll see a random URL when it's done (like https://random-name-123.netlify.app)

5. **Custom Domain (Optional)**
   - Click "Domain settings"
   - Add your custom domain if you have one
   - Follow Netlify's DNS instructions

6. **Verify Deployment**
   - Click the generated Netlify URL to view your site
   - Test all pages and functionality
   - Check if the routing works correctly

The project is already configured for Netlify deployment with:
- netlify.toml file for build settings
- _redirects file for routing
- Proper vite build setup

Note: Make sure all your dependencies are properly listed in package.json and you've committed the latest changes to your repository before deploying.