<template>
    <div class="row">
        <div class="col-3">{{country.Country}}</div>
        <div class="col-3">{{country.TotalConfirmed.toLocaleString()}}</div>
        <div class="col-3">{{country.TotalRecovered.toLocaleString()}}</div>
        <div class="col-3">{{country.TotalDeaths.toLocaleString()}}</div>
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