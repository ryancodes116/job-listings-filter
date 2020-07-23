import axios from 'axios';

const state = {
  jobs: [],
};

const getters = {
  allJobs: (state) => state.jobs,
};

const actions = {
  async fetchJobs({ commit }) {
    const response = await axios.get('data.json');
    commit('setJobs', response.data);
  },
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
