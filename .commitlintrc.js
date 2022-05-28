/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 10:32:22
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-28 10:32:32
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
  },
}; 