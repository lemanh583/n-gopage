<template>
  <div>
    <a-row type="flex" justify="space-between" class="ant-row-paginate">
      <a-col
        :xl="12"
        :lg="12"
        :md="12"
        :xs="24"
        :sm="24"
        class="col-paginate col-left"
      >
        <Nuxt-link :to="pre.params.link">
          <div class="paginate">
            <a-icon type="arrow-left" />
            <div style="text-align: right">
              <span>{{ pre.category }}-Previous</span>
              <h3>{{ pre.params.titlePost }}</h3>
            </div>
          </div>
        </Nuxt-link>
      </a-col>

      <a-col
        :xl="12"
        :lg="12"
        :md="12"
        :xs="24"
        :sm="24"
        class="col-paginate col-right"
      >
        <Nuxt-link :to="next.params.link">
          <div class="paginate">
            <div>
              <span>Next-{{ next.category }}</span>
              <h3>{{ next.params.titlePost }}</h3>
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
  props: ['next', 'pre'],
}
</script>

<style scoped>
.ant-row-paginate {
  margin-top: 50px;
  margin-bottom: 25px;
}
.ant-row-paginate .col-left {
  padding-right: 10px;
}
.ant-row-paginate .col-right {
  padding-left: 10px;
}
.col-paginate:hover .paginate {
  border-color: #3884ff;
}
.col-paginate:hover .paginate h3 {
  color: #3884ff;
}
.col-paginate:hover .anticon {
  color: #3884ff;
}
.paginate {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 5px 1px rgb(240, 238, 236);
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0);
  height: 100%;
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
  .col-paginate {
    padding: 0;
  }
  .ant-col {
    margin: -10px 0 30px 0;
  }
  .ant-row-flex {
    margin-top: 50px;
  }
  .ant-row-paginate .col-left {
    padding-right: 0px;
  }
  .ant-row-paginate .col-right {
    padding-left: 0px;
  }
}
</style>
