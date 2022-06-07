<script>
  export let name;
  export let img
  export let price
  export let content
</script>

<div class="CardContainer">
  <img src={img} alt="">
  <h1>{name}</h1>
  <h1>{price}</h1>
  <h1>{content}</h1>
</div>

<style lang="scss">
  .CardContainer {
    border-radius: 3rem;
    height: 45rem;
    -webkit-box-shadow: 6px 18px 52px -8px rgba(237,237,237,1);
  -moz-box-shadow: 6px 18px 52px -8px rgba(237,237,237,1);
  box-shadow: 6px 18px 52px -8px rgba(237,237,237,1);

  img {
    width: 40rem;
    height: 30rem;
  }
  }
</style>