import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type IAsset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<IAssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: ISys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetUrlArgs = {
  transform?: InputMaybe<IImageTransformOptions>;
};

export type IAssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<IAsset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IAssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<IAssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IAssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IAssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  authorCollection?: Maybe<IAuthorCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  postCollection?: Maybe<IPostCollection>;
};


export type IAssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type IAssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type IAssetLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IAssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Post entry creator [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/author) */
export type IAuthor = IEntry & {
  __typename?: 'Author';
  contentfulMetadata: IContentfulMetadata;
  fullName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IAuthorLinkingCollections>;
  photo?: Maybe<IAsset>;
  sys: ISys;
  twitter?: Maybe<Scalars['String']>;
};


/** Post entry creator [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/author) */
export type IAuthorFullNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Post entry creator [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/author) */
export type IAuthorHandleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Post entry creator [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/author) */
export type IAuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Post entry creator [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/author) */
export type IAuthorPhotoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Post entry creator [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/author) */
export type IAuthorTwitterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IAuthorCollection = {
  __typename?: 'AuthorCollection';
  items: Array<Maybe<IAuthor>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IAuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<IAuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IAuthorFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  fullName?: InputMaybe<Scalars['String']>;
  fullName_contains?: InputMaybe<Scalars['String']>;
  fullName_exists?: InputMaybe<Scalars['Boolean']>;
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullName_not?: InputMaybe<Scalars['String']>;
  fullName_not_contains?: InputMaybe<Scalars['String']>;
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  handle?: InputMaybe<Scalars['String']>;
  handle_contains?: InputMaybe<Scalars['String']>;
  handle_exists?: InputMaybe<Scalars['Boolean']>;
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  handle_not?: InputMaybe<Scalars['String']>;
  handle_not_contains?: InputMaybe<Scalars['String']>;
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IAuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  postCollection?: Maybe<IPostCollection>;
};


export type IAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type IAuthorLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IAuthorOrder {
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/category) */
export type ICategory = IEntry & {
  __typename?: 'Category';
  color?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  icon?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ICategoryLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: ISys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/category) */
export type ICategoryColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/category) */
export type ICategoryIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/category) */
export type ICategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/category) */
export type ICategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/category) */
export type ICategoryTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ICategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<ICategory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ICategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ICategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICategoryFilter>>>;
  color?: InputMaybe<Scalars['String']>;
  color_contains?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_not?: InputMaybe<Scalars['String']>;
  color_not_contains?: InputMaybe<Scalars['String']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  icon?: InputMaybe<Scalars['String']>;
  icon_contains?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_not?: InputMaybe<Scalars['String']>;
  icon_not_contains?: InputMaybe<Scalars['String']>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ICategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  postCollection?: Maybe<IPostCollection>;
};


export type ICategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ICategoryLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ICategoryOrder {
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type IContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<IContentfulTag>>;
};

export type IContentfulMetadataFilter = {
  tags?: InputMaybe<IContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type IContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type IContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IEntry = {
  contentfulMetadata: IContentfulMetadata;
  sys: ISys;
};

export type IEntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<IEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<IEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntryFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  sys?: InputMaybe<ISysFilter>;
};

export enum IEntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum IImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum IImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum IImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type IImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<IImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<IImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<IImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPost = IEntry & {
  __typename?: 'Post';
  author?: Maybe<IAuthor>;
  body?: Maybe<Scalars['String']>;
  category?: Maybe<ICategory>;
  contentfulMetadata: IContentfulMetadata;
  date?: Maybe<Scalars['DateTime']>;
  image?: Maybe<IAsset>;
  linkedFrom?: Maybe<IPostLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  sys: ISys;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostSummaryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostTagsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** List of posts [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/post) */
export type IPostUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IPostCollection = {
  __typename?: 'PostCollection';
  items: Array<Maybe<IPost>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<IPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IPostFilter>>>;
  author?: InputMaybe<ICfAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<ICfCategoryNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Scalars['String']>;
  summary_contains?: InputMaybe<Scalars['String']>;
  summary_exists?: InputMaybe<Scalars['Boolean']>;
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary_not?: InputMaybe<Scalars['String']>;
  summary_not_contains?: InputMaybe<Scalars['String']>;
  summary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IPostLinkingCollections = {
  __typename?: 'PostLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
};


export type IPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IPostOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type IQuery = {
  __typename?: 'Query';
  asset?: Maybe<IAsset>;
  assetCollection?: Maybe<IAssetCollection>;
  author?: Maybe<IAuthor>;
  authorCollection?: Maybe<IAuthorCollection>;
  category?: Maybe<ICategory>;
  categoryCollection?: Maybe<ICategoryCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  post?: Maybe<IPost>;
  postCollection?: Maybe<IPostCollection>;
  repositories?: Maybe<IRepositories>;
  repositoriesCollection?: Maybe<IRepositoriesCollection>;
};


export type IQueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IAssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetFilter>;
};


export type IQueryAuthorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IAuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAuthorFilter>;
};


