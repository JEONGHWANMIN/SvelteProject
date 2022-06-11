
<script>
  export let name;
  export let img
  export let price
  export let content
</script>

<div class="CardContainer">
  <h1>{name}</h1>
</div>

<style lang="scss">
  .CardContainer {
    border-radius: 3rem;
    width: 35rem;
    height: 35rem;
    -webkit-box-shadow: -1px 0px 45px -8px rgba(0,0,0,0.16);
    -moz-box-shadow: -1px 0px 45px -8px rgba(0,0,0,0.16);
    box-shadow: -1px 0px 45px -8px rgba(0,0,0,0.16);
  }
</style>