<?php

/**
 * @file
 * Howard University General (hu_general), add custom theme settings options.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function hu_general_form_system_theme_settings_alter(&$form, FormStateInterface $form_state)
{

  // Remove some stock idfive stuff we aren't using.
  unset($form['page_elements']);
  unset($form['styles_scripts']);
  unset($form['theme_ui']);
  unset($form['search']);
  unset($form['other']);

  // Theme variant
  $form['theme_variant_settings'] = [
    '#type' => 'details',
    '#title' => t('Theme Variant Settings'),
  ];
  $form['theme_variant_options'] = array(
    '#type' => 'value',
    '#value' => array(
      '' => t('Default'),
      'clean_light' => t('Clean & Light'),
      'classic_editorial' => t('Classic Editorial')
    )
  );
  $form['theme_variant_settings']['theme_variant'] = array(
    '#title' => t('Theme Variant'),
    '#type' => 'select',
    '#description' => "Select theme variant.",
    '#default_value' => theme_get_setting('theme_variant'),
    '#options' => $form['theme_variant_options']['#value'],
  );
  // Show theme switcher.
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
}
