<template>
  <div class="end">
    <div class="end_display">
		<a href="/#/" class="end_btn">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			Рестарт
		</a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: BalsamiqSans;
  src: url(../assets/font/BalsamiqSans-Regular.ttf);
}

.end{
	background: #0c002b;
}

.end_title{
  margin: 0;
  padding-top: 50px;
  font-size: 40px;
  text-align: center;
  font-family: BalsamiqSans;
  color: #1670f0;
}

.end_display{
  height: 100vh; 
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
}

.end_menu{
  width: 400px;
  box-shadow: 0 0 8px #000;
  margin-top: 75px;
  margin-bottom: 250px;
  padding: 50px;
  box-sizing: border-box; 
}

.end_btn{
	display: block;
	position: relative;
	color: #1670f0;
	padding: 30px 60px;
	font-size: 30px;
	letter-spacing: 2px;
	text-transform: uppercase;
	text-decoration: none;
	box-shadow: 0 20px 50px rgba(0,0,0,.5);
	overflow: hidden;
	font-family: BalsamiqSans;
}
.end_btn:before{
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  width: 50%;
  background: rgba(255,255,255,0.05);
}
.end_btn span:nth-child(1){
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #0c002b,#1779ff);
  animation: animate1 2s linear infinite;
}
@keyframes animate1{
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(100%);
  }
}
.end_btn span:nth-child(2){
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, #0c002b,#1779ff);
  animation: animate2 2s linear infinite;
  animation-delay: 1s;
}
@keyframes animate2{
  0%{
    transform: translateY(-100%);
  }
  100%{
    transform: translateY(100%);
  }
}

.end_btn span:nth-child(3){
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to left, #0c002b,#1779ff);
  animation: animate3 2s linear infinite;
}
@keyframes animate3{
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  }
}

.end_btn span:nth-child(4){
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to top, #0c002b,#1779ff);
  animation: animate4 2s linear infinite;
  animation-delay: 1s;
}
@keyframes animate4{
  0%{
    transform: translateY(100%);
  }
  100%{
    transform: translateY(-100%);
  }
}


</style>
