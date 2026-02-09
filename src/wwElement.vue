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

<style scoped>
/* ============================================================
   DaisyUI v5.5 Button – Self-contained (no CDN dependency)
   Themes: light, dark, cupcake, synthwave, cyberpunk,
           retro, forest, nord, dracula, corporate
   ============================================================ */

/* --- Theme tokens (default = light) --- */
button {
  --color-base-100: oklch(100% 0 0);
  --color-base-200: oklch(98% 0 0);
  --color-base-300: oklch(95% 0 0);
  --color-base-content: oklch(21% .006 285.885);
  --color-primary: oklch(45% .24 277.023);
  --color-primary-content: oklch(93% .034 272.788);
  --color-secondary: oklch(65% .241 354.308);
  --color-secondary-content: oklch(94% .028 342.258);
  --color-accent: oklch(77% .152 181.912);
  --color-accent-content: oklch(38% .063 188.416);
  --color-neutral: oklch(14% .005 285.823);
  --color-neutral-content: oklch(92% .004 286.32);
  --color-info: oklch(74% .16 232.661);
  --color-info-content: oklch(29% .066 243.157);
  --color-success: oklch(76% .177 163.223);
  --color-success-content: oklch(37% .077 168.94);
  --color-warning: oklch(82% .189 84.429);
  --color-warning-content: oklch(41% .112 45.904);
  --color-error: oklch(71% .194 13.428);
  --color-error-content: oklch(27% .105 12.094);
  --radius-field: .25rem;
  --size-field: .25rem;
  --size-selector: .25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}

button[data-theme="dark"] {
  --color-base-100: oklch(25.33% .016 252.42);
  --color-base-200: oklch(23.26% .014 253.1);
  --color-base-300: oklch(21.15% .012 254.09);
  --color-base-content: oklch(97.807% .029 256.847);
  --color-primary: oklch(58% .233 277.117);
  --color-primary-content: oklch(96% .018 272.314);
  --color-secondary: oklch(65% .241 354.308);
  --color-secondary-content: oklch(94% .028 342.258);
  --color-accent: oklch(77% .152 181.912);
  --color-accent-content: oklch(38% .063 188.416);
  --color-neutral: oklch(14% .005 285.823);
  --color-neutral-content: oklch(92% .004 286.32);
  --color-info: oklch(74% .16 232.661);
  --color-info-content: oklch(29% .066 243.157);
  --color-success: oklch(76% .177 163.223);
  --color-success-content: oklch(37% .077 168.94);
  --color-warning: oklch(82% .189 84.429);
  --color-warning-content: oklch(41% .112 45.904);
  --color-error: oklch(71% .194 13.428);
  --color-error-content: oklch(27% .105 12.094);
  --radius-field: .25rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}

button[data-theme="cupcake"] {
  --color-base-100: oklch(97.788% .004 56.375);
  --color-base-200: oklch(93.982% .007 61.449);
  --color-base-300: oklch(91.586% .006 53.44);
  --color-base-content: oklch(23.574% .066 313.189);
  --color-primary: oklch(85% .138 181.071);
  --color-primary-content: oklch(43% .078 188.216);
  --color-secondary: oklch(89% .061 343.231);
  --color-secondary-content: oklch(45% .187 3.815);
  --color-accent: oklch(90% .076 70.697);
  --color-accent-content: oklch(47% .157 37.304);
  --color-neutral: oklch(27% .006 286.033);
  --color-neutral-content: oklch(92% .004 286.32);
  --color-info: oklch(68% .169 237.323);
  --color-info-content: oklch(29% .066 243.157);
  --color-success: oklch(69% .17 162.48);
  --color-success-content: oklch(26% .051 172.552);
  --color-warning: oklch(79% .184 86.047);
  --color-warning-content: oklch(28% .066 53.813);
  --color-error: oklch(64% .246 16.439);
  --color-error-content: oklch(27% .105 12.094);
  --radius-field: 2rem;
  --size-field: .25rem;
  --border: 2px;
  --depth: 1;
  --noise: 0;
}

