<script>
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
  import SignUp from "./pages/SignUp.svelte";
  import { Router, Route} from "svelte-navigator";
  import Header from "./components/Header.svelte";
</script>

<Router>
    <Header />
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
</Router>