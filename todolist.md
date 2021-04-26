# <u>**Todolist 진행중 모르는것 정리**</u>

## localStorage

### 1)로컬 스토리지 vs. 세션 스토리지

웹 스토리지(web storage)에는 로컬 스토리지(localStorage)와 세션 스토리지(sessionStorage)가 있습니다. 이 두 개의 매커니즘의 차이점은 데이터가 어떤 범위 내에서 얼마나 오래 보존되느냐에 있습니다. 세션 스토리지는 웹페이지의 세션이 끝날 때 저장된 데이터가 지워지는 반면에, 로컬 스토리지는 웹페이지의 세션이 끝나더라도 데이터가 지워지지 않습니다.

다시 말해, 브라우저에서 같은 웹사이트를 여러 탭이나 창에 띄우면, 여러 개의 세션 스토리지에 데이터가 서로 격리되어 저장되며, 각 탭이나 창이 닫힐 때 저장해 둔 데이터도 함께 소멸합니다. 반면에, 로컬 스토리지의 경우 여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있습니다.

하지만 이러한 로컬 스토리지의 데이터 영속성(persistence) 어디까지나 계속해서 동일한 컴퓨터에서 동일한 브라우저를 사용할 때만 해당합니다. 즉, 같은 컴퓨터에서 다른 브라우저를 사용하거나 (e.g. 크롬을 쓰다가 사파리를 쓰면), 또는 다른 컴퓨터에서 같은 브라우저를 사용하는 경우에는 (e.g. 집에서 크롬을 쓰다가 회사에서 크롬을 쓰면), 엄연히 다른 브라우저이므로 서로 다른 두 개의 로컬 스토리지에 데이터가 저장될 것입니다.

로컬 스토리지와 세션 스토리지의 공통점은 두 기술 모두 데이터를 브라우저 상에 저장한다는 것이며, 자바스크립트 API가 완전히 동일한 형태입니다.

### 2)기본 API

웹 스토리지는 기본적으로 키(key)와 값(value)으로 이루어진 데이터를 저장할 수 있습니다. 개념적으로 해시 테이블 자료 구조를 생각하시면 이해가 쉬우실 것 같습니다. 자바스크립트 API의 기본적인 사용 방법은 다음과 같습니다.

```js
// 키에 데이터 쓰기
localStorage.setItem("key", value)

// 키로 부터 데이터 읽기
localStorage.getItem("key")

// 키의 데이터 삭제
localStorage.removeItem("key")

// 모든 키의 데이터 삭제
localStorage.clear()

// 저장된 키/값 쌍의 개수
localStorage.length
```

엄밀하게는 `window.localStorage`를 사용해야하지만, `window` 객체의 대부분의 속성이 그러하듯, 줄여서 `localStorage`로 로컬 스토리지 객체에 접근할 수 있습니다.

### 3)주의 사항

웹 스토리지를 사용할 때 주의해야 할 부분이 하나 있는데요. 오직 문자형(string) 데이터 타입만 지원한다는 것입니다.

예를 들어, 숫자형 데이터를 로컬 스토리지에 쓰고 다시 다시 읽어보면 다음과 같이 본래 숫자가 아닌 문자가 나오는 것을 알 수 있습니다.

```js
> localStorage.setItem('num', 1)
undefined
> localStorage.getItem('num') === 1
false
> localStorage.getItem('num')
"1"
> typeof localStorage.getItem('num')
"string"
```

```js
> localStorage.setItem('obj', {a: 1, b: 2})
undefined
> localStorage.getItem('obj')
"[object Object]"
```

이러한 문제가 발생하는 이유는 웹 스토리지는 문자열 데이터 밖에 저장할 수 없기 때문에, 다른 타입의 데이터를 저장하려고 할 때 문자형으로 변환을 하기 때문입니다.

```js
> String(1)
"1"
> String({a: 1, b: 2})
"[object Object]"
```

### 4)해결 방법

웹 스토리지를 사용할 때 위와 같은 문제를 피하기 위해서 많이 사용하는 방법이 JSON 형태로 데이터를 읽고 쓰는 것입니다.

```js
> localStorage.setItem('json', JSON.stringify({a: 1, b: 2}))
undefined
> JSON.parse(localStorage.getItem('json'))
{a: 1, b: 2}
```

위와 같이 로컬 스토리지에 쓸 데이터를 JSON 형태로 직렬화(serialization)하고, 읽은 데이터를 JSON 형태로 역직렬화(deserialization)해주면 원본의 데이터를 그대로 얻을 수 있습니다.

배열형 데이터를 로컬 스토리지에 저장할 때도 동일한 방법을 문제를 예방할 수 있습니다.

```js
> localStorage.setItem('nums', JSON.stringify([1, 2, 3]))
undefined
> JSON.parse(localStorage.getItem('nums'))
[1, 2, 3]
```



## slice()와 splice()의 차이점

### 1)Array.prototype.slice()

slice() 메소드는 begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본 배열은 수정되지 않는다.

**slice(start[, end])**

**start:** **추출 시작점에 대한 인덱스.**

