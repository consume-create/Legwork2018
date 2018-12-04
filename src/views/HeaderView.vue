<template>
  <header :class="[mode, theme, menu, section, transformMode]">
    <div id="header-inner">
      <div id="mobile-menu" v-if="size.breakpoint === 'mobile'" @scroll="onMobileMenuScroll">
        <nav id="mobile-nav">
          <ul>
            <li><router-link to="/animation">Animation</router-link></li>
            <li><router-link to="/interactive">Interactive</router-link></li>
          </ul>
        </nav>
        <div id="mobile-studio-wrap">
          <studio-about></studio-about>
        </div>
        <div id="mobile-menu-mask"></div>
      </div>
      <div id="header-bar" :style="headerTranslate">
        <router-link to="/" id="header-logo" :event="section === 'overlay' ? '' : 'click'">
          <svg id="white-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 86">
            <path d="M0.6,71.8H9c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6H0.6C0.3,14.2,0,14,0,13.7V2.1c0-0.3,0.3-0.6,0.6-0.6h33.8c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-9.9c-0.3,0-0.6,0.3-0.6,0.6v56.5c0,0.3,0.3,0.6,0.6,0.6h21.9c0.3,0,0.6-0.3,0.6-0.6V60.7c0-0.3,0.3-0.6,0.6-0.6h12.7c0.3,0,0.6,0.3,0.6,0.6v23.2c0,0.3-0.3,0.6-0.6,0.6H0.6c-0.3,0-0.6-0.3-0.6-0.6V72.3C0,72,0.3,71.8,0.6,71.8z"/>
            <path d="M71.1,71.8h8.4c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6h-8.4c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h61.3c0.3,0,0.6,0.3,0.6,0.6v22.6c0,0.3-0.3,0.6-0.6,0.6h-12.6c-0.3,0-0.6-0.3-0.6-0.6v-9.9c0-0.3-0.3-0.6-0.6-0.6H95c-0.3,0-0.6,0.3-0.6,0.6v21c0,0.3,0.3,0.6,0.6,0.6h24.1c0.3,0,0.6,0.3,0.6,0.6v11c0,0.3-0.3,0.6-0.6,0.6H95c-0.3,0-0.6,0.3-0.6,0.6v22.3c0,0.3,0.3,0.6,0.6,0.6h23.8c0.3,0,0.6-0.3,0.6-0.6v-9.9c0-0.3,0.3-0.6,0.6-0.6h12.6c0.3,0,0.6,0.3,0.6,0.6v22.6c0,0.3-0.3,0.6-0.6,0.6H71.1c-0.3,0-0.6-0.3-0.6-0.6V72.3C70.5,72,70.8,71.8,71.1,71.8z"/>
            <path d="M233.4,14.2h-7.9c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h34.4c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-9.7c-0.4,0-0.7,0.4-0.6,0.7l12.9,41.4c0.2,0.5,0.9,0.5,1.1,0.1l20-46.5c0.1-0.2,0.3-0.4,0.5-0.4h6.9c0.2,0,0.4,0.1,0.5,0.4l19.9,46.5c0.2,0.5,0.9,0.5,1.1-0.1l12-41.3c0.1-0.4-0.2-0.7-0.6-0.7H314c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h34.4c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-7.9c-0.3,0-0.5,0.2-0.6,0.4L317.7,85c-0.1,0.2-0.3,0.4-0.6,0.4H310c-0.2,0-0.4-0.1-0.5-0.3l-21.7-49.5c-0.2-0.5-0.9-0.5-1.1,0L264.9,85c-0.1,0.2-0.3,0.3-0.5,0.3h-7.2c-0.3,0-0.5-0.2-0.6-0.4l-22.6-70.3C233.9,14.4,233.6,14.2,233.4,14.2z"/>
            <path d="M348.2,43c0-24.3,17.8-43,43.2-43C416.7,0,434,18.8,434,43c0,24.3-17.8,43-43.2,43C365.4,86,348.2,67.2,348.2,43z M419.1,43c0-17.3-11.8-29.8-28-29.8C374.9,13.2,363,25.6,363,43c0,17.3,11.8,29.8,28.1,29.8C407.3,72.8,419.1,60.4,419.1,43z"/>
            <path d="M441.1,71.8h8.4c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6h-8.4c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h31.8c19.2,0,32.9,8.2,32.9,25.1c0,10.5-6.3,18.6-15.2,22.3c-0.3,0.1-0.4,0.5-0.3,0.8l12.4,21.7c0.1,0.2,0.3,0.3,0.5,0.3h8.6c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-18.4c-0.2,0-0.4-0.1-0.5-0.3l-16.4-30.9c-0.1-0.2-0.3-0.3-0.6-0.3c-1.6,0.1-3.2,0.2-4.7,0.2c-2.4,0-4.6,0-6.3-0.1c-0.3,0-0.6,0.2-0.6,0.6v17.5c0,0.3,0.3,0.6,0.6,0.6h9.3c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-33.2c-0.3,0-0.6-0.3-0.6-0.6V72.3C440.5,72,440.8,71.8,441.1,71.8z M491,27.1c0-8.7-7.2-12.9-18.8-12.9H465c-0.3,0-0.6,0.3-0.6,0.6v25.5c0,0.3,0.2,0.6,0.5,0.6c1.5,0.1,3.5,0.2,7.6,0.2C483.4,41.1,491,35.8,491,27.1z"/>
            <path d="M521.2,71.8h8.4c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6h-8.4c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h33.2c0.3,0,0.6,0.3,0.6,0.6v11.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6,0.3-0.6,0.6v26.1c0,0.5,0.6,0.8,1,0.4L571.7,15c0.4-0.4,0.1-1-0.4-1h-7.6c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h35.7c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-8.2c-0.2,0-0.3,0.1-0.4,0.2l-22.9,22.3c-0.2,0.2-0.2,0.5-0.1,0.7l21,34c0.1,0.2,0.3,0.3,0.5,0.3h10.2c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-19.2c-0.2,0-0.4-0.1-0.5-0.3L557,47.3c-0.2-0.3-0.6-0.4-0.9-0.1l-11.4,11.1c-0.1,0.1-0.2,0.3-0.2,0.4v12.5c0,0.3,0.3,0.6,0.6,0.6h9.3c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-33.2c-0.3,0-0.6-0.3-0.6-0.6V72.3C520.6,72,520.9,71.8,521.2,71.8z"/>
            <path d="M184,42.3v11.5c0,0.3,0.3,0.6,0.6,0.6h19.8c0.3,0,0.6,0.3,0.6,0.6v12.6c0,0.2-0.1,0.4-0.3,0.5c-5.7,3.3-11.4,5.1-20,5.1c-5.5,0-10.8-1.8-15.3-5c-1.3-1-2.6-2.2-3.8-3.4c-5.2-5.3-8.4-13-8.4-21.8c0-17.7,12.3-29.6,28.3-29.8c7.7,0,14.8,2.9,19.4,7.8c0.1,0.1,0.2,0.3,0.2,0.4v7c0,0.3,0.3,0.6,0.6,0.6h12.8c0.3,0,0.6-0.3,0.6-0.6V16c0-0.6-0.2-1.1-0.6-1.6c-6.6-7.7-15.6-12.6-26.6-14c-0.3,0-0.6-0.1-0.9-0.1c-0.1,0-0.2,0-0.3,0c-1.4-0.2-2.9-0.3-4.4-0.3c-0.2,0-0.4,0-0.6,0c-0.1,0-0.1,0-0.2,0c-25.4,0-43.2,18.7-43.2,43c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,26.6,19.5,42.7,40.1,42.7c8.9,0,16.1-2.8,21.8-7c0.4-0.3,0.9,0,0.9,0.5v5.4c0,0.3,0.3,0.6,0.6,0.6h12.8c0.3,0,0.6-0.3,0.6-0.6V42.3c0-0.3-0.3-0.6-0.6-0.6h-33.7C184.3,41.7,184,41.9,184,42.3z"/>
          </svg>
          <svg id="black-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 86">
            <path d="M0.6,71.8H9c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6H0.6C0.3,14.2,0,14,0,13.7V2.1c0-0.3,0.3-0.6,0.6-0.6h33.8c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-9.9c-0.3,0-0.6,0.3-0.6,0.6v56.5c0,0.3,0.3,0.6,0.6,0.6h21.9c0.3,0,0.6-0.3,0.6-0.6V60.7c0-0.3,0.3-0.6,0.6-0.6h12.7c0.3,0,0.6,0.3,0.6,0.6v23.2c0,0.3-0.3,0.6-0.6,0.6H0.6c-0.3,0-0.6-0.3-0.6-0.6V72.3C0,72,0.3,71.8,0.6,71.8z"/>
            <path d="M71.1,71.8h8.4c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6h-8.4c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h61.3c0.3,0,0.6,0.3,0.6,0.6v22.6c0,0.3-0.3,0.6-0.6,0.6h-12.6c-0.3,0-0.6-0.3-0.6-0.6v-9.9c0-0.3-0.3-0.6-0.6-0.6H95c-0.3,0-0.6,0.3-0.6,0.6v21c0,0.3,0.3,0.6,0.6,0.6h24.1c0.3,0,0.6,0.3,0.6,0.6v11c0,0.3-0.3,0.6-0.6,0.6H95c-0.3,0-0.6,0.3-0.6,0.6v22.3c0,0.3,0.3,0.6,0.6,0.6h23.8c0.3,0,0.6-0.3,0.6-0.6v-9.9c0-0.3,0.3-0.6,0.6-0.6h12.6c0.3,0,0.6,0.3,0.6,0.6v22.6c0,0.3-0.3,0.6-0.6,0.6H71.1c-0.3,0-0.6-0.3-0.6-0.6V72.3C70.5,72,70.8,71.8,71.1,71.8z"/>
            <path d="M233.4,14.2h-7.9c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h34.4c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-9.7c-0.4,0-0.7,0.4-0.6,0.7l12.9,41.4c0.2,0.5,0.9,0.5,1.1,0.1l20-46.5c0.1-0.2,0.3-0.4,0.5-0.4h6.9c0.2,0,0.4,0.1,0.5,0.4l19.9,46.5c0.2,0.5,0.9,0.5,1.1-0.1l12-41.3c0.1-0.4-0.2-0.7-0.6-0.7H314c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h34.4c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-7.9c-0.3,0-0.5,0.2-0.6,0.4L317.7,85c-0.1,0.2-0.3,0.4-0.6,0.4H310c-0.2,0-0.4-0.1-0.5-0.3l-21.7-49.5c-0.2-0.5-0.9-0.5-1.1,0L264.9,85c-0.1,0.2-0.3,0.3-0.5,0.3h-7.2c-0.3,0-0.5-0.2-0.6-0.4l-22.6-70.3C233.9,14.4,233.6,14.2,233.4,14.2z"/>
            <path d="M348.2,43c0-24.3,17.8-43,43.2-43C416.7,0,434,18.8,434,43c0,24.3-17.8,43-43.2,43C365.4,86,348.2,67.2,348.2,43z M419.1,43c0-17.3-11.8-29.8-28-29.8C374.9,13.2,363,25.6,363,43c0,17.3,11.8,29.8,28.1,29.8C407.3,72.8,419.1,60.4,419.1,43z"/>
            <path d="M441.1,71.8h8.4c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6h-8.4c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h31.8c19.2,0,32.9,8.2,32.9,25.1c0,10.5-6.3,18.6-15.2,22.3c-0.3,0.1-0.4,0.5-0.3,0.8l12.4,21.7c0.1,0.2,0.3,0.3,0.5,0.3h8.6c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-18.4c-0.2,0-0.4-0.1-0.5-0.3l-16.4-30.9c-0.1-0.2-0.3-0.3-0.6-0.3c-1.6,0.1-3.2,0.2-4.7,0.2c-2.4,0-4.6,0-6.3-0.1c-0.3,0-0.6,0.2-0.6,0.6v17.5c0,0.3,0.3,0.6,0.6,0.6h9.3c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-33.2c-0.3,0-0.6-0.3-0.6-0.6V72.3C440.5,72,440.8,71.8,441.1,71.8z M491,27.1c0-8.7-7.2-12.9-18.8-12.9H465c-0.3,0-0.6,0.3-0.6,0.6v25.5c0,0.3,0.2,0.6,0.5,0.6c1.5,0.1,3.5,0.2,7.6,0.2C483.4,41.1,491,35.8,491,27.1z"/>
            <path d="M521.2,71.8h8.4c0.3,0,0.6-0.3,0.6-0.6V14.8c0-0.3-0.3-0.6-0.6-0.6h-8.4c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h33.2c0.3,0,0.6,0.3,0.6,0.6v11.3c0,0.3-0.3,0.6-0.6,0.6h-9.3c-0.3,0-0.6,0.3-0.6,0.6v26.1c0,0.5,0.6,0.8,1,0.4L571.7,15c0.4-0.4,0.1-1-0.4-1h-7.6c-0.3,0-0.6-0.3-0.6-0.6V2.1c0-0.3,0.3-0.6,0.6-0.6h35.7c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-8.2c-0.2,0-0.3,0.1-0.4,0.2l-22.9,22.3c-0.2,0.2-0.2,0.5-0.1,0.7l21,34c0.1,0.2,0.3,0.3,0.5,0.3h10.2c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-19.2c-0.2,0-0.4-0.1-0.5-0.3L557,47.3c-0.2-0.3-0.6-0.4-0.9-0.1l-11.4,11.1c-0.1,0.1-0.2,0.3-0.2,0.4v12.5c0,0.3,0.3,0.6,0.6,0.6h9.3c0.3,0,0.6,0.3,0.6,0.6v11.6c0,0.3-0.3,0.6-0.6,0.6h-33.2c-0.3,0-0.6-0.3-0.6-0.6V72.3C520.6,72,520.9,71.8,521.2,71.8z"/>
            <path d="M184,42.3v11.5c0,0.3,0.3,0.6,0.6,0.6h19.8c0.3,0,0.6,0.3,0.6,0.6v12.6c0,0.2-0.1,0.4-0.3,0.5c-5.7,3.3-11.4,5.1-20,5.1c-5.5,0-10.8-1.8-15.3-5c-1.3-1-2.6-2.2-3.8-3.4c-5.2-5.3-8.4-13-8.4-21.8c0-17.7,12.3-29.6,28.3-29.8c7.7,0,14.8,2.9,19.4,7.8c0.1,0.1,0.2,0.3,0.2,0.4v7c0,0.3,0.3,0.6,0.6,0.6h12.8c0.3,0,0.6-0.3,0.6-0.6V16c0-0.6-0.2-1.1-0.6-1.6c-6.6-7.7-15.6-12.6-26.6-14c-0.3,0-0.6-0.1-0.9-0.1c-0.1,0-0.2,0-0.3,0c-1.4-0.2-2.9-0.3-4.4-0.3c-0.2,0-0.4,0-0.6,0c-0.1,0-0.1,0-0.2,0c-25.4,0-43.2,18.7-43.2,43c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,26.6,19.5,42.7,40.1,42.7c8.9,0,16.1-2.8,21.8-7c0.4-0.3,0.9,0,0.9,0.5v5.4c0,0.3,0.3,0.6,0.6,0.6h12.8c0.3,0,0.6-0.3,0.6-0.6V42.3c0-0.3-0.3-0.6-0.6-0.6h-33.7C184.3,41.7,184,41.9,184,42.3z"/>
          </svg>
        </router-link>
        <div id="bacon-double-che" v-if="size.breakpoint === 'mobile'" v-on:click="onBurgerClick">
          <span id="burg-meat"></span>
        </div>
        <nav id="header-nav" v-if="size.breakpoint === 'tablet-up'">
          <ul>
            <li><router-link to="/animation">Animation</router-link></li>
            <li><router-link to="/interactive">Interactive</router-link></li>
            <li><router-link :to="utilBtnUrl"></router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import StudioAbout from 'components/editorial/StudioAboutContent.vue';

