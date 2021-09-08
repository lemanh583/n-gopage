export const state = () => ({
  post: null,
  categories: null,
  posts: null,
  menus: [
    {
      parent: null,
      child: [
        {
          title: 'Hướng dẫn sử dụng phần mềm GoPage',
          order: 1,
          link: '/',
        },
      ],
    },
  ],
  arrLink: null,
  linkPre: null,
  linkNext: null,
  url: null
})

export const mutations = {
  setRoute(state, url){
    state.url = url
  },
  setPosts(state, data) {
    state.posts = data
  },
  setCategories(state, data) {
    state.categories = data
  },
  setMenus(state, data) {
    state.menus = data
  },
  fitterPost(state, slug) {
    state.post = state.posts.filter(
      (posts) => removeAccents(posts.Title) === slug
    )
  //  console.log(state.post[0].Content.replace('/uploads/','https://content.gostudio.co/uploads/'))
   
  },
  setLink(state, route) {
    state.menus.forEach((menu) => {
      menu.child.forEach((el) => {
        if (el.link === route) {
          state.arrLink = menu
        }
      })
    })

    state.arrLink.child.forEach((item, index) => {
     
      if (item.link === route) {
        state.linkNext = null
        state.linkPre = null
        if (index > 0) {  
          state.linkPre = {
                            category: state.arrLink.parent,
                            params: state.arrLink.child[index - 1]
                          }
        }
        if (index < state.arrLink.child.length - 1) { 
          state.linkNext = {
                            category: state.arrLink.parent,
                            params: state.arrLink.child[index + 1]
                          }
        }
      }
    })
  },
}

const removeAccents = (str) => {
  const AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ',
  ]
  for (let i = 0; i < AccentsMap.length; i++) {
    const re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g')
    const char = AccentsMap[i][0]
    str = str.replace(re, char)
  }
  return str.toLowerCase().replace(/\s/g, '-')
}



export const actions = {
  async nuxtServerInit({ commit, state }) {
    try {
      const posts = await this.$axios.$get(
        `https://content.gostudio.co/posts?_locale=vi`
      )
      const categories = await this.$axios.$get(
        `https://content.gostudio.co/categories?_locale=vi`
      )

      posts.forEach(post => {
        post.Content = post.Content.replace(/\/uploads/g,`https://content.gostudio.co/uploads`)
      })



      commit('setPosts', posts)
      commit('setCategories', categories)
    } catch (error) {
      console.log(error.message)
    }

    // state.posts.forEach(post => {
    //   post.Content.replace('/uploads/','https://content.gostudio.co/uploads/')
    // })


    state.categories.forEach((category, index) => {
      index = index + 1
      let stt = 0
      const postsCategory = state.posts
        .filter((post) => post.category.id === category.id)
        .sort((post1, post2) => parseInt(post1.Order) - parseInt(post2.Order))
        .map((post) => {
          stt = stt + 1
          return {
            // parent: category.title,
            title: `${index}.${stt}. ${post.Title}`,
            titlePost: post.Title,
            order: post.Order,
            link: `/${removeAccents(category.title)}/${removeAccents(post.Title)}`,
          }
      })

      state.menus.push({
        id: category.id,
        parent: category.title,
        child: postsCategory,
      })
    })
  },
}