button[data-theme="synthwave"] {
  --color-base-100: oklch(15% .09 281.288);
  --color-base-200: oklch(20% .09 281.288);
  --color-base-300: oklch(25% .09 281.288);
  --color-base-content: oklch(78% .115 274.713);
  --color-primary: oklch(71% .202 349.761);
  --color-primary-content: oklch(28% .109 3.907);
  --color-secondary: oklch(82% .111 230.318);
  --color-secondary-content: oklch(29% .066 243.157);
  --color-accent: oklch(75% .183 55.934);
  --color-accent-content: oklch(26% .079 36.259);
  --color-neutral: oklch(45% .24 277.023);
  --color-neutral-content: oklch(87% .065 274.039);
  --color-info: oklch(74% .16 232.661);
  --color-info-content: oklch(29% .066 243.157);
  --color-success: oklch(77% .152 181.912);
  --color-success-content: oklch(27% .046 192.524);
  --color-warning: oklch(90% .182 98.111);
  --color-warning-content: oklch(42% .095 57.708);
  --color-error: oklch(73.7% .121 32.639);
  --color-error-content: oklch(23.501% .096 290.329);
  --radius-field: .5rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}

button[data-theme="cyberpunk"] {
  --color-base-100: oklch(94.51% .179 104.32);
  --color-base-200: oklch(91.51% .179 104.32);
  --color-base-300: oklch(85.51% .179 104.32);
  --color-base-content: oklch(0% 0 0);
  --color-primary: oklch(74.22% .209 6.35);
  --color-primary-content: oklch(14.844% .041 6.35);
  --color-secondary: oklch(83.33% .184 204.72);
  --color-secondary-content: oklch(16.666% .036 204.72);
  --color-accent: oklch(71.86% .217 310.43);
  --color-accent-content: oklch(14.372% .043 310.43);
  --color-neutral: oklch(23.04% .065 269.31);
  --color-neutral-content: oklch(94.51% .179 104.32);
  --color-info: oklch(72.06% .191 231.6);
  --color-info-content: oklch(0% 0 0);
  --color-success: oklch(64.8% .15 160);
  --color-success-content: oklch(0% 0 0);
  --color-warning: oklch(84.71% .199 83.87);
  --color-warning-content: oklch(0% 0 0);
  --color-error: oklch(71.76% .221 22.18);
  --color-error-content: oklch(0% 0 0);
  --radius-field: 0rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}

button[data-theme="retro"] {
  --color-base-100: oklch(91.637% .034 90.515);
  --color-base-200: oklch(88.272% .049 91.774);
  --color-base-300: oklch(84.133% .065 90.856);
  --color-base-content: oklch(41% .112 45.904);
  --color-primary: oklch(80% .114 19.571);
  --color-primary-content: oklch(39% .141 25.723);
  --color-secondary: oklch(92% .084 155.995);
  --color-secondary-content: oklch(44% .119 151.328);
  --color-accent: oklch(68% .162 75.834);
  --color-accent-content: oklch(41% .112 45.904);
  --color-neutral: oklch(44% .011 73.639);
  --color-neutral-content: oklch(86% .005 56.366);
  --color-info: oklch(58% .158 241.966);
  --color-info-content: oklch(96% .059 95.617);
  --color-success: oklch(51% .096 186.391);
  --color-success-content: oklch(96% .059 95.617);
  --color-warning: oklch(64% .222 41.116);
  --color-warning-content: oklch(96% .059 95.617);
  --color-error: oklch(70% .191 22.216);
  --color-error-content: oklch(40% .123 38.172);
  --radius-field: .25rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}

button[data-theme="forest"] {
  --color-base-100: oklch(20.84% .008 17.911);
  --color-base-200: oklch(18.522% .007 17.911);
  --color-base-300: oklch(16.203% .007 17.911);
  --color-base-content: oklch(83.768% .001 17.911);
  --color-primary: oklch(68.628% .185 148.958);
  --color-primary-content: oklch(0% 0 0);
  --color-secondary: oklch(69.776% .135 168.327);
  --color-secondary-content: oklch(13.955% .027 168.327);
  --color-accent: oklch(70.628% .119 185.713);
  --color-accent-content: oklch(14.125% .023 185.713);
  --color-neutral: oklch(30.698% .039 171.364);
  --color-neutral-content: oklch(86.139% .007 171.364);
  --color-info: oklch(72.06% .191 231.6);
  --color-info-content: oklch(0% 0 0);
  --color-success: oklch(64.8% .15 160);
  --color-success-content: oklch(0% 0 0);
  --color-warning: oklch(84.71% .199 83.87);
  --color-warning-content: oklch(0% 0 0);
  --color-error: oklch(71.76% .221 22.18);
  --color-error-content: oklch(0% 0 0);
  --radius-field: 2rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}

