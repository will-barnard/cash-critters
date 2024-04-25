import CritterData from '@/assets/CritterData';
import { createStore as _createStore } from 'vuex';

export function createStore() {
  let store = _createStore({
    state: {
      isBegin: false,
      activeCritters: [],
      inactiveCritters: []
    },
    mutations: {
      INIT(state) {
        for (let critter of CritterData.CritterList) {
          state.inactiveCritters.push(critter);
        }
        state.isBegin = true;
        store.commit("TICK")
      },
      TICK(state) {
        setTimeout( () => {
          for (let critter of state.activeCritters) {
            critter.tick();
          }
          store.commit("TICK")
        }, 6000);        
      },
      ADD_CRITTER(state, payload) {
        state.inactiveCritters = state.inactiveCritters.filter((obj) => {
          return obj.id != payload.id;
        })
        state.activeCritters.push(payload);
      },
      ADD_MO(state, payload) {
        state.critters.push(payload);
      },
      
      FEED_CRITTER(state, payload) {
        let critter = state.activeCritters.find((obj) => {
          return obj.id == payload.id;
        });
        CritterData.Feed(critter);
      }
    },
  });
  return store;
}