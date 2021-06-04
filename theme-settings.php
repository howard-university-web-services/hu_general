<?php

/**
 * @file
 * Howard University General (hu_general), add custom theme settings options.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function hu_general_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {

  // Remove some stock idfive stuff we aren't using.
  unset($form['page_elements']);
  unset($form['styles_scripts']);
  unset($form['theme_ui']);
  unset($form['search']);
  unset($form['other']);

  // Theme variant.
  $form['theme_variant_settings'] = [
    '#type' => 'details',
    '#title' => t('Theme Variant Settings'),
  ];
  $form['theme_variant_options'] = [
    '#type' => 'value',
    '#value' => [
      '' => t('Default'),
      'clean_light' => t('Clean & Light'),
      'classic_editorial' => t('Classic Editorial'),
    ],
  ];
  $form['theme_variant_settings']['theme_variant'] = [
    '#title' => t('Theme Variant'),
    '#type' => 'select',
    '#description' => "Select theme variant.",
    '#default_value' => theme_get_setting('theme_variant'),
    '#options' => $form['theme_variant_options']['#value'],
  ];
  $form['theme_variant_settings']['show_switcher'] = [
    '#type' => 'checkbox',
    '#title' => t('Show theme variant switcher for authenticated users'),
    '#default_value' => theme_get_setting('show_switcher'),
  ];

  // School/Department/Organization.
  $form['hu_school_settings'] = [
    '#type' => 'details',
    '#title' => t('Howard School/Department Settings'),
  ];
  $form['hu_school_settings']['parent_school_college'] = [
    '#type' => 'textfield',
    '#title' => t('Parent School/College/Organization'),
    '#default_value' => theme_get_setting('parent_school_college'),
    '#description' => t('Add the parent school or college, for example "College of Arts and Sciences".'),
  ];
  $form['hu_school_settings']['parent_school_college_link'] = [
    '#type' => 'textfield',
    '#title' => t('Parent School/College/Organization URL'),
    '#default_value' => theme_get_setting('parent_school_college_link'),
    '#description' => t('Add the URL to parent school or college, for example "http://coas.howard.edu".'),
  ];
  $form['hu_school_settings']['department'] = [
    '#type' => 'textfield',
    '#title' => t('Department/Site'),
    '#default_value' => theme_get_setting('department'),
    '#description' => t('Add the department or site, for example "Department of English".'),
  ];

  // Header.
  $form['hu_header_settings'] = [
    '#type' => 'details',
    '#title' => t('Howard Header Settings'),
  ];
  // Show light header.
  $form['hu_header_settings']['light_header'] = [
    '#type' => 'checkbox',
    '#title' => t('Show light header menu'),
    '#description' => t('Uses the light menu color scheme for the header menu.'),
    '#default_value' => theme_get_setting('light_header'),
  ];
  // Featured Header Link.
  $form['hu_header_settings']['featured_link'] = [
    '#type' => 'details',
    '#title' => t('Featured Header Link'),
  ];
  $form['hu_header_settings']['featured_link']['featured_header_link_show'] = [
    '#type' => 'checkbox',
    '#title' => t('Show Featured Header Link'),
    '#description' => t('Choose whether to show the featured link in the header.'),
    '#default_value' => theme_get_setting('featured_header_link_show'),
  ];
  $form['hu_header_settings']['featured_link']['featured_header_link_title'] = [
    '#type' => 'textfield',
    '#title' => t('Featured Header Link Title'),
    '#default_value' => theme_get_setting('featured_header_link_title'),
    '#description' => t('Add a link Title for the featured link.'),
  ];
  $form['hu_header_settings']['featured_link']['featured_header_link_url'] = [
    '#type' => 'url',
    '#title' => t('Featured Header Link URL'),
    '#description' => t('Add a link URL for the featured link.'),
    '#default_value' => theme_get_setting('featured_header_link_url'),
  ];

  // Footer.
  $form['hu_footer_settings'] = [
    '#type' => 'details',
    '#title' => t('Howard Footer Settings'),
  ];
  // Social media.
  $form['hu_footer_settings']['social_links'] = [
    '#type' => 'fieldset',
    '#title' => t('Social Links'),
    '#weight' => 100,
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  ];
  $form['hu_footer_settings']['social_links']['twitter_link'] = [
    '#type' => 'textfield',
    '#title' => t('Twitter Link'),
    '#default_value' => theme_get_setting('twitter_link'),
    '#description' => t('Add the URL to your twitter profile.'),
  ];
  $form['hu_footer_settings']['social_links']['facebook_link'] = [
    '#type' => 'textfield',
    '#title' => t('Facebook Link'),
    '#default_value' => theme_get_setting('facebook_link'),
    '#description' => t('Add the URL to your facebook profile.'),
  ];
  $form['hu_footer_settings']['social_links']['youtube_link'] = [
    '#type' => 'textfield',
    '#title' => t('Youtube Link'),
    '#default_value' => theme_get_setting('youtube_link'),
    '#description' => t('Add the URL to your youtube profile.'),
  ];
  $form['hu_footer_settings']['social_links']['instagram_link'] = [
    '#type' => 'textfield',
    '#title' => t('Instagram Link'),
    '#default_value' => theme_get_setting('instagram_link'),
    '#description' => t('Add the URL to your instagram profile.'),
  ];
  // Address/contact.
  $form['hu_footer_settings']['address'] = [
    '#type' => 'fieldset',
    '#title' => t('Address'),
    '#weight' => 100,
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  ];
  $form['hu_footer_settings']['address']['address_line_one'] = [
    '#type' => 'textfield',
    '#title' => t('Address Line One'),
    '#default_value' => theme_get_setting('address_line_one'),
    '#description' => t('Add line one of the address.'),
  ];
  $form['hu_footer_settings']['address']['address_line_two'] = [
    '#type' => 'textfield',
    '#title' => t('Address Line Two'),
    '#default_value' => theme_get_setting('address_line_two'),
    '#description' => t('Add line two of the address.'),
  ];
  $form['hu_footer_settings']['address']['address_line_three'] = [
    '#type' => 'textfield',
    '#title' => t('Address Line Three'),
    '#default_value' => theme_get_setting('address_line_three'),
    '#description' => t('Add line three of the address.'),
  ];
  $form['hu_footer_settings']['address']['phone'] = [
    '#type' => 'textfield',
    '#title' => t('Phone'),
    '#default_value' => theme_get_setting('phone'),
    '#description' => t('Add a phone number.'),
  ];

  // Admin only settings.
  $form['hu_admin_settings'] = [
    '#type' => 'details',
    '#title' => t('Admin Settings'),
  ];
  $form['hu_admin_settings']['admin_scripts'] = [
    '#type' => 'textarea',
    '#title' => t('Site-wide Scripts or Embeds'),
    '#default_value' => theme_get_setting('admin_scripts'),
    '#description'  => '<strong>ADMIN ONLY.</strong> With great power comes great responsibility. This fields allows the addition of extra scripts/tracking codes/etc, on to the HTML template of the theme. This means it will be on all pages of the site.',
    '#required' => FALSE,
  ];
}
