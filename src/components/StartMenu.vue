<template>
  <div class="Start">
    <h1 class="start_title">Test App</h1>
    <div class="start_display">
      <div class="start_menu">
        <div class="list__element">
          <button @click="onNext()" class="list__link">NILETTO - Любимка</button>
          <div class="list__border--left-top"></div>
          <div class="list__border--left-bottom"></div>
          <div class="list__border--right-top"></div>
          <div class="list__border--right-bottom"></div>
        </div>
            
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onNext(){
      this.$router.push('/game');
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: BalsamiqSans;
  src: url(../assets/font/BalsamiqSans-Regular.ttf);
}

.start_title{
  margin: 0;
  padding-top: 50px;
  font-size: 40px;
  text-align: center;
  font-family: BalsamiqSans;
}

.start_display{
  height: calc(100vh - 98px); 
  display: flex;
  justify-content: center;
}

.start_menu{
  width: 400px;
  box-shadow: 0 0 8px #000;
  margin-top: 75px;
  margin-bottom: 250px;
  padding: 50px;
  box-sizing: border-box;
  
}


.list__link{
  text-decoration: none;
  transition: 0.4s;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 0;
  text-align: center;
  font-family: BalsamiqSans;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #0922aa;
}
.list__link:hover{
  color: #fff;
  background-color: rgba(0,0,0,0.3);
  transition: 0.4s;
}

.list__element{
  margin: 5px 0;
  position: relative;
  
  --SizeBorder: 3px;
  --LengBorder: 10px;
  --bgColor: #000;
}
/* left-top */
.list__border--left-top::before{
  content: "";
  
  position: absolute;
  left: 2px;
  top: 2px;
  
  width: var(--SizeBorder);
  height: var(--LengBorder);
  background-color: var(--bgColor);
}
.list__border--left-top::after{
  content: "";
  
  position: absolute;
  left: 2px;
  top: 2px;
  
  width: var(--LengBorder);
  height: var(--SizeBorder);
  background-color: var(--bgColor);
}
/* left-bottom */
.list__border--left-bottom::before{
  content: "";
  
  position: absolute;
  left: 2px;
  bottom: 2px;
  
  width: var(--SizeBorder);
  height: var(--LengBorder);
  background-color: var(--bgColor);
}
.list__border--left-bottom::after{
  content: "";
  
  position: absolute;
  left: 2px;
  bottom: 2px;
  
  width: var(--LengBorder);
  height: var(--SizeBorder);
  background-color: var(--bgColor);
}
/* right-top */
.list__border--right-top::before{
  content: "";
  
  position: absolute;
  right: 2px;
  top: 2px;
  
  width: var(--SizeBorder);
  height: var(--LengBorder);
  background-color: var(--bgColor);
}
.list__border--right-top::after{
  content: "";
  
  position: absolute;
  right: 2px;
  top: 2px;
  
  width: var(--LengBorder);
  height: var(--SizeBorder);
  background-color: var(--bgColor);
}
/* right-bottom */
.list__border--right-bottom::before{
  content: "";
  
  position: absolute;
  right: 2px;
  bottom: 2px;
  
  width: var(--SizeBorder);
  height: var(--LengBorder);
  background-color: var(--bgColor);
}
.list__border--right-bottom::after{
  content: "";
  
  position: absolute;
  right: 2px;
  bottom: 2px;
  
  width: var(--LengBorder);
  height: var(--SizeBorder);
  background-color: var(--bgColor);
}
.list__element:hover 
.list__border--left-top::before,
 .list__element:hover 
.list__border--left-top::after{
  left: 0;
  top: 0;
  transition: 0.3s;
}

.list__element:hover 
.list__border--left-bottom::before,
 .list__element:hover 
.list__border--left-bottom::after{
  left: 0;
  bottom: 0;
  transition: 0.3s;
}

.list__element:hover 
.list__border--right-top::before,
 .list__element:hover 
.list__border--right-top::after{
  right: 0;
  top: 0;
  transition: 0.3s;
}

.list__element:hover 
.list__border--right-bottom::before,
 .list__element:hover 
.list__border--right-bottom::after{
  bottom: 0;
  right: 0;
  transition: 0.3s;
}
</style>
