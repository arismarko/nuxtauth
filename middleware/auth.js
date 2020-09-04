export default function ({ store, route, redirect, error }) {
    if (store.state.authUser) {
      const authorizationLevels = route.meta.map((meta) => {
        if (meta.auth && typeof meta.auth.authority !== 'undefined')
          return meta.auth.authority
        return 0
      })

      // Get highest authorization level
      const pageAuth = Math.max.apply(null, authorizationLevels)

      console.log("USER", store.state.authUser.authority);
      console.log("PAGE", pageAuth)

      if (store.state.authUser.authority != pageAuth) {
        return error({
          statusCode: 401,
          message: 'This user doesnt have access to this part of the app'
        })
      }    
    } else {
      return redirect('/login')
    }
  }
  