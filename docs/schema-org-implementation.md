# Schema.org Implementation - Enhanced v11.1.2

This document outlines the comprehensive Schema.org structured data implementation across Howard University node templates. These enhancements improve SEO performance, enable rich snippets in search results, and provide better content understanding for search engines.

## Overview

The Schema.org implementation provides structured data markup for all major node content types in the Howard University General theme. This enhances search engine optimization (SEO) by enabling rich snippets, improving content discoverability, and providing better context understanding for search engines.

### Benefits

- **Enhanced SEO Performance**: Structured data helps search engines understand content better with validation-compliant markup
- **Rich Snippets**: Enables enhanced search result displays with images, ratings, and metadata
- **Better Content Discovery**: Improved categorization and relationship understanding
- **Educational Context**: Proper markup for academic and institutional content
- **Future-Proof**: Follows latest Schema.org specifications with valid types and properties

## Implementation Summary

### Enhanced Node Templates

The following node content type templates have been enhanced with Schema.org structured data:

#### HC Article Template (`node--hc-article.html.twig`)

**Schema Type**: `NewsArticle`  
**Template Location**: `templates/node/node--hc-article.html.twig`

**Key Features**:
- Article headline and description
- Author information with Howard affiliation
- Publication date and last modified date
- Enhanced featured image support with fallback to header image
- Complete publisher information

**SEO Benefits**: Enhanced article discovery, rich snippets with author and date

#### HC Announcement Template (`node--hc-announcement.html.twig`)

**Schema Type**: `Article` (Updated from invalid `Announcement` type)
**Template Location**: `templates/node/node--hc-announcement.html.twig`

**Key Features**:
- Announcement headline and description (updated property names)
- Publication and expiration dates
- Howard University publisher information
- Proper Article schema compliance

**SEO Benefits**: Valid structured data for announcements, better search indexing

#### HC Page Template (`node--hc-page.html.twig`)

**Schema Type**: `WebPage`  
**Template Location**: `templates/node/node--hc-page.html.twig`

**Key Features**:
- Page name and URL
- Publication and modification dates
- Primary image support for header images
- WebSite context for institutional pages
- Complete publisher information

**SEO Benefits**: Enhanced page discovery, institutional context

#### Person Template (`node--person.html.twig`)

**Schema Type**: `Person` with `EducationalOrganization` affiliation  
**Template Location**: `templates/node/node--person.html.twig`

**Key Features**:
- Person name, title, and description
- Affiliation with Howard University
- Contact information when available
- Profile image with proper metadata
- Educational organization context

**SEO Benefits**: Rich person profile snippets, institutional association

#### Page Template (`node--page.html.twig`)

**Schema Type**: `WebPage`  
**Template Location**: `templates/node/node--page.html.twig`

**Key Features**:
- Page title and description
- Publication organization context
- Last modified information
- Proper web page categorization
- Publisher information

**SEO Benefits**: Better page understanding, institutional context

#### Announcement Template (`node--announcement.html.twig`)

**Schema Type**: `Announcement`  
**Template Location**: `templates/node/node--announcement.html.twig`

**Key Features**:
- Announcement title and content
- Publication date and organization
- Event-like properties when applicable
- Institutional context
- Complete metadata

**SEO Benefits**: Enhanced announcement discovery, institutional announcements

#### HC Resource Template (`node--hc-resource.html.twig`)

**Schema Type**: `Article` with educational context  
**Template Location**: `templates/node/node--hc-resource.html.twig`

**Key Features**:
- Resource title and description
- Enhanced image support for header images
- Educational content categorization
- Author information
- Publisher and organization information
- Access information when applicable

**SEO Benefits**: Better resource discovery, educational content classification

#### Standard Homepage Template (`node--standard_homepage.html.twig`)

**Schema Type**: `WebPage` with `EducationalOrganization`  
**Template Location**: `templates/node/node--standard_homepage.html.twig`

