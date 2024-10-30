import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    keywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    metaViewport: Schema.Attribute.String;
    canonicalURL: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'MetaSocial';
    icon: 'crop';
  };
  attributes: {
    socialNetwork: Schema.Attribute.Enumeration<['Twitter', 'Facebook']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface SectionHeroMobileSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_mobile_sections';
  info: {
    displayName: 'Hero Mobile Section';
    icon: 'message';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    badge: Schema.Attribute.Component<'element.badge', false>;
    Tip: Schema.Attribute.String;
    socials: Schema.Attribute.Component<'element.socials', true>;
  };
}

export interface SectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    icon: 'code';
    description: '';
  };
  attributes: {
    menuItems: Schema.Attribute.Component<'element.menu-items', true>;
    socials: Schema.Attribute.Component<'element.socials', true>;
    button: Schema.Attribute.Component<'element.button', true>;
  };
}

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
    FooterText: Schema.Attribute.String;
    socials: Schema.Attribute.Component<'element.socials', true>;
    button: Schema.Attribute.Component<'element.button', false>;
  };
}

export interface ElementSocials extends Struct.ComponentSchema {
  collectionName: 'components_element_socials';
  info: {
    displayName: 'Socials';
    icon: 'user';
    description: '';
  };
  attributes: {
    socialIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    socialUrl: Schema.Attribute.String;
  };
}

export interface ElementMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_element_menu_items';
  info: {
    displayName: 'Menu Items';
    icon: 'cast';
    description: '';
  };
  attributes: {
    menuItem: Schema.Attribute.String;
    menuItemUrl: Schema.Attribute.String;
  };
}

export interface ElementButton extends Struct.ComponentSchema {
  collectionName: 'components_element_buttons';
  info: {
    displayName: 'Button';
    icon: 'clock';
  };
  attributes: {
    buttonName: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    buttonIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ElementBadge extends Struct.ComponentSchema {
  collectionName: 'components_element_badges';
  info: {
    displayName: 'Badge';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    flag: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    country: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'section.hero-mobile-section': SectionHeroMobileSection;
      'section.header': SectionHeader;
      'section.footer': SectionFooter;
      'element.socials': ElementSocials;
      'element.menu-items': ElementMenuItems;
      'element.button': ElementButton;
      'element.badge': ElementBadge;
    }
  }
}
