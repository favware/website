import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statEvaluator' })
export class StatEvaluatorPipe implements PipeTransform {
  transform (value: string): number | string {
      return JSON.parse(value).count;
  }
}
