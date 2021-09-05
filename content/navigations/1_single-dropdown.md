---
title: "Single dropdown"
metaTitle: "Single dropdown"
metaDescription: ""
---

# Demo (desktop)

<img src="/navigation-single-dropdown.gif" alt="Demo of single dropdown menu" />

# Demo (mobile)

<img src="/navigation-single-dropdown-mobile.gif" alt="Demo of single dropdown menu" />

# HTML
```
<nav class="l-navbar">

    <div class="l-navbar__container">
        <p>Logo...</p>

        <button type="button" class="l-navbar__burger burger js-burger" aria-label="Toggle menu">
            <span class="burger__line"></span>
        </button> 
        
        <div class="l-navbar__menu-wrapper">
            <ul class="l-navbar__menu">
                <li class="l-navbar__menu-item">
                    <a 
                        href="/" 
                        class="l-navbar__menu-link active" 
                        title="Menu item 1">
                        Menu item 1
                    </a>
                </li>

                <li class="l-navbar__menu-item">
                    <button 
                        class="l-navbar__menu-link l-navbar__menu-link--dropdown js-dropdown" 
                        type="button">
                        Sub link 1
                    </button>
    
                    <div class="l-navbar__submenu-wrapper">
                        <button type="button" class="l-navbar__back-btn js-close-dropdown">
                            <svg class="fill-white" aria-label="hidden" width="24px" height="24px">
                                <use xlink:href="/images/icons.svg#icon-play-outline"></use>
                            </svg>
                            Back
                        </button>

                        <ul class="l-navbar__submenu">
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 1</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 2</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 3</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 4</a>
                            </li>

                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 2</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 3</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 4</a>
                            </li>

                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 2</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 3</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Products item 4</a>
                            </li>

                        </ul>
                    </div>
                </li>

                <li class="l-navbar__menu-item">
                    <a href="/projects.html" title="ABOUT" class="l-navbar__menu-link" title="MENU_ITEM" aria-label="MENU_ITEM_NAME">
                        Projects
                    </a>
                </li>

                <li class="l-navbar__menu-item">
                    <a href="/about.html" title="ABOUT" class="l-navbar__menu-link" title="MENU_ITEM" aria-label="MENU_ITEM_NAME">
                        About
                    </a>
                </li>

                <li class="l-navbar__menu-item">
                    <button class="l-navbar__menu-link  l-navbar__menu-link--dropdown js-dropdown" type="button" aria-label="MENU_ITEM_NAME dropdown">
                        Insights
                        <svg class="l-navbar__dropdown-icon fill-white" role="img" aria-labelledby="show-products-list" width="24px" height="16px">
                            <title id="show-products-list">Products dropdown</title>
                            <use xlink:href="/images/icons.svg#icon-caret-down"></use>
                        </svg>
                    </button>
    
                    <div class="l-navbar__submenu-wrapper">
                        <button type="button" class="l-navbar__back-btn js-close-dropdown">
                            <svg class="fill-white" aria-label="hidden" width="24px" height="24px">
                                <use xlink:href="/images/icons.svg#icon-play-outline"></use>
                            </svg>
                            Back
                        </button>
                        <ul class="l-navbar__submenu">
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">All</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Blog</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Downloads</a>
                            </li>
    
                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Technical Resources</a>
                            </li>

                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Events</a>
                            </li>

                            <li>
                                <a href="" class="l-navbar__submenu-link" title="NAV_ITEM">Videos</a>
                            </li>
                        </ul>
                    </div>
                </li>

            </ul>

            <div class="l-navbar__contact pos-relative">
                <a href="/contact.html" title="ABOUT" class="l-navbar__menu-link  color-orange" title="MENU_ITEM" aria-label="MENU_ITEM_NAME">
                    Contact
                </a>
            </div>
            

            <a class="btn btn--special l-navbar__book-btn" href="#">
                <svg class="btn__icon btn__icon--rounded-text" role="img" aria-labelledby="book-a-cpd" width="24px" height="24px">
                    <title id="book-a-cpd">Book a CPD</title>
                    <use xlink:href="/images/icons.svg#icon-book-a-cpd"></use>
                </svg>

                <svg class="btn__icon btn__icon--arrow" aria-label="hidden" width="36px" height="36px">
                    <use xlink:href="/images/icons.svg#icon-arrow"></use>
                </svg>
            </a>
        </div>

    </div>

</nav>
```

