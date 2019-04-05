// tslint:disable
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import moment from 'moment';
import { Observable } from 'rxjs';

interface Node {
  header: string;
  value: string;
  id?: any;
}

@Component({
  selector: 'favware-ribbon-stats',
  templateUrl: './ribbon-stats.component.html',
  styleUrls: ['./ribbon-stats.component.scss'],
})
export class RibbonStatsComponent implements OnInit {
  isDoneLoading: boolean;
  sinceLabel: string = `Since ${moment('20190405T15:00:00', 'YYYYMMDDTHH:mm:ss').format('MMMM Do YYYY [at] HH:mm')}`;

  collection: AngularFirestoreCollection<Node>;
  documents: Observable<Node[]>;

  constructor (private afs: AngularFirestore) {
    this.isDoneLoading = false;
  }

  ngOnInit (): void {
    this.isDoneLoading = true;
    this.collection = this.afs.collection('ribbon', ref => ref.orderBy('label'));
    this.documents = this.collection.valueChanges();
  }
}
