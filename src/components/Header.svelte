<script>
// @ts-nocheck
  import { Link } from "svelte-navigator";
  import logoSrc from '../images/logo.png'
  import { useNavigate } from "svelte-navigator";

	const navigate = useNavigate();

  let isLogin = false
</script>

<nav>
  <div class="logoBox" on:click={() => navigate('/')}>
    <img src ={logoSrc} alt="Green Plant Logo" />
    <h1>GREEN</h1>
  </div>
  <ul>
    <li><Link to="/">Home</Link></li>
    {#if !isLogin} 
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">SignUp</Link></li>
    {:else} 
      <li><a>UserInfo</a></li>
      <li><Link to="">LogOut</Link></li>
    {/if}
  
  </ul>
</nav>


<style lang="scss">
  .logoBox {
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    img {
      width: 5rem;
      height: 4rem;
      margin-bottom: 0.5rem;
    }
    h1 {
      color: green;
    }
  }
  li > :global(a) {
        text-decoration: none;
        color: #444;
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