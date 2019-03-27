import { MarkedOptions } from 'marked';
import { MarkedRenderer } from 'ngx-markdown';

const markdownFactory = (): MarkedOptions => {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => `<blockquote class="blockquote"><p>${text}</p></blockquote>`;

  return {
    renderer,
    breaks: true,
    gfm: true,
    pedantic: false,
    sanitize: true,
    silent: true,
    smartLists: true,
    smartypants: false,
    tables: true,
  };
};

export default markdownFactory;
