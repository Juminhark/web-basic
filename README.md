# WEB-basic

## [README.md 작성](https://pandao.github.io/editor.md/en.html#Features)

# 대제목

**굵은 강조 글씨**

일반 글씨 에다가 [강조 링크](https://github.com/Juminhark) section.

## 소제목 : 이미지 삽입

![](https://raw.githubusercontent.com/FaridSafi/react-native-google-places-autocomplete/master/Assets/screenshot.png)

## 예시

**Step 1.**

```
npm install react-native
```

or

```
yarn add react-native
```

**Step 2.**

링크로 이동하여 [링크](https://github.com/Juminhark) 할거 해라

## Basic Example

**js 스타일**

```js
import React from 'react';
import { increase } from 'react-native';

const world = () => {
	return (
		<increase
			placeholder="hi"
			onPress={(data, details = null) => {
				console.log('hello world');
			}}
		/>
	);
};

export default world;
```

## More Examples

**Get Current Location**

<details>
  <summary>눌러서 펼쳐 보기</summary>

_Extra step required!_

설치를 무엇을 해야하느냐 `react-native` ([link](https://github.com/Juminhark))) or `react-nativen-service`([link](https://github.com/Juminhark)).

Please make sure you follow the installation instructions there and add `navigator.geolocation = require(GEOLOCATION_PACKAGE)` somewhere in you application before `<GooglePlacesAutocomplete />`.

```js
import React from 'react';
import { increase } from 'react-native';

const world = () => {
	return (
		<increase
			placeholder="hi"
			onPress={(data, details = null) => {
				console.log('hello world');
			}}
		/>
	);
};

export default world;
```

</details>

**Search with predefined option**

<details>
  <summary>눌러서 펼쳐 보기</summary>

```js
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = {
	description: 'Home',
	geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
	description: 'Work',
	geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const GooglePlacesInput = () => {
	return (
		<GooglePlacesAutocomplete
			placeholder="Search"
			onPress={(data, details = null) => {
				// 'details' is provided when fetchDetails = true
				console.log(data, details);
			}}
			query={{
				key: 'YOUR API KEY',
				language: 'en',
			}}
			predefinedPlaces={[homePlace, workPlace]}
		/>
	);
};

export default GooglePlacesInput;
```

</details>

**Use a custom Text Input Component**

## 표

_이거는 표_

| 외쪽 정렬        |        가운데 정렬        |                   오른쪽 정렬 |
| :--------------- | :-----------------------: | ----------------------------: |
| `getAddressText` |      `() => string`       | return the value of TextInput |
| `setAddressText` | `(value: string) => void` |    set the value of TextInput |
| `isFocused`      |      `() => boolean`      |             `false` otherwise |

You can access these methods using a ref.

**_Note:_** The library expects the same response that the Google Maps API would return.

## 체크

- [x] Places autocompletion
- [x] iOS and Android compatibility
- [x] Places details fetching
- [x] Customizable using the `styles` parameter
- [x] XHR cancellations when typing fast
- [x] Google Places terms compliant
- [x] Predefined places
- [x] typescript types
- [x] Current location

## Compatibility

This library does not use the iOS, Android or JS SDKs from Google. This comes with some Pros and Cons.

**Pros:**

- smaller app size
- better privacy for your users (although Google still tracks server calls)
- no need to keep up with sdk updates

**Cons:**

- the library is not compatible with a Application key restrictions
- doesn't work directly on the web without a proxy server
- any Google API change can be a breaking change for the library.

### Use Inside a `<ScrollView/>` or `<FlatList/>`

If you need to include this component inside a ScrolView or FlatList, remember to apply the `keyboardShouldPersistTaps` attribute to all ancestors ScrollView or FlatList (see [this](https://github.com/FaridSafi/react-native-google-places-autocomplete/issues/486#issuecomment-665602257) issue comment).

## A word about the Google Maps APIs

Google Provides a bunch of web APIs for finding an address or place, and getting it’s details.
There are the Google Places Web APIs ([Place Search](https://developers.google.com/places/web-service/search), [Place Details](https://developers.google.com/places/web-service/details), [Place Photos](https://developers.google.com/places/web-service/photos), [Place Autocomplete](https://developers.google.com/places/web-service/autocomplete), [Query Autocomplete](https://developers.google.com/places/web-service/query)) and the [Google Geocode API](https://developers.google.com/maps/documentation/geocoding/intro) .

The are 5 Google Places APIs:

- **Place Autocomplete -** automatically fills in the name and/or address of a place as users type.
- **Place Details -** returns more detailed information about a specific place (using a place_id that you get from Place Search, Place Autocomplete, or Query Autocomplete).
- **Place Photos -** provides access to the millions of place-related photos stored in Google's Place database (using a reference_id that you get from Place Search, Place Autocomplete, or Query Autocomplete).
- **Place Search -** returns a list of places based on a user's location or search string.
- **Query Autocomplete -** provides a query prediction service for text-based geographic searches, returning suggested queries as users type.

The **Geocoding API** allows you to convert an address into geographic coordinates (lat, long) and to "reverse geocode", which is the process of converting geographic coordinates into a human-readable address.

### Which APIs does this library use?

Place Autocomplete API, Place Details API, Place Search API and the Geocoding API.

We use the **Place Autocomplete API** to get suggestions as you type. When you click on a suggestion, we use the **Place Details API** to get more information about the place.

We use the **Geocoding API** and the **Place Search API** to use your current location to get results.

Because the query parameters are different for each API, there are 4 different "query" props.

1. Autocomplete -> `query` ([options](https://developers.google.com/places/web-service/autocomplete#place_autocomplete_requests))
2. Place Details -> `GooglePlacesDetailsQuery` ([options](https://developers.google.com/places/web-service/details#PlaceDetailsRequests))
3. Nearby Search -> `GooglePlacesSearchQuery` ([options](https://developers.google.com/places/web-service/search#PlaceSearchRequests))
4. Geocode -> `GoogleReverseGeocodingQuery` ([options](https://developers.google.com/maps/documentation/geocoding/intro#GeocodingRequests))

Number 1 is used while getting autocomplete results.  
Number 2 is used when you click on a result.  
Number 3 is used when you select 'Current Location' to load nearby results.  
Number 4 is used when `nearbyPlacesAPI='GoogleReverseGeocoding'` is set and you select 'Current Location' to load nearby results.

## Changelog

Please see the [releases](https://github.com/FaridSafi/react-native-google-places-autocomplete/releases) tab for the changelog information.

## License

[MIT](LICENSE)

### Authors

- [Farid Safi](https://www.twitter.com/FaridSafi)
- [Maxim Yaskevich](https://www.twitter.com/mayaskme)
- [Guilherme Pontes](https://www.twitter.com/guiiipontes)
