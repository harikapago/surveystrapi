'use strict';

/**
 * demogr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demogr.demogr');
