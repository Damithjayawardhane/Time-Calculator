import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { jsPDF } from "jspdf";

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import 'jspdf-autotable';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class FormComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;
  formValue!: FormGroup;

  date = new FormControl(moment());

  constructor(private formBuilder: FormBuilder) { }



  head = [['Day', 'In', 'Out', 'Day Total']]

  foot = [['', '', '',]]

  data = [
    ['', '', '', ''],
  ]

  public Year: string = '';
  public Month: string = '';
  public FullYearMonth: string = '';

  ngOnInit(): void {
    this.setForm();
  }

  monthSelected(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>, input: any) {
    datepicker.close();
    input.value = normalizedMonth.toISOString().split('-').join('/').substr(0, 7);

    const array = normalizedMonth.toISOString().split('-');
    const year = array[0];
    const month = array[1];

    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);

    this.Year = year;

    if (month == "12") {
      this.Month = "January"
    } else if (month == "01") {
      this.Month = "February"
    } else if (month == "02") {
      this.Month = "March"
    } else if (month == "03") {
      this.Month = "April"
    } else if (month == "04") {
      this.Month = "May"
    } else if (month == "05") {
      this.Month = "June"
    } else if (month == "06") {
      this.Month = "July"
    } else if (month == "07") {
      this.Month = "August"
    } else if (month == "08") {
      this.Month = "September"
    } else if (month == "09") {
      this.Month = "October"
    } else if (month == "10") {
      this.Month = "November"
    } else if (month == "11") {
      this.Month = "December"
    }

    this.FullYearMonth = this.Year + "/" + this.Month+"/";
  }

  makePDF() {
    let pdf = new jsPDF();

    pdf.setFontSize(18);
    pdf.text("Time Calculator- " + this.Year + ", " + this.Month, 11, 8);
    pdf.setFontSize(11);
    pdf.setTextColor(100);

    (pdf as any).autoTable({
      head: this.head,
      body: this.data,
      theme: 'striped',
      foot: this.foot

    })


    // below line for Open PDF document in new tab
    pdf.output('dataurlnewwindow')

    // below line for Download PDF document  
    pdf.save("Time Calculator.pdf ")



  }

  setForm() {
    this.formValue = this.formBuilder.group({
      totalhours: ["0:00"],
      yearMonth: [],

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

    this.makeTableFoot(hours, minutes);
    this.makeTable();
  }

  makeTable() {
    this.data = [
      [this.FullYearMonth+"1", this.formValue.controls['inDay' + 1].value, this.formValue.controls['outDay' + 1].value, this.formValue.value.totalDay1],
      [this.FullYearMonth+"2", this.formValue.controls['inDay' + 2].value, this.formValue.controls['outDay' + 2].value, this.formValue.value.totalDay2],
      [this.FullYearMonth+"3", this.formValue.controls['inDay' + 3].value, this.formValue.controls['outDay' + 3].value, this.formValue.value.totalDay3],
      [this.FullYearMonth+"4", this.formValue.controls['inDay' + 4].value, this.formValue.controls['outDay' + 4].value, this.formValue.value.totalDay4],
      [this.FullYearMonth+"5", this.formValue.controls['inDay' + 5].value, this.formValue.controls['outDay' + 5].value, this.formValue.value.totalDay5],
      [this.FullYearMonth+"6", this.formValue.controls['inDay' + 6].value, this.formValue.controls['outDay' + 6].value, this.formValue.value.totalDay6],
      [this.FullYearMonth+"7", this.formValue.controls['inDay' + 7].value, this.formValue.controls['outDay' + 7].value, this.formValue.value.totalDay7],
      [this.FullYearMonth+"8", this.formValue.controls['inDay' + 8].value, this.formValue.controls['outDay' + 8].value, this.formValue.value.totalDay8],
      [this.FullYearMonth+"9", this.formValue.controls['inDay' + 9].value, this.formValue.controls['outDay' + 9].value, this.formValue.value.totalDay9],
      [this.FullYearMonth+"10", this.formValue.controls['inDay' + 10].value, this.formValue.controls['outDay' + 10].value, this.formValue.value.totalDay10],
      [this.FullYearMonth+"11", this.formValue.controls['inDay' + 11].value, this.formValue.controls['outDay' + 11].value, this.formValue.value.totalDay11],
      [this.FullYearMonth+"12", this.formValue.controls['inDay' + 12].value, this.formValue.controls['outDay' + 12].value, this.formValue.value.totalDay12],
      [this.FullYearMonth+"13", this.formValue.controls['inDay' + 13].value, this.formValue.controls['outDay' + 13].value, this.formValue.value.totalDay13],
      [this.FullYearMonth+"14", this.formValue.controls['inDay' + 14].value, this.formValue.controls['outDay' + 14].value, this.formValue.value.totalDay14],
      [this.FullYearMonth+"15", this.formValue.controls['inDay' + 15].value, this.formValue.controls['outDay' + 15].value, this.formValue.value.totalDay15],
      [this.FullYearMonth+"16", this.formValue.controls['inDay' + 16].value, this.formValue.controls['outDay' + 16].value, this.formValue.value.totalDay16],
      [this.FullYearMonth+"17", this.formValue.controls['inDay' + 17].value, this.formValue.controls['outDay' + 17].value, this.formValue.value.totalDay17],
      [this.FullYearMonth+"18", this.formValue.controls['inDay' + 18].value, this.formValue.controls['outDay' + 18].value, this.formValue.value.totalDay18],
      [this.FullYearMonth+"19", this.formValue.controls['inDay' + 19].value, this.formValue.controls['outDay' + 19].value, this.formValue.value.totalDay19],
      [this.FullYearMonth+"20", this.formValue.controls['inDay' + 20].value, this.formValue.controls['outDay' + 20].value, this.formValue.value.totalDay20],
      [this.FullYearMonth+"21", this.formValue.controls['inDay' + 21].value, this.formValue.controls['outDay' + 21].value, this.formValue.value.totalDay21],
      [this.FullYearMonth+"22", this.formValue.controls['inDay' + 22].value, this.formValue.controls['outDay' + 22].value, this.formValue.value.totalDay22],
      [this.FullYearMonth+"23", this.formValue.controls['inDay' + 23].value, this.formValue.controls['outDay' + 23].value, this.formValue.value.totalDay23],
      [this.FullYearMonth+"24", this.formValue.controls['inDay' + 24].value, this.formValue.controls['outDay' + 24].value, this.formValue.value.totalDay24],
      [this.FullYearMonth+"25", this.formValue.controls['inDay' + 25].value, this.formValue.controls['outDay' + 25].value, this.formValue.value.totalDay25],
      [this.FullYearMonth+"26", this.formValue.controls['inDay' + 26].value, this.formValue.controls['outDay' + 26].value, this.formValue.value.totalDay26],
      [this.FullYearMonth+"27", this.formValue.controls['inDay' + 27].value, this.formValue.controls['outDay' + 27].value, this.formValue.value.totalDay27],
      [this.FullYearMonth+"28", this.formValue.controls['inDay' + 28].value, this.formValue.controls['outDay' + 28].value, this.formValue.value.totalDay28],
      [this.FullYearMonth+"29", this.formValue.controls['inDay' + 29].value, this.formValue.controls['outDay' + 29].value, this.formValue.value.totalDay29],
      [this.FullYearMonth+"30", this.formValue.controls['inDay' + 30].value, this.formValue.controls['outDay' + 30].value, this.formValue.value.totalDay30],
      [this.FullYearMonth+"31", this.formValue.controls['inDay' + 31].value, this.formValue.controls['outDay' + 31].value, this.formValue.value.totalDay31],

    ]
  }

  makeTableFoot(hours: any, minutes: any) {
    this.foot = [
      ['', '', '', "Total hours : " + hours + '.' + minutes],
    ]
  }







}