# SCSS (_navbar.scss)
```
.l-navbar {
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: $zindexNavbar;
    overflow: visible;
    
    img {
        margin: -5px 30px 0 0;
    }

    @include media ("<laptop") {
        &:before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: $zindexSubmenuOverlay;
            background-color: rgba(0,0,0,.5);
            pointer-events: none;
            opacity: 0;
            transition: opacity .4s;
        }
    
        &.open:before {
            opacity: 1;
        }
    }

    @include media (">=laptop") {
        position: fixed;
        top:0;
        left: 0;
        right: 0;
    }

    &__contact {
        display: none;
        
        @include media (">=laptop") {
            display: inline-block;
        }
    }

    &__container {
        max-width: 1728px;
        margin: 0 auto;
        padding: 24px 5%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        &:after {
            content: '';
            position: absolute;
            top:0;
            left:0;
            right: 0;
            bottom: 0;
            z-index: -1;
            filter: blur(50px);
            background: $colorDarkBlue;
        }

        @include media (">=tablet", "<laptop") {
            padding: 48px 5%;
        }

        @include media (">=laptop") {
            position: relative;
            padding: 20px 4%;

            
        }

        @include media (">=large-desktop") {
            padding: 33px 0 22px;
        }
    }

    &__menu {

        @include media ("<laptop") {
            position: relative;
        }

        @include media (">=laptop") {
            display: inline-flex;
        }
    }

    &__menu-link,
    &__submenu-link {
        outline: none;
        background: transparent;
        display: inline-block;
        line-height: 1;
        transition: color .4s;
        color: $colorWhite;
        font-size: 1rem;
        cursor: pointer;

        @include media ("<laptop") {
            text-transform: uppercase;
            padding: 24px 0;
        }

        @include media (">=laptop", "<desktop") {
            font-size: 16px; //rem(16px);
        }
    }

    &__menu-link {

        @include media (">=laptop") {
            padding: 12px 24px;
            text-transform: uppercase;
            
            &:after {
                content: '';
                position: absolute;
                bottom:0;
                left: 24px;
                width: calc(100% - 48px);
                height: 4px;
                border-radius: 0 4px 0 4px;
                border: 1px solid $colorBurntOrange;
                transition: opacity .4s;
                opacity: 0;
            }

            &.active:after {
                opacity: 1;
                background-color: $colorBurntOrange;
             }

            &:hover {

                &:after {
                    opacity: 1;
                }
            }
        }

        &--dropdown {
            position: relative;

            @include media ("<laptop") {
                text-align: left;
                width:100%;

                &:before {
                    content: '';
                    position: absolute;
                    top: 22px;
                    right:0;
                    width: 20px;
                    height: 20px;
                    background: url('../images/icons/play-outline.svg') center center no-repeat;
                    background-size: contain;
                }
            }
        }
    }

    &__logo {
        display: inline-block;

        svg {
            width: 100%;
            height: 100%;
        }

        @include media ("<small-desktop") {
            width: 120px;
            height: 30px;
        }
    }

    &__dropdown-icon {

        @include media ("<laptop") { display: none }
        @include media (">=laptop") {
            margin-left: 4px;
            position: relative;
            top: -2px;
            transition: transform .4s;

            .open-dropdown & { transform: rotate(180deg); }
        }
    }

    &__back-btn {
        background: transparent;
        color: $colorWhite;
        text-align: right;
        width: 100%;
        margin-bottom: 36px;
        cursor: pointer;

        svg {
            transform: rotate(180deg);
            fill: white;
            position: relative;
            top: -2px;
            right: 8px;
        }

        @include media (">=laptop") {
            display: none;
        }
    }

    &__menu-item {

        @include media (">=laptop") {
            position: relative;
        }

        &--contact {
            @include media ("<laptop") {
                display: none;
            }
        }
    }

    &__menu-wrapper {

        @include media ("<laptop") {
            position: fixed;
            top: 0;
            bottom: 0;
            right:0;
            z-index: $zindexSubmenu;
            width: 90%;
            transform: translateX(100%);
            transition: transform .4s;
            border-radius: 0 24px 0 24px;
            background-color: $colorBurntOrange;
            // overflow-y: scroll;
            // overflow-x: hidden;
            padding: 36px 48px;
            max-width: 375px;
            .open & { transform: translateX(0); }
        }

        @include media (">=laptop") {
            transform: translateX(24px)
        }
    }

    &__submenu-wrapper {
        position: absolute;
        z-index: $zindexSubmenu;
        pointer-events: none;

        .open-dropdown & {
            pointer-events: all;
        }

        @include media ("<laptop") {
            top: 0;
            left: -24px;
            width: 120%;
            height: 70vh;
            transform: translateX(200%);
            background-color: $colorBurntOrange;

            transition: transform .4s;

            overflow-y: scroll;
            padding: 0 36px 48px 24px;

            .open-dropdown & {
                transform: translateX(0);
                display: block;
            }
        }

        @include media (">=laptop") {
            transition: transform .4s, opacity .4s;
            opacity: 0;
            top: calc(100% + 24px);
            transform: translateY(20%);
            background-color: $colorDeepBlue;
            padding: 24px;
            border-radius: 0 24px 0 24px;
            left: 0;
            width: 220px;

            .open-dropdown & {
                transform: translateY(0%);  
                opacity: 1;  
            }
        }
    }

    &__submenu-link {
        @include media (">=laptop") {
            padding:  0 0 12px 0 ;
            font-weight: 300;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
```

