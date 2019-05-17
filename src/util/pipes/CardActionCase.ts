import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cardActionCase' })
export class CardActionCasePipe implements PipeTransform {
  public transform (value: string): string {
    switch (value) {
      case 'npm':
        return value.toUpperCase();
      case 'macos':
        return 'MacOS Download';
      case 'windows':
        return 'Windows Download';
      default:
        const titleCasePipe = new TitleCasePipe();
        return titleCasePipe.transform(value);
    }
  }
}
