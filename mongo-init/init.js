db.createUser({
  user: 'appAdmin',
  pwd: 'thf66NU',
  roles: [{ role: 'readWrite', db: 'boliche' }],
  mechanisms: ['SCRAM-SHA-256', 'SCRAM-SHA-1'],
});

// Materializa o DB para aparecer no Compass
db.createCollection('health');
db.health.insertOne({ ok: true, at: new Date() });
