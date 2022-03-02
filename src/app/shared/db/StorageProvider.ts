import {Storage} from '@ionic/storage-angular';
import {LoadingController} from '@ionic/angular';
import { StorageService } from './StorageService';
import { StorageSQLiteService } from './StorageSQLiteService';
import { PlatformStrategyService } from '../services/platform.strategy.service';

const storageOfflineServiceFactory = (platformStrategy: PlatformStrategyService, storage: Storage, loadingController: LoadingController) => {
    if (platformStrategy.isMobile()) {
        return new StorageSQLiteService(storage, loadingController);
    } else {
        return new StorageService(storage, loadingController);
    }
}
/**
 * utilizar este provider solo en elmodulo principal (app.module)
 * puesto que el service debe ser la misma instancia en toda la app
 */
export let storageOfflineServiceProvider =
    {
        provide: StorageService,
        useFactory: storageOfflineServiceFactory,
        deps: [PlatformStrategyService, Storage, LoadingController]
    };