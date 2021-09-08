<template>
  <nuxt-link to="/">
    <div class="logo">
      <div class="img-logo">
        <img
          src="/spaces_-MCPPyKTb8Np6OZ-CQfZ_avatar-1594955829092.png"
          alt="logo"
        />
      </div>
      <span>GoPage docs</span>
    </div>
  </nuxt-link>
</template>
<script></script>
<style scoped>
.logo {
  display: flex;
  height: 80px;
  align-items: center;
  width: 191px;
}
.img-logo {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background-color: white;
}
.img-logo img {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background-size: cover;
}
span {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  /* overflow-wrap: break-word; */
  padding-left: 8px;
  color: #242a31;
}
.logo:hover {
  cursor: pointer;
}
.logo:hover span {
  color: #3884ff;
}
@media only screen and (max-width: 1024px){
  .img-logo img{
    margin-bottom: 21px;
    position: fixed;
  }
}
</style>
