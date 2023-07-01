<template>
  <div class="header">
    <img class="logo" src="~@/assets/logo-music.jpg" />
    <span class="logo-title">网易云音乐</span>
    <span class="icon-span header-btn pre"></span>
    <span class="icon-span header-btn next"></span>
    <div class="container-search">
      <input class="ipt-search" type="text" placeholder="搜索" />
    </div>
    <span class="icon-span"></span>
    <img class="user" src="~@/assets/user.png" />
    <span class="user-name">西风烈qazwsxedcrfv</span>
    <div class="container-icon">
      <span class="icon-span"></span>
      <span class="icon-span"></span>
      <span class="icon-span"></span>
      <em>|</em>
      <span class="icon-span"></span>
      <span class="icon-span"></span>
      <span class="icon-span"></span>
      <span class="icon-span"></span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'icomoon';
  src: url('~@/assets/fonts/icomoon.eot?4i1erb');
  src: url('~@/assets/fonts/icomoon.eot?4i1erb#iefix') format('embedded-opentype'), url('~@/assets/fonts/icomoon.ttf?4i1erb') format('truetype'), url('~@/assets/fonts/icomoon.woff?4i1erb') format('woff'), url('~@/assets/fonts/icomoon.svg?4i1erb#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
* {
  margin: 0;
  padding: 0;
}
.header {
  background-color: rgb(75, 191, 119);
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 40px;
  margin-right: 15px;
}
.logo-title {
  font-size: 20px;
  color: aliceblue;
  /* margin-left: 5px; */
  margin-right: 10px;
}
.header-btn {
  border: 1px solid;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.pre {
  margin-left: 100px;
}
.next {
  margin-right: 10px;
}
.container-search {
  display: flex;
  border-radius: 10px;
  background-color: rgb(39, 179, 88);
  padding: 5px;
}
.ipt-search {
  outline: none;
  border: transparent;
  background-color: transparent;
}
img.user {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 80px;
  margin-right: 10px;
}
.user-name {
  color: white;
  width: 100px;
  font-size: 13px;
  font-weight: 300;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container-icon {
  margin-left: auto;
  padding-right: 30px;
}
em {
  font-style: normal;
  font-weight: 400;
  color: white;
  font-size: 15px;
  height: 15px;
  margin-left: 20px;
}
.icon-i {
  width: 20px;
  height: 20px;
  margin-left: 20px;
  color: white;
}
.icon-span {
  font-family: 'icomoon';
  color: white;
  margin-left: 20px;
  font-size: 20px;
}
</style>