export type IQueryCategoryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ICategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ICategoryFilter>;
};


export type IQueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IEntryFilter>;
};


export type IQueryPostArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IPostFilter>;
};


export type IQueryRepositoriesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQueryRepositoriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IRepositoriesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IRepositoriesFilter>;
};

/** My public repositories [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/repositories) */
export type IRepositories = IEntry & {
  __typename?: 'Repositories';
  contentfulMetadata: IContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IRepositoriesLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: ISys;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};


/** My public repositories [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/repositories) */
export type IRepositoriesDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** My public repositories [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/repositories) */
export type IRepositoriesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** My public repositories [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/repositories) */
export type IRepositoriesNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** My public repositories [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/repositories) */
export type IRepositoriesTagsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** My public repositories [See type definition](https://app.contentful.com/spaces/sbfcsv4cn0xt/content_types/repositories) */
export type IRepositoriesUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IRepositoriesCollection = {
  __typename?: 'RepositoriesCollection';
  items: Array<Maybe<IRepositories>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IRepositoriesFilter = {
  AND?: InputMaybe<Array<InputMaybe<IRepositoriesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IRepositoriesFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IRepositoriesLinkingCollections = {
  __typename?: 'RepositoriesLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
};


export type IRepositoriesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IRepositoriesOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ISys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type ISysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ICfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ICfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfAuthorNestedFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  fullName?: InputMaybe<Scalars['String']>;
  fullName_contains?: InputMaybe<Scalars['String']>;
  fullName_exists?: InputMaybe<Scalars['Boolean']>;
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fullName_not?: InputMaybe<Scalars['String']>;
  fullName_not_contains?: InputMaybe<Scalars['String']>;
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  handle?: InputMaybe<Scalars['String']>;
  handle_contains?: InputMaybe<Scalars['String']>;
  handle_exists?: InputMaybe<Scalars['Boolean']>;
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  handle_not?: InputMaybe<Scalars['String']>;
  handle_not_contains?: InputMaybe<Scalars['String']>;
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ICfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ICfCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ICfCategoryNestedFilter>>>;
  color?: InputMaybe<Scalars['String']>;
  color_contains?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_not?: InputMaybe<Scalars['String']>;
  color_not_contains?: InputMaybe<Scalars['String']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  icon?: InputMaybe<Scalars['String']>;
  icon_contains?: InputMaybe<Scalars['String']>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_not?: InputMaybe<Scalars['String']>;
  icon_not_contains?: InputMaybe<Scalars['String']>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ICategoryFieldsFragment = { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, icon?: string | null | undefined, color?: string | null | undefined, sys: { __typename?: 'Sys', id: string } };

export type IAuthorFieldsFragment = { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, twitter?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', url?: string | null | undefined, title?: string | null | undefined } | null | undefined };

export type IPostFieldsFragment = { __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, url?: string | null | undefined, summary?: string | null | undefined, body?: string | null | undefined, date?: any | null | undefined, tags?: Array<string | null | undefined> | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', url?: string | null | undefined } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, twitter?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', url?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, icon?: string | null | undefined, color?: string | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined };

export type IGetCategoryListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<ICategoryOrder>> | InputMaybe<ICategoryOrder>>;
}>;


export type IGetCategoryListQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, icon?: string | null | undefined, color?: string | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined> } | null | undefined };

export type IGetPostListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<IPostOrder>> | InputMaybe<IPostOrder>>;
}>;


export type IGetPostListQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, url?: string | null | undefined, summary?: string | null | undefined, body?: string | null | undefined, date?: any | null | undefined, tags?: Array<string | null | undefined> | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', url?: string | null | undefined } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, twitter?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', url?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, icon?: string | null | undefined, color?: string | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined } | null | undefined> } | null | undefined };

export type IGetAuthorListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<IAuthorOrder>> | InputMaybe<IAuthorOrder>>;
}>;


