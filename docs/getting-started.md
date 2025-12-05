# Getting Started with Howard University General Theme

This guide will help you get up and running with the Howard University General theme quickly and efficiently.

## What is HU General?

The Howard University General theme is the official Drupal theme for Howard University digital properties. Built on the idfive Component Library, it provides a comprehensive design system that ensures brand consistency, accessibility, and performance across all university websites.

## Prerequisites

Before installing HU General, ensure you have:

- **Drupal 10.x or 11.x** installed and configured
- **PHP 8.1+** (8.2+ recommended for Drupal 11)
- **Composer** for package management
- **Administrative access** to your Drupal site
- **Basic understanding** of Drupal theming concepts

## Core Concepts

### Base Theme Architecture
HU General is built on the idfive base theme, which provides:
- Modern component library integration
- Responsive grid system
- Accessibility-first design patterns
- Performance optimizations

### Template System
The theme includes comprehensive template coverage:
- **Node Templates**: All major content types (articles, pages, people, announcements)
- **Block Templates**: Navigation, content blocks, and custom components
- **Field Templates**: Specialized field rendering for different content types
- **Page Templates**: Layout templates for different page types

### Component Library Integration
The theme integrates with the idfive Component Library:
- **Modern UI Patterns**: Cards, modals, carousels, and interactive elements
- **Brand Guidelines**: Official Howard University visual identity
- **Responsive Components**: Mobile-first design approach
- **Accessibility**: WCAG 2.1 AA compliance built-in

## Installation Methods

### Method 1: Composer (Recommended)

```bash
# Add to your Drupal site
composer require howard/hu_general

# Enable the theme
drush theme:enable hu_general

# Set as default theme
drush config:set system.theme default hu_general
```

### Method 2: Manual Installation

1. Download the theme package
2. Extract to `/themes/custom/hu_general`
3. Enable via admin interface at `/admin/appearance`
4. Set as default theme

## Initial Configuration

### Theme Settings

After installation, configure the theme at `/admin/appearance/settings/hu_general`:

1. **Logo and Branding**: Upload Howard University logos
2. **Color Scheme**: Configure primary and secondary colors
3. **Typography**: Set heading and body font preferences
4. **Layout Options**: Configure sidebar and content width
5. **Navigation**: Set menu behavior and mobile breakpoints

### Required Configuration

Ensure these settings are configured for optimal functionality:

1. **Site Information**: `/admin/config/system/site-information`
2. **Image Styles**: `/admin/config/media/image-styles`
3. **Text Formats**: `/admin/config/content/formats`
4. **Menu Configuration**: `/admin/structure/menu`

## Content Type Setup

### Recommended Content Types

The theme works best with these content types:

- **Article**: News articles and blog posts
- **Basic Page**: Static content pages
- **Person**: Faculty and staff profiles
- **Event**: Campus events and announcements
- **Resource**: Documents and downloadable content

### Field Configuration

For optimal Schema.org integration, ensure content types include:

- **Title**: Required for all content
- **Body**: Main content field
- **Image**: Featured images for social sharing
- **Author**: Byline information for articles
- **Date**: Publication or event dates
- **Categories**: Taxonomy for content organization

## Verification

After setup, verify your installation:

1. **Theme Active**: Check `/admin/appearance` shows HU General as default
2. **Component Library**: Verify CSS/JS loads without errors
3. **Responsive Design**: Test on mobile and desktop
4. **Accessibility**: Run accessibility audit
5. **Schema.org**: Test structured data with Google's Rich Results Test

## Next Steps

- **Customize Templates**: See [Template Development](template-development.md)
- **Configure Schema.org**: See [Schema.org Implementation](schema-org-implementation.md)
- **Optimize Performance**: See [Performance Optimization](performance.md)
- **Learn Theming**: See [Theming & Customization](theming.md)

## Common Issues

### Theme Not Appearing
- Clear caches: `drush cr`
- Check file permissions
- Verify composer installation completed

### Styling Issues
- Check browser console for CSS/JS errors
- Verify idfive base theme is installed
- Clear aggregated CSS/JS caches

### Template Issues
- Check template hierarchy and naming
- Verify Twig debug is enabled for development
- Review template suggestions with Devel module

For more detailed troubleshooting, see our [Troubleshooting Guide](troubleshooting.md).
