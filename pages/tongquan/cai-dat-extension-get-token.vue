<template>
  <div>
    <HeaderContent :header="header_content" />
    <Content4 />
    <PaginateMiddle :data="paginate" />
    <FooterContent :data="footer" />
  </div>
</template>
<script>
import HeaderContent from '~/components/content/HeaderContent.vue'
import Content4 from '~/components/content/Content4.vue'
import FooterContent from '~/components/content/FooterContent'
import PaginateMiddle from '~/components/content/PaginateMiddle'
export default {
  layout: 'DashBoard',
  components: {
    HeaderContent,
    Content4,
    FooterContent,
    PaginateMiddle,
  },
  data() {
    return {
      header_content: {
        title: '1.3. Cài đặt Extension Get Token',
        descriptions: `GoPage là phần mềm quản lý fanpage hiệu quả với những tiện ích vượt trội.Nhằm giúp bạn có thể khai thác tối đa thông tin của khác hàng đã từng tương tác với fanpage, GoPage có khả năng hỗ trợ thu thập`,
      },
      paginate: {
        part_next: 'Next - I/ TỔNG QUAN',
        next: '1.4. Thêm fanpage mới',
        url_next: '/thong-tin-lien-he',
        part_pre: 'I/ TỔNG QUAN - Previous',
        pre: '1.2. Kích hoạt fanpage',
        url_pre: '/tongquan/dang-ky'
      },
      footer: {
        src: 'https://lh5.googleusercontent.com/-ylV7XAIKYHg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmEmBiM_IwhA7rA05EdvDzODpHYaQ/photo.jpg',
        name: 'Ngà Phạm Thị Thanh',
        update: 'Last updated 1 year ago',
      },
    }
  },
}
</script>
