import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import type { BeverageType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    // the options to pick from
    temps: tempretures,
    bases: bases,
    creamers: creamers,
    syrups: syrups,

    // what is picked right now
    currentTemp: tempretures[0],
    currentBase: bases[0],
    currentCreamer: creamers[0],
    currentSyrup: syrups[0],

    // name typed in the text box
    currentName: "",

    // list of saved beverages
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
  }),

  actions: {
    // save the current choices as a new beverage
    makeBeverage() {
      if (this.currentName === "") {
        return;
      }
      const newBeverage: BeverageType = {
        id: String(this.beverages.length + 1),
        name: this.currentName,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      };
      this.beverages.push(newBeverage);
      this.currentBeverage = newBeverage;
      this.currentName = "";
    },

    // change the mug to show the beverage that was clicked
    showBeverage() {
      if (this.currentBeverage === null) {
        return;
      }
      this.currentTemp = this.currentBeverage.temp;
      this.currentBase = this.currentBeverage.base;
      this.currentSyrup = this.currentBeverage.syrup;
      this.currentCreamer = this.currentBeverage.creamer;
    },
  },
  persist: true,
});
