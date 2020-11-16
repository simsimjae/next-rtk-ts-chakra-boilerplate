import { classToPlain } from 'class-transformer';
import firebase from 'firebase';

class Paging {
  pageSize = 10;
  isEnd = false;
  lastDocument: firebase.firestore.DocumentData | null = null;
  toJSON() {
    return classToPlain(this) as Paging;
  }
}

export default Paging;
