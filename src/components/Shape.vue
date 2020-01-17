<template>
    <div
        class  = "shape"
        :class = "shapeClasses"
        style="animation-delay: 0.3s animation-duration: 0.7s"
    >
        <div class="shape__weight"> {{ shape.weight }} kg </div>
    </div>
</template>

<script>
    import { CIRCLE, TRIANGLE, SQUARE } from '@/constants/shape';
    import {mapState} from 'vuex';

    export default {
        name  : 'Shape',
        props : {
            onBoard: {
                type     : Boolean,
                required : false,
                default  : false
            },
            randomlyPlaced: {
                type     : Boolean,
                required : false,
                default  : false
            },
            shape: {
                type     : Object,
                required : true
            }
        },
        computed: {
            ...mapState([ 'isModalShown' ]),
            shapeClasses() {
                const { type } = this.shape;

                return {
                    'shape--square'   : type === SQUARE,
                    'shape--triangle' : type === TRIANGLE,
                    'shape--circle'   : type === CIRCLE,
                    // 'lni-flashing-effect': this.isModalShown,
                    "animated fadeOutDown": this.isModalShown,
                };
            }
        },
        mounted() {
            this.setShapeAppearance();

            this.$watch('shape.left', this.setShapePosition, { immediate: true });
        },
        methods: {
            setShapeAppearance() {
                const { style } = this.$el;
                const { color, scale, type } = this.shape;

                if (type === TRIANGLE) {
                    style.borderBottomColor = color;
                }
                else {
                    style.backgroundColor = color;
                }

                style.transform = `scale(${ scale })`;

                if (this.onBoard) {
                    style.transform += ' translateY(-100%)';
                }
            },

            setShapePosition(left) {
                const { width } = this.$el.getBoundingClientRect();
                const start = this.randomlyPlaced ? 60 : 0;

                this.$el.style.left = (this.randomlyPlaced && left > 25)
                    ? `calc(${ start + left }% - ${ width }px)`
                    : `${ start + left }%`;
            }
        }
    };
</script>

<style lang="scss" scoped>

    .shape {
        position         : absolute;
        display          : flex;
        align-items      : center;
        justify-content  : center;
        transform-origin : top left;

        .shape__weight {
            font-size   : 10px;
            font-weight : 500;
            color       : #fff;
        }
    }

    .shape--square,
    .shape--circle {
        width  : 2.25rem;
        height : 2.25rem;
    }

    .shape--circle {
        border-radius: 50%;
    }

    .shape--triangle {
        width         : 0;
        height        : 0;
        border-left   : 1.5rem solid transparent;
        border-right  : 1.5rem solid transparent;
        border-bottom : 2rem solid;

        .shape__weight {
            position   : absolute;
            top        : calc(100% + 1rem);
            width      : 4.5rem;
            text-align : center;
        }
    }

</style>
