import styled from 'styled-components';
import { space, width, height } from 'styled-system';
import tag from 'clean-tag';

import injectProps from './utils/injectProps';
import blacklist from './utils/blacklist';

const Image = styled(tag.img)`
  ${space}
  ${injectProps('verticalAlign')}
  ${height}
  ${width}
`;

Image.defaultProps = {
  blacklist,
};

export default Image;
