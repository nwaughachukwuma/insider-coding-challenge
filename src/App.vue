<template>
	<div id="app">
    <div class="" hidden>
      {{computeModal}}
    </div>
		<score-area />
		<play-area /> 

    <bottom-tab />
	</div>
</template>

<script>
	import ScoreArea from './components/ScoreArea.vue';
  import PlayArea    from './components/PlayArea.vue';
  import BottomTab from '@/components/BottomTab'

  import { mapActions, mapState } from 'vuex';

	export default {
		components: { 
			ScoreArea,
      PlayArea,
      BottomTab
    },
    computed: {
      computeModal() {
        if (this.isModalShown) {
          this.showModal()
        }

        return this.isModalShown;
      },
      ...mapState([ 'isModalShown' ])
    },
    methods: {
      ...mapActions([ 'initGame' ]),
      showModal: function() {
        this.$buefy.dialog.alert({
            title: 'Game Over 😔',
            message: 'Your teeter-totter went out of balance.',
            confirmText: 'Try again'
        })
      }
    }
	};
</script>

<style lang="scss">

	html, body, #app {
		width  : 100%;
		height : 100%;
	}

	html {
		overflow-y: auto !important;
	}

	#app {
		display                 : flex;
		flex-direction          : column;
		-webkit-font-smoothing  : antialiased;
        -moz-osx-font-smoothing : grayscale;
	}

</style>