export default {
  name: 'header-view',
  components: {
    StudioAbout
  },
  computed: {
    scroll() {
      return this.$store.state.appScroll;
    },
    size() {
      return this.$store.state.appSize;
    },
    mode() {
      return this.$store.state.header.mode;
    },
    theme() {
      return this.$store.state.header.theme;
    },
    menu() {
      return this.$store.state.header.menu;
    },
    section() {
      return this.$store.state.header.section;
    },
    transformMode() {
      return this.$store.state.header.transformMode;
    },
    headerTranslate() {
      return `transform: translate3d(0px, ${this.$store.state.header.transform}px, 0)`;
    },
    utilBtnUrl() {
      let url = '?slide=wide';

      switch(this.$store.getters.whereTheHellAreWe) {
        case 'home-studio':
          url = '/';
          break;
        case 'animation-studio':
        case 'interactive-studio':
        case 'animation-project':
        case 'interactive-project':
        case 'animation-overlay':
        case 'interactive-overlay':
          url = `/${this.$route.params.discipline}`;
          break;
        case 'collection-studio':
          url = `/search/${this.$route.params.project_search}`;
          break;
      }

      return url;
    },
    utilBtnLabel() {
      return (/^(studio|project|overlay)$/i).test(this.section) ? 'Close' : 'Studio';
    }
  },
  watch: {
    /*
    ------------------------------------------
    | scroll:void
    |
    | Handle scroll.
    ------------------------------------------ */
    scroll: {
      handler: 'onScroll',
      deep: true
    },

    /*
    ------------------------------------------
    | size:void
    |
    | Handle resize.
    ------------------------------------------ */
    size() {
      // set header height in the store
      let height = this._$header.outerHeight();
      this.$store.dispatch('SET_HEADER', {
        settings: {height},
        delay: 0
      });

      // cache minimized height
      // 84px = minimized desktop height
      this._minimized_height = (this.$store.state.header.height - 84);
    },

    /*
    ------------------------------------------
    | $route.query.slide:void
    |
    | Watch the main route for theme / section.
    ------------------------------------------ */
    '$route.params.discipline': {
      handler: 'onSectionOrThemeChange'
    },

    /*
    ------------------------------------------
    | $route.query.slide:void
    |
    | Watch the biz widget for theme / section.
    ------------------------------------------ */
    '$route.query.slide': {
      handler: 'onSectionOrThemeChange'
    },

    /*
    ------------------------------------------
    | $route.params.project:void
    |
    | Watch the case study for theme / section.
    ------------------------------------------ */
    '$route.params.project': {
      handler: 'onSectionOrThemeChange'
    },

    /*
    ------------------------------------------
    | overlay:void
    |
    | Watch the overlay for active scroll.
    ------------------------------------------ */
    '$route.query.overlay': {
      handler: 'onSectionOrThemeChange'
    }
  },

  methods: {
    /*
    ------------------------------------------
    | onMobileMenuScroll:void
    |
    | e:object - event object
    |
    | Handle mobile menu scroll.
    ------------------------------------------ */
    onMobileMenuScroll(e) {
      // set mobile menu scroll in the store
      let offset = e.srcElement.scrollTop;
      this.$store.dispatch('SET_MENU_SCROLL', {offset});
    },

    /*
    ------------------------------------------
    | onScroll:void
    |
    | Handle scroll.
    ------------------------------------------ */
    onScroll() {
      let mode = '',
          y = Math.max(this.scroll[this.$store.state.activeScroll].offset, 0),
          direction = y < this._last_scroll ? 'up' : 'down',
          transform = 0;

      // direction change?
      if(direction !== this._last_direction) {
        this._direction_change_y = this._initial ? 0 : y;
        this._direction_change_t = this._last_t;
      }

      // calculate style / position
      if(y <= 0) {
        mode = 'top';
        transform = 0;
      } else {
        if(((y <= (this.$store.state.header.height + 1)) && direction === 'down') || (y <= this._minimized_height && direction === 'up')) {
          mode = 'transitioning';
        } else {
          mode = 'minimized';
        }

        // on the way up, at the top, on desktop
        if(this.size.breakpoint === 'tablet-up' && mode === 'transitioning' && this._last_mode === 'minimized') {
          this._direction_change_y = this._minimized_height;
          this._direction_change_t = -this._minimized_height;
        }

        // calculate reveal
        let scroll = this._direction_change_y - y,
            reveal = this._direction_change_t + scroll;

        // limit desktop reveal when minimized
        if(this.size.breakpoint === 'tablet-up' && mode === 'minimized') {
          reveal = Math.min(reveal, -this._minimized_height);
        }

        // limit transform
        transform = Math.ceil(Math.min(0, Math.max(reveal, -(this.$store.state.header.height + 1))));
      }

      // set it
      this.$store.dispatch('SET_HEADER', {
        settings: {mode, transform},
        delay: 0
      });

      this._last_scroll = y;
      this._last_direction = direction;
      this._last_t = transform;
      this._last_mode = mode;

      // initial flag
      this._initial = false;
    },

    /*
    ------------------------------------------
    | onBurgerClick:void
    |
    | e:object - event object
    |
    | Handle burger click.
    ------------------------------------------ */
    onBurgerClick(e) {
      let url = '';

      switch(this.$store.getters.whereTheHellAreWe) {
        case 'animation-project':
        case 'interactive-project':
        case 'animation-overlay':
        case 'interactive-overlay':
          url = `/${this.$route.params.discipline}`;
          break;
      }

      if(url !== '') {
        this.$router.push(url);
      } else {
        // menu
        let menu = this.$store.state.header.menu === 'open' ? '' : 'open',
            theme = menu === 'open' ? 'light' : 'dark';

        // mask
        // TODO: animation event namespaces?
        if(menu === '') {
          setTimeout(() => this.updateMask(0), 333);
        } else {
          let iteration = 1;
          $('#mobile-menu-mask').off('animationstart').on('animationstart', (e) => {
            this.updateMask(0);
          });
          $('#mobile-menu-mask').off('animationiteration').on('animationiteration', (e) => {
            this.updateMask(iteration);
            iteration += 1;
          });
          $('#mobile-menu-mask').off('animationend').on('animationend', (e) => {
            this.updateMask(30);
          });
        }

        // set it
        this.$store.dispatch('SET_HEADER', {
          settings: {theme, menu},
          delay: 0
        });
      }
    },

    /*
    ------------------------------------------
    | updateMask:void
    |
    | step:number - frame
    |
    | Update mask position / frame.
    ------------------------------------------ */
    updateMask(step) {
      switch(step) {
        case 0:
          $('#mobile-menu')
            .css({
              'mask-image': 'url(/images/cool-tear-mask.png)',
              'mask-position': '0% 0%'
            });
          break;
        case 30:
          $('#mobile-menu').css('mask-image', 'none');
          break;
        default:
          $('#mobile-menu').css('mask-position', `0% ${step * 3.333}%`);
          break;
      }
    },

    /*
    ------------------------------------------
    | onSectionOrThemeChange:void
    |
    | Handle section or theme change.
    ------------------------------------------ */
    onSectionOrThemeChange() {
      let theme = 'dark', menu = '', section = '', transformMode = 'transform-fast';

      // studio
      if(typeof this.$route.query.slide !== 'undefined') {
        theme = 'light';
        section = 'studio';
      }

      // project
      if(typeof this.$route.params.project !== 'undefined') {
        theme = 'dark';
        section = 'project';
      }

      // overlay
      if(typeof this.$route.query.overlay !== 'undefined') {
        theme = 'dark';
        section = 'overlay';
      }

      // transformMode
      clearTimeout(this._transform_to);
      this._transform_to = setTimeout(() => {
        let transformMode = '';

        this.$store.dispatch('SET_HEADER', {
          settings: {transformMode},
          delay: 0
        });
      }, 333);

      // set it
      this.$store.dispatch('SET_HEADER', {
        settings: {theme, menu, section, transformMode},
        delay: 0
      });
    }
  },

  /*
  ------------------------------------------
  | mounted:void
  |
  | Handle mounted.
  ------------------------------------------ */
  mounted() {
    // class vars
    this._$header = $('header');
    this._minimized_height = 0;
    this._initial = true;
    this._last_mode = 'top';
    this._last_scroll = 0;
    this._last_direction = 'up';
    this._direction_change_y = 0;
    this._last_t = 0;
    this._transform_to = 0;
    this.updateMask(0);
  },

  /*
  ------------------------------------------
  | ssrInit:void
  |
  | Handle server side init.
  ------------------------------------------ */
  ssrInit ({ store, route }) {
    let theme = 'dark', section = '';

    // studio
    if(typeof route.query.slide !== 'undefined') {
      theme = 'light';
      section = 'studio';
    }

    // project
    if(typeof route.params.project !== 'undefined') {
      theme = 'dark';
      section = 'project';
    }

    // overlay
    if(typeof route.query.overlay !== 'undefined') {
      theme = 'dark';
      section = 'overlay';
    }

    // set it
    return store.dispatch('SET_HEADER', {
      settings: {theme, section},
      delay: 0
    });
  }
}
</script>