export type IGetAuthorListQuery = { __typename?: 'Query', authorCollection?: { __typename?: 'AuthorCollection', items: Array<{ __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, twitter?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', url?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export type IGetPostQueryVariables = Exact<{
  slug: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type IGetPostQuery = { __typename?: 'Query', postCollection?: { __typename?: 'PostCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, url?: string | null | undefined, summary?: string | null | undefined, body?: string | null | undefined, date?: any | null | undefined, tags?: Array<string | null | undefined> | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', url?: string | null | undefined } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, twitter?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', url?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, icon?: string | null | undefined, color?: string | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined } | null | undefined> } | null | undefined };

export type IGetPostListByCategoryQueryVariables = Exact<{
  category: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type IGetPostListByCategoryQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, icon?: string | null | undefined, color?: string | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined> } | null | undefined, postCollection?: { __typename?: 'PostCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'Post', title?: string | null | undefined, slug?: string | null | undefined, url?: string | null | undefined, summary?: string | null | undefined, body?: string | null | undefined, date?: any | null | undefined, tags?: Array<string | null | undefined> | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', url?: string | null | undefined } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, twitter?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', url?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, icon?: string | null | undefined, color?: string | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined } | null | undefined> } | null | undefined };

export type IGetCategoryQueryVariables = Exact<{
  slug: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type IGetCategoryQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, icon?: string | null | undefined, color?: string | null | undefined, sys: { __typename?: 'Sys', id: string } } | null | undefined> } | null | undefined };

export const AuthorFieldsFragmentDoc = gql`
    fragment AuthorFields on Author {
  sys {
    id
  }
  photo {
    url
    title
  }
  fullName
  handle
  twitter
}
    `;
export const CategoryFieldsFragmentDoc = gql`
    fragment CategoryFields on Category {
  sys {
    id
  }
  slug
  title
  icon
  color
}
    `;
export const PostFieldsFragmentDoc = gql`
    fragment PostFields on Post {
  sys {
    id
  }
  title
  slug
  url
  image {
    url
  }
  summary
  body
  date
  author {
    ...AuthorFields
  }
  category {
    ...CategoryFields
  }
  tags
}
    ${AuthorFieldsFragmentDoc}
${CategoryFieldsFragmentDoc}`;
export const GetCategoryListDocument = gql`
    query getCategoryList($limit: Int = 10, $skip: Int = 0, $order: [CategoryOrder] = sys_publishedAt_DESC) {
  categoryCollection(limit: $limit, skip: $skip, order: $order) {
    items {
      ...CategoryFields
    }
  }
}
    ${CategoryFieldsFragmentDoc}`;
export const GetPostListDocument = gql`
    query getPostList($limit: Int = 10, $skip: Int = 0, $order: [PostOrder] = date_DESC) {
  postCollection(limit: $limit, skip: $skip, order: $order) {
    total
    skip
    limit
    items {
      ...PostFields
    }
  }
}
    ${PostFieldsFragmentDoc}`;
export const GetAuthorListDocument = gql`
    query getAuthorList($limit: Int = 10, $skip: Int = 0, $order: [AuthorOrder] = sys_publishedAt_DESC) {
  authorCollection(limit: $limit, skip: $skip, order: $order) {
    items {
      ...AuthorFields
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;
export const GetPostDocument = gql`
    query getPost($slug: String!, $preview: Boolean = false, $locale: String) {
  postCollection(
    where: {slug: $slug}
    preview: $preview
    limit: 1
    locale: $locale
  ) {
    total
    skip
    limit
    items {
      ...PostFields
    }
  }
}
    ${PostFieldsFragmentDoc}`;
export const GetPostListByCategoryDocument = gql`
    query getPostListByCategory($category: String!, $locale: String, $limit: Int = 10) {
  categoryCollection(limit: 1, locale: $locale, where: {slug: $category}) {
    items {
      ...CategoryFields
    }
  }
  postCollection(
    where: {category: {slug: $category}}
    locale: $locale
    limit: $limit
  ) {
    total
    skip
    limit
    items {
      ...PostFields
    }
  }
}
    ${CategoryFieldsFragmentDoc}
${PostFieldsFragmentDoc}`;
export const GetCategoryDocument = gql`
    query getCategory($slug: String!, $preview: Boolean = false, $locale: String) {
  categoryCollection(
    where: {slug: $slug}
    preview: $preview
    limit: 1
    locale: $locale
  ) {
    items {
      ...CategoryFields
    }
  }
}
    ${CategoryFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCategoryList(variables?: IGetCategoryListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetCategoryListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetCategoryListQuery>(GetCategoryListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryList');
    },
    getPostList(variables?: IGetPostListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetPostListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetPostListQuery>(GetPostListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPostList');
    },
    getAuthorList(variables?: IGetAuthorListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetAuthorListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetAuthorListQuery>(GetAuthorListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAuthorList');
    },
    getPost(variables: IGetPostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetPostQuery>(GetPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPost');
    },
    getPostListByCategory(variables: IGetPostListByCategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetPostListByCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetPostListByCategoryQuery>(GetPostListByCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPostListByCategory');
    },
    getCategory(variables: IGetCategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetCategoryQuery>(GetCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategory');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;