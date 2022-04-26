# This project

Howard University General (hu_general), is a child theme of the general idfive Drupal 8 theme. Setup for use with the idfive Component Library (icl).

- [About](#about)
- [Install](#install)
- [Setup](#setup)
- [Additional Setup Steps](#additional_setup)
- [Resources](#resources)

## About

This theme is designed to be the master theme for Howard University D8 websites. It is a child of the idfive Component Library D8 Theme, so it inherits some standard functionality there. This theme may be used on its own, or as a base theme for any custom themes needed. It is HIGHLY recommended that custom child themes not be made for Howard sites unless absolutely necessary. When creating a custom child theme, only override what is absolutely necessary in order to keep standard functionality across sites.

## Install/Update

### Install Via Composer

- `composer install howard/hu_general`

### Update Via Composer

- `composer update howard/hu_general`

## Setup

Enable and set default as you normally would for any D8 theme.

## Additional Setup Steps

Additional options available on the /appearance/settings/hu_general page:

### Howard School/Department Settings

- Parent School/College/Organization: Add the parent school or college, for example "College of Arts and Sciences".
- Parent School/College/Organization URL: Add the URL to parent school or college, for example "http://coas.howard.edu".
- Department/Site: Add the department or site, for example "Department of English".

### Howard Header Settings

- Show light header menu: Uses the light menu color scheme for the header menu throughout the site.
- Featured Header Link: Show a featured link in the header, and set text and URL.
- Hie Search: Hides the search function on desktop and mobile, if you wish to not have search functionality on the site.

### Howard footer Settings, Social Links

These links will show as icons in the footer throughout the site.

- Twitter Link
- Facebook Link
- Youtube Link
- Instagram Link

### Howard footer Settings, Address

These fields set the footer address throughout the site.

### Admin settings

- Site-wide Scripts or Embeds. Allows admins to add JS snippets/etc, when needed.

### Development

This theme is built on the [idfive component library (ICL)](https://bitbucket.org/idfivellc/idfive-component-library/src/master/).
CSS/JS in folder idfive-component-library
From idfive-component-library run the following:

- Run `nvm use 10`
- Run `npm install`
- Run `npm run fractal` to preview CSS?JS changes
- Run `npm run build:production` for production builds.

## Resources

- [idfive Component Library D8 Theme](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme)
- [Silc Framework](https://silc.io/)
- [idfive Component Library Source Files](https://bitbucket.org/idfivellc/idfive-component-library/src/master/)
