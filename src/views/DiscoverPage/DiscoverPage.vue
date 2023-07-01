<template>
  <div class="main-container">
    <div class="tabs-container">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">个性推荐</el-menu-item>
        <el-menu-item index="2">专属订制</el-menu-item>
        <el-menu-item index="3">歌单</el-menu-item>
        <el-menu-item index="4">排行榜</el-menu-item>
        <el-menu-item index="5">歌手</el-menu-item>
        <el-menu-item index="6">最新音乐</el-menu-item>
      </el-menu>
    </div>
    <div class="page-container">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
      <span>推荐歌单</span>
      <span class="icon-span"></span>
      <!-- 推荐歌单 -->
      <div class="recomond-list-container">
        <list-cover v-for="item in listData" :list_id="item.id" :key="item.id" :coverSrc="'/images/' + item.cover" :des="item.describ"></list-cover>
      </div>
    </div>
  </div>
</template>

<script>
import ListCover from '@/components/ListCover/ListCover.vue'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      images: [
        { url: require('../../assets/images/lunbo-1.jpg') },
        { url: require('../../assets/images/lunbo-2.jpg') },
        { url: require('../../assets/images/lunbo-3.jpg') },
        { url: require('../../assets/images/lunbo-4.jpg') },
        { url: require('../../assets/images/lunbo-5.jpg') },
        { url: require('../../assets/images/lunbo-6.jpg') }
      ],
      listData: [
        {
          id: 1,
          play_list_name: '今天《冷吟閑酔》爱不释耳|私人雷达',
          describ: '你爱的歌，值得反复聆听',
          tags: '',
          play_count: 38490,
          cover: 'album-1.jpg'
        },
        {
          id: 2,
          play_list_name: '剑侠情缘网络版三 游戏音乐',
          describ: '这个江湖中总有一些人和事，一经遇合，就让人难以忘记——谨纪念于红尘中相遇的剑、侠、情、缘',
          tags: '古典,古风,游戏',
          play_count: 38490,
          cover: 'album-4.jpg'
        },
        {
          id: 3,
          play_list_name: '【东方】浅谈我心目中的TOP30',
          describ: '',
          tags: '日语,ACG,学习',
          play_count: 310000,
          cover: 'album-3.jpg'
        },
        {
          id: 4,
          play_list_name: 'VOCALOID精选|虚拟与现实交织的美妙乐章',
          describ: '愿你在虚拟歌姬的歌声中，感受音乐世界的美妙',
          tags: '',
          play_count: 1780000,
          cover: 'album-2.jpg'
        },
        {
          id: 5,
          play_list_name: '油管排行最高的V家曲',
          describ: '本歌单统计了截止至22年10月底油管上的V家曲播放量排行前70名',
          tags: '日语,流行,ACG',
          play_count: 1490000,
          cover: 'album-5.jpg'
        },
        {
          id: 6,
          play_list_name: '今天《冷吟閑酔》爱不释耳|私人雷达',
          describ: '你爱的歌，值得反复聆听',
          tags: '',
          play_count: 38490,
          cover: 'album-1.jpg'
        },
        {
          id: 7,
          play_list_name: '剑侠情缘网络版三 游戏音乐',
          describ: '这个江湖中总有一些人和事，一经遇合，就让人难以忘记——谨纪念于红尘中相遇的剑、侠、情、缘',
          tags: '古典,古风,游戏',
          play_count: 38490,
          cover: 'album-4.jpg'
        },
        {
          id: 8,
          play_list_name: '【东方】浅谈我心目中的TOP30',
          describ: '',
          tags: '日语,ACG,学习',
          play_count: 310000,
          cover: 'album-3.jpg'
        },
        {
          id: 9,
          play_list_name: 'VOCALOID精选|虚拟与现实交织的美妙乐章',
          describ: '愿你在虚拟歌姬的歌声中，感受音乐世界的美妙',
          tags: '',
          play_count: 1780000,
          cover: 'album-2.jpg'
        },
        {
          id: 10,
          play_list_name: '油管排行最高的V家曲',
          describ: '本歌单统计了截止至22年10月底油管上的V家曲播放量排行前70名',
          tags: '日语,流行,ACG',
          play_count: 1490000,
          cover: 'album-5.jpg'
        }
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    showData() {
      console.log(this.listData)
    }
  },
  components: {
    ListCover
  }
}
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

.main-container {
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  height: 100%;
  // background-color: pink;
}
.tabs-container {
  height: 40px;
  background-color: lightcyan;
}
/deep/.el-menu-item.is-active {
  font-size: 16px;
  font-weight: 500;
}
/deep/.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid rgb(59, 186, 126);
}
.page-container {
  flex: 1;
  overflow-y: auto;
  padding-top: 25px;
}
.icon-span {
  font-family: 'icomoon';
}
img {
  height: 200px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.recomond-list-container {
  margin-top: 15px;
  margin-left: 20px;
}
</style>
