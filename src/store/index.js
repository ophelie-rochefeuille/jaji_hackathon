import { createStore } from "vuex";
import axios from "axios";


export default createStore({
    state: {
        formations: [],
        soignants: [],
        parcours: []
    },
    getters: {
        getSoignants: (state) => state.soignants,
        getFormations: (state) => state.formations,
        getParcours: (state) => state.parcours
    },
    mutations: {
        SET_SOIGNANTS(state, soignants) {
            state.soignants = soignants;
        },
        SET_FORMATIONS(state, formations) {
            state.formations = formations;
        },
        SET_PARCOURS(state, parcours) {
            state.parcours = parcours;
        },
    },

    actions: {
        async fetchSoignants({commit}) {
            try {
                const data = await axios.get('http://localhost:8000/soignant/');
                commit("SET_SOIGNANTS", data.data);
            } catch (error) {
                console.log(error);
            }
        },
        async fetchParcours({commit}) {
            try {
                const data = await axios.get('http://localhost:8000/parcours/');
                commit("SET_PARCOURS", data.data);
            } catch (error) {
                console.log(error);
            }
        },
        async fetchFormations({commit}) {
            try {
                const data = await axios.get('http://localhost:8000/formation/');
                commit("SET_FORMATIONS", data.data);
            } catch (error) {
                console.log(error);
            }
        },

    }
});
