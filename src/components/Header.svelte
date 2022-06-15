<script>
// @ts-nocheck
  import { Link } from "svelte-navigator";
  import logoSrc from '../images/logo.png'
  import { useNavigate } from "svelte-navigator";
  import MenuHeader from "./MenuHeader.svelte";
	const navigate = useNavigate();

  let isLogin = false
</script>

<nav>
  <div class="SearchBox">
    <input type="search" placeholder="search"/>
    <button>🔎</button>
  </div>
  <div class="logoBox" on:click={() => navigate('/')}>
    <h1>Green</h1>
    <img src ={logoSrc} alt="Green Plant Logo" />
    <h1>Develop</h1>
  </div>
  <ul>
    <li><Link to="/">Home</Link></li>
    {#if !isLogin} 
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    {:else} 
      <li><a href="/">UserInfo</a></li>
      <li><Link to="">LogOut</Link></li>
    {/if}
  </ul>
</nav>
<MenuHeader />

<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
  .logoBox {
    font-family: 'Josefin Sans', sans-serif;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    img {
      width: 5rem;
      height: 4rem;
      margin-bottom: 0.5rem;
    }
    h1 {
      color: green;
    }
  }

  .SearchBox {
    margin-left: 1rem;
    display: flex;
    
    input {
      height: 2.5rem;
      border: solid 1px Green;
      border-radius: 1rem 0 0.1rem 1rem;
      padding-left: 1rem;
      width: 20rem;
    }

    button {
      display: block;
      height: 2.5rem;
      cursor: pointer;
      background-color: rgb(39, 150, 89);
      border: none;
      width: 2.3rem;
    }

    
  }

  li > :global(a) {
        text-decoration: none;
        color: #444;
        font-family: 'Source Sans Pro', sans-serif;

    }
  nav{
    width: 100%;
    height: 100%;
    background-color: rgb(244, 241, 241);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;

    ul {
      display: flex;
      li {
        list-style: none;
        margin: 1rem;
      }
    }

  }
</style>