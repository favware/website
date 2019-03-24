import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ExtractText' })
export class ExtractTextPipe implements PipeTransform {
  transform (value: string[], section: number = 0): string {
    return value[section];
  }
}
