import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'userFiles',
  access: allow => ({
    'files/{entity_id}/*': [   // entity_id = user sub/ID
      allow.entity('identity').to(['read', 'write', 'delete']),
    ],
  }),
});