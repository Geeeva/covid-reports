import  {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home"
import SummaryReportAllCountries from '../views/SummaryReportAllCountries'
import ActiveCasesReportPerCountry from '../views/ActiveCasesReportPerCountry'
import CuredCasesReportPerCountry from '../views/CuredCasesReportPerCountry'
import DeathCasesReportPerCountry from '../views/DeathCasesReportPerCountry'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/all-countries',
        name: 'SummaryReportAllCountries',
        component: SummaryReportAllCountries
    },
    {
        path: '/active-cases-report-per-country',
        name: 'ActiveCasesReportPerCountry',
        component: ActiveCasesReportPerCountry
    },
    {
        path: '/cured-cases-report-per-country',
        name: 'CuredCasesReportPerCountry',
        component: CuredCasesReportPerCountry
    },
    {
        path: '/death-cases-report-per-country',
        name: 'DeathCasesReportPerCountry',
        component: DeathCasesReportPerCountry
    },
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})

export default router