/**
 * match controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::verification-token.verification-token', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    console.log(`Fetching token with id: ${id}`);

    try {
      const entity = await strapi.entityService.findOne('api::verification-token.verification-token', id);
      if (!entity) {
        console.log(`Token with id ${id} not found`);
        return ctx.notFound('Token not found');
      }
      
      console.log(`Token found: ${JSON.stringify(entity)}`);
      ctx.body = entity;
    } catch (error) {
      console.log(`Error fetching token with id ${id}: ${error.message}`);
      ctx.throw(500, 'Failed to fetch token');
    }
  },

  async delete(ctx) {
    const { id } = ctx.params;
    console.log(`Deleting token with id: ${id}`);

    try {
      await strapi.entityService.delete('api::verification-token.verification-token', id);
      console.log(`Token with id ${id} successfully deleted`);
      ctx.send({ message: 'Token successfully deleted!' });
    } catch (error) {
      console.log(`Error deleting token with id ${id}: ${error.message}`);
      ctx.throw(500, 'Failed to delete token');
    }
  },
}));

export default factories.createCoreController('api::match.match');
