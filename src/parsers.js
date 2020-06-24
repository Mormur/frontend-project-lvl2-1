import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parseFile = (filepath) => {
  const fullPathToFile = (filepath.startsWith('/')) ? filepath : path.resolve(process.cwd(), filepath);
  const format = path.extname(filepath);
  const data = fs.readFileSync(fullPathToFile, 'utf-8');

  let parse;
  if (format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml') {
    parse = yaml.safeLoad;
  }
  return parse(data);
};

export default parseFile;
