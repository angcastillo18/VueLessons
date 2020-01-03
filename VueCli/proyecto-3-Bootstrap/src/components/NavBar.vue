<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="danger">
          <b-container>
            <b-navbar-brand href="#">NavBar</b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-collapse id="nav_collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{name:'home'}" exact  >Home</b-nav-item>
                    <b-nav-item :to="{name:'about'}"  exact>About Us</b-nav-item>
                    <b-nav-item :to="{name:'info'}"  exact>Information</b-nav-item>
<!--                     <b-nav-item active-class="active" class="nav-link" v-for="routes in links" 
                        :key="routes.id" :to="routes.path"  exact>
                    {{ routes.name }} 
                    </b-nav-item>     -->   


                </b-navbar-nav>
            </b-collapse>
          </b-container>
      </b-navbar>
  </div>
</template>

<script>
export default {
    name:'NavBar'/* ,
    data() {
        return {
            links: [
                {
                    id: 0,
                    name: 'Home',
                    path: '/',
                },
                {
                    id: 1,
                    name: 'About',
                    path: '/About',
                }
            ],
        }
    } */
}
</script>

<style >

</style>