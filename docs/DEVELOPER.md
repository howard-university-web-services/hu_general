# HU General Theme - Developer Documentation

## Overview

This document provides detailed technical information for developers working with the Howard University General theme.

## Architecture

### Theme Structure

The HU General theme follows Drupal theming best practices and is structured as follows:

```
hu_general/
├── composer.json                 # Composer dependencies
├── hu_general.info.yml          # Theme metadata and configuration
├── hu_general.libraries.yml     # Asset library definitions
├── hu_general.theme             # Theme hooks and preprocessing functions
├── theme-settings.php           # Theme settings form implementation
├── config/                      # Default configuration
│   └── install/
│       └── hu_general.settings.yml
├── templates/                   # Twig template overrides
└── idfive-component-library/    # Component library and build tools
```

### Theme Information (hu_general.info.yml)

The theme is defined with the following key properties:

- **Base Theme**: `idfive` - Inherits from the idfive component library theme
- **Core Compatibility**: Drupal 10 and 11
- **Version**: 11.0.1
- **Package**: Howard University

#### Regions

The theme defines the following regions:

- `primary_menu`: Main navigation menu
- `secondary_menu`: Top bar navigation
- `tertiary_menu`: Mobile menu
- `utility_menu`: Utility navigation
- `admin_tabs`: Administrative interface tabs
- `alerts`: Site-wide alerts and notifications
- `breadcrumbs`: Navigation breadcrumbs
- `page_sidebar`: Page-level sidebar content
- `content`: Main content area
- `footer_primary_menu`: Primary footer navigation
- `footer_menu`: Secondary footer navigation

### Asset Libraries (hu_general.libraries.yml)

The theme defines a global library that includes:

- **CSS Assets**:
  - `idfive-component-library/build/css/index.css`: Main stylesheet
  - `idfive-component-library/build/css/print.css`: Print-specific styles
- **JavaScript Assets**:
  - `idfive-component-library/build/js/index.js`: Main JavaScript bundle

## Theme Hooks and Functions

### Preprocessing Functions

#### `hu_general_preprocess_html(&$variables)`

**Purpose**: Preprocesses variables for the HTML template.

**Parameters**:
- `$variables`: Template variables array

**Functionality**:
- Adds `theme_variant` setting to control overall theme appearance
- Adds `admin_scripts` setting for custom JavaScript/tracking code injection

**Variables Added**:
- `$variables['theme_variant']`: Selected theme variant (default, clean_light, classic_editorial)
- `$variables['admin_scripts']`: Custom scripts configured by administrators

#### `hu_general_preprocess_page(&$variables)`

**Purpose**: Preprocesses variables for the page template.

**Parameters**:
- `$variables`: Template variables array

**Functionality**:
- Extends variables with all theme settings via `_hu_general_extend_theme_variables()`
- Sets default hero image path
- Makes theme directory path available to templates
- Conditionally adds OpenID Connect login block if module is enabled
- Adds hamburger menu setting for responsive navigation

**Variables Added**:
- `$variables['hero_image']`: Path to default hero image
- `$variables['parent_include_directory']`: Theme directory path
- `$variables['login_block']`: Rendered OpenID Connect login block (if available)
- `$variables['h_menu']`: Hamburger menu configuration

**Dependencies**:
- OpenID Connect module (optional)

#### `hu_general_preprocess_node(&$variables)`

**Purpose**: Preprocesses variables for node templates.

**Parameters**:
- `$variables`: Template variables array

**Functionality**:
- Extracts node object and ID for template use
- Makes theme directory path available to node templates

**Variables Added**:
- `$variables['parent_include_directory']`: Theme directory path
- `$node_id`: Node ID (local variable)

#### `hu_general_preprocess_file_link(&$variables)`

**Purpose**: Customizes file link display and behavior.

**Parameters**:
- `$variables`: Template variables array

**Functionality**:
- Determines appropriate link text (media name vs. filename)
- Generates absolute URLs for file links
- Adds proper cache contexts
- Handles media entity vs. regular file entity logic

**Variables Added**:
- `$variables['link_text']`: Display text for the file link
- `$variables['link_url']`: Absolute URL to the file
- `$variables['#cache']['contexts'][]`: Cache context for URL generation

**Logic**:
- If file is referenced through a media entity (not a node), use media name as link text
- Otherwise, use the original filename
- Always generate absolute URLs for consistency

### Theme Suggestions

#### `hu_general_theme_suggestions_page_alter(&$suggestions, $variables, $hook)`

**Purpose**: Adds custom page template suggestions based on HTTP status codes.

**Parameters**:
- `$suggestions`: Array of template suggestions
- `$variables`: Template variables
- `$hook`: Current template hook

**Functionality**:
- Detects HTTP exception status codes
- Adds specific template suggestions for error pages
- Currently handles 404 errors with `page__404` template suggestion

**Template Suggestions Added**:
- `page__404`: For 404 Not Found errors

### Helper Functions

#### `_hu_general_extend_theme_variables(&$variables)`

**Purpose**: Extends template variables with all theme settings and handles caching.

**Parameters**:
- `$variables`: Template variables array to extend

**Functionality**:
- Retrieves active theme name dynamically
- Loads theme configuration object
- Adds theme settings as cache dependency for proper cache invalidation
- Merges all theme settings into template variables

**Caching**:
- Uses `CacheableMetadata` to properly handle cache dependencies
- Ensures theme setting changes invalidate relevant caches
- Maintains performance while providing dynamic configuration

## Theme Settings

### Form Implementation (theme-settings.php)

