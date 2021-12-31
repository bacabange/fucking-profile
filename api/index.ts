import { GraphQLClient } from 'graphql-request'
import {
  getSdk,
  IGetAuthorListQueryVariables,
  IGetCategoryListQueryVariables,
  IGetOwnPostListQueryVariables,
  IGetPostListByCategoryQueryVariables,
  IGetPostListQueryVariables
} from './generated/graphql'
import * as selectors from './selectors'

export type QueryStatus = 'idle' | 'loading' | 'success' | 'error';

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  }
)

const api = getSdk(client)
export const sdk = api

export interface PostResponse {
  entries: Post[];
  total: number;
  skip: number;
  limit: number;
}
export function getPostList (
  args?: IGetPostListQueryVariables
): Promise<PostResponse> {
  return api.getPostList({ limit: 10, skip: 0, ...args }).then(responseData => {
    return {
      // @ts-ignore
      entries: selectors.selectPosts(responseData.postCollection),
      total: responseData.postCollection?.total || 0,
      skip: responseData.postCollection?.skip || 0,
      limit: responseData.postCollection?.limit || 0
    }
  })
}

export function getOwnPostList (
  args?: IGetOwnPostListQueryVariables
): Promise<Post[]> {
  return api.getOwnPostList({ ...args }).then(responseData => {
    // @ts-ignore
    return selectors.selectPosts(responseData.postCollection)
  })
}

export function getPost (
  slug: string,
  isPreview = false,
  locale?: string
): Promise<Post> {
  const extraHeaders: HeadersInit = {}
  if (isPreview) {
    // Use the preview access token for auth
    extraHeaders.Authorization = `Bearer ${process.env.PREVIEW_ACCESS_TOKEN}`
  }

  return api
    .getPost({ slug, preview: isPreview, locale }, extraHeaders)
    .then(responseData => {
      if (
        responseData == null ||
        responseData.postCollection == null ||
        responseData.postCollection.items.length < 1
      ) {
        throw new Error(`Post with slug: "${slug}" not found`)
      }

      // @ts-ignore
      return selectors.selectPost(responseData.postCollection.items[0])
    })
}

export function getPostListByCategory (
  args: IGetPostListByCategoryQueryVariables
): Promise<{
  entries: Post[];
  category: Category;
  total: number;
  skip: number;
  limit: number;
}> {
  return api
    .getPostListByCategory({ limit: 10, ...args })
    .then(responseData => {
      return {
        category: selectors.selectCategories(
          responseData.categoryCollection
        )[0],
        // @ts-ignore
        entries: selectors.selectPosts(responseData.postCollection),
        total: responseData.postCollection?.total || 0,
        skip: responseData.postCollection?.skip || 0,
        limit: responseData.postCollection?.limit || 0
      }
    })
}

export function getCategoryList (
  args?: IGetCategoryListQueryVariables
): Promise<Category[]> {
  return api
    .getCategoryList({ limit: 10, skip: 0, ...args })
    .then(responseData =>
      selectors.selectCategories(responseData.categoryCollection)
    )
}

export function getAuthorList (
  args?: IGetAuthorListQueryVariables
): Promise<Author[]> {
  return api.getAuthorList({ limit: 10, skip: 0, ...args }).then(responseData =>
    // @ts-ignore
    selectors.selectAuthors(responseData.authorCollection)
  )
}
