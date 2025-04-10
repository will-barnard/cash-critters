import CritterData from '@/assets/CritterData';
import { createStore as _createStore } from 'vuex';

export function createStore() {
  let store = _createStore({
    state: {
      isBegin: false,
      activeCritters: [],
      inactiveCritters: [],
      currency: {
        food: 10,
        love: 0,
        money: 0,
      }
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
        }, 3000);        
      },
      ADD_CRITTER(state, payload) {
        state.inactiveCritters = state.inactiveCritters.filter((obj) => {
          return obj.id != payload.id;
        })
        state.activeCritters.push(payload);
      },
      FEED_CRITTER(state, payload) {
        let critter = state.activeCritters.find((obj) => {
          return obj.id == payload.id;
        });


        let love = critter.loveMulti;
        if (critter.hunger < critter.becomeStarving && critter.hunger >= critter.becomeHungry) {
          love *= 4;
        } else if (critter.hunger < critter.becomeIrate && critter.hunger >= critter.becomeStarving) {
          love *= 2;
        }
        for (let toys of critter.toys) {
          love += toys.loveMulti;
        }
        let furnitureMult = 1;
        for (let furniture of critter.furniture) {
          furnitureMult += furniture.loveMulti;
        }
        love *= furnitureMult;
        critter.love += love;
        CritterData.Feed(critter);
        store.commit("UPDATE_FOOD", state.currency.food - 1);
      },
      COLLECT_LOVE(state, payload) {
        store.commit("UPDATE_LOVE", state.currency.love += payload.love);
        payload.love = 0;
      },
      UPDATE_FOOD(state, payload) {
        state.currency.food = payload;
      },
      UPDATE_LOVE(state, payload) {
        state.currency.love = payload;
      },
      UPDATE_MONEY(state, payload) {
        state.currency.money = payload;
      }
    },
  });
  return store;
}