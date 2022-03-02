import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import {LoadingController} from '@ionic/angular';

@Injectable()
export class StorageService {
    protected _storage: Storage | null = null;

    constructor(protected storage: Storage, protected loadingController: LoadingController) {
    }

    /**
     * ejecutar solo una vez
     */
     initDB(): Promise<void> {
        console.log('Inicializando bd web');
        return new Promise<void>((resolve, reject) => {
            this.storage.create().then(storage => {
                this._storage = storage
                resolve();
            }).catch(err => {
                reject(err);
            })
        })
    }

    async store(key,data): Promise<void> {
        await this.loadingController.create();
        return new Promise((resolve, reject) => {
            this._storage.set(key, data).then(() => {
                resolve();
            }).catch(err => {
                reject(err);
            }).finally(() => {
                this.loadingController.dismiss();
            })
        })
    }

    async findByKey(key): Promise<void> {
        return await this._storage.get(key);
    }

    
    async removeByKey(key): Promise<void> {
        return await this._storage.remove(key);
    }
}