import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ChangeATarget' })
export class ChangeATargetPipe implements PipeTransform {
  transform (value: string): string {
    return value.replace(/(.+)(<a )(.+)/, '$1$2target="_blank" $3');
  }
}
