/**
 * match controller
 */
import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::verification-token.verification-token', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    console.log(`Fetching token with id: ${id}`);

    const entity = await strapi.entityService.findOne('api::verification-token.verification-token', id);
    if (!entity) {
      console.log(`Token with id ${id} not found`);
      return ctx.notFound('Token not found');
    }
    
    console.log(`Token found: ${JSON.stringify(entity)}`);
    ctx.body = entity;
  },
}));

export default factories.createCoreController('api::match.match');
