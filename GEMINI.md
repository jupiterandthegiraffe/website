# Project Technical Architecture

This project is a WordPress website where the theme is developed and managed using the Pinegrow, a visual web editor. The local development environment is orchestrated using Docker.

## Development Workflow

The development process is unique and follows these steps:

1.  **Source Development**: All development work on the theme's structure, styling, and frontend logic is done within the `/src` directory. Developers work with standard `.html`, `.css`, and `.js` files.
2.  **Pinegrow Export**: The Pinegrow application is used to "export" the project. It converts the source HTML files and assets from `/src` into a fully functional, PHP-based WordPress theme.
3.  **Output**: The generated WordPress theme is placed in the `/wordpress` directory, which is the document root for the WordPress instance running in Docker. The `/_pgexport` directory acts as a temporary staging area for this process.

**Key Rule**: Developers should **never** edit the PHP files in the `/wordpress` directory directly. All changes must be made to the source files in `/src` and then re-exported via Pinegrow.

## Directory Structure

-   `src/`: Contains all the source files for the Pinegrow project. This is where all development happens.
    -   `*.html`: Pinegrow source files for WordPress templates (pages, posts, etc.).
    -   `functions.php`: Custom PHP functions for the WordPress theme.
    -   `css/`, `scripts/`, `images/`: Theme assets.
-   `wordpress/`: Contains the fully exported and operational WordPress site, including the core WordPress files and the generated theme. This directory is the target for the Docker web server.
-   `_pgexport/`: A staging directory used by Pinegrow during the export process. Its contents are generally a mirror of what ends up in the final theme directory within `/wordpress`.
-   `docker-compose.yml`: Defines the local development environment, which includes the WordPress service (likely with a database service) that runs the site.

## Key Technologies

-   **Content Management System**: WordPress
-   **Theme Development Tool**: Pinegrow
-   **Local Environment**: Docker
-   **Backend Language**: PHP
-   **Frontend Languages**: HTML, CSS, JavaScript