import {Injectable} from "@nestjs/common";

@Injectable()
export class UserService {
  getUser () {
    return { idx: 1, name: 'junil', email: 'tjsdlf4261@naver.com' }
  }
}