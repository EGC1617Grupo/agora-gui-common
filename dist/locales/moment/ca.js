!function(factory) {
    "function" == typeof define && define.amd ? define([ "moment" ], factory) : "object" == typeof exports ? module.exports = factory(require("../moment")) : factory(window.moment);
}(function(moment) {
    return moment.lang("ca", {
        months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
        monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
        longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: function() {
                return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextDay: function() {
                return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextWeek: function() {
                return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastDay: function() {
                return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastWeek: function() {
                return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "fa %s",
            s: "uns segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
        },
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });
});