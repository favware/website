import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type seoTags = {
  title: string;
  description: string;
  image: string;
  slug?: string;
  imageAlt?: string;
  url?: string;
};

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  constructor (private meta: Meta, private titleService: Title) { }

  generateTags (tags: seoTags) {
    tags = {
      title: 'Favware',
      description: 'For Hearth and Home! Check out my projects here!',
      image: 'https://favna.xyz/assets/og-image.png',
      slug: '',
      ...tags,
    };

    // Update title
    this.titleService.setTitle(tags.title);

    // Set Meta Tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@Favna_' });
    this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    this.meta.updateTag({ name: 'twitter:image', content: tags.image});
    this.meta.updateTag({ name: 'twitter:image:alt', content: tags.imageAlt});

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Favware' });
    this.meta.updateTag({ property: 'og:image:type', content: 'image/png' });
    this.meta.updateTag({ property: 'fb:app_id', content: '977960562367980' });
    this.meta.updateTag({ property: 'og:title', content: tags.title });
    this.meta.updateTag({ property: 'og:description', content: tags.description });
    this.meta.updateTag({ property: 'og:image', content: tags.image });
    this.meta.updateTag({ property: 'og:url', content: `https://favna.xyz/${tags.url}` });
    this.meta.updateTag({ property: 'og:image:alt', content: tags.imageAlt });
  }
}
