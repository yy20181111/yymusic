import {
   Carousel,
   CarouselItem,
   Slider,
   CollapseTransition,
   Button
} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Slider)
    Vue.use(Button)
    Vue.use(CollapseTransition)
  }
}

export default element