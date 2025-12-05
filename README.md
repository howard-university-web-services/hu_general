# Howard University General Theme (hu_general)

A comprehensive Drupal theme built specifically for Howard University websites, providing a robust and customizable foundation for university departments, schools, and organizations.

## Overview

The HU General theme is designed to maintain Howard University's brand identity while providing flexibility for different departments and schools. It includes extensive customization options, responsive design, and integration with various Drupal modules commonly used in university websites.

This theme is a child of the idfive Component Library D8 Theme, inheriting standard functionality while adding Howard University-specific features and customizations.

## Features

### Schema.org & SEO Optimization (New in v11.1.1)
- **Rich Structured Data**: Comprehensive Schema.org markup for all content types
- **Educational Institution Context**: Proper academic and institutional content markup
- **Enhanced Search Results**: Rich snippets for articles, person profiles, and announcements
- **Technical SEO**: Validated structured data with error prevention
- **Content Type Support**: Optimized markup for Articles, Pages, People, Resources, and Announcements

### Theme Variants
- **Default**: Standard Howard University styling
- **Clean & Light**: Minimalist design with lighter color scheme
- **Classic Editorial**: Traditional academic styling optimized for content-heavy sites

### Header Configuration
- Light header menu option for better contrast
- Desktop hamburger menu support for simplified navigation
- Featured header link for promotional content
- Configurable search functionality

### Footer Customization
- Social media links (Twitter, Facebook, YouTube, Instagram)
- Complete address and contact information
- Institutional branding display

### School/Department Branding
- Parent school/college organization display
- Department-specific branding options
- Customizable institutional hierarchy

### Administrative Features
- Site-wide script injection for tracking codes
- Theme variant switcher for authenticated users
- Comprehensive caching support

## Installation

### Via Composer (Recommended)
```bash
composer install howard/hu_general
```

### Manual Installation
1. Extract the theme to your Drupal themes directory: `/themes/contrib/hu_general`
2. Enable the theme in the Drupal admin interface
3. Configure theme settings at: `Administration > Appearance > Settings > HU General`

### Updates
```bash
composer update howard/hu_general
```

## Configuration

### Theme Settings

The theme provides extensive configuration options accessible through the Drupal admin interface at `/admin/appearance/settings/hu_general`:

#### Theme Variant Settings
- Select from available theme variants
- Enable theme variant switcher for authenticated users

#### Howard School/Department Settings
- **Parent School/College/Organization**: Add the parent school or college, for example "College of Arts and Sciences"
- **Parent School/College/Organization URL**: Add the URL to parent school or college, for example "http://coas.howard.edu"
- **Department/Site**: Add the department or site, for example "Department of English"

#### Howard Header Settings
- **Show light header menu**: Uses the light menu color scheme for the header menu
- **Show hamburger in Desktop**: Display hamburger menu on desktop for simplified navigation
- **Featured Header Link**: Show a featured link in the header with custom text and URL
- **Hide Search**: Hide search functionality if not needed

#### Howard Footer Settings
- **Social Links**: Configure links for Twitter, Facebook, YouTube, and Instagram
- **Address Information**: Set up complete address and contact information for the footer

#### Admin Settings
- **Site-wide Scripts or Embeds**: Add custom JavaScript snippets, tracking codes, or other embeds (Admin only)

## Template Files

The theme includes customized templates for:

### Layout Templates
- `html.html.twig` - Base HTML structure with theme variants and admin scripts
- `page.html.twig` - Page layout and regions with OpenID Connect integration
- `page--404.html.twig` - Custom 404 error page

### Content Templates
- `node--hc-page.html.twig` - Standard page content
- `node--hc-article.html.twig` - Article content display
- `node--hc-person.html.twig` - Person/faculty profiles
- `node--hc-resource.html.twig` - Resource content
- `node--hc-standard-homepage.html.twig` - Homepage layout

### Navigation Templates
- `menu--sidebar-navigation.html.twig` - Sidebar navigation
- `breadcrumb.html.twig` - Breadcrumb navigation
- `block--menu-block--sidebar-navigation.html.twig` - Menu block template

### Field Templates
- `file-link.html.twig` - Custom file link display with media name support

