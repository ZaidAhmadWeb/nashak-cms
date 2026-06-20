import type { Schema, Struct } from '@strapi/strapi';

export interface CareersJobCategory extends Struct.ComponentSchema {
  collectionName: 'components_careers_job_categories';
  info: {
    displayName: 'Job Category';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CompanyTimelineEntry extends Struct.ComponentSchema {
  collectionName: 'components_company_timeline_entries';
  info: {
    displayName: 'Timeline Entry';
    icon: 'clock';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DifferenceCycleStep extends Struct.ComponentSchema {
  collectionName: 'components_difference_cycle_steps';
  info: {
    displayName: 'Cycle Step';
    icon: 'refresh';
  };
  attributes: {
    duration: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DifferenceServicePrinciple extends Struct.ComponentSchema {
  collectionName: 'components_difference_service_principles';
  info: {
    displayName: 'Service Principle';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_slides';
  info: {
    displayName: 'Hero Slide';
    icon: 'slideshow';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface HomeProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_home_process_steps';
  info: {
    displayName: 'Process Step';
    icon: 'arrowRight';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    stepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductColorSwatch extends Struct.ComponentSchema {
  collectionName: 'components_product_color_swatches';
  info: {
    displayName: 'Color Swatch';
    icon: 'paint';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductMaterial extends Struct.ComponentSchema {
  collectionName: 'components_product_materials';
  info: {
    displayName: 'Material';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductOptionTag extends Struct.ComponentSchema {
  collectionName: 'components_product_option_tags';
  info: {
    displayName: 'Option Tag';
    icon: 'tag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductSubtypeCard extends Struct.ComponentSchema {
  collectionName: 'components_product_subtype_cards';
  info: {
    displayName: 'Subtype Card';
    icon: 'grid';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    modelsAvailable: Schema.Attribute.Integer;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    displayName: 'CTA Button';
    icon: 'cursor';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIconTextCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_text_cards';
  info: {
    displayName: 'Icon Text Card';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_items';
  info: {
    displayName: 'Logo Item';
    icon: 'picture';
  };
  attributes: {
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['instagram', 'facebook', 'linkedin', 'twitter', 'youtube']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
    icon: 'chartBar';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'careers.job-category': CareersJobCategory;
      'company.timeline-entry': CompanyTimelineEntry;
      'difference.cycle-step': DifferenceCycleStep;
      'difference.service-principle': DifferenceServicePrinciple;
      'home.hero-slide': HomeHeroSlide;
      'home.process-step': HomeProcessStep;
      'product.color-swatch': ProductColorSwatch;
      'product.material': ProductMaterial;
      'product.option-tag': ProductOptionTag;
      'product.subtype-card': ProductSubtypeCard;
      'shared.cta-button': SharedCtaButton;
      'shared.icon-text-card': SharedIconTextCard;
      'shared.logo-item': SharedLogoItem;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.stat': SharedStat;
    }
  }
}
