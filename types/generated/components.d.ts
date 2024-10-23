import type { Struct, Schema } from '@strapi/strapi';

export interface SectionFooter extends Struct.ComponentSchema {
  collectionName: 'components_section_footers';
  info: {
    displayName: 'Footer';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    kapsysText: Schema.Attribute.String;
    kapsysLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    kapsysLogoLink: Schema.Attribute.String;
    test: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.footer': SectionFooter;
    }
  }
}
