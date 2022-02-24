import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import * as ngidUploadAction from '../../actions/ngid-upload.action';
import { NgidUpload } from '../../domain/ngid-upload';
import { NgidUploadModel } from '../../model/ngid-upload.model';
import { NgidUploadService } from '../../ngid-upload.service';
@Component({
  selector: 'ngid-upload',
  templateUrl: './upload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadComponent),
      multi: true,
    },
    NgidUploadService,
  ],
})
export class UploadComponent implements ControlValueAccessor, OnInit {
  @Input() value: any;
  @Input() formControlName: string;
  @Input() formControl: FormControl;
  @Input() model: NgidUploadModel;
  @Input() stringUrl: string;

  $onBaseChange: () => any;
  $onBaseTouch: () => any;

  public formGroup: FormGroup;
  public state: NgidUpload;

  constructor(
    private controlContainer: ControlContainer,
    private ngidUpload: NgidUploadService
  ) {}

  ngOnInit(): void {
    this.checkInputAndSetErrors();
    this.setInitializationState();
    this.setFormGroupState();
    this.setFormControlState();
    console.log(this.state);
  }

  private checkInputAndSetErrors(): void {
    if (!this.stringUrl) {
      throw new Error('stringUrl is required');
    }
  }

  private setInitializationState(): void {
    const model: NgidUploadModel = this.model;
    this.state = this.ngidUpload.setState(model, this.stringUrl);
  }

  private setFormGroupState(): void {
    this.formGroup = this.controlContainer.control as FormGroup;
  }

  private setFormControlState(): void {
    this.formControl = this.formGroup.get(this.formControlName) as FormControl;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.$onBaseChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.$onBaseTouch = fn;
  }

  public handleUploadChange(event: Event, index?: number): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files as FileList;
    this.ngidUpload.dispatch(
      typeof index !== 'undefined'
        ? new ngidUploadAction.ChangeFile({ index, file: files[0] })
        : new ngidUploadAction.AddFile({ files })
    );
    inputElement.value = '';
    this.ngidUpload.dispatch(new ngidUploadAction.UploadFile());
  }

  public handleDelete(index: number): void {
    this.ngidUpload.dispatch(new ngidUploadAction.DeleteFile({ index }));
  }
}
