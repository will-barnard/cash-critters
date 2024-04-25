import CritterData from '@/assets/CritterData';
import { createStore as _createStore } from 'vuex';

export function createStore() {
  let store = _createStore({
    state: {
      critters: [],
      critterIndex: new Number(0)
    },
    mutations: {
      CHANGE_CRITTERS(state, payload) {
        state.critters = payload;
      },
      ADD_CRITTER(state, payload) {
        const index = new Number(state.critterIndex);
        payload.critterId = index;
        state.critterIndex++;
        state.critters.push(payload);
      },
      ADD_MO(state, payload) {
        state.critters.push(payload);
      },
      TICK_CRITTERS(state) {
        for (let critter of state.critters) {
          critter.tick();
        }
      },
      FEED_CRITTER(state, payload) {
        let critter = state.critters.find((obj) => {
          return obj.name == payload.name;
        })
        CritterData.Feed(critter);
      }
    },
  });
  return store;
}