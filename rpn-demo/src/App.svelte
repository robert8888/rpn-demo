<script>
  import Calculator from "./lib/Calculator.svelte";

</script>

<main>
  <div class="rpn">
    <div class="rpn_container">
      <img class="rpn_logo" src="/rpn-demo/logo.png" alt="rpn-logo" />
    </div>
    <Calculator/>
  </div>
</main>

<style lang="scss">
  :global(body) {
    place-items: start;
  }

  :global(body > *) {
    flex: 1;
  }

  :global(*){
    box-sizing: border-box;
  }

  main {
    width: 100%;
    background: #242424;
  }


  .rpn{
    &_container{
      width: 100%;
    }
    &_logo {
      margin-bottom: 2rem;
      max-width: 600px;
      width: 100%
    }
  }
</style>
