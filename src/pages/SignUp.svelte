<script></script>

<div class="Container">
  <div class="right-display">
    <div class="TextBox">
      <h1>Create New Account</h1>
      <p>Welcome</p>
    </div>
    <form class="SignForm">
      <div class="inputBox">
        <input type="text" required={true} autocomplete={'off'} />
        <span>Email</span>
      </div>
      <div class="inputBox">
        <input type="text" required={true} autocomplete={'off'} />
        <span>Name</span>
      </div>
      <div class="inputBox">
        <input type="password" required={true} autocomplete="off" />
        <span>Password</span>
      </div>
      <div class="inputBox">
        <input type="password" required={true} autocomplete="off" />
        <span>Confirm_password</span>
      </div>
      <button>SignUp</button>
    </form>
  </div>
</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

  .Container {
    display: flex;
    width: 100vw;
    min-height: 100vh;
  }

  .right-display {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .TextBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: green;
      width: 100%;
      h1 {
        padding-top: 4rem;
        color: white;
        font-size: 4rem;
        margin: 0;
        font-family: 'Secular One', sans-serif;
      }

      p {
        padding: 2rem;
        color: white;
        font-size: 2rem;
        font-family: 'Secular One', sans-serif;
      }
    }
  }

  .SignForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;

    .inputBox {
      position: relative;
      width: 35rem;
      margin: 1rem 0;
    }

    .inputBox input {
      width: 100%;
      height: 4rem;
      outline: none;
      padding: 1rem;
      transition: 0.2s;
      border-radius: 0.5rem;
      border: solid 1.5px #444;
    }

    .inputBox span {
      position: absolute;
      pointer-events: none;
      left: 0;
      top: 0;
      transform: translateY(30%);
      padding: 0.2rem;
      font-size: 1.5rem;
      margin-left: 2rem;
      padding: 0.5rem;
      transition: 0.5s;
      color: #555;
    }

    .inputBox input:valid ~ span,
    .inputBox input:focus ~ span {
      color: green;
      transform: translateY(-1.5rem);
      background-color: white;
    }

    .inputBox input:valid,
    .inputBox input:focus {
      border: solid 2px green;
    }

    button {
      width: 100%;
      height: 3.5rem;
      border-radius: 0.5rem;
      margin-top: 2rem;
      border: solid 1px lightgray;
      color: #fff;
      background-color: rgb(66, 158, 66);
      cursor: pointer;
    }
  }
</style>
