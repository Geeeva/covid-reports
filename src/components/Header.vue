<template>
    <header class="container-fluid">
        <div class="container">
            <div class="logo">
                <router-link to="/"><img :src="img" class="img-responsive" alt="Covid-logo"></router-link>
            </div>
            <nav class="navi-desktop-site">
                <ul class="navi-level-1 uppercase">
                    <li><router-link to="/all-countries">Summary data</router-link></li>
                    <li><router-link to="/active-cases-report-per-country">Active cases</router-link></li>
                    <li><router-link to="/cured-cases-report-per-country">Cured cases</router-link></li>
                    <li><router-link to="/death-cases-report-per-country">Death cases</router-link></li>
                </ul>
            </nav>
            <div id="sidemenu">
                <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
                    <span class="top"></span>
                    <span class="mid"></span>
                    <span class="bottom"></span>
                </button>
                <transition name="translateX">
                    <nav v-show="navOpen">
                        <div class="sidemenu__wrapper">
                            <ul class="sidemenu__list">
                                <li><router-link to="/all-countries" v-on:click="navOpen=!navOpen">Summary data</router-link></li>
                                <li><router-link to="/active-cases-report-per-country" v-on:click="navOpen=!navOpen">Active cases</router-link></li>
                                <li><router-link to="/cured-cases-report-per-country" v-on:click="navOpen=!navOpen">Cured cases</router-link></li>
                                <li><router-link to="/death-cases-report-per-country" v-on:click="navOpen=!navOpen">Death cases</router-link></li>
                            </ul>
                        </div>
                    </nav>
                </transition>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',

    data() {
        return {
                img: ['covid-logo.svg'],
                el: '#sidemenu',
                navOpen: false,
            }
        }
    }
</script>