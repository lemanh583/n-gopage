<template>
  <a-row>
    <a-col :xl="12" :lg="12" :md="12" :xs="24" :sm="24">
      <div class="flex-author">
        <div class="hover-author">
          <img
            :src= data.src
            alt="author-img"
          />
          <div class="author">
            <span>{{data.name}}</span>
          </div>
        </div>
        <span>{{data.update}}</span>
      </div>
    </a-col>
    <a-col :xl="12" :lg="12" :md="12" :xs="24" :sm="24">
      <div class="flex-icon">
        <span>WAS THIS PAGE HELPFUL?</span>
        <div style="display: flex">
          <a-icon type="frown" theme="filled" />
          <a-icon type="meh" theme="filled" />
          <a-icon type="smile" theme="filled" />
        </div>
      </div>
    </a-col>
  </a-row>
</template>
<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.ant-row {
  border-top: 2px solid #e6ecf1;
  padding-bottom: 80px;
}
.ant-col {
  margin-top: 20px;
}
span {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.625;
  color: #9daab6;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.flex-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.anticon {
  color: rgb(194, 201, 207);
  font-size: 24px;
  /* padding-left: 8%; */
  padding-left: 5px;
  padding-right: 5px;
}
.flex-icon > span {
  color: rgb(157, 170, 182);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.anticon-smile:hover {
  color: #09ff00;
  cursor: pointer;
}
.anticon-frown:hover {
  color: red;
  cursor: pointer;
}
.anticon-meh:hover {
  color: yellow;
  cursor: pointer;
}
.flex-author{
    display: flex;
    position: relative;
    /* align-items: center; */
    /* height: 100px; */
}
.author {
  width: 10em;
  background-color: black;
  border-radius: 5px;
  margin-left: -46px;
  margin-top: 15px;
  position: absolute;
  text-align: center;
  padding: 2px 5px;
  display: none;
  z-index: 99999;
}
.hover-author{
    position: relative;
}
.hover-author:hover .author{
    display: block;
}
.flex-author > span{
    position: absolute;
    top: 6px;
    left: 40px;
}
.author > span {
    color: white;
    margin-left: 5px;
}
.author::after {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  top: -9px;
  left: 54px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 10px solid black;
  transition: 0.4 ease;
}
</style>
