import { readFileSync } from 'fs';
import path from 'path';
import { act } from '@testing-library/react';

const titles = [
  { title: "Next Stage Plan" },
  { title: "Great Post" },
]

const posts = JSON.parse(
  readFileSync(path.join(__dirname, 'posts.json')).toString()
)

export const _posts = posts;
export const _titles = titles;

const mock = {
  titles: jest.fn(() => {
    return {
      then: callback =>
        act(() => {
          callback({
            titles
          });
        })
    };
  }),
  posts: jest.fn(() => {
    return {
      then: callback =>
        act(() => {
          callback(posts);
        })
    };
  })
};

export default mock;
