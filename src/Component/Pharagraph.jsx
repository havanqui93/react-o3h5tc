import React, { memo, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Pharagraph() {
  const themContext = useContext(ThemeContext);

  return (
    <div className={themContext.theme}>
      Generating random paragraphs can be an excellent way for writers to get
      their creative flow going at the beginning of the day. The writer has no
      idea what topic the random paragraph will be about when it appears. This
      forces the writer to use creativity to complete one of three common
      writing challenges.
    </div>
  );
}

export default memo(Pharagraph);