<style lang="sass">
@import "src/styles/global"

header
  position: fixed
  top: 0px
  left: 0px
  width: 100%
  height: 88px
  z-index: 100
  transition: height 0ms linear $fast

  &.transform-fast
    #header-bar
      transition: transform 333ms $evil-ease

  &.transform-evil
    #header-bar
      transition: transform 666ms $evil-ease

  &.minimized
    #header-bar
      &:after
        transition: opacity $time-travel linear, visibility 0ms linear 0ms
        visibility: visible
        opacity: 1

  &.light
    #header-bar
      &:after
        background-color: $black

      #header-logo
        svg#black-logo
          opacity: 0

      #bacon-double-che
        &:after
          background-color: $white

        #burg-meat
          background-color: $grandpas-basement

          &:before,
          &:after
            background-color: $grandpas-basement

  &.minimized.light
    #header-bar
      #bacon-double-che
        &:after
          background-color: $white

        #burg-meat
          background-color: $black

          &:before,
          &:after
            background-color: $black

  &.open
    transition: height 0ms linear 0ms
    height: 100%

    #header-inner
      #mobile-menu
        transition: opacity 0ms linear 0ms, visibility 0ms linear 0ms
        opacity: 1
        visibility: visible

        #mobile-menu-mask
          animation: menu-mask-proxy 75ms linear 30

  &.open, &.project, &.overlay
    #header-bar
      #bacon-double-che
        transform: translate3d(17px, 0px, 0) rotate(45deg)

        #burg-meat
          &:before
            transform: translate3d(0px, 0px, 0) rotate(90deg)

          &:after
            visibility: hidden

  &.overlay
    #header-bar
      &:after
        transition: opacity $time-travel linear, visibility 0ms linear 0ms
        visibility: hidden

  #header-inner
    height: 100%

    #mobile-menu
      position: absolute
      top: 0px
      left: 0px
      width: 100%
      height: 100%
      background-color: $grandpas-basement
      mask-repeat: no-repeat
      mask-size: 100% 3100%
      opacity: 0
      visibility: hidden
      transition: opacity $fast linear 0ms, visibility 0ms linear $fast
      overflow: scroll
      -webkit-overflow-scrolling: touch

      #mobile-nav
        position: relative
        width: 100%
        height: 66%

        ul
          position: absolute
          top: 50%
          width: 100%
          transform: translate(0%, -50%)

          li
            width: 100%

            a
              display: inline-block
              position: relative
              padding: 26px 34px 46px 34px
              font: normal normal $bold 40px/18px $base-font
              color: $white
              text-decoration: none
              opacity: 0.2

              &.router-link-exact-active
                opacity: 1.0

      #mobile-studio-wrap
        width: 100%
        background-color: $grandpas-basement
        color: $faded

      #mobile-menu-mask
        position: fixed
        top: -100px
        left: 0px
        visibility: hidden
        transform: translate3d(0px, 0px, 0)

  #header-bar
    +grid
    position: relative
    width: 100%
    height: 16px
    padding: 36px 0px
    transform: translate3d(0px, 0px, 0)

    &:after
      content: ""
      position: absolute
      top: 0px
      right: 0px
      bottom: 0px
      left: 0px
      background-color: $white
      z-index: -1
      opacity: 0
      visibility: hidden
      transition: opacity $time-travel linear, visibility 0ms linear $time-travel, background-color 0ms linear $fast

    #header-logo
      position: relative
      grid-column: 3
      display: inline-block
      width: 107px
      height: 16px
      line-height: 1em

      svg
        position: absolute
        top: 0px
        right: 0px
        bottom: 0px
        left: 0px
        fill: $white

      svg#black-logo
        fill: $black
        opacity: 1
        transition: opacity $fast linear

    #bacon-double-che
      grid-column: 18
      justify-self: end
      position: relative
      width: 50px
      height: 16px
      transform: translate3d(17px, 0px, 0)

      &:before,
      &:after
        content: ""
        position: absolute
        top: 50%
        left: 50%
        transform: translate3d(-50%, -50%, 0)

      &:before
        width: 50px
        height: 50px

      &:after
        width: 38px
        height: 38px
        border-radius: 100%
        background-color: $black
        transition: background-color $fast linear
        z-index: -1

      #burg-meat
        position: absolute
        top: 7px
        left: 19px
        width: 12px
        height: 2px
        background-color: $faded
        transition: background-color $fast linear

        &:before,
        &:after
          content: ""
          position: absolute
          top: 0px
          left: 0px
          height: 2px
          background-color: $faded
          transition: background-color $fast linear

        &:before
          width: 12px
          transform: translate3d(0px, -6px, 0)

        &:after
          width: 8px
          transform: translate3d(0px, 6px, 0)

