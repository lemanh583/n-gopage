<template>
  <div class="list-menu">
    <div v-for="(p, index) in menus" :key="index" class="part">
      <!-- <p>{{typeof p.linkCategory}}</p> -->
      <!-- <p>{{url}}</p> -->
      <Nuxt-link :to="p.linkCategory == null ? '' : p.linkCategory"> 
        <div :class="['heading-menu',
                      'item-menu-hover',
                      p.linkCategory === url ? 'active' : '',
                      ]">
          <!-- unselectable -->
          <h3>{{ p.parent }}</h3>
        </div>
      </Nuxt-link>

      <div v-for="(c, i) in p.child" :key="i">
        <Nuxt-link :to="c.link">
          <div
            :class="[
              'menu-items',
              'item-menu-hover',
              c.link === url ? 'active' : '',
            ]"
            @click="getEl"
          >
            <strong>{{ c.title }}</strong>
          </div>
        </Nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ListMenu',
  data() {
    return {
      pathInit: '',
      path: '',
    }
  },
  computed: {
    ...mapState(['menus','url']),
  },
  created() {
    this.pathInit = this.$route.path
    // console.log(this.pathInit)
  },
  methods: {
    getEl(e) {
      // this.list_menu = document.querySelectorAll('.menu-items')
      // for (let i = 0; i < this.list_menu.length; i++) {
      //   this.list_menu[i].classList.remove('active')
      // }
      // e.currentTarget.classList.add('active')

      // console.log(this.url)
      // this.setLink()
      // setTimeout(() => {
      //   this.pathInit = this.$route.path
      // },50)
    },
      // 
  },
}
</script>

<style scoped>
.list-menu {
  margin-top: 32px;
}
.menu-items {
  padding: 10px 24px 10px 16px;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  color: inherit;
  border: 1px solid #e6ecf100;
}
.menu-items strong {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: #3b454e;
  /* color: inherit; */
}

.list-menu .heading-menu h3 {
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-size: 12px;
  color: #9daab6;
  padding: 15px 24px 13px 16px;
  margin: 0;
}
.list-menu .heading-menu {
  border: 1px solid #e6ecf100;
}

.part {
  margin-bottom: 20px;
}

/* chặn bôi đen */
.unselectable {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.active {
  background-color: white;

  border: 1px solid #e6ecf1;
}
.active strong {
  color: #3884ff;
}
.active h3 {
  color: #3884ff !important;
}
</style>
