import get from 'lodash.get';

export const getRawText = (richText) => {
  if (typeof(richText) === 'string'){
    return richText;
  } else {
    return richText.map((node) => {
      return node.text;
    }).join(' ');
  }
}

export const parseUnit = ({ unit }) => {
  const type = get(unit, 'type', '') === 'miniature' ? 'mini' : 'army';
  return {
    type,
    slug : get(unit, 'uid', ''),
    shortDesc : get(unit, 'data.short_description', ''),
    thumbnail : get(unit, 'data.thumbnail', {}),
    largeImage : get(unit, 'data.big_image', {}),
    unitName : getRawText(get(unit, 'data.unit_name', ''))
  }
}
