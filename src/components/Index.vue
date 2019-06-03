<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <div class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</div>
        <h2 class="indigo-text">
          {{smoothie.title}}
          <ul class="ingredients">
            <li v-for="(ingredient, index) in smoothie.ingredients" :key="index+'A'">
              <span class="chip">
                {{ingredient}}
              </span>
            </li>
          </ul>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      smoothies:[
        {
          title: 'Mario Smoothies',
          path: 'mario-smoothies',
          ingredients:[
            'banana',
            'milk'
          ],
          id: '1'
        },
        {
          title: 'Luigi Smoothies',
          path: 'luigi-smoothies',
          ingredients:[
            'mango',
            'lime',
            'juice'
          ],
          id: '2'
        }
      ]
    }
  },
  methods:{
    deleteSmoothie(id){
      this.smoothies = this.smoothies.filter(smoothie=>smoothie.id!=id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients{
  margin: 30px auto;
}

.index .ingredients li{
  display: inline-block;
}

.index .delete{
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
