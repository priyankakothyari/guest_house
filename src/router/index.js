import HomeView from '@/views/HomeView.vue'
import InvoiceFormView from '@/views/InvoiceFormView.vue'
import Invoice from '@/views/Invoice.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'HomeView',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'InvoiceFormView',
      component: InvoiceFormView
    },
    {
      path: '/invoice/:guestHouseName/:ownerName/:contactNumber/:guestName/:totalGuests/:totalRooms/:checkIn/:checkOut',
      name: 'Invoice',
      component: Invoice
    }
  ]
})

export default router
