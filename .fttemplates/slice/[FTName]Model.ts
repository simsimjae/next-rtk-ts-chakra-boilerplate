import { instanceToPlain } from 'class-transformer';
import { uid } from 'uid';

class <FTName | capitalize>Model {
  id: string = uid(25);

  constructor(data?: any) {
    Object.assign(this, data);
  }

  toJSON?() {
    return instanceToPlain(this) as <FTName | capitalize>Model;
  }
}

export default <FTName | capitalize>Model;
