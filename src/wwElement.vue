<template>
    <component
        :is="tag"
        class="ww-button"
        :class="[daisyClasses, { button: tag === 'button', '-link': hasLink && !isEditing, active: isActive }]"
        :type="buttonType"
        :style="buttonStyle"
        :data-theme="content.theme || undefined"
        :disabled="content.disabled"
        v-bind="properties"
        @focus="isReallyFocused = true"
        @blur="onBlur($event)"
        @mousedown="onMouseActivate"
        @mouseup="onMouseDeactivate"
        @mouseleave="onMouseDeactivate"
        @touchstart="onTouchActivate"
        @touchend="onTouchDeactivate"
        @touchcancel="onTouchDeactivate"
        @keydown.enter="onKeyActivate"
        @keydown.space="onKeyActivate"
        @keyup.enter="onKeyDeactivate"
        @keyup.space="onKeyDeactivate"
        @keydown="onKeyDown"
        @keyup="onKeyUp"
    >
        <span v-if="content.loading" class="daisy-loading"></span>
        <wwElement v-if="content.hasLeftIcon && content.leftIcon" v-bind="content.leftIcon"></wwElement>
        <wwText tag="span" :text="text"></wwText>
        <wwElement v-if="content.hasRightIcon && content.rightIcon" v-bind="content.rightIcon"></wwElement>
    </component>
</template>

<script>
import { computed } from 'vue';

const TEXT_ALIGN_TO_JUSTIFY = {
    center: 'center',
    right: 'flex-end',
    left: 'flex-start',
    justify: 'center',
};

