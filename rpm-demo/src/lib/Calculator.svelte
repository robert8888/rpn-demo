<script>
  import ActionButton from "./ActionButton.svelte"
  import Rpn from 'rpn-ts';

  const rpn = new Rpn();

  let input;
  let value = null;
  let errors = [];
  let isFocused = false;

  const onCompute = (expression) => {
    if(!expression)
      return;
    try {
      errors = [];
      const result = rpn.valueOf(expression)
      errors = rpn.last.errors || [];

      if(errors.length)
        return;

      value = result || '';
    } catch(e){
      errors = [e];
    }
  }

  const onKeydown = (event) => {
    errors = [];
    value = '';
    if(event.key !== "Enter") return;

    onCompute(event?.target?.value);
  }

  const onClickButton = () => {
    onCompute(input.value)
  }
</script>
<div>
  <div class="calculator">
    <input class="calculator_input"
           type="text"
           bind:this={input}
           on:focus={() => isFocused = true}
           on:blur={() => isFocused = false}
           class:focused={isFocused}
           on:keydown={onKeydown} />
    <ActionButton isFocused={isFocused} on:click={onClickButton}/>
  </div>
  <div class="calculator_errors">
    {#each errors as error}
      <span>{error}</span>
    {/each}
  </div>
  <div  class="calculator_value-container">
    {#if value}
      <span class="calculator_value-label">Expression result: </span>
      <span class="calculator_value">
        { value }
      </span>
    {/if}
  </div>
</div>

<style lang="scss">
  .calculator {
    height: 80px;
    display: flex;
    justify-content: center;

    &_input {
      &:focus, &:focus-visible {
        outline: none;
      }
      &.focused {
        border-bottom-color: red;
      }
      flex: 1;
      height: 100%;
      min-width: 70%;
      padding-inline: 1rem;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-color: rgb(133, 133, 133);
      border-right: 0;
      font-size: 1rem;
      @media screen and (min-width: 768px){
        flex: 0;
        font-size: 1.5rem;
      }
    }

    &_value {
      &-container{
        margin-top: 10px;
        padding: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        color: #BA31E6B2;
        font-size: 2rem;
      }
      &-label {
        color: #0eeee499;
      }
    }

    &_errors{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-inline: auto;
      margin-top: 1rem;
      max-width: 500px;
      color: #ff3578bd;
      span {
        text-align: left;
      }
    }
  }
</style>