<template>
  <div class="profile">
    <pro-info></pro-info>
    <about></about> 
    <wu-liu></wu-liu>
    <money></money>
     </div>
</template>

<script>
import ProInfo from "./ChildComps/ProInfo.vue";
import About from "./ChildComps/About.vue";
import WuLiu from "./ChildComps/WuLiu.vue";
import Money from "./ChildComps/Money.vue";


export default {
  name: 'ProFile',
  components: {
    ProInfo,
    About,
    WuLiu,
    Money
  }
  
}
</script>
<style>
body {
  background-color: #EAE4E6;
  opacity: 0.8;
}
</style>
