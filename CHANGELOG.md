# Changelog

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
