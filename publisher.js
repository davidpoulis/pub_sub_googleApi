// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Your Google Cloud Platform project ID
const projectId = 'earlbreakfast1';

// Instantiates a client
const pubsubClient = new PubSub({
  projectId: projectId,
  keyFilename: '/home/david/Downloads/earlbreakfast1-120ba71d6d13.json'
});

// The name for the new topic
const topicName = 'orderBreakfast';

// Creates the new topic
// pubsubClient
//   .createTopic(topicName)
//   .then(results => {
//     const topic = results[0];
//     console.log(`Topic ${topic.name} created.`);
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });

  const data = new Date().toString();
  const dataBuffer = Buffer.from(data);
  
  pubsubClient
    .topic(topicName)
    .publish(dataBuffer)
    .then(messageId => {
      console.log(`Message ${messageId} published.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });