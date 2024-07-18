class Template {
  static [propName: string]: string | number;

  [key: string]: string;
}

Template.test = 'test';

const template = new Template();
template.test = 'test';