button[data-theme="nord"] {
  --color-base-100: oklch(95.127% .007 260.731);
  --color-base-200: oklch(93.299% .01 261.788);
  --color-base-300: oklch(89.925% .016 262.749);
  --color-base-content: oklch(32.437% .022 264.182);
  --color-primary: oklch(59.435% .077 254.027);
  --color-primary-content: oklch(11.887% .015 254.027);
  --color-secondary: oklch(69.651% .059 248.687);
  --color-secondary-content: oklch(13.93% .011 248.687);
  --color-accent: oklch(77.464% .062 217.469);
  --color-accent-content: oklch(15.492% .012 217.469);
  --color-neutral: oklch(45.229% .035 264.131);
  --color-neutral-content: oklch(89.925% .016 262.749);
  --color-info: oklch(69.207% .062 332.664);
  --color-info-content: oklch(13.841% .012 332.664);
  --color-success: oklch(76.827% .074 131.063);
  --color-success-content: oklch(15.365% .014 131.063);
  --color-warning: oklch(85.486% .089 84.093);
  --color-warning-content: oklch(17.097% .017 84.093);
  --color-error: oklch(60.61% .12 15.341);
  --color-error-content: oklch(12.122% .024 15.341);
  --radius-field: .25rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}

button[data-theme="dracula"] {
  --color-base-100: oklch(28.822% .022 277.508);
  --color-base-200: oklch(26.805% .02 277.508);
  --color-base-300: oklch(24.787% .019 277.508);
  --color-base-content: oklch(97.747% .007 106.545);
  --color-primary: oklch(75.461% .183 346.812);
  --color-primary-content: oklch(15.092% .036 346.812);
  --color-secondary: oklch(74.202% .148 301.883);
  --color-secondary-content: oklch(14.84% .029 301.883);
  --color-accent: oklch(83.392% .124 66.558);
  --color-accent-content: oklch(16.678% .024 66.558);
  --color-neutral: oklch(39.445% .032 275.524);
  --color-neutral-content: oklch(87.889% .006 275.524);
  --color-info: oklch(88.263% .093 212.846);
  --color-info-content: oklch(17.652% .018 212.846);
  --color-success: oklch(87.099% .219 148.024);
  --color-success-content: oklch(17.419% .043 148.024);
  --color-warning: oklch(95.533% .134 112.757);
  --color-warning-content: oklch(19.106% .026 112.757);
  --color-error: oklch(68.22% .206 24.43);
  --color-error-content: oklch(13.644% .041 24.43);
  --radius-field: .5rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}

button[data-theme="corporate"] {
  --color-base-100: oklch(100% 0 0);
  --color-base-200: oklch(93% 0 0);
  --color-base-300: oklch(86% 0 0);
  --color-base-content: oklch(22.389% .031 278.072);
  --color-primary: oklch(58% .158 241.966);
  --color-primary-content: oklch(100% 0 0);
  --color-secondary: oklch(55% .046 257.417);
  --color-secondary-content: oklch(100% 0 0);
  --color-accent: oklch(60% .118 184.704);
  --color-accent-content: oklch(100% 0 0);
  --color-neutral: oklch(0% 0 0);
  --color-neutral-content: oklch(100% 0 0);
  --color-info: oklch(60% .126 221.723);
  --color-info-content: oklch(100% 0 0);
  --color-success: oklch(62% .194 149.214);
  --color-success-content: oklch(100% 0 0);
  --color-warning: oklch(85% .199 91.936);
  --color-warning-content: oklch(0% 0 0);
  --color-error: oklch(70% .191 22.216);
  --color-error-content: oklch(0% 0 0);
  --radius-field: .25rem;
  --size-field: .25rem;
  --border: 1px;
  --depth: 0;
  --noise: 0;
}

