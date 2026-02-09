# Changelog

## 11.2.0 - 2026-02-09

### Added - New Artistic Theme
- **Artistic Theme**: Complete new theme option with custom styling and visual design
- **Theme Option Integration**: Added "Artistic" option to theme selector with dedicated SCSS implementation
- **Visual Design System**: Custom typography, color palette, and component styling for artistic variant

### Enhanced Component Library
- **TypeScript Configuration**: Updated tsconfig.json with modern ES2015 target and improved module resolution
- **Type Declarations**: Added timing-object.d.ts for better TypeScript support with Vimeo dependencies
- **Import Improvements**: Fixed SmoothScroll import to use default import pattern
- **Build Process**: Enhanced package-lock.json with updated dependencies

### Component Improvements  
- **Data Point Component**: Cleaned up unused icon-arrow-right styling and streamlined CSS
- **Parallax Component**: Fixed text color inheritance issues and improved overlay styling
- **Theme Variables**: Added new color variables for artistic theme support (purple, ablue, lblue, gray6)

### Technical Improvements
- **SCSS Architecture**: Enhanced theme options structure with new artistic theme integration
- **CSS Organization**: Better separation of theme-specific styles and improved maintainability  
- **Build Output**: Updated compiled CSS and JavaScript files with latest changes

### Bug Fixes
- **Style Conflicts**: Resolved text color inheritance issues in parallax components
- **Arrow Icons**: Removed redundant styling that was causing visual inconsistencies
- **TypeScript Compilation**: Fixed import errors and improved type safety

## 11.1.4 - 2026-01-22 

### Enhanced
-  **Footer**: Added LinkedIn social link to social links list
-  **Theme Settings Form**:  Added inputs for LinkedIn URL to the theme settings
 
## 11.1.3 - 2025-12-11

### Enhanced Image Handling

#### Improved Template Variable Usage
- **HC Article**: Enhanced image handling using `hero_image` variable from theme preprocessing instead of direct field access
- **HC Page**: Simplified image access using `hero_image` variable for better consistency and reliability
- **HC Person**: Enhanced person image handling with fallback logic for media image entities vs direct file entities
- **HC Resource**: Streamlined Schema.org markup by removing header image property

#### Technical Improvements
- **Template Consistency**: Standardized image variable usage across node templates
- **Preprocessing Integration**: Better integration with theme preprocessing for image handling
- **Field Access Optimization**: More reliable image URL generation using theme variables
- **Schema.org Cleanup**: Simplified resource markup for better validation

### Bug Fixes
- **Syntax Error**: Fixed missing closing tag in HC Article template
- **Image Fallback**: Improved person profile image handling for different media entity structures

## 11.1.2 - 2025-12-11

### Schema.org Validation Fixes

#### Fixed Invalid Schema.org Types
- **HC Announcement**: Changed invalid `Announcement` type to valid `Article` type in both full and teaser templates
- **Invalid Properties**: Updated property names to match Article schema (name → headline, text → description, startDate → datePublished, endDate → expires)

#### Enhanced Image Support  
- **HC Article**: Enhanced featured image support in Schema.org markup with fallback to header image
- **HC Page**: Added `primaryImageOfPage` property for header images in WebPage schema
- **HC Resource**: Added image property support for header images in Article schema

#### Improved Data Quality
- **Field Access**: Improved field value extraction using direct node property access
- **Date Formatting**: Enhanced date handling with proper ISO 8601 formatting for Schema.org
- **Content Safety**: Better handling of field values to prevent empty or malformed structured data

### Technical Improvements
- **Schema.org Compliance**: All node templates now use valid Schema.org types and properties
- **SEO Enhancement**: Better structured data quality improves search engine understanding
- **Content Recognition**: Proper article and webpage markup for enhanced search results
- **Image Metadata**: Complete image support across all content types for rich snippets

## 11.1.1 - 2025-12-05

### Fixed
- **Schema.org Data Quality**: Improved field access patterns in all node templates
- **Template Variables**: Changed from `label` to `node.title.value` for more reliable title access
- **JSON Validation**: Enhanced JSON encoding with proper escaping to prevent malformed structured data
- **Field Access**: Direct node property access instead of rendered content for better data integrity

### Enhanced
- **HC Person Template**: Added comprehensive professional data including job title, organization, and contact information
- **HC Article Template**: Improved article body handling and metadata extraction
- **HC Resource Template**: Enhanced author information and categorization data
- **Template Consistency**: Standardized conditional field checking across all templates

### Technical
- **Error Prevention**: Added proper null checking to prevent PHP warnings
- **Data Reliability**: Improved field value extraction patterns
- **SEO Optimization**: Better structured data quality for search engines
- **Maintenance**: Cleaner template code with more robust field handling

## 11.1.0 - 2025-12-05

### Added - Schema.org Implementation

#### Enhanced Node Templates (6 templates)
- **Article Template**: Added `NewsArticle` schema with proper metadata, author, and publication data
- **Person Template**: Added `Person` schema with Howard University affiliation and educational context
- **Page Template**: Added `WebPage` schema with proper organization and content structure
- **Announcement Template**: Added `Announcement` schema with event-like properties
- **Resource Template**: Added `Article` schema for resource content with educational context
- **Standard Homepage Template**: Added `WebPage` schema optimized for institutional homepage

### Technical Improvements
- **Safe JSON Encoding**: All Schema.org fields use `json_encode|raw` to prevent syntax errors
- **Conditional Rendering**: All schema fields check for existence before output
- **Educational Context**: All templates reference Howard University as `EducationalOrganization`
- **Publisher Information**: Complete organization metadata with URLs
- **Cross-template Consistency**: Standardized schema patterns across all node templates

### SEO Benefits
- **Rich Snippets**: Enabled for articles, person profiles, announcements, and institutional content
- **Enhanced Discovery**: Better content categorization and relationship understanding
- **Educational Institution**: Proper academic and institutional content markup
- **Technical SEO**: Structured data validation compliance, no JSON syntax errors

### Documentation
- Added comprehensive Schema.org implementation documentation (`docs/schema-org-implementation.md`)
- Created complete documentation structure with installation, theming, and development guides
- Added best practices and maintenance guidelines
- Updated all cross-references and navigation

## 11.0.6 - 2025-08-12

- Remove duplicated and unclosed PHPDoc-style comments from Twig templates
- Clean up and standardize template documentation blocks
- Pre-release checks: no code or template errors found

## 11.0.5 - 2025-08-12

- Release preparation for version 11.0.5
- No code or template errors found in pre-release checks
- Filesystem validated and no issues detected

---

## 11.0.4 and earlier

- See previous release notes and commit history for details.
