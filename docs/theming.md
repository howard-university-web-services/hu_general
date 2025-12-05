# Theming & Customization

This guide covers how to customize the appearance and behavior of the Howard University General theme through template overrides, custom CSS, and theme configuration.

## Overview

The Howard University General theme is built on the idfive Component Library and provides extensive customization options while maintaining brand consistency and accessibility standards.

## Theme Architecture

### Template Hierarchy

The theme follows Drupal's template suggestion system with Howard-specific enhancements:

```
node--article--featured.html.twig     (Most specific)
node--article.html.twig
node--default.html.twig
node.html.twig                        (Least specific)
```

### Base Templates

The theme provides comprehensive template coverage:

**Node Templates** (`templates/node/`):
- `node--article.html.twig`: News articles and blog posts
- `node--person.html.twig`: Faculty and staff profiles
- `node--page.html.twig`: Static content pages
- `node--announcement.html.twig`: Campus announcements
- `node--resource.html.twig`: Downloadable resources

**Block Templates** (`templates/block/`):
- Navigation blocks
- Content blocks
- Custom component blocks

**Field Templates** (`templates/field/`):
- Specialized field rendering
- Media field templates
- Link and reference field templates

**Layout Templates** (`templates/layout/`):
- Page layout structures
- Region-specific templates

### Template Variables

All templates receive these common variables:

```twig
{# Core Drupal variables #}
{{ content }}           {# Rendered field content #}
{{ node }}              {# Node entity object #}
{{ view_mode }}         {# Current view mode #}
{{ logged_in }}         {# User login status #}
{{ is_admin }}          {# Admin context #}

{# Howard theme-specific variables #}
{{ howard_branding }}   {# Branding configuration #}
{{ site_config }}       {# Site configuration #}
{{ theme_settings }}    {# Theme-specific settings #}
```

## Customization Methods

### Method 1: Template Overrides

Copy templates to your subtheme and modify as needed:

```bash
# Create a subtheme
mkdir themes/custom/my_howard_subtheme

# Copy templates to subtheme
cp -r themes/custom/hu_general/templates/ themes/custom/my_howard_subtheme/templates/
```

Example customization for article template:

```twig
{# themes/custom/my_howard_subtheme/templates/node/node--article.html.twig #}
{% set classes = [
  'node',
  'node--type--' ~ node.bundle|clean_class,
  'node--view-mode--' ~ view_mode|clean_class,
  'custom-article-wrapper'
] %}

<article{{ attributes.addClass(classes) }}>
  {% if content.field_image|render %}
    <div class="article-hero">
      <div class="article-hero__image">
        {{ content.field_image }}
      </div>
    </div>
  {% endif %}
  
  <div class="article-content">
    <header class="article-header">
      {{ title_prefix }}
      <h1{{ title_attributes.addClass('article-title') }}>
        {{ label }}
      </h1>
      {{ title_suffix }}
      
      {% if node.uid.entity.name.value %}
        <div class="article-byline">
          <span class="author">By {{ node.uid.entity.name.value }}</span>
          {% if node.created.value %}
            <time class="published">{{ node.created.value|date('F j, Y') }}</time>
          {% endif %}
        </div>
      {% endif %}
    </header>
    
    <div class="article-body">
      {{ content.body }}
    </div>
  </div>
</article>

{# Schema.org structured data is maintained automatically #}
```

> **Note**: When customizing templates, be aware that many templates include Schema.org structured data markup for SEO benefits. The structured data will be maintained automatically, but avoid removing the JSON-LD script tags.

### Method 2: Subtheme Creation

Create a proper subtheme for extensive customizations:

```yaml
# themes/custom/my_howard_subtheme/my_howard_subtheme.info.yml
name: My Howard Subtheme
type: theme
base theme: hu_general
description: 'Custom Howard University subtheme for [Department/School]'
package: Howard University
core_version_requirement: ^10 || ^11
version: '1.0.0'

libraries:
  - my_howard_subtheme/global

regions:
  # Inherit regions from parent theme
```

```yaml
# themes/custom/my_howard_subtheme/my_howard_subtheme.libraries.yml
global:
  css:
    theme:
      css/custom.css: {}
  js:
    js/custom.js: {}
  dependencies:
    - hu_general/global
```

### Method 3: Theme Settings Override

Customize through theme settings and preprocessing:

