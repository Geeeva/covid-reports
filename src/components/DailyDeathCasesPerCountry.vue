<template>
    <div class="row">
        <div class="col-md-3 col-6">{{formattedDate}}</div>
        <div class="col-md-3 col-6">{{deathCases.Deaths.toLocaleString()}}</div>
    </div>
</template>

<script>
    export default {
        name: 'DailyDeathCasesPerCountry',
        data(){
            return{
                formattedDate: String,
                notificationIfReport: ''
            }
        },
        props: {
            deathCases: Object
        },
        mounted() {
            let year = this.deathCases.Date.slice(0, 4)
            let month = this.deathCases.Date.slice(5, 7)
            let day = this.deathCases.Date.slice(8, 10)
            this.formattedDate = `${day}/${month}/${year}`
        }
    }
</script>