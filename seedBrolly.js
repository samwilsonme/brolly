// This script seeds the MongoDB database with data from a JSON file.

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Determine which data file to use
const arg = process.argv[2] || 'brolly';

const config = {
  brolly: {
    file: './src/data/brolly.json',
    dbName: 'brolly',
    collectionName: 'messages',
  },
  locations: {
    file: './src/data/locations.json',
    dbName: 'brolly',
    collectionName: 'locations',
  },
};

if (!config[arg]) {
  console.error(`Unknown seed type: "${arg}". Valid options: ${Object.keys(config).join(', ')}`);
  process.exit(1);
}

const { file, dbName, collectionName } = config[arg];

async function seed() {
  try {
    const filePath = path.resolve(file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    await collection.deleteMany({});
    await collection.insertMany(data);

    console.log(`Successfully seeded "${collectionName}" from ${file}`);
  } catch (err) {
    console.error("Seeding failed:", err);
  } finally {
    await client.close();
  }
}

seed();