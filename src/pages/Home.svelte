<script>
 import Banners1 from '../images/banners/banners1.jpg'
 import Banners2 from '../images/banners/banners2.jpg'
 import Banners3 from '../images/banners/banners3.jpg'
 import Card from '../components/Card.svelte'

 let Banners = [Banners1 ,Banners2,Banners3]
 let num = 0
 setInterval(() => {
   if (num === 2) num = 0
   else  num = num + 1
 }, 3000);
 
</script>

<div class="BannersBox">
  <img src={Banners[num]} alt="Shopa">
</div>
<Card name="Monitor" />


<style lang="scss">
  .BannersBox {
    transition-delay: 10s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: auto;
    background-color: lightgrey;
    img {
      height: 50rem;
    }
  }
  
</style>