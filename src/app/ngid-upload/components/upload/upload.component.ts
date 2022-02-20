import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NgidUpload } from '../../domain/ngid-upload';
import { NgidUploadModel } from '../../model/ngid-upload.model';
import { NgidUploadService } from '../../ngid-upload.service';
import * as ngidUploadAction from '../../actions/ngid-upload.action';
import { uploadFileAction } from '../../actions/upload-file.action';
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

  public handleUploadChange(event: Event): void {
    const files = (event.target as HTMLInputElement).files as FileList;
    this.ngidUpload.dispatch(new ngidUploadAction.AddFile({ files }));

    console.log(this.state.files);
  }
}
