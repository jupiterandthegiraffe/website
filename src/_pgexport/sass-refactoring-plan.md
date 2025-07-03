# SASS Refactoring Plan for style.css

## Overview
This document outlines a plan to refactor the current 2654-line `style.css` file into a modular SASS architecture. The goal is to improve maintainability, organization, and developer experience.

## Current State
- Single CSS file: `src/css/style.css` (2654 lines)
- Mixed concerns: layout, components, pages, utilities all in one file
- Difficult to maintain and collaborate on

## Proposed SASS Structure

### Directory Layout
```
src/scss/
├── base/
│   ├── _variables.scss      # CSS custom properties, colors, spacing
│   ├── _reset.scss          # Basic resets and global styles
│   ├── _typography.scss     # Font definitions and text styles
│   └── _animations.scss     # All keyframe animations
├── layout/
│   ├── _container.scss      # Container and wrapper styles
│   └── _grid.scss          # Grid systems and layouts
├── components/
│   ├── _navigation.scss     # Main nav and mobile menu
│   ├── _buttons.scss        # Button styles (angled buttons)
│   ├── _footer.scss         # Footer component
│   ├── _forms.scss          # Form inputs and styling
│   ├── _dialogs.scss        # Modal/dialog components
│   └── _cookie-banner.scss  # Cookie consent banner
├── pages/
│   ├── _home.scss          # Homepage specific styles
│   ├── _blog.scss          # Blog post styles
│   ├── _about.scss         # About page styles
│   ├── _contact.scss       # Contact page styles
│   └── _404.scss           # 404 error page
├── sections/
│   ├── _hero.scss          # Hero sections
│   ├── _our-work.scss      # Portfolio/work sections
│   ├── _results.scss       # Results and testimonials
│   ├── _packages.scss      # Pricing packages
│   ├── _process.scss       # Process visualization
│   ├── _company-tagline.scss # Company services
│   └── _spotlight.scss     # Spotlight sections
├── utilities/
│   ├── _helpers.scss       # Utility classes
│   └── _vertical-text.scss # Vertical text utilities
└── style.scss              # Main file that imports all partials
```

## Detailed File Breakdown

### Base Files

#### `_variables.scss` (Lines 1-16)
```scss
// CSS Custom Properties
:root {
  --desktop-max-width: 1360px;
  --spacing-results-desktop: 19.5px;
  --dark-rgb: 46, 46, 46;
  --white-rgb: 245, 245, 243;
  // ... etc
}

// SASS Variables
$desktop-max-width: 1360px;
$spacing-results-desktop: 19.5px;
// ... convert CSS vars to SASS vars where beneficial
```

#### `_animations.scss` (Lines 28-46, 649-657, 1326-1336, 2078-2086)
- `@keyframes move-out`
- `@keyframes move-in`
- `@keyframes side-bounce`
- `@keyframes team-image-in`
- `@keyframes rotate-moon`

#### `_typography.scss`
- Font family definitions
- Base text styles
- Heading styles

### Layout Files

#### `_container.scss` (Lines 74-87)
- `.container` class and responsive variations

#### `_grid.scss`
- Grid layout utilities
- Responsive grid systems

### Component Files

#### `_navigation.scss` (Lines 89-123, 925-970, 1049-1097, 2054-2136)
- `.main-nav-wrapper`
- `.main-nav-home`
- `.main-nav`
- `.main-nav__nav`
- `.main-nav__menu-button`
- `.main-nav__list`
- `.main-nav__list-link`
- `.main-nav__mobile-menu`
- Mobile menu styles

#### `_buttons.scss` (Lines 274-351)
- `.angled-button`
- `.angled-border`
- Button hover states
- Button pseudo-elements

#### `_footer.scss` (Lines 124-144, 145-156, 157-238, 1396-1421, 2037-2040)
- `.footer__main-wrap`
- `.footer`
- `.footer__header`
- `.footer__menu`
- `.footer__copyright`
- `.footer__socials`
- `.footer__bottom`

#### `_forms.scss` (Lines 1472-1510)
- Contact form inputs
- Form validation styles
- Input focus states

#### `_dialogs.scss` (Lines 1422-1527)
- `.contact-us__dialog`
- Modal overlay styles
- Dialog content styles
- Close button styles

#### `_cookie-banner.scss` (Lines 2278-2313)
- `.cookie-banner`
- Cookie consent styling

### Page-Specific Files

#### `_home.scss` (Lines 254-265, 429-513, 1098-1131, 1731-1751, 1876-1947)
- `body.home`
- `.index-main`
- `.home-hero`
- `.home-hero__heading`
- Home-specific components