```php
<?php
// themes/custom/my_howard_subtheme/my_howard_subtheme.theme

/**
 * Implements hook_preprocess_node().
 */
function my_howard_subtheme_preprocess_node(&$variables) {
  $node = $variables['node'];
  
  // Add custom classes based on content
  if ($node->getType() == 'article') {
    $variables['attributes']['class'][] = 'custom-article';
    
    // Add custom variables
    if ($node->hasField('field_featured') && !$node->get('field_featured')->isEmpty()) {
      $variables['is_featured'] = TRUE;
      $variables['attributes']['class'][] = 'article--featured';
    }
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function my_howard_subtheme_theme_suggestions_node_alter(array &$suggestions, array $variables) {
  $node = $variables['elements']['#node'];
  $sanitized_view_mode = strtr($variables['elements']['#view_mode'], '.', '_');
  
  // Add custom suggestions for featured content
  if ($node->hasField('field_featured') && !$node->get('field_featured')->isEmpty()) {
    $suggestions[] = 'node__' . $node->getType() . '__featured';
    $suggestions[] = 'node__' . $node->getType() . '__' . $sanitized_view_mode . '__featured';
  }
}
```

## Styling and CSS Customization

### Component Library Integration

The theme integrates with the idfive Component Library. Customize through:

```scss
// themes/custom/my_howard_subtheme/scss/custom.scss

// Import Howard variables and mixins
@import '../../../hu_general/idfive-component-library/src/scss/partials/variables';
@import '../../../hu_general/idfive-component-library/src/scss/partials/mixins';

// Override Howard brand colors
$howard-red: #c8102e;
$howard-blue: #003a63;
$howard-gold: #ffc20e;

// Custom component styling
.custom-article {
  margin-bottom: 2rem;
  
  &.article--featured {
    border-left: 4px solid $howard-red;
    padding-left: 1.5rem;
    
    .article-title {
      color: $howard-blue;
      font-size: 1.75rem;
      font-weight: 700;
    }
  }
  
  .article-hero {
    position: relative;
    margin-bottom: 1.5rem;
    
    &__image {
      border-radius: 8px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: auto;
        transition: transform 0.3s ease;
      }
    }
  }
  
  .article-byline {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    color: #666;
    
    .author {
      font-weight: 600;
      color: $howard-blue;
    }
    
    .published {
      &:before {
        content: '•';
        margin-right: 0.5rem;
      }
    }
  }
}

// Responsive adjustments
@include media-breakpoint-down(md) {
  .custom-article {
    .article-hero__image {
      border-radius: 4px;
    }
    
    .article-byline {
      flex-direction: column;
      gap: 0.25rem;
      
      .published:before {
        display: none;
      }
    }
  }
}
```

### CSS Compilation

For SCSS compilation in subthemes:

```json
{
  "scripts": {
    "build-css": "sass scss/custom.scss:css/custom.css --style compressed",
    "watch-css": "sass scss/custom.scss:css/custom.css --watch"
  },
  "devDependencies": {
    "sass": "^1.32.0"
  }
}
```

## Component Customization

### Custom Twig Functions

Add custom Twig functions for theme-specific needs:

```php
<?php
// themes/custom/my_howard_subtheme/my_howard_subtheme.theme

/**
 * Implements hook_theme().
 */
function my_howard_subtheme_theme($existing, $type, $theme, $path) {
  return [
    'custom_article_teaser' => [
      'variables' => [
        'node' => NULL,
        'show_image' => TRUE,
        'show_author' => TRUE,
      ],
      'template' => 'custom-article-teaser',
    ],
  ];
}

/**
 * Custom Twig function to format Howard dates.
 */
function my_howard_subtheme_preprocess_node(&$variables) {
  // Add custom date formatting function
  $variables['howard_date'] = function($timestamp, $format = 'F j, Y') {
    return date($format, $timestamp);
  };
}
```

### JavaScript Enhancements

Add custom interactions while maintaining accessibility:

