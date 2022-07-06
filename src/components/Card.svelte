<script>
  import { priceToString } from '../lib/priceToString';
  export let name;
  export let category;
  export let img;
  export let price;
  export let content;
</script>

<div class="Card">
  <div class="imgBox">
    <img src={img} alt="" />
  </div>
  <div class="content">
    <p class="category item">{category}</p>
    <h1 class="title item">{name}</h1>
    <p class="price item">{priceToString(price)}원</p>
    <p class="item">{content}</p>
  </div>
</div>

<style lang="scss">
  .Card {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    width: 40rem;
    height: 40rem;
    border-radius: 2rem;
    overflow: hidden;
  }
  .Card:hover {
    cursor: pointer;
    opacity: 70%;
  }
  .imgBox {
    width: 100%;
    height: 63%;
    border-bottom: solid 1px lavenderblush;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    margin: 1rem 2rem;
    .category {
      color: #666;
      font-size: 1.5rem;
    }
    .title {
      color: #444;
      font-size: 2rem;
    }
    .price {
      color: #555;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  .item {
    margin: 0.5rem 0;
  }
</style>
