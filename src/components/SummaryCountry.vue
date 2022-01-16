<template>
    <div class="row">
        <div class="col-3">{{country.Country}}</div>
        <div class="col-3">{{country.TotalConfirmed}}</div>
        <div class="col-3">{{country.TotalRecovered}}</div>
        <div class="col-3">{{country.TotalDeaths}}</div>
    </div>
</template>

<script>
    export default {
        name: 'SummaryCountry',
        props: {
            country: Object
        }
    }
</script>