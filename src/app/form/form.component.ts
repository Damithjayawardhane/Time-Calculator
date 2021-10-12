import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  formValue!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.formValue = this.formBuilder.group({
      totalhours: ["0:00"],

      inDay1: [],
      outDay1: [],
      totalDay1: ["0:00"],

      inDay2: [],
      outDay2: [],
      totalDay2: ["0:00"],

      inDay3: [],
      outDay3: [],
      totalDay3: ["0:00"],

      inDay4: [],
      outDay4: [],
      totalDay4: ["0:00"],

      inDay5: [],
      outDay5: [],
      totalDay5: ["0:00"],

      inDay6: [],
      outDay6: [],
      totalDay6: ["0:00"],

      inDay7: [],
      outDay7: [],
      totalDay7: ["0:00"],

      inDay8: [],
      outDay8: [],
      totalDay8: ["0:00"],

      inDay9: [],
      outDay9: [],
      totalDay9: ["0:00"],

      inDay10: [],
      outDay10: [],
      totalDay10: ["0:00"],

      inDay11: [],
      outDay11: [],
      totalDay11: ["0:00"],

      inDay12: [],
      outDay12: [],
      totalDay12: ["0:00"],

      inDay13: [],
      outDay13: [],
      totalDay13: ["0:00"],

      inDay14: [],
      outDay14: [],
      totalDay14: ["0:00"],

      inDay15: [],
      outDay15: [],
      totalDay15: ["0:00"],

      inDay16: [],
      outDay16: [],
      totalDay16: ["0:00"],

      inDay17: [],
      outDay17: [],
      totalDay17: ["0:00"],

      inDay18: [],
      outDay18: [],
      totalDay18: ["0:00"],

      inDay19: [],
      outDay19: [],
      totalDay19: ["0:00"],

      inDay20: [],
      outDay20: [],
      totalDay20: ["0:00"],

      inDay21: [],
      outDay21: [],
      totalDay21: ["0:00"],

      inDay22: [],
      outDay22: [],
      totalDay22: ["0:00"],

      inDay23: [],
      outDay23: [],
      totalDay23: ["0:00"],

      inDay24: [],
      outDay24: [],
      totalDay24: ["0:00"],

      inDay25: [],
      outDay25: [],
      totalDay25: ["0:00"],

      inDay26: [],
      outDay26: [],
      totalDay26: ["0:00"],

      inDay27: [],
      outDay27: [],
      totalDay27: ["0:00"],

      inDay28: [],
      outDay28: [],
      totalDay28: ["0:00"],

      inDay29: [],
      outDay29: [],
      totalDay29: ["0:00"],

      inDay30: [],
      outDay30: [],
      totalDay30: ["0:00"],

      inDay31: [],
      outDay31: [],
      totalDay31: ["0:00"],

    });

    this.formValue.controls["outDay1"].disable();
    this.formValue.controls["outDay2"].disable();
    this.formValue.controls["outDay3"].disable();
    this.formValue.controls["outDay4"].disable();
    this.formValue.controls["outDay5"].disable();
    this.formValue.controls["outDay6"].disable();
    this.formValue.controls["outDay7"].disable();
    this.formValue.controls["outDay8"].disable();
    this.formValue.controls["outDay9"].disable();
    this.formValue.controls["outDay10"].disable();
    this.formValue.controls["outDay11"].disable();
    this.formValue.controls["outDay12"].disable();
    this.formValue.controls["outDay13"].disable();
    this.formValue.controls["outDay14"].disable();
    this.formValue.controls["outDay15"].disable();
    this.formValue.controls["outDay16"].disable();
    this.formValue.controls["outDay17"].disable();
    this.formValue.controls["outDay18"].disable();
    this.formValue.controls["outDay19"].disable();
    this.formValue.controls["outDay20"].disable();
    this.formValue.controls["outDay21"].disable();
    this.formValue.controls["outDay22"].disable();
    this.formValue.controls["outDay23"].disable();
    this.formValue.controls["outDay24"].disable();
    this.formValue.controls["outDay25"].disable();
    this.formValue.controls["outDay26"].disable();
    this.formValue.controls["outDay27"].disable();
    this.formValue.controls["outDay28"].disable();
    this.formValue.controls["outDay29"].disable();
    this.formValue.controls["outDay30"].disable();
    this.formValue.controls["outDay31"].disable();
  }
  // Change In Time
  changeDayIn(number: any) {
    this.formValue.controls["outDay" + number].enable();
    this.formValue.controls["outDay" + number].reset();
    this.formValue.controls["totalDay" + number].setValue("0:00");
    this.totalHours();
  };
  // Click button icon
  clearDay(number: any) {
    this.formValue.controls["outDay" + number].disable();
    this.formValue.controls["outDay" + number].reset();
    this.formValue.controls["inDay" + number].reset();
    this.formValue.controls["totalDay" + number].setValue("0:00");
    this.totalHours();
  };
  // Change Out Time
  dayTotal(number: number) {
    let start = new Date("1970-01-01 " + this.formValue.controls['inDay' + number].value);
    let end = new Date("1970-01-01 " + this.formValue.controls['outDay' + number].value);
    let diffH = end.getTime() - start.getTime();
    let minitis = Math.floor((diffH / (1000 * 60)) % 60);
    let hours = Math.floor((diffH / (1000 * 60 * 60)) % 24);
    this.formValue.controls["totalDay" + number].setValue(hours + ":" + minitis);
    this.totalHours();
  };
  // Calculate Total hours
  totalHours() {
    let d1 = this.formValue.value.totalDay1;
    let D1 = d1.split(':');
    let d2 = this.formValue.value.totalDay2;
    let D2 = d2.split(':');
    let d3 = this.formValue.value.totalDay3;
    let D3 = d3.split(':');
    let d4 = this.formValue.value.totalDay4;
    let D4 = d4.split(':');
    let d5 = this.formValue.value.totalDay5;
    let D5 = d5.split(':');
    let d6 = this.formValue.value.totalDay6;
    let D6 = d6.split(':');
    let d7 = this.formValue.value.totalDay7;
    let D7 = d7.split(':');
    let d8 = this.formValue.value.totalDay8;
    let D8 = d8.split(':');
    let d9 = this.formValue.value.totalDay9;
    let D9 = d9.split(':');
    let d10 = this.formValue.value.totalDay10;
    let D10 = d10.split(':');
    let d11 = this.formValue.value.totalDay11;
    let D11 = d11.split(':');
    let d12 = this.formValue.value.totalDay12;
    let D12 = d12.split(':');
    let d13 = this.formValue.value.totalDay13;
    let D13 = d13.split(':');
    let d14 = this.formValue.value.totalDay14;
    let D14 = d14.split(':');
    let d15 = this.formValue.value.totalDay15;
    let D15 = d15.split(':');
    let d16 = this.formValue.value.totalDay16;
    let D16 = d16.split(':');
    let d17 = this.formValue.value.totalDay17;
    let D17 = d17.split(':');
    let d18 = this.formValue.value.totalDay18;
    let D18 = d18.split(':');
    let d19 = this.formValue.value.totalDay19;
    let D19 = d19.split(':');
    let d20 = this.formValue.value.totalDay20;
    let D20 = d20.split(':');
    let d21 = this.formValue.value.totalDay21;
    let D21 = d21.split(':');
    let d22 = this.formValue.value.totalDay22;
    let D22 = d22.split(':');
    let d23 = this.formValue.value.totalDay23;
    let D23 = d23.split(':');
    let d24 = this.formValue.value.totalDay24;
    let D24 = d24.split(':');
    let d25 = this.formValue.value.totalDay25;
    let D25 = d25.split(':');
    let d26 = this.formValue.value.totalDay26;
    let D26 = d26.split(':');
    let d27 = this.formValue.value.totalDay27;
    let D27 = d27.split(':');
    let d28 = this.formValue.value.totalDay28;
    let D28 = d28.split(':');
    let d29 = this.formValue.value.totalDay29;
    let D29 = d29.split(':');
    let d30 = this.formValue.value.totalDay30;
    let D30 = d30.split(':');
    let d31 = this.formValue.value.totalDay31;
    let D31 = d31.split(':');

    let m = (+D1[1]) + (+D2[1]) + (+D3[1]) + (+D4[1]) + (+D5[1]) + (+D6[1]) + (+D7[1]) + (+D8[1]) + (+D9[1]) + (+D10[1]) + (+D11[1]) + (+D12[1]) + (+D13[1]) + (+D14[1]) + (+D15[1]) + (+D16[1]) + (+D17[1]) + (+D18[1]) + (+D19[1]) + (+D20[1]) + (+D21[1]) + (+D22[1]) + (+D23[1]) + (+D24[1]) + (+D25[1]) + (+D26[1]) + (+D27[1]) + (+D28[1]) + (+D29[1]) + (+D30[1]) + (+D31[1]);

    let hour = (+D1[0]) + (+D2[0]) + (+D3[0]) + (+D4[0]) + (+D5[0]) + (+D6[0]) + (+D7[0]) + (+D8[0]) + (+D9[0]) + (+D10[0]) + (+D11[0]) + (+D12[0]) + (+D13[0]) + (+D14[0]) + (+D15[0]) + (+D16[0]) + (+D17[0]) + (+D18[0]) + (+D19[0]) + (+D20[0]) + (+D21[0]) + (+D22[0]) + (+D23[0]) + (+D24[0]) + (+D25[0]) + (+D26[0]) + (+D27[0]) + (+D28[0]) + (+D29[0]) + (+D30[0]) + (+D31[0]);

    let minutes = Math.floor(m % 60);
    let min = Math.floor(m / 60);

    let hours = hour + min;

    this.formValue.controls['totalhours'].setValue(hours + "." + minutes);
  }
}