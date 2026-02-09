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
  emits: ['trigger-event'],
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
/* wwEditor:start */
button :deep(.ww-layout-item:empty)::after {
  content: 'Drop button content here';
  color: #999;
  font-size: 12px;
  font-style: italic;
  pointer-events: none;
}
/* wwEditor:end */

/* ============================================================
   DaisyUI v5.5 Button – Self-contained (no CDN dependency)
   ============================================================ */

/* --- Theme tokens (default = light) --- */
button {
  --color-base-100: #ffffff;
  --color-base-200: #f2f2f2;
  --color-base-300: #e5e6e6;
  --color-base-content: #1f2937;
  --color-primary: #4506cb;
  --color-primary-content: #d4c5fc;
  --color-secondary: #d926a9;
  --color-secondary-content: #ffd8f4;
  --color-accent: #1fb2a6;
  --color-accent-content: #07312d;
  --color-neutral: #2a323c;
  --color-neutral-content: #a6adbb;
  --color-info: #3abff8;
  --color-info-content: #002b36;
  --color-success: #36d399;
  --color-success-content: #003320;
  --color-warning: #fbbd23;
  --color-warning-content: #382800;
  --color-error: #f87272;
  --color-error-content: #470000;
  --radius-field: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
}

button[data-theme="dark"] {
  --color-base-100: #1d232a;
  --color-base-200: #191e24;
  --color-base-300: #15191e;
  --color-base-content: #a6adbb;
  --color-primary: #6419e6;
  --color-primary-content: #e8dbff;
  --color-secondary: #d926a9;
  --color-secondary-content: #ffd8f4;
  --color-accent: #1fb2a6;
  --color-accent-content: #07312d;
  --color-neutral: #2a323c;
  --color-neutral-content: #a6adbb;
  --color-info: #3abff8;
  --color-info-content: #002b36;
  --color-success: #36d399;
  --color-success-content: #003320;
  --color-warning: #fbbd23;
  --color-warning-content: #382800;
  --color-error: #f87272;
  --color-error-content: #470000;
  --radius-field: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
}

button[data-theme="cupcake"] {
  --color-base-100: #faf7f5;
  --color-base-200: #efeae6;
  --color-base-300: #e7e2df;
  --color-base-content: #291334;
  --color-primary: #65c3c8;
  --color-primary-content: #223d3e;
  --color-secondary: #ef9fbc;
  --color-secondary-content: #4e1a2f;
  --color-accent: #eeaf3a;
  --color-accent-content: #4a3408;
  --color-neutral: #291334;
  --color-neutral-content: #a6adbb;
  --color-info: #3abff8;
  --color-info-content: #002b36;
  --color-success: #36d399;
  --color-success-content: #003320;
  --color-warning: #fbbd23;
  --color-warning-content: #382800;
  --color-error: #f87272;
  --color-error-content: #470000;
  --radius-field: 2rem;
  --size-field: 0.25rem;
  --border: 2px;
  --depth: 1;
}

button[data-theme="synthwave"] {
  --color-base-100: #1a103d;
  --color-base-200: #211547;
  --color-base-300: #2d1b69;
  --color-base-content: #c4a2e8;
  --color-primary: #e779c1;
  --color-primary-content: #3d1531;
  --color-secondary: #58c7f3;
  --color-secondary-content: #002b36;
  --color-accent: #f3cc30;
  --color-accent-content: #382800;
  --color-neutral: #4506cb;
  --color-neutral-content: #b4a5d4;
  --color-info: #3abff8;
  --color-info-content: #002b36;
  --color-success: #1fb2a6;
  --color-success-content: #07312d;
  --color-warning: #e2d562;
  --color-warning-content: #382800;
  --color-error: #fb7185;
  --color-error-content: #291334;
  --radius-field: 0.5rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
}

