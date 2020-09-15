module.exports = Object.freeze({
    PROTOCOL: (process.env.NODE_ENV === 'development') ? 'http://' : 'http://',
    SERVER_NAME : 'localhost:3080/',
    APP_VERSION : '1.0.0',
    APP_LANGUAGE: 'English',
    APP_NAME: 'TeachersApp',
    AP_AUTHOR: {
        name: 'ADJARO OGAGA',
        contact: 'ogagaadjaro@gmail.com'
    },
    PORT :  process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : (process.env.NODE_ENV === 'test' ? 3030 : 6000),
     MONGO_URI : '',
    // MONGO_URI : 'mongodb://localhost/epayment',
    MONGO_OPTIONS : {
        useNewUrlParser: true ,
        useUnifiedTopology : true, // to use the mongodb engine ... removing reconnecTries && autoReconect & reconnect interval option
        useFindAndModify : false, // to use the querries findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify()
        useCreateIndex : true, // to remove deprecation warnings
        autoIndex : false, // dont build autoindexes for production
        bufferCommands : false, // disable buffer commands
        poolSize: 10,
        serverSelectionTimeoutMS : Number.MAX_VALUE, // keep retrying for eternity
        connectTimeoutMS : 10000, // Times out connectio after 10 seconds
        socketTimeoutMS : 45000,   // close sockets after 45 seconds of inactity
        family : 4,
    },
    MONGO_URI_TEST :'',
    MONGO_OPTIONS_TEST : { 
        useNewUrlParser: true ,
        useUnifiedTopology : true, // to use the mongodb engine ... removing reconnecTries && autoReconect & reconnect interval option
        useFindAndModify : false,
        // server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
        // replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
      },
    // jwt constants
    SECRET:'mysecret',
})