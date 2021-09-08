<template>
  <div>
    <div class="select-language item-menu-hover" @click="hiddenOptions">
      <div class="header-select-language" >
        <!-- <a-icon type="book" style="padding-top: 5px" /> -->
        <svg
          preserveAspectRatio="xMidYMid meet"
          height="1em"
          width="1em"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="currentColor"
          style="margin-top: 5px;"
        >
          <g>
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </g>
        </svg>
        <h3 class="main-language">Tiếng Việt</h3>
        <a-icon
          v-if="isShow"
          type="down"
        />
        <a-icon
          v-if="!isShow"
          type="right"
        />
      </div>
    </div>
    <div v-if="isShow" class="language">
      <div class="language-option item-menu-hover">
        <h3>Tiếng Việt</h3>
        <p style="">MAIN</p>
      </div>
      <div class="language-option item-menu-hover">
        <h3>English</h3>
        <p v-if="false">MAIN</p>
      </div>

      <!-- div rỗng -->
      <div style="height: 23px;"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    hiddenOptions() {
      this.isShow = !this.isShow
    },
  },
}
</script>
<style scoped>
.select-language .header-select-language{
  display: flex;
  padding: 15px 24px 10px 16px;
  border-bottom:  1px solid #e6ecf1;
}
.select-language .header-select-language .main-language{
  padding-left: 10px; 
  padding-top: 2px
}
.language {
  /* height: 90px; */
  align-items: center;
  border-bottom: 1px solid #e6ecf1;
  /* position: relative; */
}
.language-option {
  display: flex;
  padding-bottom: 2px;
  font-weight: 500;
  line-height: 1.5;
  font-size: 14;
  align-items: center;
  /* position: relative; */
}
.language-option h3 {
  padding: 7px 24px 2px 16px;
  font-weight: 500;
  line-height: 1.5;
  font-size: 14;
  flex: 1;
}

.language .language-option p {
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  /* padding-left: 100px;
  padding-top: 10px; */
  right: 20px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #9daab6;
  /* margin-right: 20px; */
  flex: 1;
  margin-left: 100px;
  margin-top: 10px;
  /* position: absolute; */
}
.anticon {
  padding-left: 127px;
  padding-top: 5px;
  color: #9daab6;
  font-size: 13px;
}
</style>
