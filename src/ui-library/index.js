import {
  NavMenu,
  Select,
  Table,
  Pagination,
  Dialog,
  Button,
  Input,
  Upload,
  MessageBox,
  DatePicker
} from 'element-ui'
const element = {
 install: function (Vue) {
   Vue.use(NavMenu)
   Vue.use(Select)
   Vue.use(Table)
   Vue.use(Pagination)
   Vue.use(Dialog)
   Vue.use(Button)
   Vue.use(Input)
   Vue.use(Upload)
   Vue.use(MessageBox)
   Vue.use(DatePicker)
   
 

 }
}

export default element