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
import { computed, onMounted } from 'vue';

const DAISYUI_CDN = 'https://cdn.jsdelivr.net/npm/daisyui@5.5.18/daisyui.css';
const LINK_ID = 'daisyui-cdn-css';

function injectDaisyUI() {
  const doc = wwLib.getFrontDocument();
  if (doc.getElementById(LINK_ID)) return;
  const link = doc.createElement('link');
  link.id = LINK_ID;
  link.rel = 'stylesheet';
  link.href = DAISYUI_CDN;
  doc.head.appendChild(link);
}

export default {
  props: {
    uid: { type: String, required: true },
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  setup(props, { emit }) {
    onMounted(() => {
      injectDaisyUI();
    });

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
