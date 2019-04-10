# This project
Howard University General (hu_general), is a child theme of the general idfive Drupal 8 theme. Setup for use with the idfive Component Library (icl).

- [About](#about)
- [Install](#install)
- [Setup](#setup)
- [Additional Setup Steps](#additional_setup)
- [Resources](#resources)

## About {#about}
This theme is designed to be the master theme for Howard University D8 websites. It is a child of the idfive Component Library D8 Theme, so it inherits some standard functionality there. This theme may be used on its own, or as a base theme for any custom themes needed. It is HIGHLY reccomended that custom child themes not be made for Howard sites unless absolutely neccesarry. When creating a custom child theme, only override what is absolutely neccesarry in order to keep standard functionality across sites.

## Install/Update {#install}

**Install Via Composer:**
```
composer install howard/hu_general
```

**Update Via Composer:**
```
composer update howard/hu_general
```

## Setup {#setup}
Enable and set default as you normally would for any D8 theme.

## Additional Setup Steps {#additional_setup}
Additional options available on the /appearance/settings/hu_general page:

**Howard School/Department Settings:**
 - Parent School/College/Organization: Add the parent school or college, for example "College of Arts and Sciences".
 - Parent School/College/Organization URL: Add the URL to parent school or college, for example "http://coas.howard.edu".
 - Department/Site: Add the department or site, for example "Department of English".

**Howard Header Settings:**
 - Show light header menu: Uses the light menu color scheme for the header menu throughout the site.

**Howard footer Settings, Social Links:**
These links will show as icons in the footer throughout the site.
 - Twitter Link
 - Facebook Link
 - Youtube Link
 - Instagram Link

**Howard footer Settings, Address:**
These fields set the footer address throughout the site.

## Resources {#resources}
 - [idfive Component Library D8 Theme](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme)
 - [Silc Framework](https://silc.io/)
 - [idfive Component Library Source Files](https://bitbucket.org/idfivellc/idfive-component-library/src/master/)
