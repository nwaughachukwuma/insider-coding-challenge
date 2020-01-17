<template>
  <div class="navbar">
    <div class="colum">
      <div class="home" >
          <i class="lni-chevron-left size-md " :class=" { 'lni-fade-left-effect-hover' : showHome } " id="home" @click="showHome = !showHome"></i>
          <h4 v-if="showHome" style="margin-top: 8px; color: #ffff;"> Left </h4>
      </div>
      <div class="check">
        <i class="lni-pause size-md" :class=" { 'lni-burst-effect' : showCheck } " id="check" @click="showCheck = !showCheck"></i>
         <h4 v-if="showCheck" style="margin-top: 8px; color: #ffff;"> Pause </h4>
      </div>
      <div class="coin" >
        <i class="lni-reload size-md" :class=" { 'lni-tada-effect-hover' : showCoin } " id="coin" @click="showCoin = !showCoin"></i>
         <h4 v-if="showCoin" style="margin-top: 8px; color: #ffff;"> Restart </h4>
      </div>
      <div class="user" >
        <i class="lni-chevron-right size-md" :class=" { 'lni-fade-right-effect-hover' : showUser } "  id="user" @click="showUser = !showUser"></i>
        <h4 v-if="showUser" style="margin-top: 8px; color: #ffff;"> Right </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showHome: false,
    showCheck: false,
    showCoin: false,
    showUser: false,
    effect: 'lni-tada-effect'
  }),
  methods:{
    
  }
}
</script>

<style lang="css" scoped>
.navbar{
  width: 99%;
  height: 60px;
  background-color: #192a56;
  bottom: 0;
  position: fixed;
  box-shadow: 0.1px 0.1px 15px 0.1px #273c75;
  border-radius:5px;
  display: flex;
}
#home{
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#check{
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#coin{
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
.colum{
  display: flex;
  width: 95%;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center
}
.home{
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.check{
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.coin{
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.clicked{
  width: 100px;
  height: 34px;
  background-color: #feca57;
  border-radius: 10px;
  transition: background-color 0.3s, border-radius 0.5s, width 0.5s;
}
#user{
  margin-left: 0;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
.user{
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
</style>