button[data-theme="cyberpunk"] {
  --color-base-100: #ffee00;
  --color-base-200: #e6d700;
  --color-base-300: #ccbf00;
  --color-base-content: #000000;
  --color-primary: #ff7598;
  --color-primary-content: #1a0008;
  --color-secondary: #75d1f0;
  --color-secondary-content: #001b28;
  --color-accent: #c07eec;
  --color-accent-content: #1e0533;
  --color-neutral: #2a282e;
  --color-neutral-content: #ffee00;
  --color-info: #3abff8;
  --color-info-content: #000000;
  --color-success: #36d399;
  --color-success-content: #000000;
  --color-warning: #fbbd23;
  --color-warning-content: #000000;
  --color-error: #f87272;
  --color-error-content: #000000;
  --radius-field: 0;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
}

button[data-theme="retro"] {
  --color-base-100: #e4d8b4;
  --color-base-200: #d2c59a;
  --color-base-300: #c2b280;
  --color-base-content: #7d5a3c;
  --color-primary: #ef9995;
  --color-primary-content: #5c2320;
  --color-secondary: #a4cbb4;
  --color-secondary-content: #28493a;
  --color-accent: #dc8850;
  --color-accent-content: #7d5a3c;
  --color-neutral: #7d7259;
  --color-neutral-content: #d4c9a8;
  --color-info: #2094f3;
  --color-info-content: #e4d8b4;
  --color-success: #009485;
  --color-success-content: #e4d8b4;
  --color-warning: #ff9900;
  --color-warning-content: #e4d8b4;
  --color-error: #f87272;
  --color-error-content: #5c2320;
  --radius-field: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
}

button[data-theme="forest"] {
  --color-base-100: #171212;
  --color-base-200: #140f0f;
  --color-base-300: #110c0c;
  --color-base-content: #cec7c7;
  --color-primary: #1eb854;
  --color-primary-content: #000000;
  --color-secondary: #20b78c;
  --color-secondary-content: #041f17;
  --color-accent: #25b4aa;
  --color-accent-content: #052320;
  --color-neutral: #18493a;
  --color-neutral-content: #c2d8d0;
  --color-info: #3abff8;
  --color-info-content: #000000;
  --color-success: #36d399;
  --color-success-content: #000000;
  --color-warning: #fbbd23;
  --color-warning-content: #000000;
  --color-error: #f87272;
  --color-error-content: #000000;
  --radius-field: 2rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
}

button[data-theme="nord"] {
  --color-base-100: #eceff4;
  --color-base-200: #e5e9f0;
  --color-base-300: #d8dee9;
  --color-base-content: #2e3440;
  --color-primary: #5e81ac;
  --color-primary-content: #0e1520;
  --color-secondary: #81a1c1;
  --color-secondary-content: #131c27;
  --color-accent: #88c0d0;
  --color-accent-content: #151f24;
  --color-neutral: #4c566a;
  --color-neutral-content: #d8dee9;
  --color-info: #b48ead;
  --color-info-content: #1a0f18;
  --color-success: #a3be8c;
  --color-success-content: #1a2013;
  --color-warning: #ebcb8b;
  --color-warning-content: #332a13;
  --color-error: #bf616a;
  --color-error-content: #170c0d;
  --radius-field: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
}

button[data-theme="dracula"] {
  --color-base-100: #282a36;
  --color-base-200: #242630;
  --color-base-300: #20222b;
  --color-base-content: #f8f8f2;
  --color-primary: #ff79c6;
  --color-primary-content: #1f0515;
  --color-secondary: #bd93f9;
  --color-secondary-content: #170d27;
  --color-accent: #ffb86c;
  --color-accent-content: #29190a;
  --color-neutral: #414558;
  --color-neutral-content: #c5c8d4;
  --color-info: #8be9fd;
  --color-info-content: #16292f;
  --color-success: #50fa7b;
  --color-success-content: #0b2a13;
  --color-warning: #f1fa8c;
  --color-warning-content: #2b2e13;
  --color-error: #ff5555;
  --color-error-content: #1f0808;
  --radius-field: 0.5rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
}

