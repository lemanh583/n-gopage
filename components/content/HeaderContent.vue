<template>
  <div class="header-content">
    <h1>{{ title }}</h1>
    <p>{{ descriptions }}</p>
  </div>
</template>
<script>
export default {
  name: 'HeaderContent',
  props: ['title','descriptions'],
}
</script>

<style scoped>
.header-content {
  padding: 40px 0px;
  border-bottom: 2px solid #e6ecf1;
  margin: 0;
}
.header-content h1 {
  font-size: 32px;
  font-weight: 500;
  line-height: 1.5;
  padding: 0;
}
.header-content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.625;
  color: #74818d;
  letter-spacing: 0em;
  margin: 0;
}
</style>
