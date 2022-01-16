<template>
    <div class="row">
        <div class="col-md-3 col-6">{{formattedDate}}</div>
        <div class="col-md-3 col-6">{{curedCases.Recovered}}</div>
    </div>
</template>

<script>
    export default {
        name: 'DailyActiveCasesPerCountry',
        data(){
            return{
                formattedDate: String,
                notificationIfReport: ''
            }
        },
        props: {
            curedCases: Object
        },
        created() {
            let day = this.curedCases.Date.slice(8, 10)
            let month = this.curedCases.Date.slice(5, 7)
            let year = this.curedCases.Date.slice(0, 4)

            this.formattedDate = `${day}\\${month}\\${year}`
        }
    }
</script>