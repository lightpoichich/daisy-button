<template>
  <button
    :data-theme="content?.theme || undefined"
    :class="classes"
    :disabled="props.content?.disabled"
    @click="handleClick"
  >
    <span
      v-if="props.content?.loading"
      class="loading loading-spinner"
    ></span>
    <wwLayout path="buttonContent" direction="row" />
  </button>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    uid: { type: String, required: true },
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  setup(props, { emit }) {
    const classes = computed(() => {
      const c = ['btn'];

      const colorVariant = props.content?.colorVariant;
      if (colorVariant && colorVariant !== 'default') {
        c.push(`btn-${colorVariant}`);
      }

      const styleVariant = props.content?.styleVariant;
      if (styleVariant && styleVariant !== 'solid') {
        c.push(`btn-${styleVariant}`);
      }

      const size = props.content?.size;
      if (size && size !== 'md') {
        c.push(`btn-${size}`);
      }

      if (props.content?.wide) {
        c.push('btn-wide');
      }

      const customClasses = props.content?.customClasses;
      if (customClasses) {
        c.push(customClasses);
      }

      return c;
    });

    const handleClick = () => {
      if (props.content?.disabled) return;
      emit('trigger-event', {
        name: 'click',
        event: {},
      });
    };

    return {
      classes,
      handleClick,
    };
  },
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
}
</style>
