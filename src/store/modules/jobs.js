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
  async fetchJobs({ commit }, e) {
    const response = await axios.get('data.json');
    commit('setJobs', response.data);

    if (e.target.innerHTML.toLowerCase() === 'clear') {
      commit('clearFilter');
    }
  },
  addToFilter({ commit }, e) {
    commit('addFilter', e.target.innerHTML);
    commit('filterJobs', e.target);
  },
};

const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
  addFilter: (state, tag) => state.filterTags.push(tag),
  filterJobs: (state, tag) => {
    if (tag.classList[1] === 'role') {
      state.jobs = state.jobs.filter(
        (job) => job.role.toLowerCase() === tag.innerHTML.toLowerCase()
      );
    }
    if (tag.classList[1] === 'level') {
      state.jobs = state.jobs.filter(
        (job) => job.level.toLowerCase() === tag.innerHTML.toLowerCase()
      );
    }
    if (tag.classList[1] === 'languages') {
      state.jobs = state.jobs.filter((job) =>
        job.languages.includes(tag.innerHTML)
      );
    }
    if (tag.classList[1] === 'tools') {
      state.jobs = state.jobs.filter((job) =>
        job.tools.includes(tag.innerHTML)
      );
    }
  },
  clearFilter: (state) => {
    state.filterTags = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
