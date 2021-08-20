import jwt from 'jsonwebtoken';

export default function handleToken(githubUser:string) {
  return jwt.sign({ githubUser, iat: 17280000 }, 'marveltoken');
}
