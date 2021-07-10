export default (posts = [], action) => {
  //Here posts = state
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload]; //Getting other posts as well as new post from payload
    default:
      return posts;
  }
};