- **undefined**인 경우: 0부터 slice
- **음수**를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(-2)를 하면 배열의 마지막 2개의 요소를 추출한다.
- **배열의 길이와 같거나 큰 수**를 지정한 경우: 빈 배열을 반환한다.

**end:** **추출을 종료할 기준 인덱스.** (end를 제외하고 그 전까지의 요소만 추출한다.)

- **지정하지 않을 경우**: 배열의 끝까지 slice
- **음수**를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(2, -1)를 하면 세번째부터 끝에서 두번째 요소까지 추출
- **배열의 길이와 같거나 큰 수**를 지정한 경우: 배열의 끝까지 추출.

**반환값:** **추출한 요소를 포함한 새로운 배열.**

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr1 = arr.slice(3, 5); // [4, 5]
var arr2 = arr.slice(undefined, 5); // [1, 2, 3, 4, 5]
var arr3 = arr.slice(-3); // [8, 9, 10]
var arr4 = arr.slice(-3, 9); // [8, 9]
var arr5 = arr.slice(10); // []
var arr6 = arr.slice(4); // [5, 6, 7, 8, 9, 10]
var arr7 = arr.slice(undefined); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var arr8 = arr.slice(5, -4); // [6]
var arr9 = arr.slice(2, 15); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr1); // [4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(arr3); // [8, 9, 10]
console.log(arr4); // [8, 9]
console.log(arr5); // []
console.log(arr6); // [5, 6, 7, 8, 9, 10]
console.log(arr7); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr8); // [6]
console.log(arr9); // [3, 4, 5, 6, 7, 8, 9, 10]
```

1. arr1 : index번호 3부터 4까지 추출
2. arr2 : index번호 0부터 4까지 추출
3. arr3 : 뒤에서 3개 추출
4. arr4 : 뒤에서부터 3번째 숫자인 8부터 추출하기 시작해서 앞에서부터 9번째 숫자(10) 전까지 추출하므로 숫자 8과 9 추출
5. arr5 : 배열의 길이가 10이므로 index번호 10부터 추출하면 추출할 요소가 없으므로 빈 배열을 리턴한다.
6. arr6 : index번호 4부터 끝까지 추출
7. arr7 : 처음부터 끝까지 추출함
8. arr8 : index번호 5번인 6부터 추출 시작하여 끝에서부터 -4번째인 7 전까지 추출하므로 숫자 6을 추출
9. arr9 : index번호 2번부터 끝까지 추출

### 2)Array.prototype.splice()

splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.

**splice(start[, deleteCount[, item1[, item2[, ...]]]])**

**start: 배열의 변경을 시작할 인덱스.**

- **음수**를 지정한 경우: 배열의 끝에서부터 요소를 센다.
- **배열의 길이보다 큰 수**를 지정한 경우: 실제 시작 인덱스는 배열의 길이로 설정
- **절대값이 배열의 길이보다 큰 경우**: 0으로 세팅 

**deleteCount: 배열에서 제거할 요소의 수.**

- **생략** / 값이 **array.length - start****보다 큰 경우**: start부터의 모든 요소를 제거.
- **0 이하의 수**를 지정: 어떤 요소도 제거되지 않는다.

**item1, item2, ... : 배열에 추가할 요소.**

- **지정하지 않는 경우**: splice()는 요소 제거만 수행한다.

**반환값:** **제거한 요소를 담은 배열.**

- 아무 값도 제거하지 않았으면 빈 배열을 반환한다.

```js

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(10, 2, 'a', 'b', 'c');
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"]
console.log(arr1); // [11, 12]
```

splice() 함수를 사용하면 원본 배열인 arr이 변경된다.

10번째 인덱스부터 2개의 요소를 삭제하고 'a', 'b', 'c'를 추가했으므로

11과 12가 삭제되고 이 삭제된 요소들의 배열은 arr1 변수에 담긴다.

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(-6, 4);
console.log(arr); // [1, 2, 3, 4, 5, 6, 11, 12]
console.log(arr1); // [7, 8, 9, 10]
```

-6을 넣으면 뒤에서부터 6번째인 7부터 시작하여 4개의 요소를 삭제한다. 

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(-13, 1);
console.log(arr); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(arr1); // [1]
```

-13의 절대값이 배열의 길이보다 큰 경우에는 0으로 세팅한다.

그러므로 0번째 요소부터 1개의 요소를 삭제하므로 숫자 1이 삭제된다.

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(3);
console.log(arr); // [1, 2, 3]
console.log(arr1); // [4, 5, 6, 7, 8, 9, 10, 11, 12]
var arr2 = arr1.splice(6, 4);
console.log(arr1); // [4, 5, 6, 7, 8, 9]
console.log(arr2); // [10, 11, 12]
```

deleteCount가 생략되거나 array.length - start의 값보다 큰 경우

지정한 start 인덱스부터 끝까지 모두 제거한다.

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(5, 0, 'add');
console.log(arr); // [1, 2, 3, 4, 5, "add", 6, 7, 8, 9, 10, 11, 12]
console.log(arr1); // []
```

deleteCount가 0이거나 0보다 작은 수이면 어떤 요소도 삭제되지 않는다.

그러므로 arr1은 빈배열을 반환한다.