The theme settings form is implemented in `hu_general_form_system_theme_settings_alter()` and provides the following configuration sections:

#### Theme Variant Settings
- **theme_variant**: Select field with options (default, clean_light, classic_editorial)
- **show_switcher**: Checkbox to enable variant switcher for authenticated users

#### Howard School/Department Settings
- **parent_school_college**: Text field for parent organization name
- **parent_school_college_link**: Text field for parent organization URL
- **department**: Text field for department/site name

#### Howard Header Settings
- **light_header**: Checkbox for light header color scheme
- **hamburguer_desktop**: Checkbox for desktop hamburger menu
- **Featured Link Configuration**:
  - **featured_header_link_show**: Checkbox to enable featured link
  - **featured_header_link_title**: Text field for link title
  - **featured_header_link_url**: URL field for link destination
- **Search Options**:
  - **featured_header_hide_search**: Checkbox to hide search functionality

#### Howard Footer Settings
- **Social Media Links**:
  - **twitter_link**: Text field for Twitter profile URL
  - **facebook_link**: Text field for Facebook profile URL
  - **youtube_link**: Text field for YouTube profile URL
  - **instagram_link**: Text field for Instagram profile URL
- **Address Information**:
  - **address_line_one**: Text field for first address line
  - **address_line_two**: Text field for second address line
  - **address_line_three**: Text field for third address line
  - **phone**: Text field for phone number

#### Admin Settings
- **admin_scripts**: Textarea for custom JavaScript/tracking code (Admin only)

### Configuration Storage

Theme settings are stored in the `hu_general.settings` configuration object and are accessible via:

```php
$theme_settings = \Drupal::config('hu_general.settings');
$value = $theme_settings->get('setting_name');
```

Or using the Drupal theme API:

```php
$value = theme_get_setting('setting_name');
```

## Template System

### Template Hierarchy

The theme follows Drupal's template suggestion system with custom additions:

1. **Page Templates**:
   - `page.html.twig`: Default page template
   - `page--404.html.twig`: 404 error page template

2. **Node Templates**:
   - `node--hc-page.html.twig`: Standard pages
   - `node--hc-article.html.twig`: Article content
   - `node--hc-person.html.twig`: Person profiles
   - `node--hc-resource.html.twig`: Resource content
   - `node--hc-standard-homepage.html.twig`: Homepage layout

3. **Navigation Templates**:
   - `menu--sidebar-navigation.html.twig`: Sidebar navigation
   - `breadcrumb.html.twig`: Breadcrumb navigation

### Template Variables

All templates have access to standard Drupal variables plus theme-specific additions:

- `theme_variant`: Current theme variant setting
- `admin_scripts`: Custom scripts (in HTML template)
- `hero_image`: Default hero image path
- `parent_include_directory`: Theme directory path
- `login_block`: OpenID Connect login block (if available)
- `h_menu`: Hamburger menu setting
- All theme settings via `_hu_general_extend_theme_variables()`

## Component Library Integration

### idfive Component Library

The theme integrates with the idfive component library for consistent styling and components:

- **Location**: `/idfive-component-library/`
- **Build System**: Webpack + PostCSS
- **Documentation**: Fractal-based component documentation

### Development Workflow

1. **Setup**:
   ```bash
   cd idfive-component-library
   nvm use 10
   npm install
   ```

2. **Development**:
   ```bash
   npm run fractal  # Component development and preview
   ```

3. **Production Build**:
   ```bash
   npm run build:production
   ```

### Asset Management

- **CSS**: Compiled from source files in `/src/` to `/build/css/`
- **JavaScript**: Bundled from source files to `/build/js/`
- **Images**: Optimized and placed in `/build/img/`

## Security Considerations

### Input Validation

- All theme settings are properly escaped in templates
- URL fields use Drupal's URL validation
- Admin scripts field is restricted to admin users only

### Caching

- Theme settings are properly cached with appropriate cache tags
- Cache contexts are added where dynamic content is involved
- File URLs include proper cache contexts for CDN compatibility

### Permissions

- Admin scripts functionality is restricted to users with appropriate permissions
- Theme settings access follows Drupal's permission system

## Performance Optimization

### Caching Strategy

- Theme settings are cached and invalidated appropriately
- Template variables include proper cache metadata
- File URLs are generated with cache contexts

### Asset Optimization

- CSS and JavaScript are minified in production builds
- Images are optimized through the build process
- Print styles are separated for better performance

## Testing

### Browser Support

The theme is tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 (limited support)

### Responsive Testing

- Mobile-first design approach
- Breakpoint testing across device sizes
- Touch interface considerations

## Troubleshooting

### Common Issues

1. **Theme Settings Not Appearing**:
   - Clear Drupal cache
   - Check theme is set as default
   - Verify permissions for theme settings

2. **Assets Not Loading**:
   - Ensure component library is built
   - Check file permissions
   - Verify library definitions in .libraries.yml

3. **Template Changes Not Visible**:
   - Clear Drupal cache
   - Check template file naming
   - Verify template suggestions are correct

### Debug Mode

Enable Twig debug mode for template development:

```php
// settings.php
$settings['twig_debug'] = TRUE;
$settings['twig_cache'] = FALSE;
```

## Contributing

### Code Standards

- Follow Drupal coding standards
- Use proper PHPDoc for all functions
- Include inline comments for complex logic
- Test across supported browsers

### Documentation

- Update this document when adding new features
- Include examples for complex implementations
- Document any breaking changes

### Testing

- Test theme settings functionality
- Verify template rendering
- Check responsive behavior
- Validate accessibility compliance
