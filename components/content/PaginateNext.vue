<template>
  <div>
    <a-row>
      <Nuxt-link :to="data.url">
      <a-col :span="24" class="col">
        <div class="paginate">
          <div>
            <span>Next - {{data.part}}</span>
            <h3 class="head">{{data.next}}</h3>
          </div>
          <a-icon class="arrow" type="arrow-right" style="" />
        </div>
      </a-col>
      </Nuxt-link>
    </a-row>
  </div>
</template>
<script>

export default {
    props: ["data"]
}
</script>

<style scoped>
.ant-row{
    margin: 50px 0 30px 0;
}
.ant-col {
  border: 1px solid #E6ECF1;
 
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
.paginate{
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
}
.paginate span{
    font-size: 12px;
    font-weight: 400;
    line-height: 1.625;
    color: #9DAAB6;
}
.paginate h3{
    font-weight: 500;
    line-height: 1.5;
    font-size: 16px;
    margin: 0;
}
.anticon {
    font-size: 18px;
    color: #9DAAB6;
}
</style>