button[data-theme="corporate"] {
  --color-base-100: #ffffff;
  --color-base-200: #ededed;
  --color-base-300: #dbdbdb;
  --color-base-content: #181830;
  --color-primary: #4b6bfb;
  --color-primary-content: #ffffff;
  --color-secondary: #7b92b2;
  --color-secondary-content: #ffffff;
  --color-accent: #67cba0;
  --color-accent-content: #ffffff;
  --color-neutral: #000000;
  --color-neutral-content: #ffffff;
  --color-info: #4b95d6;
  --color-info-content: #ffffff;
  --color-success: #2cb67d;
  --color-success-content: #ffffff;
  --color-warning: #e6a817;
  --color-warning-content: #000000;
  --color-error: #f87272;
  --color-error-content: #000000;
  --radius-field: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;
}

/* --- Base .btn --- */
button.btn {
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  outline-offset: 2px;
  -webkit-user-select: none;
  user-select: none;
  padding-inline: var(--btn-p, 1rem);
  color: var(--btn-fg, var(--color-base-content));
  height: var(--size, calc(var(--size-field, 0.25rem) * 10));
  min-height: var(--size, calc(var(--size-field, 0.25rem) * 10));
  font-size: var(--fontsize, 0.875rem);
  outline-color: var(--btn-color, var(--color-base-content));
  background-color: var(--btn-bg, var(--btn-color, var(--color-base-200)));
  border-width: var(--border, 1px);
  border-style: solid;
  border-color: var(--btn-border, rgba(0, 0, 0, 0.08));
  touch-action: manipulation;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: var(--radius-field, 0.25rem);
  flex-wrap: nowrap;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition-property: color, background-color, border-color, box-shadow, filter;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  display: inline-flex;
  font-family: inherit;
  min-width: 4rem;

  --btn-fg: var(--color-base-content);
  --btn-p: 1rem;
  --size: calc(var(--size-field, 0.25rem) * 10);
}

/* Hover */
@media (hover: hover) {
  button.btn:hover:not(:disabled) {
    filter: brightness(0.92);
  }
}

/* Focus */
button.btn:focus-visible {
  isolation: isolate;
  outline-width: 2px;
  outline-style: solid;
}

/* Active */
button.btn:active:not(:disabled) {
  filter: brightness(0.88);
  transform: translateY(0.5px);
  box-shadow: none;
}

/* Disabled */
button.btn:disabled {
  pointer-events: none;
  opacity: 0.3;
  cursor: not-allowed;
}

/* --- Color variants --- */
button.btn.btn-primary {
  --btn-color: var(--color-primary);
  --btn-fg: var(--color-primary-content);
  background-color: var(--color-primary);
  color: var(--color-primary-content);
  border-color: var(--color-primary);
}
button.btn.btn-secondary {
  --btn-color: var(--color-secondary);
  --btn-fg: var(--color-secondary-content);
  background-color: var(--color-secondary);
  color: var(--color-secondary-content);
  border-color: var(--color-secondary);
}
button.btn.btn-accent {
  --btn-color: var(--color-accent);
  --btn-fg: var(--color-accent-content);
  background-color: var(--color-accent);
  color: var(--color-accent-content);
  border-color: var(--color-accent);
}
button.btn.btn-neutral {
  --btn-color: var(--color-neutral);
  --btn-fg: var(--color-neutral-content);
  background-color: var(--color-neutral);
  color: var(--color-neutral-content);
  border-color: var(--color-neutral);
}
button.btn.btn-info {
  --btn-color: var(--color-info);
  --btn-fg: var(--color-info-content);
  background-color: var(--color-info);
  color: var(--color-info-content);
  border-color: var(--color-info);
}
button.btn.btn-success {
  --btn-color: var(--color-success);
  --btn-fg: var(--color-success-content);
  background-color: var(--color-success);
  color: var(--color-success-content);
  border-color: var(--color-success);
}
button.btn.btn-warning {
  --btn-color: var(--color-warning);
  --btn-fg: var(--color-warning-content);
  background-color: var(--color-warning);
  color: var(--color-warning-content);
  border-color: var(--color-warning);
}
button.btn.btn-error {
  --btn-color: var(--color-error);
  --btn-fg: var(--color-error-content);
  background-color: var(--color-error);
  color: var(--color-error-content);
  border-color: var(--color-error);
}