export default {
    props: {
        content: { type: Object, required: true },
        wwFrontState: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: [
        'update:content',
        'update:content:effect',
        'change-menu-visibility',
        'change-borders-style',
        'add-state',
        'remove-state',
        'trigger-event',
    ],
    setup(props) {
        /* wwEditor:start */
        const { createElement } = wwLib.useCreateElement();
        /* wwEditor:end */
        const {
            hasLink,
            tag: linkTag,
            properties,
        } = wwLib.wwElement.useLink({
            isDisabled: computed(() => props.content.disabled),
        });

        const daisyClasses = computed(() => {
            const c = ['btn'];
            const ct = props.content;
            if (ct?.colorVariant && ct.colorVariant !== 'default') {
                c.push(`btn-${ct.colorVariant}`);
            }
            if (ct?.styleVariant && ct.styleVariant !== 'solid') {
                c.push(`btn-${ct.styleVariant}`);
            }
            if (ct?.size && ct.size !== 'md') {
                c.push(`btn-${ct.size}`);
            }
            if (ct?.wide) {
                c.push('btn-wide');
            }
            if (ct?.customClasses) {
                c.push(ct.customClasses);
            }
            return c;
        });

        return {
            /* wwEditor:start */
            createElement,
            /* wwEditor:end */
            hasLink,
            linkTag,
            properties,
            daisyClasses,
        };
    },

    data() {
        return {
            isReallyFocused: false,
            isReallyActive: false,
        };
    },
    computed: {
        buttonStyle() {
            return {
                justifyContent: TEXT_ALIGN_TO_JUSTIFY[this.content?.['_ww-text_textAlign']] || 'center',
            };
        },
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
        tag() {
            if (this.isEditing) return 'div';
            if (this.hasLink) {
                return this.linkTag;
            }
            if (
                this.content?.buttonType === 'submit' ||
                this.content?.buttonType === 'reset' ||
                this.content?.buttonType === 'button'
            )
                return 'button';
            return 'div';
        },
        buttonType() {
            if (this.isEditing || this.hasLink) return '';
            if (
                this.content?.buttonType === 'submit' ||
                this.content?.buttonType === 'reset' ||
                this.content?.buttonType === 'button'
            )
                return this.content?.buttonType;
            return '';
        },
        text() {
            return this.wwElementState.props.text;
        },
        isFocused() {
            /* wwEditor:start */
            if (this.wwEditorState.isSelected) {
                return this.wwElementState.states.includes('focus');
            }
            /* wwEditor:end */
            return this.isReallyFocused;
        },
        isActive() {
            /* wwEditor:start */
            if (this.wwEditorState.isSelected) {
                return this.wwElementState.states.includes('active');
            }
            /* wwEditor:end */
            return this.isReallyActive;
        },
    },
    watch: {
        /* wwEditor:start */
        'content.hasRightIcon': {
            async handler(hasRightIcon) {
                if (this.wwEditorState.isACopy) {
                    return;
                }
                if (hasRightIcon && !this.content?.rightIcon) {
                    const content = await this.createElement('ww-icon');
                    this.$emit('update:content:effect', { rightIcon: content });
                }
            },
        },
        'content.hasLeftIcon': {
            async handler(hasLeftIcon) {
                if (this.wwEditorState.isACopy) {
                    return;
                }
                if (hasLeftIcon && !this.content?.leftIcon) {
                    const content = await this.createElement('ww-icon');
                    this.$emit('update:content:effect', { leftIcon: content });
                }
            },
        },
        /* wwEditor:end */
        'content.disabled': {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$emit('add-state', 'disabled');
                } else {
                    this.$emit('remove-state', 'disabled');
                }
            },
        },
        isReallyFocused(isFocused, wasFocused) {
            if (isFocused && !wasFocused) {
                this.$emit('trigger-event', { name: 'focus' });
            } else if (!isFocused && wasFocused) {
                this.$emit('trigger-event', { name: 'blur' });
            }
        },
        isFocused: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$emit('add-state', 'focus');
                } else {
                    this.$emit('remove-state', 'focus');
                }
            },
        },
        isActive: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$emit('add-state', 'active');
                } else {
                    this.$emit('remove-state', 'active');
                }
            },
        },
    },
    methods: {
        /* wwEditor:start */
        selectParentFormContainer() {
            const parentUid = wwLib.selectParentByFlag(this.$el, 'form-container');
            if (!parentUid) {
                wwLib.wwNotification.open({
                    text: {
                        en: 'No parent form container found. Please, add this submit button into a form container.',
                        fr: 'Aucun formulaire parent trouvé. Veuillez intégrer ce bouton submit dans un form container.',
                    },
                    color: 'yellow',
                    duration: 6000,
                });
            }
        },
        /* wwEditor:end */
        onBlur() {
            this.isReallyFocused = false;
        },
        onTouchActivate() {
            this.isReallyActive = true;
        },
        onTouchDeactivate() {
            this.isReallyActive = false;
        },
        onMouseActivate() {
            this.isReallyActive = true;
        },
        onMouseDeactivate() {
            this.isReallyActive = false;
        },
        onKeyActivate() {
            this.isReallyActive = true;
        },
        onKeyDeactivate() {
            this.isReallyActive = false;
        },
        onKeyDown(event) {
            this.$emit('trigger-event', { name: 'keydown', event });
        },
        onKeyUp(event) {
            this.$emit('trigger-event', { name: 'keyup', event });
        },
    },
};
</script>

<style lang="scss" scoped>
/* --- Base ww-button (from official component) --- */
.ww-button {
    justify-content: center;
    align-items: center;
    &.button {
        outline: none;
        border: none;
        background: none;
        font-family: inherit;
        font-size: inherit;
    }
    &.-link {
        cursor: pointer;
    }
}

/* ============================================================
   DaisyUI v5 Button – Self-contained styling
   ============================================================ */

/* --- Theme tokens (default = light) --- */
.ww-button.btn {
    --color-base-100: #ffffff;
    --color-base-200: #f2f2f2;
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
}

.ww-button.btn[data-theme="dark"] {
    --color-base-100: #1d232a;
    --color-base-200: #191e24;
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
    --border: 1px;
}

