<template>
  <div>
    <!-- 外层容器 -->
    <el-container>
      <!--顶层容器-->
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <img class="logo" src="~@/assets/logo-music.jpg" /></div
          ></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-header>
      <!-- 主要区域容器 -->
      <el-main></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'MyPlayer'
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.logo {
  width: 50px;
  height: 50px;
  border-radius: 252px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