```javascript
// themes/custom/my_howard_subtheme/js/custom.js
(function ($, Drupal) {
  'use strict';

  /**
   * Custom article interactions.
   */
  Drupal.behaviors.customArticle = {
    attach: function (context, settings) {
      $('.custom-article .article-hero__image', context).once('custom-article').each(function () {
        $(this).on('mouseenter', function () {
          $(this).find('img').css('transform', 'scale(1.05)');
        }).on('mouseleave', function () {
          $(this).find('img').css('transform', 'scale(1)');
        });
      });
    }
  };

  /**
   * Accessible modal functionality.
   */
  Drupal.behaviors.accessibleModal = {
    attach: function (context, settings) {
      $('.modal-trigger', context).once('accessible-modal').each(function () {
        $(this).on('click', function (e) {
          e.preventDefault();
          
          // Ensure proper ARIA attributes
          var modal = $($(this).attr('href'));
          modal.attr('aria-hidden', 'false');
          modal.find('[autofocus]').focus();
          
          // Trap focus within modal
          modal.on('keydown', function (e) {
            if (e.key === 'Escape') {
              modal.attr('aria-hidden', 'true');
              $(e.currentTarget).focus();
            }
          });
        });
      });
    }
  };

})(jQuery, Drupal);
```

## Performance Considerations

### Asset Optimization

Optimize custom assets for performance:

```yaml
# my_howard_subtheme.libraries.yml
global:
  css:
    theme:
      css/custom.min.css: { minified: true }
  js:
    js/custom.min.js: { minified: true }
    
# Only load custom styles on specific pages
article_enhancements:
  css:
    theme:
      css/article-custom.css: {}
  dependencies:
    - core/drupal.ajax
```

### Conditional Asset Loading

Load assets only when needed:

```php
<?php
function my_howard_subtheme_preprocess_node(&$variables) {
  $node = $variables['node'];
  
  // Only load article enhancements on article pages
  if ($node->getType() == 'article') {
    $variables['#attached']['library'][] = 'my_howard_subtheme/article_enhancements';
  }
}
```

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

Ensure customizations maintain accessibility:

```scss
// Focus management
.custom-interactive-element {
  &:focus {
    outline: 2px solid $howard-blue;
    outline-offset: 2px;
  }
  
  &:focus-visible {
    outline: 2px solid $howard-blue;
  }
}

// Color contrast requirements
.custom-text {
  color: #333; // Ensure 4.5:1 contrast ratio
  
  .highlight {
    background-color: #fff3cd; // WCAG AA compliant
    color: #856404;
  }
}

// Skip links for keyboard navigation
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: $howard-blue;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
  
  &:focus {
    top: 6px;
  }
}
```

### Screen Reader Support

Ensure proper ARIA labels and semantic markup:

```twig
<article role="article" aria-labelledby="article-{{ node.id }}">
  <header>
    <h1 id="article-{{ node.id }}">{{ label }}</h1>
    <div class="byline" aria-label="Article information">
      <span class="author" aria-label="Author">{{ author_name }}</span>
      <time datetime="{{ node.created.value|date('c') }}" aria-label="Published date">
        {{ node.created.value|date('F j, Y') }}
      </time>
    </div>
  </header>
  
  <div class="content" role="main">
    {{ content.body }}
  </div>
</article>
```

## Testing and Quality Assurance

### Browser Testing

Test customizations across supported browsers:

```bash
# Use browser testing tools
npm install --save-dev puppeteer

# Create automated tests
node test-browser-compatibility.js
```

### Accessibility Testing

```bash
# Install accessibility testing tools
npm install --save-dev @axe-core/cli

# Run accessibility audits
axe --include .custom-article http://localhost/node/1
```

### Performance Testing

Monitor performance impact of customizations:

- Use browser DevTools Performance tab
- Test with slow 3G network conditions
- Monitor Largest Contentful Paint (LCP)
- Ensure Cumulative Layout Shift (CLS) < 0.1

## Troubleshooting

### Common Issues

**Styles not applying**:
- Clear Drupal caches: `drush cr`
- Check CSS/JS aggregation settings
- Verify library dependencies

**Template overrides not working**:
- Check template naming conventions
- Clear theme registry cache
- Enable Twig debugging for development

**Component library conflicts**:
- Check for CSS specificity issues
- Verify proper SCSS import order
- Test without CSS aggregation

For more detailed troubleshooting, see our [Troubleshooting Guide](troubleshooting.md).

## Best Practices

1. **Always create subthemes** for customizations
2. **Maintain Schema.org markup** when modifying templates
3. **Test accessibility** after any customization
4. **Use proper semantic markup** for all components
5. **Follow Howard brand guidelines** for colors and typography
6. **Optimize assets** for performance
7. **Document custom code** for maintainability

## Advanced Customization

For complex customizations involving:
- Custom content types and fields
- Advanced component development
- Performance optimization
- Security considerations

See our [Developer Guide](developer-guide.md) for detailed technical documentation.
