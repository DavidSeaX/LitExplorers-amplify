import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  UserContent: a
    .model({
      owner: a.string().required(),
      title: a.string(),
      description: a.string(),
      createdAt: a.datetime(),
    })
    .authorization(allow => [allow.ownerDefinedIn('owner')]),   // Only owner reads/writes their records
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',   // Ties to Cognito auth
  },
});