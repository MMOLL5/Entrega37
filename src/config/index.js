import dotenv from 'dotenv';
dotenv.config();

const venv = {
  PORT: process.env.PORT || 8080,
  MONGO_ATLAS_USER: process.env.MONGO_ATLAS_USER || 'user',
  MONGO_ATLAS_PASSWORD: process.env.MONGO_ATLAS_PASSWORD || 'pasw',
  MONGO_ATLAS_CLUSTER: process.env.MONGO_ATLAS_CLUSTER || 'clusterUrl',
  MONGO_ATLAS_DBNAME: process.env.MONGO_ATLAS_DBNAME || 'dbName',
  MONGO_LOCAL_DBNAME: process.env.MONGO_LOCAL_DBNAME || 'dbNameLocal',
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || 'faceId',
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET || 'faceSecret',
  ETHEREAL_EMAIL: process.env.ETHEREAL_EMAIL || 'joelle.willms23@ethereal.email',
  ETHEREAL_PASSWORD: process.env.ETHEREAL_PASSWORD || 'gYjxkMN2u3Q2xjrTxk',
  ETHEREAL_NAME: process.env.ETHEREAL_NAME || 'Joelle Willms',
  GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'mollmariano@gmail.com',
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'fhmdlarhytwbnryk',
  GMAIL_NAME: process.env.GMAIL_NAME || 'Moll Mariano',
  TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID || 'AC97c464685b1dfcad6acd9dfff1d437d3',
  TWILIO_TOKEN: process.env.TWILIO_TOKEN || '01d69e1e7a936a8ac98dc1d4965de521',
  TWILIO_CELLPHONE: process.env.TWILIO_CELLPHONE || '+17402456158',
};

export default venv;