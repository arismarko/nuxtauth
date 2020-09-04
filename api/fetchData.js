import users from './dummydata.json';

class FetchData {
    loginUser(credentials) {
      console.log(credentials);
      return users.filter(user => {
        return user.username === credentials.username
           && user.password === credentials.password
      });
    }
  
}

export default FetchData;