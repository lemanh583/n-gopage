<template>
  <div>
    <a-row type="flex" justify="space-between" align="center">
    
      <a-col :xl="11" :lg="11" :md="11" :xs="24" :sm="24" class="col">
        <Nuxt-link :to="data.url_pre">
        <div class="paginate">
          <a-icon type="arrow-left" />
          <div>
            <span>{{data.part_pre}}</span>
            <h3>{{data.pre}}</h3>
          </div>
        </div>
        </Nuxt-link>
      </a-col>
     
     
      <a-col :xl="11" :lg="11" :md="11" :xs="24" :sm="24" class="col">
         <Nuxt-link :to="data.url_next">
        <div class="paginate">
          <div>
            <span>{{data.part_next}}</span>
            <h3>{{data.next}}</h3>
          </div>
          <a-icon class="arrow" type="arrow-right" style="" />
        </div>
         </Nuxt-link>
      </a-col>
     
    </a-row>
  </div>
</template>
<script>
export default {
 props: ['data']
}
</script>

<style scoped>
.ant-col {
  border: 1px solid #e6ecf1;
  margin: 50px 0 30px 0;
  box-shadow: 1px 1px 5px 1px rgb(240, 238, 236);
  border-radius: 3px;
}
.col:hover{
   border-color: #3884ff;
}
.col:hover .head{
  color: #3884ff;
}
.col:hover .anticon{
   color: #3884ff;
}
.paginate {
  display: flex;
  padding: 16px;
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
@media only screen and (max-width: 767px) {
  .ant-col {
    margin: -10px 0 30px 0;
  }
  .ant-row-flex{
      margin-top: 50px;
  }
}
</style>