### View Templates
- `views-view.html.twig` - Views display
- `views-view-fields.html.twig` - Individual field display
- `views-view-unformatted.html.twig` - Unformatted view display

## PHP Functions

### Theme Hooks

#### `hu_general_preprocess_html(&$variables)`
Preprocesses HTML template variables, adding theme variant and admin scripts settings.

#### `hu_general_preprocess_page(&$variables)`
Preprocesses page template variables, extending theme settings, configuring hero images, and setting up OpenID Connect integration.

#### `hu_general_preprocess_node(&$variables)`
Preprocesses node template variables, making theme path available to node templates.

#### `hu_general_preprocess_file_link(&$variables)`
Customizes file link display, using media names when available and generating absolute URLs.

#### `hu_general_theme_suggestions_page_alter(&$suggestions, $variables, $hook)`
Adds custom page template suggestions, particularly for 404 error pages.

### Helper Functions

#### `_hu_general_extend_theme_variables(&$variables)`
Extends template variables with all theme settings and handles proper caching dependencies.

## Dependencies

### Required Modules
- Core Drupal modules (minimal requirements)

### Optional Modules
- **OpenID Connect**: For SSO integration and login block functionality
- **Block**: For custom block placement
- **Views**: For content listing and display

## Component Library

The theme includes the idfive-component-library for consistent styling and components:
- Located in `/idfive-component-library/`
- Contains build tools and assets
- Provides standardized UI components

### Development Workflow

From the `idfive-component-library` directory:

1. **Setup Environment**:
   ```bash
   nvm use 10
   npm install
   ```

2. **Development Preview**:
   ```bash
   npm run fractal
   ```

3. **Production Build**:
   ```bash
   npm run build:production
   ```

## Customization

### Adding Custom Styles
1. Modify files in `/idfive-component-library/src/`
2. Run the build process to compile assets
3. Custom styles are automatically loaded

### Creating Custom Templates
1. Copy template files to your theme directory
2. Modify as needed
3. Clear Drupal cache

### Extending Theme Settings
1. Modify `theme-settings.php` to add new form elements
2. Update `hu_general.theme` to handle new settings
3. Create corresponding template variables

## File Structure

```
hu_general/
├── composer.json                 # Composer dependencies
├── hu_general.info.yml          # Theme information
├── hu_general.libraries.yml     # Asset libraries
├── hu_general.theme             # Theme hooks and functions
├── theme-settings.php           # Theme settings form
├── config/                      # Configuration files
│   └── install/
│       └── hu_general.settings.yml
├── templates/                   # Twig templates
│   ├── block/
│   ├── fields/
│   ├── forms/
│   ├── layout/
│   ├── media/
│   ├── navigation/
│   ├── node/
│   ├── page/
│   └── views/
└── idfive-component-library/    # Component library
    ├── build/                   # Compiled assets
    ├── src/                     # Source files
    └── fractal/                 # Component documentation
```

## Best Practices

### Custom Child Themes
It is **HIGHLY recommended** that custom child themes not be made for Howard sites unless absolutely necessary. When creating a custom child theme, only override what is absolutely necessary in order to keep standard functionality across sites.

### Theme Customization
- Use the theme settings form for configuration rather than hardcoding values
- Leverage the component library for consistent styling
- Follow Drupal coding standards for any custom code
- Test across different browsers and devices

## Support

For support and questions about the HU General theme:
- Check the theme documentation
- Review the component library documentation
- Contact the Howard University web development team

## Contributing

When contributing to the theme:
1. Follow Drupal coding standards
2. Document all functions and significant code blocks
3. Test across different browsers and devices
4. Update documentation as needed

## Documentation

- [DEVELOPER.md](DEVELOPER.md) - Developer documentation and customization guide
- [TEMPLATES.md](TEMPLATES.md) - Complete template documentation
- [SECURITY.md](SECURITY.md) - Security review and best practices

## Resources

- [idfive Component Library D8 Theme](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme)
- [Silc Framework](https://silc.io/)
- [idfive Component Library Source Files](https://bitbucket.org/idfivellc/idfive-component-library/src/master/)

## License

See LICENSE file for licensing information.
