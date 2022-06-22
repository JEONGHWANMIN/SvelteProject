<script>
  import Banners1 from '../images/banners/banners1.jpg';
  import Banners2 from '../images/banners/banners2.jpg';
  import Banners3 from '../images/banners/banners3.jpg';
  import Card from '../components/Card.svelte';
  import { dummys } from '../dummys/dummys';
  import { getProduct } from '../apis/apiClient';

  // Banner API
  let BannerNum = 0;
  setInterval(() => {
    BannerNum === 4 ? (BannerNum = 1) : BannerNum++;
  }, 4000);
  // Product API
  const productData = getProduct();
</script>

<!-- Home Banner -->
<div class="hidden">
  <div
    class="BannersBox"
    style={BannerNum === 1
      ? 'transform: translate(0vw)'
      : BannerNum === 2
      ? 'transform: translate(-100vw)'
      : 'transform: translate(-200vw)'}
  >
    <div class="innerBox">
      <img src={Banners1} alt="Shopa" />
    </div>
    <div class="innerBox">
      <img src={Banners2} alt="Shopa" />
    </div>
    <div class="innerBox">
      <img src={Banners3} alt="Shopa" />
    </div>
  </div>
  <div class="banner-btns">
    <button class="banner-btn" on:click={() => (BannerNum = 1)} />
    <button class="banner-btn" on:click={() => (BannerNum = 2)} />
    <button class="banner-btn" on:click={() => (BannerNum = 3)} />
  </div>
</div>

<!-- Products -->
<div class="CardContainer">
  {#each dummys.slice(0, 3) as dummy}
    <Card
      name={dummy.name}
      price={dummy.price}
      img={dummy.img}
      content={dummy.content}
    />
  {/each}
</div>

<style lang="scss">
  .hidden {
    overflow: hidden;
    position: relative;
  }
  .BannersBox {
    transition: transform 1.75s;
    width: 300vw;
    margin: auto;
    background-color: lightgrey;

    .innerBox {
      width: 100vw;
      float: left;
    }
    img {
      width: 100%;
      height: 40rem;
    }
  }

  .banner-btns {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .banner-btn {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    border: none;
    margin: 1rem;
    cursor: pointer;
  }

  .CardContainer {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: auto;
  }
</style>