#### `_blog.scss` (Lines 353-427, 2314-2403)
- `.blog-container`
- `.post-featured-image`
- WordPress block styles
- Blog navigation

#### `_about.scss` (Lines 984-995, 996-1012, 1280-1325, 1338-1387, 1968-1987, 2493-2497)
- `.about__lead-text`
- `.about__team-list`
- Team member styles
- About page specific layouts

#### `_contact.scss` (Lines 266-273, 977-983, 1252-1264, 1369-1395)
- `.contact-us__header`
- `.contact-us__content`
- Contact page layouts

#### `_404.scss` (Lines 1013-1048)
- `.four-oh-four`
- 404 page styling

### Section Files

#### `_our-work.scss` (Lines 516-579, 580-658, 2139-2231, 2512-2517, 2601-2617)
- `.our-work__featured-item`
- Portfolio grid styles
- Work item hover effects

#### `_results.scss` (Lines 696-924, 1726-1730, 2254-2276, 2498-2510)
- `.results__item`
- `.results__list--main`
- Testimonial styles
- Grid layouts for results

#### `_packages.scss` (Lines 1145-1269, 2461-2477)
- `.our-packages__package`
- Pricing card styles
- Package layouts

#### `_process.scss` (Lines 1528-1725, 1806-1843, 1955-1967, 2009-2036)
- `.our-process__content`
- `.process__list`
- Process visualization graphics

#### `_company-tagline.scss` (Lines 2323-2340, 2585-2599)
- `.company-tagline__service-list`
- Service listing styles

#### `_spotlight.scss` (Lines 2342-2383, 2519-2583)
- `.spotlight__image`
- `.spotlight__link`
- Spotlight section layouts

### Utility Files

#### `_helpers.scss` (Lines 2233-2243)
- `.sr-only`
- `.popup`
- Utility classes

#### `_vertical-text.scss` (Lines 1575-1600)
- `.vertical-text-right`
- `.vertical-text-left`
- Vertical text utilities

## Implementation Steps

1. **Setup Phase**
   - Create the `src/scss/` directory structure
   - Install SASS compiler (if not already available)
   - Create empty partial files

2. **Migration Phase**
   - Extract CSS rules from `style.css` to appropriate SASS partials
   - Convert CSS custom properties to SASS variables where beneficial
   - Add SASS features like nesting, mixins, and functions
   - Create the main `style.scss` import file

3. **Testing Phase**
   - Compile SASS to CSS
   - Compare compiled output with original
   - Test all pages to ensure no styles are broken
   - Validate responsive behavior

4. **Optimization Phase**
   - Identify opportunities for SASS mixins
   - Create shared variables for repeated values
   - Optimize media query organization
   - Add documentation comments

## Main Import File (`style.scss`)

```scss
// Base
@import 'base/variables';
@import 'base/reset';
@import 'base/typography';
@import 'base/animations';

// Layout
@import 'layout/container';
@import 'layout/grid';

// Components
@import 'components/navigation';
@import 'components/buttons';
@import 'components/footer';
@import 'components/forms';
@import 'components/dialogs';
@import 'components/cookie-banner';

// Pages
@import 'pages/home';
@import 'pages/blog';
@import 'pages/about';
@import 'pages/contact';
@import 'pages/404';

// Sections
@import 'sections/hero';
@import 'sections/our-work';
@import 'sections/results';
@import 'sections/packages';
@import 'sections/process';
@import 'sections/company-tagline';
@import 'sections/spotlight';

// Utilities
@import 'utilities/helpers';
@import 'utilities/vertical-text';
```

## Benefits

1. **Maintainability**: Easier to find and modify specific styles
2. **Modularity**: Components can be reused across different pages
3. **Collaboration**: Multiple developers can work on different files simultaneously
4. **SASS Features**: Can leverage variables, mixins, nesting, and functions
5. **Build Optimization**: Can optimize imports and reduce unused CSS
6. **Documentation**: Each file can focus on a single responsibility

## Notes

- All partial files should start with an underscore (`_`) to indicate they're partials
- Maintain the existing class naming conventions during migration
- Consider implementing BEM methodology where it makes sense
- Test thoroughly on all breakpoints after migration
- Keep a backup of the original `style.css` file

## Next Steps

1. Get approval for this structure
2. Create the directory structure
3. Begin migrating CSS rules to appropriate partials
4. Set up SASS compilation process
5. Test and validate the compiled output