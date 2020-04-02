import app from './app';
import databasesHandler from './database/dBHandler';

databasesHandler.migrate();

app.listen(process.env.PORT || 3333);
