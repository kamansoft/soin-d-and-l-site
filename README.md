
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ad3b5c61-8963-4ca3-b37e-f64ca17e21ed

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ad3b5c61-8963-4ca3-b37e-f64ca17e21ed) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to deploy to GitHub Pages

This project is configured for deployment to GitHub Pages using two methods:

### Method 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys your app to GitHub Pages whenever you push changes to the main branch.

**Setup Steps:**

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch and "/ (root)" folder
   - Click "Save"

2. **Update the base path:**
   - Open `vite.config.ts`
   - Replace `'your-repo-name'` with your actual repository name
   - For example, if your repo is `https://github.com/username/my-awesome-app`, change it to `'/my-awesome-app/'`

3. **Push changes to main branch:**
   - The GitHub Actions workflow will automatically trigger
   - Your site will be available at `https://yourusername.github.io/your-repo-name/`

**How it works:**
- The workflow runs on every push to the main branch
- It installs dependencies, builds the project, and deploys to the `gh-pages` branch
- GitHub Pages serves the content from the `gh-pages` branch

### Method 2: Manual Deployment

You can also deploy manually using the included deployment script.

**Setup Steps:**

1. **Update the base path** (same as Method 1, step 2)

2. **Make the deploy script executable:**
   ```sh
   chmod +x deploy.sh
   ```

3. **Update the deploy script:**
   - Open `deploy.sh`
   - Uncomment and modify one of the git push commands at the bottom:
     - For `username.github.io` repository: uncomment and update the first git push command
     - For project repository: uncomment and update the second git push command
   
   Example for a project repository:
   ```sh
   git push -f git@github.com:yourusername/your-repo-name.git main:gh-pages
   ```

4. **Run the deployment:**
   ```sh
   ./deploy.sh
   ```

### Important Notes:

- **Repository name:** Make sure to update `'your-repo-name'` in `vite.config.ts` with your actual repository name
- **GitHub Pages settings:** Ensure GitHub Pages is configured to deploy from the `gh-pages` branch
- **Custom domain:** If using a custom domain, uncomment and update the CNAME line in `deploy.sh`
- **First deployment:** The first deployment might take a few minutes to become available

### Troubleshooting:

- If the site shows a blank page, check that the base path in `vite.config.ts` matches your repository name
- If images or assets don't load, ensure all asset paths are relative (they should be by default with Vite)
- Check the "Actions" tab in your GitHub repository to see the deployment status and any errors

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
