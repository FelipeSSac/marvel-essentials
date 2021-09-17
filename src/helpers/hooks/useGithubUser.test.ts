import { useGithubUser } from '.';

describe('testing useGithubUser hook', () => {
  test('false user should return false', async () => {
    const response = await useGithubUser('  ');

    expect(response).toBe(false);
  });

  test('real user should return true', async () => {
    const response = await useGithubUser('0');

    expect(response).toBe(true);
  });
});
