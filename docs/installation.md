# Installation & Setup

This guide provides step-by-step instructions for installing and configuring the Howard University General theme.

## System Requirements

### Server Requirements

- **Drupal**: 10.x or 11.x
- **PHP**: 8.1+ (8.2+ recommended for Drupal 11)
- **Memory**: 256MB minimum (512MB recommended)
- **Storage**: 50MB for theme files, 200MB for full component library
- **Web Server**: Apache 2.4+ or Nginx 1.18+

### Development Requirements

- **Composer**: Latest stable version
- **Node.js**: 16+ (for component library development)
- **npm/yarn**: Latest stable version
- **Git**: For version control and updates

### Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+

## Installation Methods

### Method 1: Composer Installation (Recommended)

```bash
# Navigate to your Drupal root directory
cd /path/to/your/drupal/site

# Require the theme via Composer
composer require howard/hu_general

# Enable the theme
drush theme:enable hu_general

# Set as default theme
drush config:set system.theme default hu_general

# Clear caches
drush cache:rebuild
```

### Method 2: Manual Installation

```bash
# Download the theme
git clone https://github.com/howard-university-web-services/hu_general.git

# Move to themes directory
mv hu_general /path/to/drupal/themes/custom/

# Install dependencies
cd /path/to/drupal/themes/custom/hu_general
composer install

# Enable via Drush
drush theme:enable hu_general
drush config:set system.theme default hu_general
```

### Method 3: Admin Interface

1. Download theme package
2. Extract to `/themes/custom/hu_general`
3. Visit `/admin/appearance`
4. Click "Install and set as default" for HU General theme

## Post-Installation Configuration

### Required Configuration Steps

#### 1. Theme Settings

Navigate to `/admin/appearance/settings/hu_general` and configure:

**Basic Settings**:
- Site logo and favicon
- Site name and slogan display
- Breadcrumb settings

**Howard Branding**:
- Primary and secondary colors
- Typography preferences
- Logo placement options

**Layout Configuration**:
- Content width and sidebar options
- Grid system preferences
- Mobile breakpoint settings

#### 2. Regional Settings

Configure at `/admin/config/regional/settings`:
- Default country: United States
- Default timezone: America/New_York (Eastern)
- Date formats for events and content

#### 3. Site Information

Update at `/admin/config/system/site-information`:
- Site name: "Howard University - [Department/School]"
- Site slogan: Descriptive tagline
- Administrative email address
- Default front page configuration

### Recommended Configuration

#### Image Styles

Configure appropriate image styles at `/admin/config/media/image-styles`:

**Featured Image (Large)**:
- Scale and crop: 1200×630 (social media optimized)
- Quality: 85%

**Featured Image (Medium)**:
- Scale and crop: 800×400
- Quality: 80%

**Profile Photo**:
- Scale and crop: 300×300 (square)
- Quality: 85%

**Hero Banner**:
- Scale: 1920×800 (maintain aspect ratio)
- Quality: 90%

#### Text Formats

Ensure proper text formats at `/admin/config/content/formats`:

**Full HTML**: For administrative content
- Enable all necessary filters
- Restrict to administrators

**Filtered HTML**: For general content
- Basic formatting tags allowed
- Link and image support
- Security filters enabled

**Plain Text**: For simple content
- No HTML allowed
- URL filter enabled

#### Menu Configuration

Configure main navigation at `/admin/structure/menu`:

**Main Navigation**:
- Set appropriate menu items
- Configure depth (recommended: 2 levels)
- Set weights for ordering

**Footer Menu**:
- Add utility links
- Contact information
- Legal/policy pages

## Component Library Setup

### Development Environment

If you plan to customize the component library:

```bash
# Navigate to component library directory
cd themes/custom/hu_general/idfive-component-library

# Install Node dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Production Environment

For production sites, ensure:

```bash
# Build optimized assets
cd themes/custom/hu_general/idfive-component-library
npm run build

# Verify compiled assets exist
ls -la build/css/
ls -la build/js/
```

## Verification Steps

### 1. Theme Activation Check

Verify the theme is active:
- Visit `/admin/appearance`
- Confirm "HU General" is set as default
- Check that HU General is enabled and set as the default theme

### 2. Asset Loading Verification

Check that assets load correctly:
- View page source and verify CSS/JS files load
- Check browser console for any 404 errors
- Test responsive design at different breakpoints

### 3. Component Library Integration

Verify component library is working:
- Check that component styles render correctly
- Test interactive elements (modals, carousels, etc.)
- Verify font loading and typography

### 4. Schema.org Implementation

Test structured data:
- Use Google's Rich Results Test
- Check that JSON-LD scripts appear in page source
- Verify no syntax errors in structured data

## Common Installation Issues

### Permission Issues

```bash
# Fix file permissions
chmod -R 755 themes/custom/hu_general
chown -R www-data:www-data themes/custom/hu_general
```

### Composer Issues

```bash
# Clear Composer cache
composer clear-cache

# Update Composer
composer self-update

# Reinstall dependencies
composer install --no-dev --optimize-autoloader
```

### Cache Issues

```bash
# Clear all Drupal caches
drush cache:rebuild

# Clear specific caches
drush cache:clear theme-registry
drush cache:clear css-js
```

### Asset Compilation Issues

```bash
# Rebuild component library
cd idfive-component-library
rm -rf node_modules
npm install
npm run build
```

## Environment-Specific Configuration

### Development Environment

```php
// settings.local.php
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['page'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

// Enable Twig debugging
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
```

### Staging Environment

- Enable error logging
- Use development CSS/JS (non-aggregated)
- Enable module/theme debugging
- Restrict access to authorized users

### Production Environment

```php
// settings.php production settings
$config['system.performance']['cache']['page']['max_age'] = 3600;
$config['system.performance']['css']['preprocess'] = TRUE;
$config['system.performance']['js']['preprocess'] = TRUE;
```

## Security Configuration

### File Permissions

```bash
# Secure file permissions
find themes/custom/hu_general -type f -exec chmod 644 {} \;
find themes/custom/hu_general -type d -exec chmod 755 {} \;
```

### Security Headers

Ensure proper security headers in your web server configuration:

```apache
# Apache .htaccess
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options SAMEORIGIN
Header always set X-XSS-Protection "1; mode=block"
```

For detailed security configuration, see our [Security Best Practices](security.md) guide.

## Next Steps

After successful installation:

1. **Configure Content Types**: Set up required fields and display modes
2. **Customize Templates**: See [Template Development](template-development.md)
3. **Optimize Performance**: See [Performance Optimization](performance.md)
4. **Set Up Development Workflow**: See [Developer Guide](developer-guide.md)

## Support

If you encounter issues during installation:

1. Check our [Troubleshooting Guide](troubleshooting.md)
2. Review the [Developer Documentation](developer-guide.md)
3. Submit issues to our GitHub repository
4. Contact Howard University Web Services for support