@keyframes menu-mask-proxy
  100%
    transform: translateZ(0)

+respond-to($tablet-landscape)
  header
    height: auto
    transition: none

    &.studio, &.project, &.overlay
      #header-bar
        #header-nav
          ul
            li
              transition: opacity $fast linear, visibility 0ms linear $fast
              opacity: 0
              visibility: hidden

            li:last-child
              opacity: 1
              visibility: visible

              a
                animation: util-btn-close 400ms steps(7) normal forwards

                &:after
                  content: " "
                  white-space: pre

    &.minimized
      #header-bar
        #header-nav
          li:last-child
            a
              color: $white !important

    &.light
      #header-bar
        #header-nav
          li:last-child
            a
              color: $black !important
              // background: $grandpas-office

        .minimized &
          #header-nav
            li:last-child
              a
                color: $grandpas-office
                background: $black

    #header-bar
      position: relative
      height: 24px
      padding: span(1, 24) 0 30px

      #header-logo
        grid-column: 2
        width: 175px
        height: 24px

      #header-nav
        grid-column: 13 / span 10
        grid-row: 1
        height: 24px

        ul
          display: flex
          flex-direction: row
          justify-content: flex-end
          width: 100%
          height: 24px

          // NOTE: hang 'studio' button halfway over last grid col
          transform: translate(50px, 0px)

          li
            display: inline-block
            margin-left: 50px
            line-height: 24px
            transition: opacity $fast linear, visibility 0ms linear 0ms

            a
              position: relative
              font: normal normal $bold 18px/18px $base-font
              color: $black
              text-decoration: none
              opacity: 0.6

              &.router-link-exact-active
                opacity: 1

          li:last-child
            position: relative
            width: 100px
            cursor: pointer

            a
              display: inline-block
              position: absolute
              top: 50%
              width: 100%
              padding: 12px 0px
              color: $faded
              text-align: center
              transform: translate(0%, -50%)
              opacity: 1
              background-image: url(/images/shitty-test.png)
              background-repeat: no-repeat
              background-size: 200px 336px
              background-position-x: -100px
              animation: util-btn-normal 400ms steps(7) normal forwards

              &:after
                content: "Studio"
                display: inline

              &.router-link-exact-active
                color: $white

@keyframes util-btn-normal
  0%
    background-position-y: -294px
  100%
    background-position-y: 0px

@keyframes util-btn-close
  0%
    background-position-y: 0px
  100%
    background-position-y: -294px
</style>
