import { wrapInJSX } from '../util/jsx-wrapper';
import { TEXT_OUTPUT_TYPE, ERROR_OUTPUT_TYPE, PROMPT_OUTPUT_TYPE, WARNING_OUTPUT_TYPE, INFO_OUTPUT_TYPE } from './output-type';
import { promptPrefix } from '../config';

export const doTextOutput = (...content) => {
  return {
    type: TEXT_OUTPUT_TYPE,
    content: wrapInJSX(...content),
  };
};

export const doErrorOutput = (...content) => {
  return {
    type: ERROR_OUTPUT_TYPE,
    content: wrapInJSX(...content),
    style: { color: 'red' }
  }
}

export const doPromptOutput = (...content) => {
  const prompt = promptPrefix;
  return {
    type: PROMPT_OUTPUT_TYPE,
    content: wrapInJSX(prompt + ' ' + content),
    style: { color: 'grey' }
  }
}

export const doWarningOutput = (...content) => {
  return {
    type: WARNING_OUTPUT_TYPE,
    content: wrapInJSX(...content),
    style: { color: 'yellow' }
  }
}

export const doInfoOutput = (...content) => {
  return {
    type: INFO_OUTPUT_TYPE,
    content: wrapInJSX(...content),
    style: { color: '#00FF00' }
  }
}
