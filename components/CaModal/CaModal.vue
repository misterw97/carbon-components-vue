<template>
  <div
    data-modal
    id="modal"
    class="bx--modal bx--modal--danger"
    :class="dynamicClass"
    tabindex="-1"
  >
    <div class="bx--modal-container">
      <div class="bx--modal-header">
        <p class="bx--modal-header__label bx--type-delta">{{modalLabel}}</p>
        <p class="bx--modal-header__heading bx--type-beta">{{modalHeading}}</p>
        <button
          @click="closeHandler"
          class="bx--modal-close"
          type="button"
          data-modal-close
          aria-label="close modal"
        >
          <svg
            class="bx--modal-close__icon"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill-rule="evenodd"
          >
            <title>Close Modal</title>
            <path
              d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"
            ></path>
          </svg>
        </button>
      </div>

      <div class="bx--modal-content">
        <slot></slot>
      </div>

      <div class="bx--modal-footer">
        <button
          @click="secondaryHandler"
          class="bx--btn bx--btn--secondary"
          type="button"
          data-modal-close
        >{{secondaryButtonText}}</button>
        <button
          @click="primaryHandler"
          class="bx--btn bx--btn--primary"
          type="button"
          data-modal-primary-focus
        >{{primaryButtonText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'carbon-components';

export default {
  name: 'ca-modal',
  props: {
    modalHeading: {
      type: String,
      default: '',
    },
    modalLabel: {
      type: String,
      default: '',
    },
    primaryButtonText: {
      type: String,
      default: '',
    },
    secondaryButtonText: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    closeHandler: {
      type: Function,
      default: () => {},
    },
    primaryHandler: {
      type: Function,
      default: () => {},
    },
    secondaryHandler: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    modal: null,
  }),
  computed: {
    dynamicClass() {
      return {
        'bx--modal--danger': this.danger,
      };
    },
  },
  watch: {
    show(oldVal, newVal) {
      return newVal ? this.modal.show() : this.modal.hide();
    },
  },
  mounted() {
    this.modal = Modal.create(this.$el);
    return this.show ? this.modal.show() : this.modal.hide();
  },
};
</script>

<style></style>
