import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutHomepageCategorySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_homepage_category_sections';
  info: {
    displayName: 'HomepageCategorySection';
    icon: 'apps';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    display_title: Schema.Attribute.String;
    number_of_articles: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<6>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.homepage-category-section': LayoutHomepageCategorySection;
    }
  }
}
