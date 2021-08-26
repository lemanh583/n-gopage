<template>
  <div class="search">
    <a-icon class="ant-icon" type="search" @click="showDrawer" />
    <a-drawer
      class="search-bar"
      placement="right"
      width="400"
      :closable="false"
      :visible="visible"
      :maskStyle="{ backgroundColor: ' rgba(24, 48, 85, 0.3)' }"
      @close="onClose"
    >
      <div
        style="display: flex; width: 100%; height: 50px; align-items: center"
      >
        <a-icon type="search" style="font-size: 20px; padding-right: 10px" />
        <a-input
          v-model="ipSearch"
          placeholder="Search"
          style="border: none; width: 300px"
        />
        <a-icon
          type="arrow-right"
          style="padding-left: 10px; font-size: 20px"
          @click="onClose()"
        />
      </div>

      <!-- tạo border bottom -->
      <div style="width: 100%; border-bottom: 1px solid #e6ecf1; margin-top: 10px"></div>

      <img
        v-if="ipSearch == '' ? true : false"
        class="icon-search"
        src="https://gstatic.gitbook.com/images/7f9239ce726764aa22093884902e018d.svg"
        alt="Search Placeholder"
      />
      <div class="not-found">
        <strong>No results found for query "....."</strong>
      </div>

      <div v-for="(d, index) in data" :key="index" class="result-search">
        <h3>Kết quả</h3>
        <p>
          {{d}}
        </p>
      </div>

      
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      width: 400,
      ipSearch: '',
      data: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit....',
      ]
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>
<style>
img.icon-search {
  margin-top: 50%;
  margin-left: 27%;
}
.ant-icon {
  font-size: 19px;
  padding-left: 40px;
  color: #a2afba;
}
.ant-icon:hover {
  cursor: pointer;
  color: #3884ff;
}
.ant-input:focus {
  border: none !important;
  outline: 0;
  box-shadow: none !important;
}
.not-found {
  margin-top: 30px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.not-found strong {
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  line-height: 1.5;
  color: rgb(157, 170, 182);
  text-align: center;
}
.result-search{
  /* border-top: 1px solid #e6ecf1; */
  border-bottom: 1px solid #e6ecf1;
}
.result-search p{
  padding: 5px;
  margin:0;
  color: #74818d;;
}
.result-search h3{
  padding: 5px;
  margin:0;
}
</style>
