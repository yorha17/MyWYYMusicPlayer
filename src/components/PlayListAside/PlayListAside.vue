<template>
  <div class="aside-container">
    <ul>
      <li><router-link to="/discover">发现音乐</router-link></li>
      <li>播客</li>
      <li>视频</li>
      <li>关注</li>
      <li>直播</li>
      <li><router-link to="/fm">私人FM</router-link></li>
    </ul>
    <span class="part-title">我的音乐</span>
    <ul>
      <li class="playlist-menu"><span class="icon-menu"></span>我喜欢的音乐</li>
      <li class="playlist-menu"><span class="icon-menu"></span>本地与下载</li>
      <li class="playlist-menu"><span class="icon-menu"></span>最近播放</li>
      <li class="playlist-menu"><span class="icon-menu"></span>我的音乐云盘</li>
      <li class="playlist-menu"><span class="icon-menu"></span>我的播客</li>
      <li class="playlist-menu"><span class="icon-menu"></span>我的收藏</li>
    </ul>
    <span class="part-title">创建的歌单</span>
    <ul>
      <li class="playlist-menu"><span class="icon-menu"></span>歌单1</li>
      <li class="playlist-menu"><span class="icon-menu"></span>歌单2</li>
      <li class="playlist-menu"><span class="icon-menu"></span>歌单3</li>
    </ul>
    <span class="part-title">收藏的歌单</span>
    <ul>
      <li class="playlist-menu"><span class="icon-menu"></span>歌单1</li>
      <li class="playlist-menu"><span class="icon-menu"></span>歌单2</li>
      <li class="playlist-menu"><span class="icon-menu"></span>歌单3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PlayListAside'
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: black;
}
.aside-container {
  width: 200px;
  overflow-y: scroll;
  border-right: 1px solid gray;
  padding: 15px 0 0 15px;
}
.aside-container::-webkit-scrollbar {
  width: 10px;
  scrollbar-arrow-color: transparent;
}
.aside-container::-webkit-scrollbar-thumb {
  background-color: rgb(224, 224, 224);
  border-radius: 10px;
}
li {
  list-style: none;
  height: 35px;
  color: rgb(51, 51, 51);
}
.part-title {
  display: inline-block;
  color: rgb(194, 194, 194);
  height: 30px;
  margin-top: 5px;
}
.icon-menu {
  font-family: 'icomoon';
  margin-right: 5px;
}
</style>
