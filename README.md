# Jupiter and the Giraffe - Website

A modern, AI-focused digital agency website built with Pinegrow and WordPress, featuring an interactive AI competency assessment tool.

## Overview

Jupiter and the Giraffe is a digital agency specializing in AI-powered web experiences, digital strategy, and custom development services. The website combines professional service offerings with innovative lead generation through an AI readiness assessment tool.

## Features

- **AI Competency Assessment**: Interactive 21-question assessment tool with radar chart visualization
- **Service Packages**: Digital Strategy (£12,000) and Digital Experience (£30,000+) offerings
- **Modern Design**: Space-themed branding with GSAP animations and responsive layout
- **WordPress Integration**: Built with Pinegrow HTML framework that exports to WordPress
- **Docker Development**: Local development environment with WordPress, MySQL, and phpMyAdmin

## Services Offered

### Digital Strategy (£12,000)
- Strategic consultancy workshops ("Immersive")
- Data-driven decision making
- Digital roadmap for scalable growth
- Executive-level strategic alignment

### Digital Experience (£30,000+)
- Custom app, game, and digital experience development
- Hand-crafted solutions using latest technologies
- Online/offline capabilities
- No limits, no compromises approach

## Project Structure

```
├── src/                          # Source HTML files (Pinegrow project)
│   ├── index.html               # Main template with base structure
│   ├── home.html                # Homepage
│   ├── about.html               # About page
│   ├── process.html             # Process/workflow page
│   ├── service.html             # Services page
│   ├── page-ai-competency-test.html  # AI assessment tool
│   ├── css/                     # Stylesheets
│   │   ├── style.css           # Main styles
│   │   ├── theme.css           # Theme configuration
│   │   └── ai-assessment.css   # AI test specific styles
│   ├── scripts/                 # JavaScript files
│   │   ├── app.js              # Main application logic
│   │   └── bento-grid-animation.js  # Animation scripts
│   └── _pgexport/              # WordPress PHP exports
├── wordpress/                   # WordPress installation
│   └── wp-content/             # WordPress content
└── docker-compose.yml          # Development environment
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Pinegrow (HTML to WordPress converter)
- **CMS**: WordPress
- **Animations**: GSAP (GreenSock Animation Platform)
- **Charts**: Chart.js for data visualization
- **Development**: Docker with WordPress, MySQL, phpMyAdmin
- **Fonts**: FontAwesome, Custom web fonts via Yabe Webfont plugin

## AI Competency Assessment

The website features a comprehensive AI readiness assessment tool:

- **7 sections, 21 questions, 10-15 minutes duration**
- **Assessment Categories**:
  1. Company Information & Context
  2. Current AI Awareness & Usage
  3. Technology Infrastructure Readiness
  4. Process Automation Opportunities
  5. Team Capabilities & Resources
  6. Strategic Alignment for AI Initiatives
  7. In-house Development Readiness

- **Features**:
  - Interactive quiz interface with progress tracking
  - Radar chart visualization of results
  - Personalized recommendations
  - Lead capture for detailed reports
  - Scoring system with categories like "AI Beginner," "AI Explorer," etc.

## Development Setup

### Prerequisites
- Docker and Docker Compose
- Modern web browser

### Local Development

1. **Start the development environment**:
   ```bash
   docker-compose up -d
   ```

2. **Access services**:
   - Website: http://localhost
   - WordPress Admin: http://localhost/wp-admin
   - phpMyAdmin: http://localhost:8080

3. **Environment Configuration**:
   - MySQL Database: MySQLDatabaseName
   - MySQL User: MySQLUsername
   - MySQL Password: MySQLUserPassword
   - Root Password: MySQLRootPassword

### File Structure Notes

- `src/index.html` contains the base template structure where all JavaScript and styles are enqueued
- Check `functions.php` for any dequeuing or deregistering of scripts/styles
- Static HTML files in `src/` are converted to WordPress PHP templates in `src/_pgexport/`
- WordPress theme files are synced to `wordpress/wp-content/themes/`

## Content Management

The website uses WordPress for content management with:
- Custom post types for services and case studies
- Advanced Custom Fields for structured content
- Yabe Webfont plugin for custom typography
- All-in-One SEO for search optimization

## Design & Branding

- **Theme**: Space/futuristic aesthetic with animations
- **Colors**: Primary orange (#ff4d14), secondary gray (#cecfcf), dark (#2e2e2e)
- **Typography**: Custom web fonts loaded via Yabe Webfont
- **Animations**: GSAP-powered interactions and scroll animations
- **Responsive**: Mobile-first design approach

## Contact Information

- **Email**: info@jupiterandthegiraffe.com, hello@jupiterandthegiraffe.com
- **Website**: jupiterandthegiraffe.com
- **Social**: LinkedIn, Behance, YouTube

## WordPress Plugins

- Advanced Custom Fields
- All-in-One SEO Pack
- All-in-One WP Migration
- Yabe Webfont
- LiteSpeed Cache
- WPForms Lite
- Wordfence Security

## Notes

- This is a Pinegrow project where all files are written in HTML but output to WordPress
- The AI competency test is a key lead generation tool for the business
- The site targets organizations looking to integrate AI into their digital strategy
- Development workflow: Edit HTML in Pinegrow → Export to WordPress PHP → Deploy

## License

Proprietary - Jupiter and the Giraffe Digital Agency