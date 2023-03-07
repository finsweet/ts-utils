---
prev: 
  text: 'getCollectionElements()'
  link: '/getCollectionElements'
next:
  text: 'getCurrentBreakpoint()'
  link: '/getCurrentBreakpoint'
---


## `getCollectionListWrappers()`

This util queries `Collection List Wrapper` elements and makes sure they are unique.

| param                 | value                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| selectors: `string[]` | The selectors used for the query. If an empty array is provided, all `Collection List Wrapper` elements will be returned |
| page: `Document`      | The document where to perform the query                                                                                  |

| Return value: `CollectionListWrapperElement[]`       |
| ---------------------------------------------------- |
| A unique list of `Collection List Wrapper` elements. |

## Example

```ts
import { getCollectionListWrappers } from '@finsweet/ts-utils';

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

  // selectors for our collection wrappers
  const selectors = ['#fs-col-wrapper1', `#fs-col-wrapper2`, `#fs-col-wrapper3`];

  // fetching a unqiue list of collection wrappers
  const unqiueColWrappers = await getCollectionListWrappers(selectors, doc);

  console.log(unqiueColWrappers);
});
```

## Output

```
(3) [div#fs-col-wrapper1.w-dyn-list, div#fs-col-wrapper2.w-dyn-list, div#fs-col-wrapper3.w-dyn-list]
```
