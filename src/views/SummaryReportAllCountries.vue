<template>
    <main class="container">
        <h1>Summary data for all the countries </h1>
        <div class="table-head">
            <div class="row">
                <div class="col-3">Country name</div>
                <div class="col-3">Total active cases</div>
                <div class="col-3">Total cured cases</div>
                <div class="col-3">Total death cases</div>
            </div>
        </div>

        <div class="table-body">
            <div :key="country.ID" v-for="country in summaryData.Countries">
                <SummaryCountry :country="country"/>
            </div>
        </div>
    </main>
</template>

<script>
    import SummaryCountry from '../components/SummaryCountry'

    export default {
        name: 'SummaryReportAllCountries',
        components: {
            SummaryCountry
        },
        data() {
            return {
                summaryData: []
            }
        },
        methods: {
            async fetchSummaryData (){
                const response = await fetch(process.env.VUE_APP_SUMMARY)
                const data = await response.json()
                return data
            }
        },
        async mounted() {
            this.summaryData = await this.fetchSummaryData()
        }
    }
</script>