**Key Features**:
- Homepage identification
- Complete organizational information
- Educational institution context
- Brand and identity information
- Institutional metadata

**SEO Benefits**: Enhanced institutional homepage discovery, organization context

## Technical Implementation Details

### Schema.org Standards Applied

1. **Consistent JSON-LD Format**: All implementations use `application/ld+json` format
2. **Safe JSON Encoding**: All text fields use `json_encode|raw` to prevent syntax errors
3. **Conditional Rendering**: All fields check for existence before output
4. **Educational Context**: All templates reference Howard University as `EducationalOrganization`
5. **Complete Publisher Info**: Includes organization name and URL

### Field Access Patterns

```twig
{# Direct node field access (preferred) #}
{% if node.title.value %}"headline": {{ node.title.value|striptags|json_encode|raw }},{% endif %}

{# Date formatting #}
{% if node.created.value %}"datePublished": "{{ node.created.value|date('c') }}",{% endif %}

{# Image field access #}
{% if node.field_image.entity.uri.value %}"image": "{{ file_url(node.field_image.entity.uri.value) }}",{% endif %}

{# Author information #}
{% if node.uid.entity.name.value %}"author": {
  "@type": "Person",
  "name": {{ node.uid.entity.name.value|json_encode|raw }}
},{% endif %}
```

### Schema Type Selection Logic

- **News/Articles**: `NewsArticle` for blog posts and news content
- **People/Profiles**: `Person` with Howard University affiliation
- **Static Pages**: `WebPage` for general informational content
- **Announcements**: `Announcement` for institutional communications
- **Resources**: `Article` with educational context for downloadable content
- **Homepage**: `WebPage` with complete `EducationalOrganization` context

## SEO Benefits Achieved

### Rich Snippets Enabled

- **Article snippets** with author, date, and featured image
- **Person profiles** with affiliation and contact information
- **Educational content** with proper institutional context
- **Announcement listings** with publication information

### Enhanced Discovery

- **Better content categorization** by search engines
- **Improved understanding** of content relationships
- **Enhanced educational context** recognition
- **Clearer institutional hierarchy** and branding

### Technical SEO

- **Structured data validation** passes Google's testing tools
- **No JSON syntax errors** from special characters or malformed data
- **Consistent schema patterns** across all templates
- **Future-proof implementation** for schema updates

## Testing and Validation

### Recommended Tools

1. **Google's Rich Results Test**: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. **Schema.org Validator**: [https://validator.schema.org/](https://validator.schema.org/)
3. **Google Search Console**: Monitor structured data performance

### Validation Steps

1. Test each node type with sample content
2. Validate JSON-LD syntax in browser developer tools
3. Check for required properties in Schema.org validator
4. Verify rich snippet eligibility in Google's tools

## Maintenance Guidelines

### When Creating New Node Templates

1. Determine appropriate Schema.org type for content
2. Follow established field access patterns
3. Use conditional rendering for all fields
4. Include Howard University publisher information
5. Implement safe JSON encoding with `json_encode|raw`

### Best Practices

- Use direct node field access when possible
- Access media entities for rich content URLs
- Include temporal data (dates) when available
- Provide complete organization context
- Test structured data after template changes

## Performance Considerations

### Impact Assessment

- **Minimal Performance Impact**: JSON-LD scripts are lightweight (typically <2KB)
- **No Page Load Impact**: Scripts don't block rendering or user interaction
- **Improved SEO Performance**: Better search rankings over time
- **Caching Compatible**: Structured data caches with page content

### Optimization Tips

- Keep structured data concise and relevant
- Use conditional rendering to avoid empty properties
- Cache computed values when possible
- Monitor structured data size in larger implementations

---

**Implementation Team**: Howard University Web Services  
**Contact**: For questions about this implementation, contact the development team  
**Documentation Date**: December 2025  
**Last Updated**: December 5, 2025
