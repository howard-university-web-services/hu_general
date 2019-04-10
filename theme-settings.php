<?php
/**
 * @file
 * Howard University General (hu_general), add custom theme settings options here.
 */

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Theme\ThemeSettings;
use Drupal\system\Form\ThemeSettingsForm;
use Drupal\Core\Form;

function hu_general_form_system_theme_settings_alter(&$form, Drupal\Core\Form\FormStateInterface $form_state) {

  // Remove some stock idfive stuff we arent using
  unset($form['page_elements']);
  unset($form['styles_scripts']);
  unset($form['theme_ui']);
  unset($form['search']);
  unset($form['other']);

  // School/Department/Organization
  $form['hu_school_settings'] = array(
    '#type' => 'details',
    '#title' => t('Howard School/Department Settings'),
  );
  $form['hu_school_settings']['parent_school_college'] = array(
    '#type' => 'textfield',
    '#title' => t('Parent School/College/Organization'),
    '#default_value' => theme_get_setting('parent_school_college'),
    '#description' => t('Add the parent school or college, for example "College of Arts and Sciences".'),
  );
  $form['hu_school_settings']['parent_school_college_link'] = array(
    '#type' => 'textfield',
    '#title' => t('Parent School/College/Organization URL'),
    '#default_value' => theme_get_setting('parent_school_college_link'),
    '#description' => t('Add the URL to parent school or college, for example "http://coas.howard.edu".'),
  );
  $form['hu_school_settings']['department'] = array(
    '#type' => 'textfield',
    '#title' => t('Department/Site'),
    '#default_value' => theme_get_setting('department'),
    '#description' => t('Add the department or site, for example "Department of English".'),
  );

  // Header
  $form['hu_header_settings'] = array(
    '#type' => 'details',
    '#title' => t('Howard Header Settings'),
  );
  // Show light header
  $form['hu_header_settings']['light_header'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show light header menu'),
    '#description' => t('Uses the light menu color scheme for the header menu.'),
    '#default_value' => theme_get_setting('light_header'),
  );

  // Footer
  $form['hu_footer_settings'] = array(
    '#type' => 'details',
    '#title' => t('Howard Footer Settings'),
  );
  // Social media
  $form['hu_footer_settings']['social_links'] = array(
    '#type' => 'fieldset',
    '#title' => t('Social Links'),
    '#weight' => 100,
    '#collapsible' => true,
    '#collapsed' => true,
  );
  $form['hu_footer_settings']['social_links']['twitter_link'] = array(
    '#type' => 'textfield',
    '#title' => t('Twitter Link'),
    '#default_value' => theme_get_setting('twitter_link'),
    '#description' => t('Add the URL to your twitter profile.'),
  );
  $form['hu_footer_settings']['social_links']['facebook_link'] = array(
    '#type' => 'textfield',
    '#title' => t('Facebook Link'),
    '#default_value' => theme_get_setting('facebook_link'),
    '#description' => t('Add the URL to your facebook profile.'),
  );
  $form['hu_footer_settings']['social_links']['youtube_link'] = array(
    '#type' => 'textfield',
    '#title' => t('Youtube Link'),
    '#default_value' => theme_get_setting('youtube_link'),
    '#description' => t('Add the URL to your youtube profile.'),
  );
  $form['hu_footer_settings']['social_links']['instagram_link'] = array(
    '#type' => 'textfield',
    '#title' => t('Instagram Link'),
    '#default_value' => theme_get_setting('instagram_link'),
    '#description' => t('Add the URL to your instagram profile.'),
  );
  // Address/contact
  $form['hu_footer_settings']['address'] = array(
    '#type' => 'fieldset',
    '#title' => t('Address'),
    '#weight' => 100,
    '#collapsible' => true,
    '#collapsed' => true,
  );
  $form['hu_footer_settings']['address']['address_line_one'] = array(
    '#type' => 'textfield',
    '#title' => t('Address Line One'),
    '#default_value' => theme_get_setting('address_line_one'),
    '#description' => t('Add line one of the address.'),
  );
  $form['hu_footer_settings']['address']['address_line_two'] = array(
    '#type' => 'textfield',
    '#title' => t('Address Line Two'),
    '#default_value' => theme_get_setting('address_line_two'),
    '#description' => t('Add line two of the address.'),
  );
  $form['hu_footer_settings']['address']['address_line_three'] = array(
    '#type' => 'textfield',
    '#title' => t('Address Line Three'),
    '#default_value' => theme_get_setting('address_line_three'),
    '#description' => t('Add line three of the address.'),
  );
  $form['hu_footer_settings']['address']['phone'] = array(
    '#type' => 'textfield',
    '#title' => t('Phone'),
    '#default_value' => theme_get_setting('phone'),
    '#description' => t('Add a phone number.'),
  );

}