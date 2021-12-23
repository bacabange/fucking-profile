import type {
  Maybe,
  ISys,
  IAsset,
  IAuthor,
  ICategory,
  IPost,
} from './generated/graphql'

// Generic utilities
// ----------------------------------------------------------------
export function nonEmpty<T, O = unknown>(selector: (entity: T) => O) {
  return (entity: Maybe<T> | undefined | null) => {
    if (entity == null) {
      throw new Error(`unexpected empty object found`)
    }

    return selector(entity)
  }
}

type ArrayStrings = Array<string | null | undefined> | null | undefined

type PartialCollection<T> = {
  items: Array<Maybe<T>>
}
export function selectListOf<T, O>(entitySelector: (entity: T) => O) {
  return nonEmpty<PartialCollection<T>, Array<O>>((partialCollection) =>
    partialCollection.items.map(nonEmpty(entitySelector))
  )
}

type PartialEntityWithId = { sys: Pick<ISys, 'id'> }
export const selectEntityId = ({ sys: { id } }: PartialEntityWithId): string =>
  id

// Entities selectors
// ----------------------------------------------------------------
type PartialImageFields = Pick<IAsset, 'title' | 'url' | 'width' | 'height'>
export const selectImage = (partialImage: PartialImageFields | undefined) => ({
  title: partialImage?.title || '',
  url: partialImage?.url || '',
  width: partialImage?.width || 0,
  height: partialImage?.height || 0,
})

type PartialAuthor = PartialEntityWithId & {
  photo: PartialImageFields
} & Pick<IAuthor, 'fullName' | 'handle' | 'twitter'>

export const selectAuthor = nonEmpty<PartialAuthor, Author>(
  (partialAuthor) => ({
    id: selectEntityId(partialAuthor),
    fullName: partialAuthor.fullName!,
    handle: partialAuthor.handle!,
    photo: selectImage(partialAuthor.photo),
    twitter: partialAuthor.twitter!,
  })
)
export const selectAuthors = selectListOf(selectAuthor)

type PartialCategory = PartialEntityWithId & Pick<ICategory, 'title' | 'slug' | 'icon' | 'color'>
export const selectCategory = nonEmpty<PartialCategory, Category>(
  (partialCategory) => ({
    id: selectEntityId(partialCategory),
    title: partialCategory.title!,
    slug: partialCategory.slug!,
    icon: partialCategory.icon!,
    color: partialCategory.color!,
  })
)

export const selectCategories = selectListOf(selectCategory)

type PartialPost = PartialEntityWithId & Pick<IPost, 'slug' | 'title' | 'summary' | 'date' | 'url' | 'body'> &
  {
    image?: PartialImageFields
  } & { category?: Maybe<PartialCategory> } & {
    author?: Maybe<PartialAuthor>
  } & {
    tags?: ArrayStrings
  }

  export const selectPost = nonEmpty<PartialPost, Post>((partialPost) => ({
    id: selectEntityId(partialPost),
    slug: partialPost.slug!,
    title: partialPost.title!,
    summary: partialPost.summary!,
    date: partialPost.date!,
    tags: partialPost.tags!,
    url: partialPost.url!,
    body: partialPost.body!,
    image: selectImage(partialPost.image),
    author: selectAuthor(partialPost.author),
    category: selectCategory(partialPost.category),
  }))

  export const selectPosts = selectListOf(selectPost)