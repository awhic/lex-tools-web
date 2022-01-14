import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-net-assets-graph-form',
  templateUrl: './add-net-assets-graph-form.component.html',
  styleUrls: ['./add-net-assets-graph-form.component.scss']
})
export class AddNetAssetsGraphFormComponent implements OnInit {

  invOne!: number;
  invTwo!: number;
  retire!: number;
  cryptoOne!: number;
  cryptoTwo!: number;
  cryptoWallet!: number;
  auto!: number;
  checking!: number;
  saving!: number;
  creditOne!: number;
  creditTwo!: number;
  misc!: number;

  total!: number;

  text1!: string;
  text2!: string;
  text3!: string;
  text4!: string;
  text5!: string;
  text6!: string;
  text7!: string;
  text8!: string;
  text9!: string;
  text10!: string;
  text11!: string;
  text12!: string;

  assetsForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.updateTexts();

    this.assetsForm = new FormGroup({
      invOne: new FormControl ({value: '', disabled: false}, [Validators.required]),
      invTwo: new FormControl ({value: '', disabled: false}, [Validators.required]),
      retire: new FormControl ({value: '', disabled: false}, [Validators.required]),
      cryptoOne: new FormControl ({value: '', disabled: false}, [Validators.required]),
      cryptoTwo: new FormControl ({value: '', disabled: false}, [Validators.required]),
      cryptoWallet: new FormControl ({value: '', disabled: false}, [Validators.required]),
      auto: new FormControl ({value: '', disabled: false}, [Validators.required]),
      checking: new FormControl ({value: '', disabled: false}, [Validators.required]),
      saving: new FormControl ({value: '', disabled: false}, [Validators.required]),
      creditOne: new FormControl ({value: '', disabled: false}, [Validators.required]),
      creditTwo: new FormControl ({value: '', disabled: false}, [Validators.required]),
      misc: new FormControl ({value: '', disabled: false}, [Validators.required]),
      result: new FormControl ({value: '', disabled: true}),
    })
  }

  updateTexts() {
    this.text1 = "Fidelity";
    this.text2 = "Vanguard";
    this.text3 = "Coinbase";
    this.text4 = "Binance";
    this.text5 = "Yoroi";
    this.text6 = "Truck Worth";
    this.text7 = "Checking";
    this.text8 = "Savings";
    this.text9 = "Discover";
    this.text10 = "American Express";
    this.text11 = "Misc. Mo. Exp./Disp.";
    this.text12 = "401(k)";
  }

  onUpdate() {
    
    this.invOne = this.assetsForm.get('invOne')?.value;
    this.invTwo = this.assetsForm.get('invTwo')?.value;
    this.retire = this.assetsForm.get('retire')?.value;
    this.cryptoOne = this.assetsForm.get('cryptoOne')?.value;
    this.cryptoTwo = this.assetsForm.get('cryptoTwo')?.value;
    this.cryptoWallet = this.assetsForm.get('cryptoWallet')?.value;
    this.auto = this.assetsForm.get('auto')?.value;
    this.checking = this.assetsForm.get('checking')?.value;
    this.saving = this.assetsForm.get('saving')?.value;
    this.creditOne = this.assetsForm.get('creditOne')?.value * -1;
    this.creditTwo = this.assetsForm.get('creditTwo')?.value * -1;
    this.misc = this.assetsForm.get('misc')?.value;

    this.assetsForm.patchValue({
      invOne: this.invOne,
      invTwo: this.invTwo,
      retire: this.retire,
      cryptoOne: this.cryptoOne,
      cryptoTwo: this.cryptoTwo,
      cryptoWallet: this.cryptoWallet,
      auto: this.auto,
      checking: this.checking,
      saving: this.saving,
      creditOne: this.creditOne,
      creditTwo: this.creditTwo,
      misc: this.misc,
    })

    this.total = this.invOne + this.invTwo + this.retire + this.cryptoOne + this.cryptoTwo + this.cryptoWallet + this.auto + 
                  this.checking + this.saving + this.creditOne + this.creditTwo + this.misc;
    
    this.assetsForm.patchValue({
      result: this.total
    })
  }
}
