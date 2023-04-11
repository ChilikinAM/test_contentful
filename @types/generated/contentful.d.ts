// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IHeaderSektionFields {
  /** preTitle */
  preTitle?: string | undefined;

  /** title */
  title?: string | undefined;

  /** description */
  description?: string | undefined;

  /** btn Name */
  btnName?: string | undefined;

  /** link Btn */
  linkBtn?: string | undefined;
}

/** Header Section */

export interface IHeaderSektion extends Entry<IHeaderSektionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "headerSektion";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IJetztLoslegenSectionFields {
  /** title */
  title?: string | undefined;

  /** btnName */
  btnName?: string | undefined;

  /** checkboxText */
  checkboxText?: string | undefined;

  /** description */
  description?: string | undefined;

  /** backgroundImg */
  backgroundImg?: Asset | undefined;
}

export interface IJetztLoslegenSection
  extends Entry<IJetztLoslegenSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "jetztLoslegenSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IKundenVideoSektionFields {
  /** title */
  title?: string | undefined;

  /** description */
  description?: string | undefined;

  /** Youtube Link */
  youtubeLink?: string | undefined;
}

/** Kunden video Sektion */

export interface IKundenVideoSektion extends Entry<IKundenVideoSektionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "kundenVideoSektion";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILogoSectionFields {
  /** Title */
  title?: string | undefined;

  /** images */
  images?: Asset[] | undefined;

  /** btnName */
  btnName?: string | undefined;

  /** link Btn */
  linkBtn?: string | undefined;
}

export interface ILogoSection extends Entry<ILogoSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "logoSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISupportSectionFields {
  /** title */
  title?: string | undefined;

  /** leftBtnName */
  leftBtnName?: string | undefined;

  /** leftBtnText */
  leftBtnText?: Document | undefined;

  /** leftBtnImage */
  leftBtnImage?: Asset | undefined;

  /** rightBtnName */
  rightBtnName?: string | undefined;

  /** rightBtnText */
  rightBtnText?: Document | undefined;

  /** rightBtnImage */
  rightBtnImage?: Asset | undefined;
}

/** Support Section */

export interface ISupportSection extends Entry<ISupportSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "supportSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "headerSektion"
  | "jetztLoslegenSection"
  | "kundenVideoSektion"
  | "logoSection"
  | "supportSection";

export type IEntry =
  | IHeaderSektion
  | IJetztLoslegenSection
  | IKundenVideoSektion
  | ILogoSection
  | ISupportSection;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
