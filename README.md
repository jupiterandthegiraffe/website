# WordPress Website with Custom Pinegrow Theme

This repository contains a WordPress website featuring a custom theme developed with Pinegrow. The project is containerized using Docker for easy setup and development.

## Project Overview

The core of this project is a WordPress installation. The custom theme is designed and developed in the `src` directory using Pinegrow, a visual web editor. The theme is then exported to the `wordpress/wp-content/themes/` directory for use in the WordPress instance.

A key feature of this website is an "AI Competency Test", a digital exam powered by custom JavaScript located in `src/scripts/app.js`.

## Technologies Used

*   **Backend:** WordPress, PHP
*   **Frontend:** HTML, CSS, JavaScript
*   **Theme Development:** Pinegrow
*   **Database:** MySQL
*   **Development Environment:** Docker

## Project Structure

-   `wordpress/`: Contains the live WordPress installation, including core files, themes, and plugins. This directory is mounted into the WordPress Docker container.
-   `src/`: Contains the Pinegrow project files for the custom theme. All development on the theme should be done here.
-   `docker-compose.yml`: Defines the Docker services for running the local development environment (WordPress, MySQL, phpMyAdmin).
-   `.gitignore`: Specifies files and directories to be ignored by Git.

## Getting Started

### Prerequisites

-   [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) must be installed on your system.

### Local Development Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Start the services:**
    Run the following command to build and start the Docker containers in detached mode:
    ```bash
    docker-compose up -d
    ```

3.  **Access the services:**
    -   **WordPress Site:** [http://localhost](http://localhost)
    -   **phpMyAdmin:** [http://localhost:8080](http://localhost:8080)

    You can now proceed with the WordPress installation through your web browser.

### Database Credentials

The default database credentials are set in the `docker-compose.yml` file.

-   **Host:** `db`
-   **Database Name:** `MySQLDatabaseName`
-   **User:** `MySQLUsername`
-   **Password:** `MySQLUserPassword`
-   **Root Password:** `MySQLRootPassword`

## Theme Development

All custom theme development is done within the `src` directory using the Pinegrow application. After making changes in Pinegrow, you need to export the theme to the `wordpress/wp-content/themes/` directory to see the changes reflected on the live site.

## AI Competency Test

The "AI Competency Test" is a feature on this site. The logic for this exam is handled by `src/scripts/app.js`. For more details on the data structure and scoring, please refer to the documentation in `src/scripts/GEMINI.md`.
