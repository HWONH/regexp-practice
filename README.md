# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성
```js
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자

```js
const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | 	`정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자열의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자열을 대체하고 대체된 문자열(String) 반환

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)

## 패턴(표현)

패턴 | 설명
--|--
^ab	| 줄(Line) 시작에 있는 ab와 일치
ab$	| 줄(LIne) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a 부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A 부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0 부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가 부터 힣 사이의 문자 구간에 일치(한글)
(?=) | 앞 쪽 일치
(?<=) | 뒤쪽 일치

## 정규식 문자 클래스

문자 클래스 | 동일 표현식 | 설명
--|--|--
∖d | [0-9] | 숫자와 매치
∖D | [^0-9] | 숫자가 아닌 것과 매치
∖s | [ ∖t∖n∖r∖f∖v]<br />(맨 앞 빈 칸은 공백문자(space) 의미) | whitespace 문자와 매치
∖S | [^ ∖t∖n∖r∖f∖v] | whitespace 문자가 아닌 것과 매치
∖w | [a-zA-Z0-9_] | 문자+숫자(alphanumeric)와 매치
∖W | [^a-zA-Z0-9_] | 문자+숫자(alphanumeric)가 아닌 문자와 매치
∖b | [^a-zA-Z0-9_] | 문자+숫자(alphanumeric)가 아닌 문자와 매치