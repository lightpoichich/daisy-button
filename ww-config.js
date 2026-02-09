export default {
    inherit: 'ww-text',
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'inline-flex'],
        linkable: true,
    },
    editor: {
        label: {
            en: 'DaisyUI Button',
            fr: 'Bouton DaisyUI',
        },
        icon: 'cursor-click',
        workflowHint: content => {
            if (content.buttonType !== 'submit') {
                return false;
            }
            return {
                type: 'warning',
                header: {
                    en: 'You probably shouldn\'t trigger workflows on submit buttons.',
                    fr: 'Vous ne devriez pas déclencher un workflow depuis un bouton submit',
                },
                text: {
                    en: 'For your users to benefit from automatic form field validation, you should trigger submit workflows on the form container.',
                    fr: 'Pour que vos utilisateurs bénéficient de la validation automatique des champs de formulaire, vous devez déclencher des workflows de soumission sur le conteneur de formulaire.',
                },
                button: {
                    text: { en: 'Select form container', fr: 'Sélectionnez le form container' },
                    action: 'selectParentFormContainer',
                },
            };
        },
    },
    states: ['focus', 'disabled', 'active'],
    triggerEvents: [
        { name: 'focus', label: { en: 'On focus' }, event: null },
        { name: 'blur', label: { en: 'On blur' }, event: null },
        { name: 'keydown', label: { en: 'On key down' }, event: null },
        { name: 'keyup', label: { en: 'On key up' }, event: null },
    ],
    properties: {
        // --- Inherited from ww-button ---
        buttonType: {
            label: { en: 'Type', fr: 'Type' },
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: null, label: 'none' },
                    { value: 'button', label: 'Button' },
                    { value: 'submit', label: 'Submit Button' },
                ],
            },
            defaultValue: 'button',
            bindable: true,
            bindingValidation: {
                type: 'string',
                tooltip: 'A string that defines the button type: "button" | "submit"',
            },
        },
        disabled: {
            label: { en: 'Disabled' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Disable the button',
            },
            /* wwEditor:end */
        },
        hasLeftIcon: {
            label: { en: 'Left icon', fr: 'Icône gauche' },
            section: 'settings',
            type: 'OnOff',
        },
        leftIcon: {
            hidden: true,
            isArray: false,
        },
        hasRightIcon: {
            label: { en: 'Right icon', fr: 'Icône droite' },
            type: 'OnOff',
            section: 'settings',
        },
        rightIcon: {
            hidden: true,
            isArray: false,
        },
        // --- DaisyUI-specific ---
        theme: {
            label: { en: 'Theme' },
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: '', label: 'Inherit' },
                    { value: 'light', label: 'Light' },
                    { value: 'dark', label: 'Dark' },
                    { value: 'cupcake', label: 'Cupcake' },
                    { value: 'synthwave', label: 'Synthwave' },
                    { value: 'cyberpunk', label: 'Cyberpunk' },
                    { value: 'retro', label: 'Retro' },
                    { value: 'forest', label: 'Forest' },
                    { value: 'nord', label: 'Nord' },
                    { value: 'dracula', label: 'Dracula' },
                    { value: 'corporate', label: 'Corporate' },
                ],
            },
            defaultValue: 'light',
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'DaisyUI theme name',
            },
            /* wwEditor:end */
        },
        colorVariant: {
            label: { en: 'Color Variant' },
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: 'default', label: 'Default' },
                    { value: 'primary', label: 'Primary' },
                    { value: 'secondary', label: 'Secondary' },
                    { value: 'accent', label: 'Accent' },
                    { value: 'neutral', label: 'Neutral' },
                    { value: 'info', label: 'Info' },
                    { value: 'success', label: 'Success' },
                    { value: 'warning', label: 'Warning' },
                    { value: 'error', label: 'Error' },
                ],
            },
            defaultValue: 'default',
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Valid values: default | primary | secondary | accent | neutral | info | success | warning | error',
            },
            /* wwEditor:end */
        },
        styleVariant: {
            label: { en: 'Style Variant' },
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: 'solid', label: 'Solid' },
                    { value: 'outline', label: 'Outline' },
                    { value: 'soft', label: 'Soft' },
                    { value: 'ghost', label: 'Ghost' },
                    { value: 'dash', label: 'Dash' },
                ],
            },
            defaultValue: 'solid',
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Valid values: solid | outline | soft | ghost | dash',
            },
            /* wwEditor:end */
        },
        size: {
            label: { en: 'Size' },
            type: 'TextSelect',
            section: 'settings',
            options: {
                options: [
                    { value: 'xs', label: 'Extra Small' },
                    { value: 'sm', label: 'Small' },
                    { value: 'md', label: 'Medium' },
                    { value: 'lg', label: 'Large' },
                    { value: 'xl', label: 'Extra Large' },
                ],
            },
            defaultValue: 'md',
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Valid values: xs | sm | md | lg | xl',
            },
            /* wwEditor:end */
        },
        wide: {
            label: { en: 'Wide' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
        },
        loading: {
            label: { en: 'Loading' },
            type: 'OnOff',
            section: 'settings',
            defaultValue: false,
            bindable: true,
        },
        customClasses: {
            label: { en: 'Custom Classes' },
            type: 'Text',
            section: 'settings',
            defaultValue: '',
            bindable: true,
        },
    },
};
