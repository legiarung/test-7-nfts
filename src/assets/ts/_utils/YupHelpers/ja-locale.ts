import printValue from './printValue';
export let mixed = {
  default: '${path}が不正です',
  required: '${path}は必須です。',
  oneOf: '${path}には以下のものが入力可能です: ${values}',
  notOneOf: '${path}には以下のものは入力不可です: ${values}',
  notType: (
    {path,　type,　value,originalValue} : {path: string,　type: string,　value: string, originalValue: string}
  ) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg = `${path}は\`${type}\`必要ですが, ` + (isCast ? `\`${printValue(originalValue, true)}\`から変換された` : '') + `値は\`${printValue(value, true)}\`です`;

    if (value === null) {
      msg += `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
    }

    return msg;
  },
  defined: '${path} must be defined'
};
export let string = {
  length: '${path}は${length}文字である必要があります',
  min: '${path}は${min}文字以上のみ入力可能です',
  max: '${path}は${max}文字まで入力可能です',
  matches: '${path}は以下の形式である必要があります: ${regex}',
  email: '${path}は正しいメールアドレスではありません',
  url: '${path}は正しいURLではありません',
  uuid: '${path}は正しいUUIDではありません',
  trim: '${path}は前後に空白は含められません',
  lowercase: '${path}は小文字のみ入力可能です',
  uppercase: '${path}は大文字のみ入力可能です'
};
export let number = {
  min: '${path}には${min}以上の数のみ入力可能です',
  max: '${path}には${max}以下の数のみ入力可能です',
  lessThan: '${path}には${less}より小さい数のみ入力可能です',
  moreThan: '${path}には${more}より大きい数のみ入力可能です',
  positive: '${path}には正数のみ入力可能です',
  negative: '${path}には負数のみ入力可能です',
  integer: '${path}}には整数のみ入力可能です'
};
export let date = {
  min: '${path}には${min}以降の日付のみ入力可能です',
  max: '${path}には${max}以前の日付のみ入力可能です'
};
export let boolean = {
  isValue: '${path}には${value}のみ入力可能です'
};
export let object = {
  noUnknown: '${path}には${unknown}登録されていないキーは入力不可です'
};
export let array = {
  min: '${path}は${min}つ以上必要です',
  max: '${path}は${max}つまで入力可能です',
  length: '${path}は${length}つ必要です'
};
export default Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});