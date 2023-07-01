<template>
  <div class="container">
    <div class="head_container">
      <w-header></w-header>
    </div>
    <div class="middle-container">
      <play-list-aside></play-list-aside>
      <main-body></main-body>
    </div>
    <div class="footer_container">
      <!-- <play-page></play-page> -->
      <control-bar></control-bar>
    </div>
  </div>
</template>

<script>
import WHeader from '@/components/WHeader/WHeader.vue'
import PlayListAside from '@/components/PlayListAside/PlayListAside.vue'
import MainBody from '@/components/MainBody/MainBody.vue'
import ControlBar from '@/components/ControlBar/ControlBar.vue'
// import PlayPage from '@/components/PlayPage/PlayPage.vue'
export default {
  components: {
    WHeader,
    PlayListAside,
    MainBody,
    ControlBar
    // PlayPage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.middle-container {
  width: 100%;
  flex: 1;
  overflow: auto;
  display: flex;
}
.main {
  flex: 1;
  overflow-y: auto;
  background-color: lightyellow;
}
</style>