.ww-button.btn[data-theme="cupcake"] {
    --color-base-100: #faf7f5;
    --color-base-200: #efeae6;
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
    --border: 2px;
}

.ww-button.btn[data-theme="synthwave"] {
    --color-base-100: #1a103d;
    --color-base-200: #211547;
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
    --border: 1px;
}

.ww-button.btn[data-theme="cyberpunk"] {
    --color-base-100: #ffee00;
    --color-base-200: #e6d700;
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
    --border: 1px;
}

.ww-button.btn[data-theme="retro"] {
    --color-base-100: #e4d8b4;
    --color-base-200: #d2c59a;
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
    --border: 1px;
}

.ww-button.btn[data-theme="forest"] {
    --color-base-100: #171212;
    --color-base-200: #140f0f;
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
    --border: 1px;
}

.ww-button.btn[data-theme="nord"] {
    --color-base-100: #eceff4;
    --color-base-200: #e5e9f0;
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
    --border: 1px;
}

.ww-button.btn[data-theme="dracula"] {
    --color-base-100: #282a36;
    --color-base-200: #242630;
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
    --border: 1px;
}

.ww-button.btn[data-theme="corporate"] {
    --color-base-100: #ffffff;
    --color-base-200: #ededed;
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
    --border: 1px;
}

/* --- Base .btn styles --- */
.ww-button.btn {
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    outline-offset: 2px;
    -webkit-user-select: none;
    user-select: none;
    padding: 0 var(--btn-p, 1rem);
    color: var(--btn-fg, var(--color-base-content));
    min-height: var(--size, calc(var(--size-field, 0.25rem) * 10));
    font-size: var(--fontsize, 0.875rem);
    outline-color: var(--color-base-content);
    background-color: var(--btn-bg, var(--color-base-200));
    border-width: var(--border, 1px);
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.08);
    touch-action: manipulation;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border-radius: var(--radius-field, 0.25rem);
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 0.375rem;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, filter 0.2s;
    font-family: inherit;
}

/* Hover */
@media (hover: hover) {
    .ww-button.btn:hover:not([disabled]) {
        filter: brightness(0.92);
    }
}

/* Focus */
.ww-button.btn:focus-visible {
    isolation: isolate;
    outline: 2px solid var(--color-base-content);
}

/* Active */
.ww-button.btn:active:not([disabled]),
.ww-button.btn.active:not([disabled]) {
    filter: brightness(0.88);
    transform: translateY(0.5px);
    box-shadow: none;
}

/* Disabled */
.ww-button.btn[disabled] {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
}

/* --- Color variants --- */
.ww-button.btn.btn-primary {
    --btn-color: var(--color-primary);
    --btn-fg: var(--color-primary-content);
    background-color: var(--color-primary);
    color: var(--color-primary-content);
    border-color: var(--color-primary);
}
.ww-button.btn.btn-secondary {
    --btn-color: var(--color-secondary);
    --btn-fg: var(--color-secondary-content);
    background-color: var(--color-secondary);
    color: var(--color-secondary-content);
    border-color: var(--color-secondary);
}
.ww-button.btn.btn-accent {
    --btn-color: var(--color-accent);
    --btn-fg: var(--color-accent-content);
    background-color: var(--color-accent);
    color: var(--color-accent-content);
    border-color: var(--color-accent);
}
.ww-button.btn.btn-neutral {
    --btn-color: var(--color-neutral);
    --btn-fg: var(--color-neutral-content);
    background-color: var(--color-neutral);
    color: var(--color-neutral-content);
    border-color: var(--color-neutral);
}
.ww-button.btn.btn-info {
    --btn-color: var(--color-info);
    --btn-fg: var(--color-info-content);
    background-color: var(--color-info);
    color: var(--color-info-content);
    border-color: var(--color-info);
}
.ww-button.btn.btn-success {
    --btn-color: var(--color-success);
    --btn-fg: var(--color-success-content);
    background-color: var(--color-success);
    color: var(--color-success-content);
    border-color: var(--color-success);
}
.ww-button.btn.btn-warning {
    --btn-color: var(--color-warning);
    --btn-fg: var(--color-warning-content);
    background-color: var(--color-warning);
    color: var(--color-warning-content);
    border-color: var(--color-warning);
}
.ww-button.btn.btn-error {
    --btn-color: var(--color-error);
    --btn-fg: var(--color-error-content);
    background-color: var(--color-error);
    color: var(--color-error-content);
    border-color: var(--color-error);
}

