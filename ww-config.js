export default {
  editor: {
    label: 'DaisyUI Button',
    icon: 'cursor-click',
  },
  properties: {
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
        tooltip:
          'Valid values: default | primary | secondary | accent | neutral | info | success | warning | error',
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
    wide: {
      label: { en: 'Wide' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: false,
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'boolean',
        tooltip: 'Make the button wider',
      },
      /* wwEditor:end */
    },
    loading: {
      label: { en: 'Loading' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: false,
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'boolean',
        tooltip: 'Show loading spinner',
      },
      /* wwEditor:end */
    },
    customClasses: {
      label: { en: 'Custom Classes' },
      type: 'Text',
      section: 'settings',
      defaultValue: '',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Additional CSS classes for the button',
      },
      /* wwEditor:end */
    },
    buttonContent: {
      hidden: true,
      defaultValue: [],
    },
  },
  triggerEvents: [
    {
      name: 'click',
      label: { en: 'On click' },
      event: {},
      default: true,
    },
  ],
};
