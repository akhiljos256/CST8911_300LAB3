# Artistry Hub

## Project Overview

This project is an Arts Gallery website that displays a curated collection of famous artworks and artist information. Designed to showcase the beauty of art, this web app can be deployed as a static web app using Azure. It features a clean, responsive layout that highlights each artwork, offering an engaging and visually appealing experience for art enthusiasts and casual viewers alike.

## Project Framework

Artistry-Hub/
│
├── index.html          # Main HTML file for the gallery
├── styles.css          # CSS file for styling the web app
├── script.js           # JavaScript file for dynamically loading artworks
├── images/             # Folder containing artwork images
│   ├── 1.png           # Example artwork image
│   ├── 2.png
│   └── 3.png
└── .github/
    └── workflows/
        └── azure-static-web-app.yml  # GitHub Actions workflow file for Azure deployment


## Prerequisites

Azure Account: Ensure you have valid student subscription.
GitHub Account: Required for repository hosting and integration with Azure Static Web Apps.
Git: Install Git to manage your repository.
Visual Studio Code: Recommended for development with Azure extensions.

## Testing Locally

1. *Clone the Repository*:

    bash
    Copy code
    git clone https://github.com/akhiljos256/CST8911_300LAB3
    cd CST8911_300LAB3
   

2. **Open the index.html file**:
   We can open the index.html file directly in your web browser, or we can use a local server instead. 
   Simply right-click the file and select "Open with Live Server", as we have the Live Server extension in VS Code.

3. **View the Gallery
   Once open, the gallery should display the artwork images and details dynamically from script.js.


## How to Deploy in Azure

### Creating a Static Web App

1. Create a GitHub Repository
   
   After creating the new repository, push the project to the repository.

    bash
   git add .
   git commit -m "Initial commit"
   git push origin main

2. *Log in to the Azure Portal*:
   Go to [Azure Portal](https://portal.azure.com).

3. *2. Create an Azure Static Web App*:
   - Click on "Create a resource".
   - Search for "Static Web App" and select it.
   - Click on the "Create" button.

4. *Configure the Static Web App:*:
   - *Name*: Provide a name for your app.
   - *Subscription*: Choose your Azure subscription.
   - *Resource Group*: Create a new resource group or select an existing one.
   - *Region*: Choose the region closest to you.
   - *Plan Type: Select **Free*.
   - *Deployment Details*:
     - *Source: Select **GitHub*.
     - *Repository*: Choose your repository from GitHub.
     - *Branch*: Select the branch you want to deploy (typically main).

5. *Review and Create*:
   - Review your settings and click "Create" to deploy your static web app.

### Verify Deployment

1. *Check GitHub Actionsp*
   - Navigate to the "Actions" tab in your GitHub repository.
   - Ensure that the workflow runs successfully without errors.

2. *Access Your Deployed Site*
   - Once the deployment is complete, Azure provides a URL for our Static Web App.
   - Visit this URL in your web browser to see our live Artistry Hub gallery.

3. *Update the HTML File*:
   - Make changes to index.html or any other files in our local repository.
   - Commit the changes and push them to GitHub.
   bash
   git add index.html
   git commit -m "Updater Header"
   git push origin main
   
4. *Check for Automatic Updates*:
   - The Azure static web app should automatically update with our changes after a few moments.
   
## Deleting Resources

To delete your Azure resources after testing:

1. *Go to the Azure Portal*:
   - Find the Static Web App you created.
2. *Delete the Resource Group*:
   - Click on the resource group and select "Delete".
   - Confirm the deletion to remove all resources associated with it.