/* --- Style variants --- */

/* Ghost */
button.btn.btn-ghost {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  color: var(--btn-color, var(--color-base-content));
}
@media (hover: hover) {
  button.btn.btn-ghost:hover:not(:disabled) {
    background-color: rgba(0, 0, 0, 0.08);
    filter: none;
  }
}

/* Link */
button.btn.btn-link {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  text-decoration: underline;
  color: var(--btn-color, var(--color-primary));
}
@media (hover: hover) {
  button.btn.btn-link:hover:not(:disabled) {
    filter: brightness(0.85);
    background-color: transparent;
  }
}
button.btn.btn-link:disabled,
button.btn.btn-ghost:disabled {
  background-color: transparent;
}

/* Outline */
button.btn.btn-outline {
  background-color: transparent;
  border-color: var(--btn-color, var(--color-base-content));
  color: var(--btn-color, var(--color-base-content));
  box-shadow: none;
}
@media (hover: hover) {
  button.btn.btn-outline:hover:not(:disabled) {
    background-color: var(--btn-color, var(--color-base-content));
    color: var(--btn-fg, var(--color-base-100));
    filter: none;
  }
}

/* Dash */
button.btn.btn-dash {
  background-color: transparent;
  border-style: dashed;
  border-color: var(--btn-color, var(--color-base-content));
  color: var(--btn-color, var(--color-base-content));
  box-shadow: none;
}
@media (hover: hover) {
  button.btn.btn-dash:hover:not(:disabled) {
    background-color: var(--btn-color, var(--color-base-content));
    color: var(--btn-fg, var(--color-base-100));
    filter: none;
  }
}

/* Soft */
button.btn.btn-soft {
  background-color: var(--btn-color, var(--color-base-content));
  color: var(--btn-color, var(--color-base-content));
  border-color: transparent;
  box-shadow: none;
  position: relative;
  isolation: isolate;
}
button.btn.btn-soft::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--color-base-100, #ffffff);
  opacity: 0.88;
  border-radius: inherit;
  z-index: -1;
  pointer-events: none;
}
@media (hover: hover) {
  button.btn.btn-soft:hover:not(:disabled) {
    filter: brightness(0.95);
  }
}

/* --- Size variants --- */
button.btn.btn-xs {
  --fontsize: 0.6875rem;
  --btn-p: 0.5rem;
  --size: calc(var(--size-field, 0.25rem) * 6);
  min-height: calc(var(--size-field, 0.25rem) * 6);
}
button.btn.btn-sm {
  --fontsize: 0.75rem;
  --btn-p: 0.75rem;
  --size: calc(var(--size-field, 0.25rem) * 8);
  min-height: calc(var(--size-field, 0.25rem) * 8);
}
button.btn.btn-lg {
  --fontsize: 1.125rem;
  --btn-p: 1.25rem;
  --size: calc(var(--size-field, 0.25rem) * 12);
  min-height: calc(var(--size-field, 0.25rem) * 12);
}
button.btn.btn-xl {
  --fontsize: 1.375rem;
  --btn-p: 1.5rem;
  --size: calc(var(--size-field, 0.25rem) * 14);
  min-height: calc(var(--size-field, 0.25rem) * 14);
}

/* --- Width modifier --- */
button.btn.btn-wide {
  width: 100%;
  max-width: 16rem;
}

/* --- Loading spinner --- */
button.btn .loading {
  pointer-events: none;
  aspect-ratio: 1;
  vertical-align: middle;
  width: 1.5rem;
  height: 1.5rem;
  background-color: currentColor;
  display: inline-block;
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
  mask-position: 50%;
  mask-size: 100%;
  mask-repeat: no-repeat;
  -webkit-mask-position: 50%;
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
}
</style>
