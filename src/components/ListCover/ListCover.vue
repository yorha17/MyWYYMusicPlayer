<template>
  <div class="cover-container">
    <a :href="'#/list/' + list_id"><img class="cover" :src="coverSrc" alt="" /></a>
    <span></span>
    <hr />
    <a :href="'#/list/' + list_id">{{ des }}</a>
  </div>
</template>

<script>
export default {
  props: {
    coverSrc: {
      default: '~@/assets/images/album-1.jpg',
      type: String,
      require: true
    },
    des: {
      default: '歌单描述',
      type: String
    },
    list_id: {
      default: 1,
      type: Number,
      require: true
    }
  }
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
.cover-container {
  width: 150px;
  height: 200px;
  float: left;
  margin: 0 15px;
}
img.cover {
  width: 150px;
  height: 150px;
}
.cover-container a {
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
