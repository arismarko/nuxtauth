<template>
  <div>
    <login />
  </div>
</template>

<script>
import login from '../components/Login/Login';

export default {
  layout: 'login',
  components: {
     'login': login
  }
}
</script>