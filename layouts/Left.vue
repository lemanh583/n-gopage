<template>
  <a-layout>
    <Sider />
    <a-layout class="_main">
      <a-layout-header>
        <Header />
      </a-layout-header>
      <a-layout-content>
        <a-row>
          <a-col :xl="2" :lg="3" :md="3" :sm="2" :xs="1"></a-col>
          <a-col :xl="15" :lg="18" :md="18" :sm="20" :xs="22">
            <Nuxt />
          </a-col>
          <a-col :xl="7" :lg="3" :md="3" :sm="2" :xs="1"></a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style>
._main {
  margin-left: 300px;
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
</style>
<style>
@media only screen and (max-width: 1024px) {
  .ant-layout-sider {
    margin-left: -300px;
    transition: 0.4s;
  }
  .ant-layout .ant-layout-header {
    display: block;
    padding-left: 16px;
    padding-right: 16px;
  }
  ._main {
    margin-left: 0;
  }
  .ant-layout-content {
    margin-top: 80px;
  }
}
@media only screen and (max-width: 768px){
    .ant-layout .ant-layout-header{
      height: 60px;
    }
}
</style>

