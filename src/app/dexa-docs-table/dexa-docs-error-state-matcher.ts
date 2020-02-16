import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class DexaDocsErrorStateMatches implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null): boolean {
    return Boolean(control && control.invalid);
  }
}
