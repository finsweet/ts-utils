---
prev: 
  text: 'CSS'
  link: '/css'
next:
  text: 'getCollectionListWrappers()'
  link: '/getCollectionListWrappers'
---



## `getCollectionElements()`

This util helps with selecting different elements inside `Collection List Wrapper` or the `Collection List`

| param                         | value                                  |
| ----------------------------- | -------------------------------------- |
| reference: `string / Element` | The element or selector of the element |
| target: `string`              | The requested element/elements         |
| page: `Document`              | The page document                      |

Available targets:
| Targets |
| ------ |
| `wrapper` |
| `list` |
| `items` |
| `empty` |
| `pagination` |
| `next` |
| `previous` |
| `pageCount` |

| Return value: `CollectionListWrapperElement / CollectionListElement / PaginationButtonElement / PageCountElement /  CollectionItemElement[] / CollectionEmptyElement / null / undefined` |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The specified collection element/elements.                                                                                                                                               |

## Example

```ts
import { getCollectionElements } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(async () => {
  // source of the page that has the collection
  const pageSource = '/cms';

  // fetching the page and getting the text
  const pageData = await fetch(pageSource);
  const pageText = await pageData.text();

  // using dom parser to generate a document using page text
  const parser = new DOMParser();
  const doc = parser.parseFromString(pageText, 'text/html');

  // selector for our collection
  const selector = '#fs-col-wrapper';

  // fetching all the items in the collection wrapper using the getCollectionElements util
  const list = await getCollectionElements(selector, 'items', doc);

  console.log(list);
});
```

## Output

```
(4) [div.w-dyn-item, div.w-dyn-item, div.w-dyn-item, div.w-dyn-item]
```
