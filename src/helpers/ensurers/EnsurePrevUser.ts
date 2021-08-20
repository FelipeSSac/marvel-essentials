import jwt from 'jsonwebtoken';

export interface ITokenPayload {
  githubUser: string
  iat: number;
}

export default function EnsurePrevUser() {
  const token = localStorage.getItem('marvelEssentialToken');

  if (!token) {
    return {
      token: '',
      user: {
        githubUserImage: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1',
        githubUser: '',
      },
    };
  }

  const tokenPayload = jwt.decode(token) as ITokenPayload;

  const { githubUser } = tokenPayload;

  return {
    token,
    user: {
      githubUserImage: `https://github.com/${githubUser}.png`,
      githubUser,
    },
  };
}
