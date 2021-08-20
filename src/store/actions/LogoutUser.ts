export default function LogoutUser() {
  localStorage.removeItem('marvelEssentialToken');

  return {
    token: '',
    user: {
      githubUserImage: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1',
      githubUser: '',
    },
  };
}
