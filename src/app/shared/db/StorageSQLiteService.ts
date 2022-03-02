import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
import {Storage} from '@ionic/storage-angular';
import {LoadingController} from '@ionic/angular';
import { StorageService } from './StorageService';

export class StorageSQLiteService extends StorageService {

    constructor(public storage: Storage, public loadingController: LoadingController) {
        super(storage, loadingController);
    }

    /**
     * ejecutar solo una vez
     */
    async initDB() {
        console.log('Inicializando bd sqlite');
        await this.storage.defineDriver(CordovaSQLiteDriver);
        this._storage = await this.storage.create();
    }

}