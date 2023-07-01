<template>
  <div>
    <div class="title_container">
      <div class="left_cover_container">
        <img class="listCover" :src="'/images/' + listData.cover" />
      </div>
      <div class="right_info_container">
        <div class="info_container">
          <span class="logo_gedan">歌单</span>
          <span class="listTitle">{{ listData.play_list_name }}</span>
        </div>
        <div class="list_creater_container">
          <img class="userAvatar" src="/avatar.webp" />
          <a class="user_link" href="#">户冢彩加</a>
          <span class="create_date">2023-06-24创建</span>
        </div>
        <div class="list_btn_container">
          <button class="btn_list play_all"><span class="icon_play_inbtn"></span>播放全部<span class="icon_add_inbtn"></span></button>
          <button class="btn_list fav">收藏</button>
          <button class="btn_list share">分享</button>
          <button class="btn_list download_all">下载全部</button>
        </div>
        <div class="describe_container">
          <p>标签：{{ listData.tags }}</p>
          <p>歌曲：56 播放：6万</p>
          <p>简介：{{ listData.describ }}</p>
        </div>
      </div>
    </div>
    <div class="list_container">
      <table>
        <tr>
          <th></th>
          <th>操作</th>
          <th>标题</th>
          <th>歌手</th>
          <th>专辑</th>
          <th>时间</th>
        </tr>
        <tr>
          <td>01</td>
          <td>
            <span class="icon fav"></span>
            <span class="icon down"></span>
          </td>
          <td>ロスタイム</td>
          <td>Creepy Nuts</td>
          <td>アンサンブル-プレイ-</td>
          <td>03:39</td>
        </tr>
        <tr>
          <td>01</td>
          <td><span class="icon fav"></span><span class="icon down"></span></td>
          <td>ロスタイム</td>
          <td>Creepy Nuts</td>
          <td>アンサンブル-プレイ-</td>
          <td>03:39</td>
        </tr>
        <tr>
          <td>01</td>
          <td><span class="icon fav"></span><span class="icon down"></span></td>
          <td>ロスタイム</td>
          <td>Creepy Nuts</td>
          <td>アンサンブル-プレイ-</td>
          <td>03:39</td>
        </tr>
        <tr>
          <td>01</td>
          <td><span class="icon fav"></span><span class="icon down"></span></td>
          <td>ロスタイム</td>
          <td>Creepy Nuts</td>
          <td>アンサンブル-プレイ-</td>
          <td>03:39</td>
        </tr>
        <tr>
          <td>01</td>
          <td><span class="icon fav"></span><span class="icon down"></span></td>
          <td>ロスタイム</td>
          <td>Creepy Nuts</td>
          <td>アンサンブル-プレイ-</td>
          <td>03:39</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: {
        id: 1,
        play_list_name: '今天《冷吟閑酔》爱不释耳|私人雷达',
        describ: '你爱的歌，值得反复聆听',
        tags: ['日语', '流行', '怀旧'],
        play_count: 38490,
        cover: 'album-1.jpg'
      }
    }
  },
  methods: {
    playMusic() {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'icomoon';
  src: url('~@/assets/fonts/icomoon.eot?4i1erb');
  src: url('~@/assets/fonts/icomoon.eot?4i1erb#iefix') format('embedded-opentype'), url('~@/assets/fonts/icomoon.ttf?4i1erb') format('truetype'), url('~@/assets/fonts/icomoon.woff?4i1erb') format('woff'), url('~@/assets/fonts/icomoon.svg?4i1erb#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.left_cover_container {
  float: left;
}
.right_info_container {
  float: left;
  margin-left: 20px;
}
img.listCover {
  width: 160px;
  height: 160px;
}
// 歌单信息部分
.title_container {
  margin-top: 40px;
  margin-left: 40px;
  height: 160px;
}

span.logo_gedan {
  border: 1px solid rgb(59, 186, 125);
  border-radius: 3px;
  color: rgb(59, 186, 125);
}
span.listTitle {
  font-weight: 600;
  font-size: 22px;
}
// 歌单创作者信息
.list_creater_container {
  height: 30px;
}
.userAvatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.user_link {
  text-decoration: none;
  color: rgb(80, 125, 175);
  font-size: 13px;
  line-height: 30px;
  margin: 0 3px;
}
.create_date {
  font-size: 13px;
  font-weight: 300;
  line-height: 30px;
}
// 歌单功能按钮部分
.list_btn_container {
  margin-top: 10px;
}
.btn_list.play_all {
  background-color: rgb(59, 186, 125);
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: none;
  color: #fff;
  font-size: 15px;
  margin: 0 10px;
}
.icon_play_inbtn {
  font-family: 'icomoon';
}
.icon_add_inbtn {
  font-family: 'icomoon';
}
.btn_list {
  cursor: pointer;
  background-color: #fff;
  border: 1px solid gray;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  margin: 0 5px;
}

.btn_list:hover {
  background-color: rgb(242, 242, 242);
}
.btn_list.play_all:hover {
  background-color: rgb(36, 166, 107);
}
.describe_container {
  margin: 10px 0 0 10px;
}
.describe_container > p {
  font-weight: 300;
  font-size: 13px;
  cursor: default;
}
// 歌曲列表部分开始
.list_container {
  margin-top: 20px;
}
.icon {
  font-family: 'icomoon';
  color: rgb(199, 199, 199);
}
.icon:hover {
  color: rgb(110, 110, 110);
  cursor: pointer;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th:nth-child(n + 2):hover {
  background-color: rgb(242, 242, 243);
}
tr:nth-child(even) {
  background-color: rgb(250, 250, 250);
}
tr:nth-child(odd) {
  background-color: #fff;
}
tr {
  height: 30px;
}
tr:not(:first-child):hover {
  background: rgb(242, 242, 243);
}
th {
  text-align: left;
  color: rgb(147, 147, 147);
}
td:first-child {
  width: 40px;
  text-align: center;
  padding-left: 10px;
  color: rgb(199, 199, 199);
}
td:nth-child(2) {
  width: 70px;
}
td:nth-child(3) {
  color: rgb(84, 84, 84);
  font-weight: 300;
  cursor: default;
}
td:nth-child(4) {
  width: 150px;
  color: rgb(84, 84, 84);
  font-weight: 300;
}
td:nth-child(5) {
  width: 200px;
  color: rgb(84, 84, 84);
  font-weight: 300;
}
td:nth-child(6) {
  width: 70px;
  color: rgb(199, 199, 199);
  cursor: default;
}
// 歌曲列表部分结束
</style>
