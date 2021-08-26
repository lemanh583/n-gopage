<template>
  <div>
    <div v-for="(d, index) in data" :key="index">
      <h3 class="header">
        <a-icon type="star" style="padding-right: 5px;"/>{{ d.header }}
      </h3>
      <ul>
        <li v-for="(list, i) in d.list" :key="i">
          <h3>
            <b><a href="#">{{ list }}</a></b>
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Content',
  data() {
    return {
      data: [
        {
          header: 'GIỚI THIỆU CHUNG',
          list: [
            'Đăng ký và thanh toán gói cước ',
            'Hướng dẫn kích hoạt fanpage',
            'Cài đặt Extension Get Token',
            'Thêm Fanpage mới',
          ],
        },
        {
          header: 'GIỚI THIỆU CHUNG',
          list: [
            'Quản lý bình luận - Tự động gắn nhãn',
            'Ẩn - Bỏ qua bình luận',
            'Trả lời tự động',
            'Kịch bản chốt đơn tự động',
            'Nhắn tin hàng loạt',
            'Spam tin nhắn hàng loạt',
            'Quay số may mắn',
            'Thu thập số điện thoại khách hàng',
          ],
        },
         {
          header: 'KIẾM TIỀN CÙNG GOPAGE',
          list: [
            'Tham gia kiếm tiền Affiliate',
          ],
        },
      ],
    }
  },
}
</script>
<style scoped>
.header{
  /* font-family: Content-font, Roboto, sans-serif; */
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 24px;
  margin-top: 26px;
}
ul li h3 b a:hover {
  text-decoration: underline;
}
</style>
