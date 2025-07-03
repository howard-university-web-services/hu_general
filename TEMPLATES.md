# HU General Theme - Template Documentation

## Overview

This document provides a comprehensive reference for all template files in the Howard University General theme. Each template has been documented with detailed information about its purpose, variables, features, and usage context.

## Template Organization

### Layout Templates
- `templates/layout/html.html.twig` - Base HTML document structure

### Page Templates
- `templates/page/page.html.twig` - Main page template
- `templates/page/page--404.html.twig` - 404 error page
- `templates/page/page--user.html.twig` - User profile pages
- `templates/page/page--user--login.html.twig` - User login page
- `templates/page/page--user--password.html.twig` - Password reset page

### Node Templates
- `templates/node/node--hc-page.html.twig` - Standard page content
- `templates/node/node--hc-article.html.twig` - Article content
- `templates/node/node--hc-person.html.twig` - Person/faculty profiles
- `templates/node/node--hc-resource.html.twig` - Resource content
- `templates/node/node--hc-announcement.html.twig` - Announcement content
- `templates/node/node--hc-standard-homepage.html.twig` - Homepage layout

### Node Teaser Templates
- `templates/node/node--hc-page--teaser.html.twig` - Page teasers
- `templates/node/node--hc-article--teaser.html.twig` - Article teasers
- `templates/node/node--hc-person--teaser.html.twig` - Person profile teasers
- `templates/node/node--hc-resource--teaser.html.twig` - Resource teasers
- `templates/node/node--hc-announcement--teaser.html.twig` - Announcement teasers

### Field Templates
- `templates/fields/file-link.html.twig` - Custom file link display

### Navigation Templates
- `templates/navigation/breadcrumb.html.twig` - Breadcrumb navigation
- `templates/navigation/menu--sidebar-navigation.html.twig` - Sidebar navigation menu

### Block Templates
- `templates/block/block--menu-block--sidebar-navigation.html.twig` - Sidebar menu block

### Media Templates
- `templates/media/media.html.twig` - Media item display
- `templates/media/media-oembed-iframe.html.twig` - oEmbed iframe content

### Views Templates
- `templates/views/views-view.html.twig` - Main view template
- `templates/views/views-view-unformatted.html.twig` - Unformatted view rows
- `templates/views/views-view-fields.html.twig` - Individual field display

### Search Templates
- `templates/forms/search-results/page--search.html.twig` - Search results page
- `templates/forms/search-results/search-result.html.twig` - Individual search result
- `templates/forms/search-results/item-list--search-results.html.twig` - Search results list

### Include Templates
- `templates/_includes/global/header.html.twig` - Global header with branding and navigation
- `templates/_includes/global/footer.html.twig` - Global footer with contact and social links
- `templates/_includes/global/utility_menu.html.twig` - Desktop utility menu with search
- `templates/_includes/global/utility_menu_mobile.html.twig` - Mobile utility menu
- `templates/_includes/global/content_header.html.twig` - Content header with image
- `templates/_includes/global/content_header_no_image.html.twig` - Content header without image
- `templates/_includes/global/content_header_home.html.twig` - Homepage header (standard)
- `templates/_includes/global/content_header_home_image.html.twig` - Homepage header with large image
- `templates/_includes/global/content_header_home_video.html.twig` - Homepage header with video

## Template Variables

### Standard Drupal Variables
All templates have access to standard Drupal variables such as:
- `attributes` - HTML attributes for elements
- `content` - Rendered content
- `label` - Entity label/title
- `url` - Entity URL
- `logged_in` - User login status
- `is_admin` - Admin user status

### HU General Theme Variables
The theme adds the following custom variables:

#### Global Variables (Available in all templates)
- `parent_include_directory` - Path to theme directory
- `theme_variant` - Selected theme variant
- `admin_scripts` - Custom admin scripts

#### Page-Specific Variables
- `hero_image` - Default hero image path
- `login_block` - OpenID Connect login block
- `h_menu` - Hamburger menu setting

#### Theme Settings Variables
- `light_header` - Light header theme setting
- `featured_header_link_show` - Featured link display
- `featured_header_link_title` - Featured link title
- `featured_header_link_url` - Featured link URL
- `hide_search` - Search functionality setting
- `parent_school_college` - Parent organization name
- `parent_school_college_link` - Parent organization URL
- `department` - Department/site name
- `address_line_one/two/three` - Address components
- `phone` - Phone number
- `twitter_link` - Twitter profile URL
- `facebook_link` - Facebook profile URL
- `youtube_link` - YouTube profile URL
- `instagram_link` - Instagram profile URL

## Common Features

### Accessibility
All templates include:
- Proper semantic HTML markup
- ARIA labels and landmarks
- Keyboard navigation support
- Screen reader compatibility
- Skip links where appropriate

### Responsive Design
Templates are designed to be:
- Mobile-first responsive
- Touch-friendly on mobile devices
- Optimized for various screen sizes
- Consistent across device types

### Howard University Branding
Templates maintain:
- Consistent visual identity
- Brand color usage
- Typography standards
- Logo placement and sizing
- Official university links

### Performance Optimization
Templates include:
- Efficient markup structure
- Proper caching considerations
- Optimized image handling
- Minimal inline styles
- Clean, semantic code

## Template Inheritance

### Base Theme Integration
The HU General theme extends the idfive base theme:
- Inherits base functionality
- Overrides specific templates as needed
- Maintains compatibility with base theme updates

### Template Suggestions
The theme uses Drupal's template suggestion system:
- Content type-specific templates
- View mode-specific templates
- Page-specific templates
- Custom template suggestions for 404 pages

## Development Guidelines

### Adding New Templates
When adding new templates:
1. Follow the existing docblock format
2. Document all variables and features
3. Include accessibility considerations
4. Test across device sizes
5. Maintain brand consistency

### Template Modification
When modifying existing templates:
1. Update docblocks to reflect changes
2. Maintain backward compatibility
3. Test thoroughly across contexts
4. Document any breaking changes
5. Update related documentation

### Performance Considerations
- Minimize template complexity
- Use efficient markup
- Avoid inline styles
- Optimize for caching
- Test loading performance

## Troubleshooting

### Common Issues
1. **Template not loading**: Check file naming and placement
2. **Variables not available**: Verify preprocessing functions
3. **Styling not applied**: Check CSS compilation and caching
4. **Responsive issues**: Test across device sizes

### Debug Mode
Enable Twig debug mode for development:
```php
$settings['twig_debug'] = TRUE;
$settings['twig_cache'] = FALSE;
```

This will show:
- Template suggestions
- Template paths
- Variable dumps
- Performance information

## Related Documentation

- [README.md](README.md) - General theme documentation
- [DEVELOPER.md](DEVELOPER.md) - Technical documentation
- [Theme Settings Documentation](theme-settings.php) - Configuration options
- [Theme Functions Documentation](hu_general.theme) - PHP functions

## Support

For questions about template usage or modification:
- Review the template docblocks
- Check the developer documentation
- Test changes in a development environment
- Contact the Howard University web development team