# JS (components/menu.js)

```
'use strict';

import screenSize from '../utils/screen-size';

var scrollTopPosition = document.body.scrollTop;


// it's just a skeleton of burger click function
const menuBurger = () => {
    const burgerButton = document.querySelector('.js-burger');

    if (!burgerButton) {
        return; 
    }
    
    burgerButton.addEventListener('click', function(event) {
        event.preventDefault();

        toggleMenu();

        return false;
    });
};

const toggleMenu = (action) => {
    const menuWrapper = document.querySelector('.js-navbar');
    const burgerButton = document.querySelector('.js-burger');

    if (menuWrapper.classList.contains('open') || action === "close") {
        burgerButton.classList.remove('active');
        menuWrapper.classList.remove('open');
        document.body.classList.remove('stop-scrolling');
    } else {
        burgerButton.classList.add('active');
        menuWrapper.classList.add('open');
        document.body.classList.add('stop-scrolling');
    }
};

const menuDropdown = () => {
    const dropdownLinks = document.querySelectorAll('.js-dropdown:not(.dropdown-active)');
    const dropdownCloseLinks = document.querySelectorAll('.js-close-dropdown');

    dropdownLinks.forEach( link => {
        link.classList.add('dropdown-active');

        link.addEventListener('click', function (event) {

            if (link.parentNode.classList.contains('open-dropdown')) {
                link.parentNode.classList.remove('open-dropdown');
            } else {
                closeDropdowns();
                link.parentNode.classList.add('open-dropdown');
            }
        });
    });

    
    dropdownCloseLinks.forEach( link => {
        link.addEventListener('click', function() {
            closeDropdowns();
        });
    });

    document.addEventListener('click', __closeSubmenuOutsideSubmenu, false);
    closeSubmenuByHitEsc();
};

const closeDropdowns = () => {
    const dropdownLinks = document.querySelectorAll('.js-dropdown');

    dropdownLinks.forEach( dropdown => {
        dropdown.parentNode.classList.remove('open-dropdown');
    });

};

const __closeSubmenuOutsideSubmenu = (event) => {
    var current = event.target,
        parent = current.parentNode,
        isSubmenuChild = false;
    let x = screenSize().x;

    if (x >= 1200) {

        if (!current.classList.contains('js-dropdown')) {
            if (!parent || parent === document) {
                return false;
            }

            if (parent.tagName !== 'HTML' && current.classList) {
                if (current.classList.contains('l-navbar__link--sublist-item')) {
                    isSubmenuChild = true;
                } else {
                    current = current.parentNode;
                    parent = parent.parentNode;
                }
            }

            isSubmenuChild === true ? false : closeDropdowns();
        }
    }
};

const closeSubmenuByHitEsc = () => {
    document.addEventListener('keyup', function (event) {
        if (event.keyCode === 27) {
            closeDropdowns();
        }
    });
};

export { menuScroll, menuBurger, menuDropdown };
```

```
import { menuBurger, menuDropdown } from './components/menu';

menuBurger();
menuDropdown();
```