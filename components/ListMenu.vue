<template>
  <div class="list-menu">
    <div v-for="(p, index) in part" :key="index" class="part">
      <div
        :class="[
          p.child.length === 0
            ? 'menu-items'
            : ['heading-menu', 'unselectable'],
          p.heading == 'Hướng dẫn sử dụng phần mềm GoPage' ? 'active' : '',
        ]"
      >
        <Nuxt-link v-if="p.child.length === 0" to="">
          <h3>{{ p.heading }}</h3>
        </Nuxt-link>
        <h3 v-else>{{ p.heading }}</h3>
      </div>
      <div
        v-for="(c, i) in p.child"
        :key="i"
        class="menu-items"
      >
        <Nuxt-link to="/">
          <h3>{{ c }}</h3>
        </Nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      part: [
        {
          heading: 'Hướng dẫn sử dụng phần mềm GoPage',
          child: [],
        },
        {
          heading: 'I/ TỔNG QUAN',
          child: [
            'GIỚI THIỆU GOPAGE',
            '1.1. Đăng ký và thanh toán gói cước',
            '1.2. Kích hoạt fanpage',
            '1.3. Cài đặt Extension Get Token',
            '1.4. Thêm fanpage mới',
          ],
        },
        {
          heading: 'II/ QUẢN LÝ  FANPAGE',
          child: [
            '2.1. Hướng dẫn Cài đặt chung',
            '2.2. Cài đặt "Nhãn hội thoại"',
            '2.3. Cài đặt "Tin nhắn nhanh"',
          ],
        },
        {
          heading: 'III/ CÁC TÍNH NĂNG KHÁC',
          child: [
            '3.1. Quản lý bình luận - Tự động gắn nhãn',
            '3.2. Ẩn - Bỏ qua bình luận',
            '3.3. Trả lời tự động',
            '3.4. Kịch bản chốt đơn tự động',
            '3.5. Nhắn tin hàng loạt',
            '3.6. Spam tin nhắn hàng loạt',
            '3.7. Quay số may mắn',
            '3.8. Thu thập số điện thoại khách hàng',
          ],
        },
        {
          heading: 'IV/ KIẾM TIỀN CÙNG GOPAGE',
          child: ['Tham gia kiếm tiền Affiliate'],
        },
        {
          heading: 'THÔNG TIN LIÊN HỆ',
          child: [],
        },
      ],
    }
  }
}
</script>

<style scoped>
.list-menu {
  margin-top: 32px;
}
.menu-items {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  padding: 7px 24px 2px 16px;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  color: inherit;
}
.menu-items h3{
    /* color: inherit; */
}
.menu-items:hover {
  background-color: #e6ecf1;
  cursor: pointer;
}
.list-menu .heading-menu h3 {
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-size: 12px;
  color: #9daab6;
  padding: 7px 24px 7px 16px;
  margin: 0;
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
.active h3 {
  color: #3884ff;
}
</style>
