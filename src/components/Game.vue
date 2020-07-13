<template>
  <div>
    <div class="sourse">
      <img src="../assets/hero.png" id="hero" alt="">
      <audio src="../assets/music/sound/sound.mp3" id="music"></audio>
    </div>
    <canvas id="canvas">
      
    </canvas>
  </div>
</template>

<script>

import Sound from "../assets/music/code/sound/sound1.json"
import Block from "../assets/music/code/block/block1.json"

export default {
  data(){
    return {
      array : new Uint8Array(1),
      margin : window.innerHeight * 0.2,
      context :  null,
      analyser :  null,
      src :  null,
      canvas :  null,
      ctx :  null,
      hero :  {
        image : null,
        width : 64,
        height : 64,
        posY : null
      },
      voice: 0,
      tik : 0, 
      speedMove : 1,
      positionMove : 0,
      maxWidth : 0,
      interval: null,
      music : ""
    }
  },
  methods: {
    centerWidth(size = 64, width = window.innerWidth){
      return ( width / 2 ) - ( size / 2 )
    },
    centerHeight(size = 64, height = window.innerHeight){
      return ( height / 2 ) - ( size / 2 )
    },
    convertHeight(){
      let height = window.innerHeight - (this.margin * 2);
      let step = height / 100;
      return step;
    },
    loop(){
      window.requestAnimationFrame(this.loop);
      this.analyser.getByteFrequencyData(this.array);
      this.voice = this.array[0];
      // console.log(this.voice);
    },
    render(){
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      this.ctx.drawImage(this.hero.image, this.centerWidth() - 200, this.posY, this.hero.width, this.hero.height); 
      this.background();
      this.tik += 1;
      this.positionMove -= this.speedMove;
      this.movePlayer();
    },
    movePlayer(){
      let toVoice = this.margin + ( window.innerHeight - (this.margin * 2) ) - ( this.voice * this.convertHeight()) - 64;
      if(toVoice < this.margin){
        toVoice = this.margin;
      }
      if(this.posY > toVoice){
        this.posY -= 2;
      }else if(this.posY < toVoice){
        this.posY += 2;
      }
    },
    background(){
      let ctx = this.ctx;
      //Стены
      ctx.fillStyle = '#785d43';
      ctx.fillRect(this.positionMove, 0, this.maxWidth, this.margin);
      ctx.fillRect(this.positionMove, window.innerHeight - this.margin, this.maxWidth, this.margin);

      
      //Линии
      const sizeLine = 10;
      ctx.fillStyle = '#d1c958';
      ctx.fillRect(this.positionMove, this.margin - sizeLine, this.maxWidth, sizeLine);
      ctx.fillRect(this.positionMove, window.innerHeight - this.margin, this.maxWidth, sizeLine);
      let step = (window.innerHeight - ( this.margin * 2 ) - (this.hero.height * 2) ) / 10;

      for( let item of Block ){
        if(item.block < 0){
          ctx.fillStyle = '#785d43';

          let posX = this.converToTik(item.time);
          posX = this.positionMove + posX + this.centerWidth() - 200;

          let posY = this.margin - sizeLine - 1;

          ctx.fillRect(
            posX,
            posY, 
            150,
            (step * item.block) * -1
            );

          ctx.fillStyle = '#d1c958';
           
          ctx.fillRect(
            posX,
            posY - (step * item.block) - sizeLine, 
            150,
            sizeLine 
          );
          
          ctx.fillRect(
              posX,
              posY + 1,
              sizeLine,
              ((step * item.block) + sizeLine) * -1
            );
            
          ctx.fillRect(
              posX + 150 - sizeLine,
              posY + 1,
              sizeLine,
              ((step * item.block) + + sizeLine) * -1
          );
          
          //Коллизия
          const b = {
            bottom : posY + ((step * item.block) * -1),
            left : posX,
            right: posX + 150
          }

          if(
              this.centerWidth() - 200 + 64 > b.left &&
              this.centerWidth() - 200 < b.right &&
              this.posY  < b.bottom
            ){
            clearInterval(this.interval);
            this.$router.push('/end');
          }
        }else if(item.block > 0){
          ctx.fillStyle = '#785d43';

          let posX = this.converToTik(item.time);
          posX = this.positionMove + posX + this.centerWidth() - 200;

          let posY = window.innerHeight - this.margin - (step * item.block);

          ctx.fillRect(
            posX,
            posY, 
            150,
            window.innerHeight - ((this.margin * 2) + (this.hero.height * 2)) + sizeLine + 1 
            );

          ctx.fillStyle = '#d1c958';

          ctx.fillRect(
            posX,
            posY, 
            150,
            sizeLine 
          );
          ctx.fillRect(
              posX,
              posY,
              sizeLine,
              (step * item.block) + sizeLine
            );
          ctx.fillRect(
              posX + 150,
              posY,
              sizeLine,
              (step * item.block) + sizeLine 
            );

          //Коллизия
          const b = {
            top : posY,
            left : posX,
            right: posX + 150
          }

          if(
              this.centerWidth() - 200 + 64 > b.left &&
              this.centerWidth() - 200 < b.right &&
              this.posY + 64 > b.top
            ){
            clearInterval(this.interval);
            this.$router.push('/end');
          }
        }
        

      }

      for( let item of Sound.timelist ){
        let pos = this.converToTik(item.time);
        this.ctx.font = "48px serif";
        ctx.textAlign = 'center';
        this.ctx.fillText(item.text, this.positionMove + pos + this.centerWidth() - 200 + (150 / 2), window.innerHeight - (this.margin / 2));
      }

    },
    converToTik(num){
      let [min, sec] = num.split(":");
      min = parseInt(min);
      sec = parseInt(sec);
      sec += (min * 60);
      let tik = sec * 500;
      return tik
    }

  },
  mounted(){
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    this.context = new AudioContext();
    this.analyser = this.context.createAnalyser();

    this.hero.image = document.getElementById('hero');

    this.maxWidth = this.converToTik(Sound.maxTime);

    this.posY = this.centerHeight();  
    

    navigator.mediaDevices.getUserMedia({
      audio: true   
    }).then(stream => {
      this.src = this.context.createMediaStreamSource(stream);
      this.src.connect(this.analyser);
      this.loop();
      this.interval = setInterval(this.render, 2);
      document.getElementById("music").play();
    }).catch( error => {
      alert(error + '\r\n Отклонено. Страница будет обновлена!');
      location.reload();
    });
  }, 
  computed: {
    getTime(){
      const tik = this.tik;
      const sec = Math.floor(this.tik / 500);
      const min = Math.floor(sec / 60);

      return {
        tik : tik,
        sec : sec,
        min : min
      }
    }
  }
}
</script>

<style>
body, html{
  margin: 0;
  padding: 0;
}
#canvas{
  display: block;
  width: 100%;
  height: 100vh;
}
.sourse{
  display: none;
}
</style>
