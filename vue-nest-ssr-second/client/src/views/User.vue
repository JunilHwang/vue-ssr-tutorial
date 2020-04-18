<template>
  <div>
    {{ this.userInfo }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const userStore = namespace('userStore')

@Component
export default class User extends Vue {

  @userStore.State private userInfo!: any

  serverPrefetch () {
    console.log("===============serverPrefetch start===============")
    console.log(this.userInfo)
    console.log("===============serverPrefetch end===============")
  }

}
</script>