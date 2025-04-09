<script>
    import { faCalculator } from '@fortawesome/free-solid-svg-icons';
    import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let isFocused = false;
</script>

<button class="calculator_button" class:focused={isFocused} on:click={() => dispatch('click')}>
    <FontAwesomeIcon icon={faCalculator} />
</button>

<style lang="ts">
    .calculator_button {
      height: 100%;
      padding: 1rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border: 2px solid #8883;
      border-bottom-color: #AAAA;
      border-left: 0;
      &.focused{
        border-bottom-color: red;
      }
    }
</style>