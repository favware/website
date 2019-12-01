import { MarkedOptions } from 'marked';
import { MarkedRenderer } from 'ngx-markdown';

export const markdownFactory = (): MarkedOptions => {
  const renderer = new MarkedRenderer();
  const linkRenderer = renderer.link;

  renderer.blockquote = (text: string) => `<blockquote class="blockquote"><p>${text}</p></blockquote>`;
  renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a role="link" tabindex="0" target="_blank" rel="nofollow noopener noreferrer" ');
  };

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
