<template>
  <div class="navbar">
    <div class="colum">
      <b-button 
          id         = "play-btn"
          class      = "controls-panel__btn"
          size       = "is-medium"
          tabindex   = "-1"
          :icon-left = "isGamePaused ? 'play' : 'pause'"
          @click     = "toggleSimulation"
      ></b-button>
      <b-button
        class="controls-panel__btn"
        size="is-medium"
        icon-left="refresh"
        tabindex="-1"
        @click="initGame"
        outlined
      >
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { SPACE_KEY } from '@/constants/controls';

export default {
  data: () => ({
    effect: "lni-tada-effect"
  }),
  methods: {
    ...mapActions(["initGame"]),
    ...mapMutations(["toggleSimulation"]),

    getTotalWeight(shapes = []) {
      return shapes.reduce((total, current) => (total += current.weight), 0);
    },

    handleSpaceClick(event) {
      // Prevents double click if any button focused
      event.preventDefault();

      if (event.keyCode === SPACE_KEY && !this.isModalShown) {
        this.toggleSimulation();
      }
    }
  },
  computed: {
    ...mapState([ 
      'isGamePaused', 
      'isModalShown',
    ]),
    playPauseClass: function() {
      return {
        "lni-play": !this.showCheck,
        "lni-pause": this.showCheck,
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.controls-panel__btn {
  transition: 300ms ease-out;
  outline: none;

  &:first-of-type {
    margin-right: 0.5rem;
  }
}

.controls-panel {
  display: flex;
  justify-content: space-between;
  flex: 0 0 6rem;
  padding: 0.5rem 1.5rem;
}

.controls-panel__btn {
  transition: 300ms ease-out;
  outline: none;

  &:first-of-type {
    margin-right: 0.5rem;
  }
}

.shapes-stats {
  font-size: 14px;
}

.shapes-stats__weight {
  font-size: 1rem;
  font-weight: 500;
}
</style>

<style lang="css" scoped>
.navbar {
  width: 100%;
  height: 60px;
  background-color: #192a56;
  bottom: 0;
  position: fixed;
  box-shadow: 0.1px 0.1px 15px 0.1px #273c75;
  border-radius: 5px;
  display: flex;
}
.colum {
  display: flex;
  width: 95%;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
}
</style>