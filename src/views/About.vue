<template>
  <div class="about">
    <div class="result">{{animatedNumber === false ? '' : animatedNumber}}</div>
    <div class="grid num">
      <div v-for="num in numbers" @click="setCurrentNumber(num)">
        {{num}}
      </div>
    </div>
    <div class="grid">
      <div v-for="op in operands" @click="setCurrentOperand(op)">
        <span>{{op}}</span>
      </div>
    </div>
    <!-- <span @click="decrease">-</span> -->
    <!-- <h1>{{computedCount}}</h1> -->
    <!-- <span @click="increase">+</span> -->
  </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

export default {
  data(){
    return {
    count: 0,
    totals: '',
    tweenedNumber: 0
    }
  },
  methods: {
    setCurrentNumber(number) {
      if (this.$store.getters.CURRENT_PROCEDURE 
      &&  this.$store.getters.CURRENT_NUM) {
        return this.calc(number)
      }
      return this.$store.dispatch('SET_CURRENT_NUBMER', number)
    },
    setCurrentOperand(operand) {
      this.$store.dispatch('SET_CURRENT_PROCEDURE', operand)
    },
    calc(number) {
      this.$store.dispatch('CALC', number)
    }
  },
  computed: {
    newTotals() {
      return this.$store.getters.TOTALS
    },
    animatedNumber: function() {
      return this.newTotals !== null && this.tweenedNumber.toFixed(0);
    },
    computedCount: {
      get() {
        return this.count = this.$store.getters.COUNT
      }
    },
    operands: {
      get() {
        return this.operands = this.$store.getters.PROCEDURES
      }
    },
    numbers: {
      get() {
        return this.numbers = this.$store.getters.NUMBERS
      }
    }
  },
  watch: {
    newTotals: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 250px;
    margin: auto;
    align-items: center;
    div {
      font-size: 40px;
      font-weight: bold;
      box-shadow: 0px 0px 0.02px #00000040;
      cursor: pointer;
      transition: box-shadow 0.3s linear;
    }
    div:hover {
        box-shadow: 0px 0px 4px 0px #0096ffd4;
      }


    & :last-child {
        grid-column: auto / span 3;
    }
  }

  .result {
    font-size: 40px;
    height: 45px;
    font-weight: bold;
  }
</style>
