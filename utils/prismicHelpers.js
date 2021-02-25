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

const parseGallery = (slice) => {
  return {
      type : 'gallery',
      title : getRawText(get(slice, 'primary.gallery_title', '')),
      images : get(slice, 'items', [])
        .map((image) => {
          return get(image, 'gallery_image', '')
        })
    }
}
const parseUnitReferences = (slice) => {
  return {
      type : 'unit',
      title : getRawText(get(slice, 'primary.miniatures_title', '')),
      references : get(slice, 'items', [])
        .map((mini) => { return {
          unit : get(mini, 'miniature', {})
        }})
    }
}

export const parseUnitSlices = (unit) => {
  return get(unit, 'data.body', []).map((slice) => {
    const type = get(slice, 'slice_type', '');
    if (!type) throw new Error('Not a slice!');
    switch (type) {
      default:
      case 'gallery':
        return parseGallery(slice);
      case 'miniatures':
        return parseUnitReferences(slice);
    }
  })
}

export const parseUnitForPage = (unit) => {
  const data = get(unit, 'data', {});
  return {
    largeImage : get(data, 'big_image', {}),
    unitName : getRawText(get(data, 'unit_name', '')),
    description : get(data, 'description', []),
    squareImage : get(data, 'thumbnail', {})
  };
}
