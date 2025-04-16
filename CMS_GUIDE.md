# Pulse Report - Strapi CMS Usage Guide

This guide explains how to manage content for the Pulse Report website using the Strapi admin panel.

## Accessing the Admin Panel

*   **Local:** Navigate to [http://localhost:1337/admin](http://localhost:1337/admin)
*   **Production:** Navigate to [your-deployed-strapi-url]/admin (e.g., `https://pulse-report-cms.onrender.com/admin`)
*   Log in with your admin credentials.

## Managing Content Types

Use the **Content Manager** section in the left sidebar to manage different types of content.

### 1. Articles

*   Go to `Content Manager` -> `Article`.
*   **To Add:** Click the **+ Create new entry** button.
*   **To Edit:** Click on an existing article title in the list.

**Fields:**
*   **Title (Required):** The main headline of the article.
*   **Slug (Auto-generated):** The URL-friendly version of the title. Usually generated automatically.
*   **Publication Date (Required):** The date the article should be considered published. Defaults to now but can be backdated.
*   **Featured Image (Optional):** Upload the main image for the article. Click "Add media" or drag-and-drop. Provide descriptive "Alternative text".
*   **Body (Required):** The main content of the article. Use the **Markdown editor** to format text (headings, bold, italics, lists, links, blockquotes). You can also embed images uploaded to the Media Library.
*   **Excerpt (Optional):** A short, one-sentence summary used for article previews (though currently not displayed on cards).
*   **Categories (Recommended):** Select one or more relevant categories from the list. This determines where the article appears.
*   **Source (Recommended):** Select the news organization (e.g., Associated Press) that provided the story.
*   **SEO Title (Optional):** Custom title for search engine results. If blank, the main Title is used.
*   **SEO Description (Optional):** Custom description for search engines. If blank, the Excerpt might be used, or a default generated.

**Saving & Publishing:**
*   Click **Save**.
*   If the Draft & Publish feature is enabled, you also need to click **Publish** for the article to appear on the live website. You can also unpublish articles.

### 2. Categories

*   Go to `Content Manager` -> `Category`.
*   Used to group articles. Add new categories as needed (e.g., "Environment", "Science").
*   **Fields:** Name (required), Slug (auto-generated), Description (optional).
*   Remember to Save/Publish.

### 3. Sources

*   Go to `Content Manager` -> `Source`.
*   Represents the news organizations providing content.
*   **Fields:** Name (required), Icon (optional logo), Website (optional URL).
*   Remember to Save/Publish. Link articles to these sources.

### 4. Static Pages

*   Go to `Content Manager` -> `Static Page`.
*   Used for pages like "About Us", "Privacy Policy", "Terms of Service", "Contact Us".
*   **Fields:** Title (required), Slug (auto-generated), Body (required, Markdown), SEO fields (optional).
*   Remember to Save/Publish. Ensure links in the website footer point to the correct slugs.

### 5. Homepage Configuration

*   Go to `Content Manager` -> `Homepage` (under Single Types).
*   **Hero Articles:** Select specific articles to feature prominently at the top of the homepage (currently not displayed, but functionality exists).
*   Remember to Save/Publish any changes to the homepage configuration.

## Media Library

*   Accessible from the left sidebar.
*   Upload images or other media files here.
*   You can then select these files when editing Articles, Sources, etc.
*   Provide good "Alternative text" for images for accessibility and SEO.

## Need Help?

Contact [Project Maintainer/Developer Contact] for issues or questions regarding the CMS.
