import axios from 'axios';

const state = {
  jobs: [],
  filterTags: [],
};

const getters = {
  allJobs: (state) => state.jobs,
  allFilterTags: (state) => state.filterTags,
};

const actions = {
  async fetchJobs({ commit }) {
    const response = await axios.get('data.json');
    commit('setJobs', response.data);
  },
  addToFilter({ commit }, e) {
    commit('addFilter', e.target.innerHTML);
    console.log(`${e.target.innerHTML} added to array`);
  },
  clearFilter({ commit }) {
    commit('clearFilter');
  },
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
  addFilter: (state, tag) => state.filterTags.push(tag),
  clearFilter: (state) => (state.filterTags = []),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
