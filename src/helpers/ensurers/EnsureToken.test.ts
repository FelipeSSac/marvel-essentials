import jwt from 'jsonwebtoken';

import { EnsureToken } from '.';
import { ITokenPayload } from './EnsurePrevUser';

describe('Testing token ensurer', () => {
  test('valid user name should return token', () => {
    const token = EnsureToken('0');

    expect(!!token).toBe(true);
  });

  test('valid token should return user name by payload', () => {
    const token = EnsureToken('0');

    const tokenPayload = jwt.decode(token) as ITokenPayload;

    const { githubUser } = tokenPayload;

    expect(githubUser).toBe('0');
  });
});
