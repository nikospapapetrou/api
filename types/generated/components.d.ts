import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'bold';
    description: '';
  };
  attributes: {
    schema: Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'seo.seo': SeoSeo;
    }
  }
}
