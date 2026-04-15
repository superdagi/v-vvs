import { 
  Quasar, 
  Notify, 
  Dialog, 
  Loading, 
  QBtn, 
  QIcon, 
  QMenu, 
  QList, 
  QItem, 
  QItemSection,
  QCard,
  QCardSection,
  QImg,
  QChip,
  QSeparator,
  QBtnToggle,
  ClosePopup 
} from 'quasar'
import iconSet from 'quasar/icon-set/material-icons'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    plugins: {
      Notify,
      Dialog,
      Loading
    },
    directives: {
      ClosePopup
    },
    components: {
      QBtn,
      QIcon,
      QMenu,
      QList,
      QItem,
      QItemSection,
      QCard,
      QCardSection,
      QImg,
      QChip,
      QSeparator,
      QBtnToggle
    },
    iconSet: iconSet,
    config: {
      brand: {
        primary: '#FF8C00',
        secondary: '#E67E00',
        accent: '#FFA500',
        dark: '#2C2C2C',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#FF8F00'
      }
    }
  })
})