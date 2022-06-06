<script>
// @ts-nocheck
  import { Link } from "svelte-navigator";
</script>

<nav>
  <h1>logo</h1>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">SignUp</Link></li>
  </ul>
</nav>


<style lang="scss">
  nav{
    width: 100%;
    height: 100%;
    background-color: aqua;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      li {
        list-style: none;
        margin: 1rem;
      }
    }

  }
</style>