/* --- Base .btn --- */
button.btn {
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  outline-offset: 2px;
  -webkit-user-select: none;
  user-select: none;
  padding-inline: var(--btn-p);
  color: var(--btn-fg);
  height: var(--size);
  font-size: var(--fontsize, .875rem);
  outline-color: var(--btn-color, var(--color-base-content));
  background-color: var(--btn-bg);
  border-width: var(--border);
  border-style: solid;
  border-color: var(--btn-border);
  text-shadow: 0 .5px oklch(100% 0 0 / calc(var(--depth) * .15));
  touch-action: manipulation;
  box-shadow:
    0 .5px 0 .5px oklch(100% 0 0 / calc(var(--depth) * 6%)) inset,
    var(--btn-shadow);

  --size: calc(var(--size-field, .25rem) * 10);
  --btn-bg: var(--btn-color, var(--color-base-200));
  --btn-fg: var(--color-base-content);
  --btn-p: 1rem;
  --btn-border: color-mix(in oklab, var(--btn-bg), #000 calc(var(--depth) * 5%));
  --btn-shadow:
    0 3px 2px -2px color-mix(in oklab, var(--btn-bg) calc(var(--depth) * 30%), #0000),
    0 4px 3px -2px color-mix(in oklab, var(--btn-bg) calc(var(--depth) * 30%), #0000);

  border-start-start-radius: var(--radius-field);
  border-start-end-radius: var(--radius-field);
  border-end-end-radius: var(--radius-field);
  border-end-start-radius: var(--radius-field);
  flex-wrap: nowrap;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  gap: .375rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition-property: color, background-color, border-color, box-shadow;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(0, 0, .2, 1);
  display: inline-flex;
  font-family: inherit;
}

/* Hover */
@media (hover: hover) {
  button.btn:hover:not(:disabled) {
    --btn-bg: color-mix(in oklab, var(--btn-color, var(--color-base-200)), #000 7%);
  }
}

/* Focus */
button.btn:focus-visible {
  isolation: isolate;
  outline-width: 2px;
  outline-style: solid;
}

/* Active / pressed */
button.btn:active:not(.btn-active) {
  --btn-bg: color-mix(in oklab, var(--btn-color, var(--color-base-200)), #000 5%);
  --btn-border: color-mix(in oklab, var(--btn-color, var(--color-base-200)), #000 7%);
  --btn-shadow: 0 0 0 0 oklch(0% 0 0 / 0), 0 0 0 0 oklch(0% 0 0 / 0);
  translate: 0 .5px;
}

/* Disabled */
button.btn:disabled {
  pointer-events: none;
  --btn-border: #0000;
  --btn-fg: color-mix(in oklch, var(--color-base-content) 20%, #0000);
  background-color: color-mix(in oklab, var(--color-base-content) 10%, transparent);
  box-shadow: none;
}
button.btn:disabled.btn-link,
button.btn:disabled.btn-ghost {
  background-color: transparent;
}

/* --- Color variants --- */
button.btn.btn-primary {
  --btn-color: var(--color-primary);
  --btn-fg: var(--color-primary-content);
}
button.btn.btn-secondary {
  --btn-color: var(--color-secondary);
  --btn-fg: var(--color-secondary-content);
}
button.btn.btn-accent {
  --btn-color: var(--color-accent);
  --btn-fg: var(--color-accent-content);
}
button.btn.btn-neutral {
  --btn-color: var(--color-neutral);
  --btn-fg: var(--color-neutral-content);
}
button.btn.btn-info {
  --btn-color: var(--color-info);
  --btn-fg: var(--color-info-content);
}
button.btn.btn-success {
  --btn-color: var(--color-success);
  --btn-fg: var(--color-success-content);
}
button.btn.btn-warning {
  --btn-color: var(--color-warning);
  --btn-fg: var(--color-warning-content);
}
button.btn.btn-error {
  --btn-color: var(--color-error);
  --btn-fg: var(--color-error-content);
}

/* --- Style variants --- */

/* Ghost */
button.btn.btn-ghost:not(:hover, :active, :focus-visible, :disabled) {
  --btn-shadow: none;
  --btn-bg: transparent;
  --btn-border: transparent;
  --btn-fg: var(--btn-color, currentColor);
  outline-color: currentColor;
}
@media (hover: none) {
  button.btn.btn-ghost:not(:active, :focus-visible):hover {
    --btn-shadow: none;
    --btn-bg: transparent;
    --btn-border: transparent;
    --btn-fg: var(--btn-color, currentColor);
  }
}

/* Link */
button.btn.btn-link {
  --btn-border: transparent;
  --btn-bg: transparent;
  --btn-shadow: none;
  outline-color: currentColor;
  text-decoration-line: underline;
}
button.btn.btn-link:not(:disabled) {
  --btn-fg: var(--btn-color, var(--color-primary));
}
button.btn.btn-link:hover,
button.btn.btn-link:active,
button.btn.btn-link:focus-visible {
  --btn-border: transparent;
  --btn-bg: transparent;
}

/* Outline */
button.btn.btn-outline:not(:hover, :active, :focus-visible, :disabled) {
  --btn-shadow: none;
  --btn-bg: transparent;
  --btn-fg: var(--btn-color);
  --btn-border: var(--btn-color);
}
@media (hover: none) {
  button.btn.btn-outline:not(:active, :focus-visible):hover {
    --btn-shadow: none;
    --btn-bg: transparent;
    --btn-fg: var(--btn-color);
    --btn-border: var(--btn-color);
  }
}

/* Dash */
button.btn.btn-dash:not(:hover, :active, :focus-visible, :disabled) {
  --btn-shadow: none;
  --btn-bg: transparent;
  --btn-fg: var(--btn-color);
  --btn-border: var(--btn-color);
}
button.btn.btn-dash {
  border-style: dashed;
}
@media (hover: none) {
  button.btn.btn-dash:not(:active, :focus-visible):hover {
    --btn-shadow: none;
    --btn-bg: transparent;
    --btn-fg: var(--btn-color);
    --btn-border: var(--btn-color);
  }
}

/* Soft */
button.btn.btn-soft:not(:hover, :active, :focus-visible, :disabled) {
  --btn-shadow: none;
  --btn-fg: var(--btn-color, var(--color-base-content));
  --btn-bg: color-mix(in oklab, var(--btn-color, var(--color-base-content)) 8%, var(--color-base-100));
  --btn-border: color-mix(in oklab, var(--btn-color, var(--color-base-content)) 10%, var(--color-base-100));
}
@media (hover: none) {
  button.btn.btn-soft:not(:active, :focus-visible):hover {
    --btn-shadow: none;
    --btn-fg: var(--btn-color, var(--color-base-content));
    --btn-bg: color-mix(in oklab, var(--btn-color, var(--color-base-content)) 8%, var(--color-base-100));
    --btn-border: color-mix(in oklab, var(--btn-color, var(--color-base-content)) 10%, var(--color-base-100));
  }
}

/* --- Size variants --- */
button.btn.btn-xs {
  --fontsize: .6875rem;
  --btn-p: .5rem;
  --size: calc(var(--size-field, .25rem) * 6);
}
button.btn.btn-sm {
  --fontsize: .75rem;
  --btn-p: .75rem;
  --size: calc(var(--size-field, .25rem) * 8);
}
button.btn.btn-md {
  --fontsize: .875rem;
  --btn-p: 1rem;
  --size: calc(var(--size-field, .25rem) * 10);
}
button.btn.btn-lg {
  --fontsize: 1.125rem;
  --btn-p: 1.25rem;
  --size: calc(var(--size-field, .25rem) * 12);
}
button.btn.btn-xl {
  --fontsize: 1.375rem;
  --btn-p: 1.5rem;
  --size: calc(var(--size-field, .25rem) * 14);
}

/* --- Width modifiers --- */
button.btn.btn-wide {
  width: 100%;
  max-width: 16rem;
}

/* --- Loading spinner --- */
button.btn .loading {
  pointer-events: none;
  aspect-ratio: 1;
  vertical-align: middle;
  width: calc(var(--size-selector, .25rem) * 6);
  background-color: currentColor;
  display: inline-block;
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
  mask-position: 50%;
  mask-size: 100%;
  mask-repeat: no-repeat;
}

button.btn .loading.loading-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
}
</style>
