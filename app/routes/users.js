import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UsersRoute extends Route {
  @service store;

  async model() {
    return await this.store.findAll('user');
  }
}
