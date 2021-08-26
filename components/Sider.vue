<template>
  <a-layout-sider width="300">
    <div class="header-left">
      <Logo />
      <Search />
    </div>
    <div class="content-left">
      <Language />
      <ListMenu />
    </div>
  </a-layout-sider>
</template>
<style scoped>
.ant-layout-sider {
  background-color: blue;
  height: 100vh;
  background-color: #f5f7f9;
  border-right: 1px solid #e6ecf1;
  position: fixed;
  top: 0;
  left: 0;
}
.ant-layout-sider .header-left {
  display: flex;
  align-items: center;
  margin-left: 24px;
  border-bottom: 1px solid #e6ecf1;
}

.ant-layout-sider .content-left {
  margin-left: 24px;
  overflow-y: hidden;
  height: 87vh;
}
.ant-layout-sider .content-left:hover {
  overflow-y: scroll;
  overflow: overlay;
}
::-webkit-scrollbar {
  width: 4px;
  z-index: 999999;
}
::-webkit-scrollbar-thumb {
  background: rgb(199, 194, 194);
  border-radius: 10px;
}
</style>