/* --- Style variants --- */

/* Ghost */
.ww-button.btn.btn-ghost {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    color: var(--btn-color, var(--color-base-content));
}
@media (hover: hover) {
    .ww-button.btn.btn-ghost:hover:not([disabled]) {
        background-color: rgba(0, 0, 0, 0.08);
        filter: none;
    }
}

/* Link */
.ww-button.btn.btn-link {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    text-decoration: underline;
    color: var(--btn-color, var(--color-primary));
}
@media (hover: hover) {
    .ww-button.btn.btn-link:hover:not([disabled]) {
        filter: brightness(0.85);
        background-color: transparent;
    }
}
.ww-button.btn.btn-link[disabled],
.ww-button.btn.btn-ghost[disabled] {
    background-color: transparent;
}

/* Outline */
.ww-button.btn.btn-outline {
    background-color: transparent;
    border-color: var(--btn-color, var(--color-base-content));
    color: var(--btn-color, var(--color-base-content));
    box-shadow: none;
}
@media (hover: hover) {
    .ww-button.btn.btn-outline:hover:not([disabled]) {
        background-color: var(--btn-color, var(--color-base-content));
        color: var(--btn-fg, var(--color-base-100));
        filter: none;
    }
}

/* Dash */
.ww-button.btn.btn-dash {
    background-color: transparent;
    border-style: dashed;
    border-color: var(--btn-color, var(--color-base-content));
    color: var(--btn-color, var(--color-base-content));
    box-shadow: none;
}
@media (hover: hover) {
    .ww-button.btn.btn-dash:hover:not([disabled]) {
        background-color: var(--btn-color, var(--color-base-content));
        color: var(--btn-fg, var(--color-base-100));
        filter: none;
    }
}

/* Soft */
.ww-button.btn.btn-soft {
    background-color: var(--btn-color, var(--color-base-content));
    color: var(--btn-color, var(--color-base-content));
    border-color: transparent;
    box-shadow: none;
    position: relative;
    isolation: isolate;
}
.ww-button.btn.btn-soft::before {
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
    .ww-button.btn.btn-soft:hover:not([disabled]) {
        filter: brightness(0.95);
    }
}

/* --- Size variants --- */
.ww-button.btn.btn-xs {
    --fontsize: 0.6875rem;
    --btn-p: 0.5rem;
    --size: calc(var(--size-field, 0.25rem) * 6);
}
.ww-button.btn.btn-sm {
    --fontsize: 0.75rem;
    --btn-p: 0.75rem;
    --size: calc(var(--size-field, 0.25rem) * 8);
}
.ww-button.btn.btn-lg {
    --fontsize: 1.125rem;
    --btn-p: 1.25rem;
    --size: calc(var(--size-field, 0.25rem) * 12);
}
.ww-button.btn.btn-xl {
    --fontsize: 1.375rem;
    --btn-p: 1.5rem;
    --size: calc(var(--size-field, 0.25rem) * 14);
}

/* --- Width modifier --- */
.ww-button.btn.btn-wide {
    width: 100%;
    max-width: 16rem;
}

/* --- Loading spinner --- */
.ww-button.btn .daisy-loading {
    pointer-events: none;
    width: 1.25em;
    height: 1.25em;
    background-color: currentColor;
    display: inline-block;
    mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
}
</style>
