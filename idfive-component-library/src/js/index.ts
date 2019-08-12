/**
 * Styles
 */
import "../scss/index.scss";

/**
 * Modules
 */
import { silcCoreInit } from "silc-core";
import { silcAccordionInit } from "silc-accordion";
import { silcNavInit } from "silc-nav";
import { silcOffcanvasInit } from "silc-offcanvas";
import { searchToggle } from "../components/utility-menu/utility-menu";

import MainNav from "../components/main-nav/main-nav";
import ModalPlaylist from "../components/modal/modal";
import sidebarNav from "../components/sidebar-nav/sidebar-nav";
import featuredImage from "../components/featured-image/featured-image";
import carousel from "../components/ks/carousel/carousel";
import ourPeople from "../components/ks/our-people/our-people";
import SlideDistance from "../js/SlideDistance";
import * as Tablesaw from "tablesaw";
import { JumpTo } from "../js/smooth-scroll";
import focusWithin from 'focus-within';
import MicroModal from 'micromodal';

focusWithin(document);
JumpTo();
/**
 *
 * Init
 */
silcCoreInit();
silcAccordionInit();
silcNavInit();
silcOffcanvasInit();
Tablesaw.init();



function sidebarNavInit() {
  [].forEach.call(
    document.querySelectorAll(".sidebar-nav .silc-nav__item--parent"),
    el => {
      new sidebarNav(el);
    }
  );
}
function mainNavInit() {
  const el = document.querySelector(".main-header__nav") as HTMLElement;
  if (el) {
    new MainNav(el);
  }
}
function carouselInit() {
  [].forEach.call(document.querySelectorAll(".carousel"), el => {
    new carousel(el);
  });
}
function modalPlaylistInit() {
  [].forEach.call(document.querySelectorAll(".modal--playlist"), el => {
    new ModalPlaylist(el);
  });
}
function ourPeopleInit() {
  [].forEach.call(document.querySelectorAll(".our-people"), el => {
    new ourPeople(el);
  });
}
function SliderDistanceInit() {
  [].forEach.call(document.querySelectorAll(".slideshow"), el => {
    new SlideDistance(el);
  });
}
function featuredImageInit() {
  [].forEach.call(document.querySelectorAll(".slideshow"), el => {
    new featuredImage(el);
  });
}

window.addEventListener("load", function () {
  let navToggle = document.querySelector(".main-header__trigger-menu");
  let mainHeader = document.querySelector(".main-header");
  let mainContent = document.querySelector(".main-content");
  let navClose = document.querySelectorAll(".main-nav a");
  let mainNav = document.querySelector(".main-nav");
  let sidebarClose = document.querySelectorAll(".silc-offcanvas__trigger");
  let postHeader = document.querySelector(".post-header");
  let heroImage = document.querySelector(".hero-image");
  let body = document.querySelector("body");

  if (mainNav) {
    let mainNavWidth = mainNav.clientWidth;
    if (mainNavWidth >= 1000) {
      mainHeader.classList.add("mobile-nav");
    }
  }

  if (navToggle) {
    for (let i = 0; i < navClose.length; i++) {
      navClose[i].addEventListener("click", function (event) {
        mainHeader.classList.remove("nav-toggled");
        mainContent.classList.remove("nav-toggled");
        body.classList.remove("nav-toggled");
      });
    }

    navToggle.addEventListener("click", function () {
      if (!mainHeader.classList.contains("nav-toggled")) {
        mainHeader.classList.add("nav-toggled");
        mainContent.classList.add("nav-toggled");
        body.classList.add("nav-toggled");
      } else {
        setTimeout(function () {
          mainHeader.classList.remove("nav-toggled");
          mainContent.classList.remove("nav-toggled");
          body.classList.remove("nav-toggled");
        }, 200);
      }
    });

    window.addEventListener("resize", function () {
      if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        if (mainHeader.classList.contains("nav-toggled")) {
          mainHeader.classList.remove("nav-toggled");
          mainContent.classList.remove("nav-toggled");
          body.classList.remove("nav-toggled");
        }
      }
      SliderDistanceInit();
    });

  }
  if (sidebarClose) {
    for (let i = 0; i < sidebarClose.length; i++) {
      sidebarClose[i].addEventListener("click", function (event) {
        sidebarClose[i].classList.toggle("sidebar-open");
      });
    }
  }
  if (heroImage && postHeader) {
    postHeader.classList.add("post-header--shadow");
  }
  carouselInit();
  modalPlaylistInit();
  sidebarNavInit();
  searchToggle();
  featuredImageInit();
  SliderDistanceInit();
  ourPeopleInit();
});

window.addEventListener("DOMContentLoaded", () => {
  mainNavInit();
  MicroModal.init();
});
