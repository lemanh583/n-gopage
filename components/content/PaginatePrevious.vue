<template>
  <div>
    <a-row>
      <Nuxt-link :to="data.params.link">
      <a-col :span="24" class="col">
        <div class="paginate">
          <a-icon type="arrow-left" />
          <div>
            <span>{{data.category}}-Previous</span>
            <h3>{{data.params.titlePost}}</h3>
          </div>
        </div>
      </a-col>
      </Nuxt-link>
    </a-row>
  </div>
</template>
<script>
export default {
  props: ['data']
}
</script>
<style scoped>
.ant-row {
  margin: 50px 0 30px 0;
}
.ant-col {
  border: 1px solid #e6ecf1;

  box-shadow: 1px 1px 5px 1px rgb(240, 238, 236);
  border-radius: 3px;
}
.col:hover{
   border-color: #3884ff;
}
.col:hover h3{
  color: #3884ff;
}
.col:hover .anticon{
   color: #3884ff;
}
.paginate {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}
.paginate span {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.625;
  color: #9daab6;
}
.paginate h3 {
  font-weight: 500;
  line-height: 1.5;
  font-size: 16px;
  margin: 0;
}
.anticon {
  font-size: 18px;
  color: #9daab6;
}
</style>
