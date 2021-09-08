<template>
  <a-layout>
    <a-layout-sider>
      <div class="sider">
        <div class="header-left">
          <Logo />
          <Search />
        </div>
        <div class="content-left">
          <Language />
          <ListMenu />
        </div>
      </div>
    </a-layout-sider>
    <a-layout class="_main">
      <a-layout-header>
        <Header />
      </a-layout-header>
      <a-layout-content>
        <a-row>
          <a-col class="col-1" :xl="2" :lg="3" :md="3" :sm="2" :xs="1"></a-col>
          <a-col class="col-2" :xl="15" :lg="18" :md="18" :sm="20" :xs="22">
            <Nuxt />
          </a-col>
          <a-col class="col-3" :xl="7" :lg="3" :md="3" :sm="2" :xs="1"></a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>
._main {
  padding-left: 300px;
}
.ant-layout {
  background-color: white;
}
.content-left h3 {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}
.ant-layout .ant-layout-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  height: 80px;
  border-bottom: 1px solid #e6ecf1;
  display: none;
  z-index: 9999;
  box-shadow: 0 3px 8px 0 rgb(116 129 141 / 10%);
}


.ant-layout-sider {
  height: 100vh;
  background-color: #f5f7f9;
  border-right: 1px solid #e6ecf1;
  position: fixed;
  left: 0;
  /* overflow: auto; */
  width: 300px !important;
  max-width: none !important;
  min-width: 300px !important;
}
.sider{
  padding-left: 24px !important;
  width: 300px;
}
.ant-layout-sider .header-left {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6ecf1;
}

.ant-layout-sider .sider .content-left {
  overflow-y: hidden;
  height: 87vh;
}
.ant-layout-sider .sider .content-left:hover {
  overflow-y: auto;
  overflow: overlay;
}
.ant-layout-sider .sider .content-left::-webkit-scrollbar {
  width: 4px;
  z-index: 999999;
}
.ant-layout-sider .sider .content-left::-webkit-scrollbar-thumb {
  background: rgb(199, 194, 194);
  border-radius: 10px;
}
@media screen and (min-width: 1024px) {
  .ant-layout-sider {
    width: calc((100% - 1448px) / 2 + 300px) !important;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
<style>
@media only screen and (max-width: 1024px) {
  .ant-layout-sider {
    /* --width-sider: calc((100% - 1448px) / 2 + 300px);
    margin-left: - var(--width-sider); */
    display: none !important;
    transition: 1s ease-in-out;
  }
  .ant-layout .ant-layout-header {
    display: block;
    padding-left: 16px;
    padding-right: 16px;
  }
  ._main {
    /* margin-left: 0; */
    padding-left: 0;
  }
  .ant-layout-content {
    margin-top: 80px;
  }
}
@media only screen and (max-width: 768px) {
  .ant-layout .ant-layout-header {
    height: 60px;
  }
}
@media only screen and (min-width: 1444px) {
  ._main {
    padding-left: calc((100% - 1448px) / 2 + 300px);
  }
}
@media only screen and (min-width: 3000px) {
  .col-1 {
    width: 4.16666667% !important;
  }
  .col-2 {
    width: 20.83333333% !important;
  }
  .col-3 {
    width: 75% !important;
  }
}
/* @media only screen and (min-width: 2300px) and (min-width: 2800px){
  .col-1{
    width:  8.33333333% !important;
  }
  .col-2{
    width: 30.83333333% !important;
  }
  .col-3{
    width: 75% !important;
  }
} */
</style>
