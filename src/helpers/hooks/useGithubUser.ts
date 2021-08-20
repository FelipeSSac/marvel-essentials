import toast from 'react-hot-toast';

export default async function useGithubUser(githubUser: string) {
  const user = await fetch(`https://api.github.com/users/${githubUser}`)
    .then((response) => response.json());

  if (user.message === 'Not Found') {
    toast('Usuário Inválido!',
      {
        icon: '❌',
        style: {
          borderRadius: '10px', background: '#333', color: '#fff',
        },
      });

    return false;
  }

  return true;
}
