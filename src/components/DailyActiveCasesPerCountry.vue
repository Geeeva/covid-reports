<template>
    <div class="row">
        <div class="col-md-3 col-6">{{formattedDate}}</div>
        <div class="col-md-3 col-6">{{activeCases.Active.toLocaleString()}}</div>
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
            activeCases: Object
        },
        mounted() {
            let day = this.activeCases.Date.slice(8, 10)
            let month = this.activeCases.Date.slice(5, 7)
            let year = this.activeCases.Date.slice(0, 4)

            this.formattedDate = `${day}/${month}/${year}`
        }
    }
</script>