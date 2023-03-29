import { createStore } from "vuex";
import axios from "axios";


export default createStore({
    state: {
        formations: [],
        soignants: [],
        parcours: [],
        soignant: []
    },
    getters: {
        getSoignants: (state) => state.soignants,
        getOneSoignant: (state) => state.soignant,
        getFormations: (state) => state.formations,
        getParcours: (state) => state.parcours
    },
    mutations: {
        SET_SOIGNANTS(state, soignants) {
            state.soignants = soignants;
        },
        SET_SOIGNANT(state, soignant) {
            state.soignant = soignant;
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
        async fetchOneSoignant({commit}, id) {
            try {
                const data = await axios.get(`http://localhost:8000/soignant/${id}`);
                commit("SET_SOIGNANT", data.data);
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
