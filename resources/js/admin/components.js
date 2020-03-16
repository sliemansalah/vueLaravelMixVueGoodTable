import Vue from 'vue'
import Layout from './views/Layout'

import Header from './views/partials/Header'
import Navbar from './views/partials/Navbar'
import LeftSideMenu from './views/partials/LeftSideMenu'
import Footer from './views/partials/Footer'

import Customers from './views/customers/Index'
import ViewCustomers from './views/customers/View'

import DataTable from './components/metronic/DataTable.vue'
import VAction from './components/metronic/goodtable/VAction.vue'
import VEmpty from './components/metronic/goodtable/VEmpty.vue'
import VHeader from './components/metronic/goodtable/VHeader.vue'
import VStatus from './components/metronic/goodtable/VStatus.vue'
import VFilter from './components/metronic/goodtable/VFilter.vue'

import CustomerForm from './components/customers/CustomerForm.vue'

Vue.component('layout', Layout)

Vue.component('appHeader', Header)
Vue.component('quickNav', Navbar)
Vue.component('lsideMenu', LeftSideMenu)
Vue.component('appFooter', Footer)

Vue.component('Customers', Customers)
Vue.component('ViewCustomers', ViewCustomers)

Vue.component('DT', DataTable)
Vue.component('VAction', VAction)
Vue.component('VEmpty', VEmpty)
Vue.component('VHeader', VHeader)
Vue.component('VStatus', VStatus)
Vue.component('VFilter', VFilter)

Vue.component('CustomerForm', CustomerForm)
