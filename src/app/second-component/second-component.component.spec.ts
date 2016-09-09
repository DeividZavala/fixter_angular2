/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SecondComponentComponent } from './second-component.component';

describe('Component: SecondComponent', () => {
  it('should create an instance', () => {
    let component = new SecondComponentComponent();
    expect(component).toBeTruthy();
  });
});
