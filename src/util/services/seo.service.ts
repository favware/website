import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { COMMON_EMAIL } from '@util/constants';

export type SeoTags = {
  title: string;
  description: string;
  image: string;
  summary: string;
  imageAlt: string;
  url: string;
  keywords: string[];
};

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private meta: Meta, private titleService: Title) {}

  public generateTags(tags: SeoTags) {
    tags = {
      title: '',
      description: 'For Hearth and Home! Check out my projects here!',
      summary: 'This is my personal website showing off all the projects that I have made. Be sure to try some of them out!',
      image: 'https://favware.tech/assets/og-image.png',
      ...tags
    };

    // Update title and description
    this.titleService.setTitle(`Favware - ${tags.title}`);
    this.meta.updateTag({ name: 'description', content: tags.description });
    this.meta.updateTag({ name: 'summary', content: tags.summary });
    this.meta.updateTag({ name: 'keywords', content: ['favna', 'favware', 'portfolio', 'development', ...tags.keywords].join(' ') });

    // Set Meta Tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@Favna_' });
    this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    this.meta.updateTag({ name: 'twitter:image', content: tags.image });
    this.meta.updateTag({ name: 'twitter:image:alt', content: tags.imageAlt });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Favware' });
    this.meta.updateTag({ property: 'og:image:type', content: 'image/png' });
    this.meta.updateTag({ property: 'og:email', content: COMMON_EMAIL });
    this.meta.updateTag({ property: 'fb:app_id', content: '977960562367980' });
    this.meta.updateTag({ property: 'og:title', content: tags.title });
    this.meta.updateTag({ property: 'og:description', content: tags.description });
    this.meta.updateTag({ property: 'og:image', content: tags.image });
    this.meta.updateTag({ property: 'og:url', content: `https://favware.tech/${tags.url}` });
    this.meta.updateTag({ property: 'og:image:alt', content: tags.imageAlt });
  }
}
