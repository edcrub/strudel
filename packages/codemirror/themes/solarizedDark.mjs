import { tags as t } from '@lezer/highlight';
import { createTheme } from './theme-helper.mjs';

export const settings = {
  background: '#002b36',
  lineBackground: '#002b3699',
  foreground: '#93a1a1',
  caret: '#839496',
  selection: '#173541',
  selectionMatch: '#aafe661a',
  gutterBackground: '#00252f',
  gutterForeground: '#839496',
  lineHighlight: '#173541',
};

const c = {
  background: '#002B36',
  foreground: '#839496',
  selection: '#004454AA',
  selectionMatch: '#005A6FAA',
  cursor: '#D30102',
  dropdownBackground: '#00212B',
  dropdownBorder: '#2AA19899',
  activeLine: '#00cafe11',
  matchingBracket: '#073642',
  keyword: '#859900',
  storage: '#93A1A1',
  variable: '#268BD2',
  parameter: '#268BD2',
  function: '#268BD2',
  string: '#2AA198',
  constant: '#CB4B16',
  type: '#859900',
  class: '#268BD2',
  number: '#D33682',
  comment: '#586E75',
  heading: '#268BD2',
  invalid: '#DC322F',
  regexp: '#DC322F',
  tag: '#268BD2',
};

export default createTheme({
  theme: 'dark',
  settings: {
    background: c.background,
    foreground: c.foreground,
    caret: c.cursor,
    selection: c.selection,
    selectionMatch: c.selection,
    gutterBackground: c.background,
    gutterForeground: c.foreground,
    gutterBorder: 'transparent',
    lineHighlight: c.activeLine,
  },
  styles: [
    { tag: t.keyword, color: c.keyword },
    { tag: [t.name, t.deleted, t.character, t.macroName], color: c.variable },
    { tag: [t.propertyName], color: c.function },
    { tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: c.string },
    { tag: [t.function(t.variableName), t.labelName], color: c.function },
    { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: c.constant },
    { tag: [t.definition(t.name), t.separator], color: c.variable },
    { tag: [t.className], color: c.class },
    { tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: c.number },
    { tag: [t.typeName], color: c.type, fontStyle: c.type },
    { tag: [t.operator, t.operatorKeyword], color: c.keyword },
    { tag: [t.url, t.escape, t.regexp, t.link], color: c.regexp },
    { tag: [t.meta, t.comment], color: c.comment },
    { tag: t.tagName, color: c.tag },
    { tag: t.strong, fontWeight: 'bold' },
    { tag: t.emphasis, fontStyle: 'italic' },
    { tag: t.link, textDecoration: 'underline' },
    { tag: t.heading, fontWeight: 'bold', color: c.heading },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: c.variable },
    { tag: t.invalid, color: c.invalid },
    { tag: t.strikethrough, textDecoration: 'line-through' },
  ],
});
