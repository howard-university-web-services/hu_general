# Howard University General Theme Documentation

Welcome to the comprehensive documentation for the Howard University General theme - the official Drupal theme for Howard University digital properties.

## Table of Contents

- [Getting Started](getting-started.md)
- [Installation & Setup](installation.md)
- [Theming & Customization](theming.md)
- [Template Development](template-development.md)
- [Schema.org Implementation](schema-org-implementation.md)
- [Component Library Integration](component-library.md)
- [Developer Guide](developer-guide.md)
- [Security Best Practices](security.md)
- [Performance Optimization](performance.md)
- [Troubleshooting](troubleshooting.md)
- [API Reference](api-reference.md)
- [Contributing](contributing.md)

## Quick Overview

The Howard University General theme provides a comprehensive, responsive design system built with a bundled component library. It serves as the foundation for all Howard University Drupal sites, ensuring brand consistency, accessibility, and performance.

### Key Features

- **Component Library Integration**: Built-in component library with modern UI patterns
- **Schema.org SEO Enhancement**: Comprehensive structured data for better search engine optimization
- **Responsive Design**: Mobile-first approach with flexible grid system
- **Accessibility Focused**: WCAG 2.1 AA compliant design patterns
- **Performance Optimized**: Efficient asset loading and caching strategies
- **Modular Architecture**: Flexible template system for easy customization
- **Howard Branding**: Complete Howard University visual identity implementation

### System Requirements

- **Drupal**: 10.x or 11.x ✅
- **PHP**: 8.1+ (8.2+ recommended for Drupal 11)
- **Node.js**: 16+ (for component library development)
- **Recommended**: Modern browser support (Chrome 90+, Firefox 88+, Safari 14+)

## Quick Start

1. **Install the theme**: `composer require howard/hu_general`
2. **Enable the theme**: Visit `/admin/appearance` and set as default
3. **Configure settings**: Visit `/admin/appearance/settings/hu_general`

## Architecture Overview

The theme follows a modular architecture with clear separation of concerns:

- **Drupal Theme Layer**: Standalone theme implementation owned by hu_general
- **Component Library**: Modern UI components in `idfive-component-library/`
- **Template System**: Comprehensive Twig templates for all content types
- **Asset Management**: Optimized CSS/JS through libraries system
- **Configuration**: Flexible theme settings and configuration management

## Support & Contributing

- **Issues**: [GitHub Issues](https://github.com/howard-university-web-services/hu_general/issues)
- **Documentation**: You're reading it!
- **Contributing**: See our [Contributing Guide](contributing.md)
- **Security**: See our [Security Guidelines](security.md)

---

**Version**: 11.3.0  
**Maintainer**: Howard University Web Services  
**License**: GPL-2.0+  
**Drupal Theme Type**: Standalone theme with bundled component library
