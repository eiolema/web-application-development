<template>
    <div id="formcontainer">
    <form>
        <label for="email">Email</label>
        <input type="email" class="inputfield" name="email" placeholder="Email" required><br>
        <label for="password">Password</label>
        <input type="password" class="inputfield" name="password" placeholder="Password" required><br>
        <input type="submit" class="submit" name="login" value="Signup"> <br>
    </form>
    </div>
</template>


<style>


#formcontainer {
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: lightgrey;
    border-radius: 10px;
    width: 50%;
    align-self: center;
    margin-left:25%;
}

.inputfield {
    border-radius: 10px;
    height: 30px;
    margin: 10px;
    text-align: center;
}

.submit {
    border-radius: 15px;
    margin: 10px;
    height: 30px;
    width: 100px;
    background-color:rgb(68, 160, 252);
}
</style>
