## Company List

Gets Local Company List from https://localhost:3001 and saves it to state. ALso saves request loading state.

## Selectors

### `useLoadingState`

Returns request loading state from the store.

```javascript
import {useLoadingState} from 'redux/Company';

// Needs to be run from inside React component or other hook.
const {isLoading, hasError, isFulfilled} = useLoadingState();
```

### `useCompanyList`

Returns random number value from the store

```javascript
import {useCompanyList} from 'redux/Company';

// Needs to be run from inside React component or other hook.
const number = useCompanyList();
```

## Action creators

### `useGetCompanyList`

Performs Restful query to get Company list from https://localhost:3001. Records Company list and loading state data to the store;

```javascript
import {useGetCompanyListQuery} from 'redux/Company';

// Needs to be run from inside React component or other hook.
const getNumber = useGetCompanyListQuery();
useEffect(() => {
  getCompanyList();
  ...
}, []);
```

