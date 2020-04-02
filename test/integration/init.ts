import { Utils } from 'simple-api-ts';
import databasesHandler from '../../source/database/dBHandler';

Utils.init(databasesHandler.getReadPool());
