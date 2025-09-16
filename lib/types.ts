// lib/types.ts

// This file will contain TypeScript type definitions for our Strapi data models.

// The format for a single image in Strapi's API response
export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

// The structure for the 'data' part of a Strapi media object
export interface StrapiImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: StrapiImageFormat;
      small: StrapiImageFormat;
      medium: StrapiImageFormat;
      large: StrapiImageFormat;
    };
    url: string;
    createdAt: string;
    updatedAt: string;
  };
}

// The overall structure for a Strapi media field
export interface StrapiMedia {
  data: StrapiImageData | null;
}

// The attributes of a Product from Strapi
export interface Product {
  id: number;
  attributes: {
    title: string;
    description: string;
    deployUrl: string | null;
    githubUrl: string | null;
    image: StrapiMedia;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// The attributes of a Work item from Strapi
export interface Work {
  id: number;
  attributes: {
    title: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
