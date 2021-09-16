<template>
  <div class="header">
    <div class="flex-header-1">
      <a-icon class="icon-menu" type="menu" @click="showDrawerSider" />
      <a-drawer
        class="sider-header"
        placement="left"
        :closable="false"
        :visible="visibleSider"
        :width="300"
        :maskStyle="{ backgroundColor: ' rgba(24, 48, 85, 0.3)' }"
        @close="onCloseSider"
      >
        <div >
          <div class="header-menu-responsive" style="">
            <a-icon class="left-res" type="arrow-left" @click="onCloseSider" />
          </div>
          <div class="content-left left-sider-header">
            <Language />
            <ListMenu />
          </div>
        </div>
      </a-drawer>
    </div>
    <div class="flex-header-2">
      <Logo />
    </div>
    <div class="flex-header-3">
      <Search />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleSider: false,
    }
  },
  methods: {
    showDrawerSider() {
      this.visibleSider = true
    },
    onCloseSider() {
      this.visibleSider = false
    },
  },
}
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  margin-bottom: 30px;
}
.left-res {
  font-size: 19px;
  margin-left: 15px;
  margin-top: 20px;
}
.left-res:hover {
  color: #3884ff;
}
.ant-drawer {
  z-index: 9999;
}
.content-left h3 {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
.header-menu-responsive {
  height: 80px;
  border-bottom: 1px solid #d4dadf;
  background-color: white;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgb(116 129 141 / 10%);
}

.icon-menu {
  font-size: 19px;
  color: #a2afba;
}
.icon-menu:hover {
  color: #3884ff;
}

.left-sider-header{
  margin-left: 24px;
}
@media only screen and (max-width: 1024px) {
  .header-menu-responsive {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  .header {
    height: 60px;
  }
  .header-menu-responsive {
    display: block;
    height: 60px;
  }
}
</style>
<style>
.sider-header
  .ant-drawer-content-wrapper
  .ant-drawer-content
  .ant-drawer-wrapper-body
  > .ant-drawer-body {
  padding: 0 !important;
  background-color: #f5f7f9 !important;
  /* padding-left: 24px !important; */
}

.sider-header
  .ant-drawer-content-wrapper
  .ant-drawer-content
  > .ant-drawer-wrapper-body {
  overflow-y: scroll;
  overflow: overlay;
  background-color:#f5f7f9 !important ;
}

/* .sider-header */
  .ant-drawer-content-wrapper
  .ant-drawer-content
  > .ant-drawer-wrapper-body::-webkit-scrollbar {
  width: 4px !important;
}
/* .sider-header */
  .ant-drawer-content-wrapper
  .ant-drawer-content
  > .ant-drawer-wrapper-body::-webkit-scrollbar-thumb {
  background: rgb(199, 194, 194) !important;
  border-radius: 10px !important;
}
</style>
