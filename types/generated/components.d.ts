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

export interface SectionStatisticsSection extends Struct.ComponentSchema {
  collectionName: 'components_section_statistics_sections';
  info: {
    displayName: 'Statistics Section';
    icon: 'paintBrush';
    description: '';
  };
  attributes: {
    entrySection: Schema.Attribute.Component<'element.entry-section', false>;
    socialStatisticsBlock: Schema.Attribute.Component<
      'element.social-statistics-block',
      true
    >;
  };
}

export interface SectionPodcastSection extends Struct.ComponentSchema {
  collectionName: 'components_section_podcast_sections';
  info: {
    displayName: 'Podcast Section';
    icon: 'typhoon';
  };
  attributes: {
    entrySection: Schema.Attribute.Component<'element.entry-section', false>;
    gallery: Schema.Attribute.Component<'element.gallery', true>;
  };
}

export interface SectionOnlyfansSection extends Struct.ComponentSchema {
  collectionName: 'components_section_onlyfans_sections';
  info: {
    displayName: 'Onlyfans Section';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    entrySection: Schema.Attribute.Component<'element.entry-section', false>;
  };
}

export interface SectionLascanaSection extends Struct.ComponentSchema {
  collectionName: 'components_section_lascana_sections';
  info: {
    displayName: 'Lascana Section';
    icon: 'expand';
    description: '';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'element.button', false>;
    gallery: Schema.Attribute.Component<'element.gallery', true>;
  };
}

export interface SectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'element.button', false>;
    socials: Schema.Attribute.Component<'element.socials', true>;
    partners: Schema.Attribute.Component<'element.partners', true>;
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
    name: Schema.Attribute.String;
    verifiedTicket: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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
    headerlogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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
    kapsysLogoText: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SectionExclusiveContentBlockMobileSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_exclusive_content_block_mobile_sections';
  info: {
    displayName: 'Exclusive Content Block Mobile Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    button: Schema.Attribute.Component<'element.button', true>;
    title: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    overlayIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    overlayText: Schema.Attribute.String;
    gallery: Schema.Attribute.Component<'element.gallery', true>;
  };
}

export interface SectionContactSection extends Struct.ComponentSchema {
  collectionName: 'components_section_contact_sections';
  info: {
    displayName: 'Contact Section';
    icon: 'database';
  };
  attributes: {
    entrySection: Schema.Attribute.Component<'element.entry-section', false>;
  };
}

export interface SectionAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_section_about_sections';
  info: {
    displayName: 'About Section';
    icon: 'stack';
    description: '';
  };
  attributes: {
    entrySection: Schema.Attribute.Component<'element.entry-section', false>;
    gallery: Schema.Attribute.Component<'element.gallery', true>;
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
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    socialColoredIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ElementSocialStatisticsBlock extends Struct.ComponentSchema {
  collectionName: 'components_element_social_statistics_blocks';
  info: {
    displayName: 'Social statistics block';
    icon: 'link';
    description: '';
  };
  attributes: {
    socials: Schema.Attribute.Component<'element.socials', false>;
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
    button: Schema.Attribute.Component<'element.button', false>;
  };
}

export interface ElementPartners extends Struct.ComponentSchema {
  collectionName: 'components_element_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    partnerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    partnerLink: Schema.Attribute.String;
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

export interface ElementGallery extends Struct.ComponentSchema {
  collectionName: 'components_element_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'filter';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementExclusiveContent extends Struct.ComponentSchema {
  collectionName: 'components_element_exclusive_contents';
  info: {
    displayName: 'Exclusive Content';
    icon: 'earth';
    description: '';
  };
  attributes: {};
}

export interface ElementEntrySection extends Struct.ComponentSchema {
  collectionName: 'components_element_entry_sections';
  info: {
    displayName: 'Entry Section';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'element.button', true>;
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
      'section.statistics-section': SectionStatisticsSection;
      'section.podcast-section': SectionPodcastSection;
      'section.onlyfans-section': SectionOnlyfansSection;
      'section.lascana-section': SectionLascanaSection;
      'section.hero-section': SectionHeroSection;
      'section.hero-mobile-section': SectionHeroMobileSection;
      'section.header': SectionHeader;
      'section.footer': SectionFooter;
      'section.exclusive-content-block-mobile-section': SectionExclusiveContentBlockMobileSection;
      'section.contact-section': SectionContactSection;
      'section.about-section': SectionAboutSection;
      'element.socials': ElementSocials;
      'element.social-statistics-block': ElementSocialStatisticsBlock;
      'element.partners': ElementPartners;
      'element.menu-items': ElementMenuItems;
      'element.gallery': ElementGallery;
      'element.exclusive-content': ElementExclusiveContent;
      'element.entry-section': ElementEntrySection;
      'element.button': ElementButton;
      'element.badge': ElementBadge;
    }
  }
}
