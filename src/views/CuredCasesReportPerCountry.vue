<template>
    <main class="container">
        <h1>Daily data for cured cases per selected country </h1>
        <h5>Pls.select a country to display cured cases</h5>
        <select id="countries" v-on:change="onChangeCountry($event)" class="col-12 col-md-3">
            <option disabled selected value="Please Select">Select country</option>
            <option v-for="country in countries" :value="country.Slug">{{ country.Country}}</option>
        </select>

        <div v-if="curedCasesPerCountry && curedCasesPerCountry.length !== 0">
            <div class="table-head">
                <div class="row">
                    <div class="col-sm-3 col-6">Date</div>
                    <div class="col-sm-3 col-6">Cured cases per day</div>
                </div>
            </div>
            <div class="table-body">
                <template v-for="curedCases in curedCasesPerCountry">
                    <DailyCuredCasesPerCountry :curedCases="curedCases"/>
                </template>
            </div>
        </div>
        <div v-else class="notification">
            {{notificationNoReport}}
        </div>
    </main>
</template>

<script>
    import DailyCuredCasesPerCountry from "../components/DailyCuredCasesPerCountry"

    export default {
        name: 'CuredCasesReportPerCountry',
        components: {
            DailyCuredCasesPerCountry
        },
        data() {
            return {
                countries: [],
                selectedCountry: '',
                curedCasesPerCountry: [],
                notificationNoReport: ''
            }
        },
        methods: {
            async fetchCountries (){
                const response = await fetch(`${process.env.VUE_APP_COUNTRIES}`)
                const data = await response.json()
                return data
            },
            onChangeCountry (e){
                this.selectedCountry = e.target.value
            },
            async fetchCuredCasesPerCountry (){
                const selectedCountry = this.selectedCountry
                const response = await fetch(`${process.env.VUE_APP_DAILY_REPORTS}${this.selectedCountry}`)
                const data = await response.json()
                return data
            }
        },
        watch: {
            async selectedCountry(selectedCountry, oldSelectedCountry) {
                if(selectedCountry !== oldSelectedCountry){
                    this.curedCasesPerCountry = await this.fetchCuredCasesPerCountry()
                    if(this.curedCasesPerCountry.length === 0){
                        this.notificationNoReport = "No Covid monitoring and reports are present"
                    }
                }
            }
        },
        async mounted() {
            this.countries = await this.fetchCountries()
        }
    }
</script>